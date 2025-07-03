"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Health check route (useful for Render, Vercel, or ngrok)
app.get('/', (_req, res) => {
    res.status(200).send('🚀 Telegram JWT Backend is working!');
});
// Auth routes
app.use('/api/auth', authRoutes_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
