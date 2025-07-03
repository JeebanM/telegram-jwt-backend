import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

interface TelegramUser {
  id: number;
  username?: string;
  first_name: string;
  last_name?: string;
  photo_url?: string;
}

interface TokenPayload {
  user: TelegramUser;
}

/**
 * Generates a JWT token for a given user
 */
export const generateToken = (user: TelegramUser): string => {
  return jwt.sign({ user }, JWT_SECRET, { expiresIn: '1h' });
};

/**
 * Verifies the token and returns the decoded payload
 */
export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
};
