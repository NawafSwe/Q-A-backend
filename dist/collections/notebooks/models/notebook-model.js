"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notebook = void 0;
const mongoose_1 = require("mongoose");
const notebookSchema = new mongoose_1.Schema({
    courseId: { type: String, required: true },
    questionsId: { type: [], default: [] },
    type: { type: String, required: true }
});
exports.Notebook = mongoose_1.model('Notebook', notebookSchema);
