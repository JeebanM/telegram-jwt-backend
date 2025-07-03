"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTelegramData = void 0;
const crypto_1 = __importDefault(require("crypto"));
const validateTelegramData = (data) => {
    const { hash, ...authData } = data;
    const secret = crypto_1.default
        .createHash('sha256')
        .update(process.env.TELEGRAM_BOT_TOKEN || '', 'utf8')
        .digest();
    const dataCheckString = Object.keys(authData)
        .sort()
        .map((key) => `${key}=${authData[key]}`)
        .join('\n');
    const hmac = crypto_1.default
        .createHmac('sha256', secret)
        .update(dataCheckString)
        .digest('hex');
    return hmac === hash;
};
exports.validateTelegramData = validateTelegramData;
