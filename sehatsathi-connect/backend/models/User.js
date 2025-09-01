const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
name: { type: String, required: true },
phone: { type: String },
email: { type: String, unique: true, required: true },
password: { type: String, required: true },
role: { type: String, enum: ['user', 'admin'], default: 'user' },
language: { type: String, default: 'en' },
vaccinationHistory: { type: Array, default: [] },
createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);