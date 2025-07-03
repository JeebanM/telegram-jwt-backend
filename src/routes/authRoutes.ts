import express from 'express';
import { loginWithTelegram, getSession, logout } from '../controllers/authController';
import { verifyJWT } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/login', loginWithTelegram);
router.get('/session', verifyJWT, getSession);
router.post('/logout', logout);

export default router;
