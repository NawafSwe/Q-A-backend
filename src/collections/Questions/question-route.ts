import express = require('express');
import {Request, Response} from "express";
import {QuestionInterface} from "./models/question-interface";


// function encrypt(data) {
//     let key = ``;
//     return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
// }
//
// function decrypt(data, key) {
//     var bytes = CryptoJS.AES.decrypt(data, key);
//     return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// }
const {validate} = require('./question-validator');
const {validationResult} = require('express-validator');
const {getQuestions, postQuestion, deleteQuestion, putQuestion, getQuestionById} = require("./question-controller");

//encrypt the route all
export const questionRoute: express.Router = express.Router();

questionRoute.get('/', validate('getQuestions'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface[] | undefined | null | never = await getQuestions();

        res.send(response).status(200);
    }
});
questionRoute.get('/:id', validate('getQuestionById'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface | undefined | null | never = await getQuestionById(req.params.id);
        res.send(response).status(200);
    }
});

questionRoute.post('/', validate('postQuestion'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface | undefined | null | never = await postQuestion(req.body);
        res.send(response).status(200);
    }
});

questionRoute.delete('/:id', validate('deleteQuestionById'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface | undefined | null | never | null = await deleteQuestion(req.params.id);
        res.send(response).status(200);
    }

});

questionRoute.put('/:id', validate('putQuestionById'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface | undefined | null | never | null = await putQuestion(req.params.id, req.body);
        res.send(response).status(200);
    }

});
