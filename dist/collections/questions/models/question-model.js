"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionModel = void 0;
const mongoose_1 = require("mongoose");
const questionSchema = new mongoose_1.Schema({
    courseId: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String },
    type: { type: String, required: true },
    status: { type: String, default: 'not Completed' },
});
exports.QuestionModel = mongoose_1.model('Question', questionSchema);
