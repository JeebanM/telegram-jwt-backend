
import dotenv from 'dotenv';
dotenv.config();

export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
export const JWT_SECRET = process.env.JWT_SECRET!;
export const FRONTEND_URL = process.env.FRONTEND_URL!;
