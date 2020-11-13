import express = require('express');
import {Request, Response} from "express";
import {getQuestions, postQuestion, deleteQuestion, putQuestion} from "./question-controller";
import {QuestionInterface} from "./models/question-interface";

export const questionRoute: express.Router = express.Router();
questionRoute.get('/', async (req: Request, res: Response) => {
    const response: QuestionInterface[] | undefined = await getQuestions();
    res.send(response).status(200);
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

