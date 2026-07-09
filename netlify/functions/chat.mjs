import { GoogleGenerativeAI } from '@google/generative-ai';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadCatalog() {
  const candidates = [
    join(__dirname, '../../data/knowledge-catalog.json'),
    join(process.cwd(), 'data/knowledge-catalog.json'),
  ];
  for (const p of candidates) {
    try {
      return JSON.parse(readFileSync(p, 'utf8'));
    } catch {
      /* try next path */
    }
  }
  throw new Error('knowledge-catalog.json not found');
}

function buildKnowledgeContext(catalog) {
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
- When relevant, mention they can arrange a site visit: EN/FR 081 860 4501, Thai 095 365 2500, email kaengkrachan.village@proton.me
- Link to knowledge pages when helpful: /knowledge/land-pricing-and-plots.html, /knowledge/foreign-buyers-lease.html, /knowledge/solar-and-water.html`;

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 503,
      headers,
      body: JSON.stringify({ error: 'Chat is not configured yet. Please contact us by phone or email.' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const message = (body.message || '').trim().slice(0, 2000);
    if (!message) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Message required' }) };

    const catalog = loadCatalog();
    const knowledge = buildKnowledgeContext(catalog);
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: `${SYSTEM}\n\n--- KNOWLEDGE BASE ---\n${knowledge}`,
    });

    const result = await model.generateContent(message);
    const response = result.response;

    let reply = '';
    try {
      reply = (response.text() || '').trim();
    } catch (textErr) {
      console.error('Gemini text() error:', textErr);
      const reason = response.candidates?.[0]?.finishReason || 'unknown';
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          error: `I could not generate an answer (${reason}). Please call 081 860 4501 or email kaengkrachan.village@proton.me`,
        }),
      };
    }

    if (!reply) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          error: 'I could not generate an answer. Please call 081 860 4501 or email kaengkrachan.village@proton.me',
        }),
      };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ reply }) };
  } catch (err) {
    console.error('Chat error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Sorry, something went wrong. Please call 081 860 4501 or email kaengkrachan.village@proton.me' }),
    };
  }
};
