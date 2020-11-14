"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URI = exports.HOST = exports.PORT = void 0;
exports.PORT = Number(process.env.PORT) || 6060;
exports.HOST = String(process.env.HOST) || 'localhost';
exports.MONGO_URI = String(process.env.MONGO_URI);
