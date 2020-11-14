"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putQuestion = exports.deleteQuestion = exports.postQuestion = exports.getQuestions = void 0;
const question_model_1 = require("./models/question-model");
exports.getQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield question_model_1.QuestionModel.find({});
        return response;
    }
    catch (error) {
        console.log(`error occurred in getQuestions() error: ${error}`);
    }
});
exports.postQuestion = (question) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield question_model_1.QuestionModel.create(question);
        return response;
    }
    catch (error) {
        console.log(`error occurred in postQuestion() error: ${error}`);
    }
});
exports.deleteQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //returns null if not exist , return QuestionModel if found and delete it
        const response = yield question_model_1.QuestionModel.findByIdAndDelete(id);
        return response;
    }
    catch (error) {
        console.log(`error occurred in deleteQuestion() error: ${error}`);
    }
});
exports.putQuestion = (id, question) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield question_model_1.QuestionModel.findByIdAndUpdate(id, question);
        return response;
    }
    catch (error) {
        console.log(`error occurred in putQuestion() error: ${error}`);
    }
});
