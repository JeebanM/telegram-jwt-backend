import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route (useful for Render, Vercel, or ngrok)
app.get('/', (_req, res) => {
  res.status(200).send('🚀 Telegram JWT Backend is working!');
});

// Auth routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
