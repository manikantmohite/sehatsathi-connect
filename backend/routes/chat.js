const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { postMessage, getHistory } = require('../controllers/chatController');
router.get('/history', auth, getHistory);
router.post('/message', auth, postMessage);
module.exports = router;