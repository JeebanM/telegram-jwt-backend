import { Request, Response } from 'express';
import { validateTelegramData } from '../services/telegramService';
import { generateToken } from '../services/jwtService';

// POST /api/auth/telegram
export const loginWithTelegram = (req: Request, res: Response) => {
  const telegramData = req.body;

  // 1. Validate the incoming Telegram auth data
  if (!validateTelegramData(telegramData)) {
    return res.status(400).json({ message: '❌ Invalid Telegram data or hash verification failed.' });
  }

  // 2. Construct minimal user object (you can expand if needed)
  const user = {
    id: telegramData.id,
    username: telegramData.username,
    first_name: telegramData.first_name,
    last_name: telegramData.last_name,
    photo_url: telegramData.photo_url
  };

  // 3. Generate JWT token
  const token = generateToken(user);  // ✅ FIXED

  // 4. Send back token and user info
  return res.status(200).json({
    message: '✅ Login successful',
    token,
    user
  });
};

// GET /api/auth/session
export const getSession = (req: Request & { user?: any }, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: '❌ Unauthorized. Please login first.' });
  }

  return res.status(200).json({ user: req.user });
};

// GET /api/auth/logout (optional since JWT is stateless)
export const logout = (_req: Request, res: Response) => {
  return res.status(200).json({ message: '✅ Logged out (client should clear JWT).' });
};
