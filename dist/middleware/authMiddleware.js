"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
const jwtService_1 = require("../services/jwtService");
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or invalid' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = (0, jwtService_1.verifyToken)(token);
        req.user = decoded.user;
        next();
    }
    catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};
exports.verifyJWT = verifyJWT;
