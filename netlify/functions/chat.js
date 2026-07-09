const { GoogleGenerativeAI } = require('@google/generative-ai');
const catalog = require('../../data/knowledge-catalog.json');

function buildKnowledgeContext() {
  const site = catalog.site;
  let ctx = `SITE: ${site.name}\nURL: ${site.url}\nLOCATION: ${site.location}\n${site.description}\n\nCONTACTS:\n`;
  ctx += `English/French: ${site.contacts.en_fr.name} ${site.contacts.en_fr.phone} ${site.contacts.en_fr.email}\n`;
  ctx += `Thai: ${site.contacts.th.name} ${site.contacts.th.phone}\n\nKNOWLEDGE:\n`;
  for (const topic of catalog.topics.filter((t) => t.status === 'published')) {
    ctx += `\n## ${topic.title}\n${topic.summary}\n`;
    for (const s of topic.sections || []) ctx += `### ${s.heading}\n${s.body}\n`;
    for (const f of topic.faqs || []) ctx += `Q: ${f.question}\nA: ${f.answer}\n`;
  }
  return ctx;
}

const SYSTEM = `You are the assistant for Natural Healthy Village Kaengkrachan (NHVK), a residential land project in Phetchaburi, Thailand near Kaengkrachan National Park.

RULES:
- Answer ONLY using the knowledge base provided. If unsure, say so and direct the user to contact the team.
- Never invent plot prices, availability, or legal advice beyond the knowledge base.
- For legal matters, recommend consulting a Thai property lawyer.
- Be helpful in English, French, or Thai as the user prefers.
- Keep answers concise (under 200 words unless detail is requested).
- When relevant, mention they can arrange a site visit: EN/FR 081 860 4501, Thai 095 365 2500, email kaengkrachan.village@proton.me`;

const MODELS = ['gemini-3.5-flash', 'gemini-2.5-flash', 'gemini-3.1-flash-lite'];

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

async function generateReply(apiKey, message) {
  const knowledge = buildKnowledgeContext();
  const genAI = new GoogleGenerativeAI(apiKey);
  let lastError;

  for (const modelName of MODELS) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: `${SYSTEM}\n\n--- KNOWLEDGE BASE ---\n${knowledge}`,
      });
      const result = await model.generateContent(message);
      const reply = (result.response.text() || '').trim();
      if (reply) return reply;
    } catch (err) {
      lastError = err;
      console.error(`Model ${modelName} failed:`, err.message);
    }
  }

  throw lastError || new Error('No model returned a response');
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        configured: Boolean(process.env.GEMINI_API_KEY),
      }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 503,
      headers,
      body: JSON.stringify({
        error: 'Chat is not configured yet. Please contact us by phone or email.',
      }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const message = (body.message || '').trim().slice(0, 2000);
    if (!message) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Message required' }) };
    }

    const reply = await generateReply(apiKey, message);
    return { statusCode: 200, headers, body: JSON.stringify({ reply }) };
  } catch (err) {
    console.error('Chat error:', err);
    const detail = err && err.message ? String(err.message).slice(0, 200) : 'unknown error';
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: `Assistant unavailable (${detail}). Please call 081 860 4501 or email kaengkrachan.village@proton.me`,
      }),
    };
  }
};
