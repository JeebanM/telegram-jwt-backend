"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.getSession = exports.loginWithTelegram = void 0;
const telegramService_1 = require("../services/telegramService");
const jwtService_1 = require("../services/jwtService");
// POST /api/auth/telegram
const loginWithTelegram = (req, res) => {
    const telegramData = req.body;
    // 1. Validate the incoming Telegram auth data
    if (!(0, telegramService_1.validateTelegramData)(telegramData)) {
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
    const token = (0, jwtService_1.generateToken)(user); // ✅ FIXED
    // 4. Send back token and user info
    return res.status(200).json({
        message: '✅ Login successful',
        token,
        user
    });
};
exports.loginWithTelegram = loginWithTelegram;
// GET /api/auth/session
const getSession = (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: '❌ Unauthorized. Please login first.' });
    }
    return res.status(200).json({ user: req.user });
};
exports.getSession = getSession;
// GET /api/auth/logout (optional since JWT is stateless)
const logout = (_req, res) => {
    return res.status(200).json({ message: '✅ Logged out (client should clear JWT).' });
};
exports.logout = logout;
