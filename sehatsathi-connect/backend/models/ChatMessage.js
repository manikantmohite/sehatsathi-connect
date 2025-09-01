const mongoose = require('mongoose');
const ChatMessageSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
message: String,
fromBot: { type: Boolean, default: false },
meta: Object,
createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('ChatMessage', ChatMessageSchema);