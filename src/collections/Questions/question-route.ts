import express = require('express');
import {Request, Response} from "express";
import {getQuestions, postQuestion, deleteQuestion} from "./question-controller";
import {IQuestion} from "./models/IQuestion";

export const questionRoute: express.Router = express.Router();
questionRoute.get('/', async (req: Request, res: Response) => {
    const response: IQuestion[] | undefined = await getQuestions();
    res.send(response).status(200);
});

questionRoute.post('/', async (req: Request, res: Response) => {
    const response: IQuestion | undefined = await postQuestion(req.body);
    res.send(response).status(200);
});

questionRoute.delete('/:id', async (req: Request, res: Response) => {
    const response: IQuestion | undefined | null = await deleteQuestion(req.params.id);
    res.send(response).status(200);
});


