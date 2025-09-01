const ChatMessage = require('../models/ChatMessage');
const { askAI } = require('../utils/aiAdapter');


exports.postMessage = async (req, res) => {
try {
const { message } = req.body;
const user = req.user;
// save user message
const userMsg = await ChatMessage.create({ user: user._id, message, fromBot: false });
// ask AI
const botText = await askAI({ message, userId: user._id, language: user.language });
const botMsg = await ChatMessage.create({ user: user._id, message: botText, fromBot: true });
return res.json({ userMsg, botMsg });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Chat error' });
}
};


exports.getHistory = async (req, res) => {
try {
const user = req.user;
const messages = await ChatMessage.find({ user: user._id }).sort('createdAt');
res.json({ messages });
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};