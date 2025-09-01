require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const ChatMessage = require('./models/ChatMessage');
const { askAI } = require('./utils/aiAdapter');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// Realtime chatbot namespace
io.on('connection', (socket) => {
  console.log('✅ Socket connected:', socket.id);

  socket.on('join', (payload) => {
    // payload: { userId }
    socket.join(payload.userId);
  });

  socket.on('user_message', async (payload) => {
    try {
      // payload: { userId, message }
      const { userId, message } = payload;

      // save user's message to DB
      const userMsg = await ChatMessage.create({
        user: userId,
        message,
        fromBot: false,
      });

      // ask AI
      const botText = await askAI({ message, userId });

      // save bot's response
      const botMsg = await ChatMessage.create({
        user: userId,
        message: botText,
        fromBot: true,
      });

      // emit back to the room
      io.to(userId).emit('new_message', { userMsg, botMsg });
    } catch (error) {
      console.error('❌ Error handling user_message:', error.message);
    }
  });

  socket.on('disconnect', () =>
    console.log('⚠️ Socket disconnected:', socket.id)
  );
});

const PORT = process.env.PORT || 5000;

// Connect DB then start server
connectDB(process.env.MONGODB_URI)
  .then(() =>
    server.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.error('❌ DB Connection Failed:', err.message));
