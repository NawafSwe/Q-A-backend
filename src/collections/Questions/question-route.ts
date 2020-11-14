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
const {getQuestions, postQuestion, deleteQuestion, putQuestion} = require("./question-controller");

//encrypt the route all
export const questionRoute: express.Router = express.Router();

questionRoute.get('/', validate('getQuestions'), async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface[] | undefined = await getQuestions();

        res.send(response).status(200);
    }
});

questionRoute.post('/', async (req: Request, res: Response) => {
    const response: QuestionInterface | undefined = await postQuestion(req.body);
    res.send(response).status(200);
});

questionRoute.delete('/:id', async (req: Request, res: Response) => {
    const response: QuestionInterface | undefined | null = await deleteQuestion(req.params.id);
    res.send(response).status(200);
});

questionRoute.put('/:id', async (req: Request, res: Response) => {
    const response: QuestionInterface | undefined | null = await putQuestion(req.params.id, req.body);
    res.send(response).status(200);
});
