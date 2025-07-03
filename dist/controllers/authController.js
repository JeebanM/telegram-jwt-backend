"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.getSession = exports.loginWithTelegram = void 0;
const telegramService_1 = require("../services/telegramService");
const jwtService_1 = require("../services/jwtService");
const loginWithTelegram = (req, res) => {
    const telegramData = req.body;
    if (!(0, telegramService_1.validateTelegramData)(telegramData)) {
        return res.status(400).json({ message: 'Invalid Telegram data' });
    }
    const user = {
        id: telegramData.id,
        username: telegramData.username,
        first_name: telegramData.first_name,
        photo_url: telegramData.photo_url
    };
    const token = (0, jwtService_1.generateToken)(user);
    return res.status(200).json({ token, user });
};
exports.loginWithTelegram = loginWithTelegram;
const getSession = (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Not authenticated' });
    }
    return res.status(200).json({ user: req.user });
};
exports.getSession = getSession;
const logout = (_req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
};
exports.logout = logout;
