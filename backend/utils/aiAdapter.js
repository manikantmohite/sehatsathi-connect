// aiAdapter.js
// This file wraps whichever AI backend you want (OpenAI / Rasa / Dialogflow).
// For the hackathon, we include a simple OpenAI-compatible stub using axios.


const axios = require('axios');


async function askAI({ message, userId, language = 'en' }) {
// If you have OPENAI_API_KEY, use their API, otherwise echo back.
if (!process.env.OPENAI_API_KEY) {
// Simple rule-based fallback for demo/demoability
const lower = message.toLowerCase();
if (lower.includes('vaccine') || lower.includes('vaccin')) {
return 'Vaccines protect you from many diseases. Please tell me your age and location for schedule.';
}
if (lower.includes('fever') || lower.includes('cough')) {
return 'For fever and cough, drink fluids, rest, and visit a primary health center if symptoms persist for 2 days.';
}
return `I heard you say: "${message}" — I can help with symptoms, vaccination schedules, and outbreak alerts.`;
}


// Example OpenAI call (Chat Completions API) - replace with your preferred model & endpoint
try {
const resp = await axios.post('https://api.openai.com/v1/chat/completions', {
model: 'gpt-4o-mini',
messages: [{ role: 'user', content: message }]
}, {
headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
});
const text = resp.data.choices[0].message.content;
return text;
} catch (err) {
console.error('AI adapter error', err?.response?.data || err.message);
return 'Sorry, the AI service is currently unavailable. Try again later.';
}
}


module.exports = { askAI };