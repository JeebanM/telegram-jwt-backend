"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/login', authController_1.loginWithTelegram);
router.get('/session', authMiddleware_1.verifyJWT, authController_1.getSession);
router.post('/logout', authController_1.logout);
exports.default = router;
