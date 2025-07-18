"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRONTEND_URL = exports.JWT_SECRET = exports.TELEGRAM_BOT_TOKEN = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.FRONTEND_URL = process.env.FRONTEND_URL;
