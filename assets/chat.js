(function () {
  if (document.getElementById('nhvk-chat-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'nhvk-chat-btn';
  btn.type = 'button';
  btn.textContent = 'Ask NHVK';
  btn.setAttribute('aria-label', 'Open chat assistant');

  const panel = document.createElement('div');
  panel.id = 'nhvk-chat-panel';
  panel.innerHTML =
    '<div id="nhvk-chat-header">Natural Healthy Village <button id="nhvk-chat-close" aria-label="Close">&times;</button></div>' +
    '<div id="nhvk-chat-messages"></div>' +
    '<p id="nhvk-chat-disclaimer">AI assistant — verify details with our team before purchasing.</p>' +
    '<form id="nhvk-chat-form"><textarea id="nhvk-chat-input" placeholder="Ask about plots, lease, infrastructure…" rows="1"></textarea><button type="submit" id="nhvk-chat-send">Send</button></form>';

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  const messages = panel.querySelector('#nhvk-chat-messages');
  const form = panel.querySelector('#nhvk-chat-form');
  const input = panel.querySelector('#nhvk-chat-input');
  const sendBtn = panel.querySelector('#nhvk-chat-send');
  let open = false;

  function addMsg(text, role) {
    const el = document.createElement('div');
    el.className = 'nhvk-msg ' + role;
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  function removeThinking() {
    const t = messages.querySelector('.nhvk-msg.thinking');
    if (t) t.remove();
  }

  function toggle() {
    open = !open;
    panel.classList.toggle('open', open);
    if (open && !messages.children.length) {
      addMsg('Hello! I can answer questions about Natural Healthy Village — plots, pricing, foreign lease, solar and utilities. How can I help?', 'bot');
    }
    if (open) input.focus();
  }

  btn.addEventListener('click', toggle);
  panel.querySelector('#nhvk-chat-close').addEventListener('click', toggle);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    addMsg(text, 'user');
    addMsg('Thinking…', 'bot thinking');
    sendBtn.disabled = true;
    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const raw = await res.text();
      let data = {};
      try {
        data = JSON.parse(raw);
      } catch {
        removeThinking();
        addMsg('Server error. Please call 081 860 4501 or email kaengkrachan.village@proton.me', 'error');
        sendBtn.disabled = false;
        input.focus();
        return;
      }
      if (!res.ok) {
        removeThinking();
        addMsg(data.error || 'Server error (' + res.status + '). Please call 081 860 4501.', 'error');
      } else if (data.reply) {
        removeThinking();
        addMsg(data.reply, 'bot');
      } else if (data.error) {
        removeThinking();
        addMsg(data.error, 'error');
      } else {
        removeThinking();
        addMsg('No response from assistant. Please call 081 860 4501 or email kaengkrachan.village@proton.me', 'error');
      }
    } catch {
      removeThinking();
      addMsg('Connection error. Please call 081 860 4501 or email kaengkrachan.village@proton.me', 'error');
    }
    sendBtn.disabled = false;
    input.focus();
  });
})();
