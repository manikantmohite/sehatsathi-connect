const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.signup = async (req, res) => {
try {
const { name, email, password, language, phone } = req.body;
const existing = await User.findOne({ email });
if (existing) return res.status(400).json({ message: 'User exists' });
const hashed = await bcrypt.hash(password, 10);
const user = await User.create({ name, email, password: hashed, language, phone });
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
return res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


exports.signin = async (req, res) => {
try {
const { email, password } = req.body;
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: 'Invalid credentials' });
const match = await bcrypt.compare(password, user.password);
if (!match) return res.status(400).json({ message: 'Invalid credentials' });
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
return res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};