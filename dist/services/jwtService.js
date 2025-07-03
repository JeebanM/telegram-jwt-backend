"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
/**
 * Generates a JWT token for a given user
 */
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({ user }, JWT_SECRET, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
/**
 * Verifies the token and returns the decoded payload
 */
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, JWT_SECRET);
};
exports.verifyToken = verifyToken;
