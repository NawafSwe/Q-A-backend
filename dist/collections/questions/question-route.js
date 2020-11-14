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
exports.questionRoute = void 0;
const express = require("express");
const { validate } = require('./question-validator');
const { validationResult } = require('express-validator');
const { getQuestions, postQuestion, deleteQuestion, putQuestion } = require("./question-controller");
exports.questionRoute = express.Router();
exports.questionRoute.get('/', validate('getQuestions'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    }
    else {
        const response = yield getQuestions();
        res.send(response).status(200);
    }
}));
exports.questionRoute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield postQuestion(req.body);
    res.send(response).status(200);
}));
exports.questionRoute.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield deleteQuestion(req.params.id);
    res.send(response).status(200);
}));
exports.questionRoute.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield putQuestion(req.params.id, req.body);
    res.send(response).status(200);
}));
