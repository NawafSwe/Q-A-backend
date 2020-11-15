import express = require('express');

export const notebookRoute: express.Router = express.Router();
import {NotebookInterface} from './models/notebook-interface'
import {Request, Response} from "express";
import {getNotebooks, putNotebookById, postNotebook, deleteNotebookById, getNotebookById} from './notebook-controller';
import {validationResult} from "express-validator";

const {validate} = require("./notebook-validator");

notebookRoute.get('/', validate('getNotebooks'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: NotebookInterface[] | undefined | never | null = await getNotebooks();
        res.send(response).status(200);
    }

});


notebookRoute.get('/:id', validate('getNotebookById'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: NotebookInterface | undefined | null | never = await getNotebookById(req.params.id);
        res.send(response).status(200);
    }
});

notebookRoute.delete('/:id', async (req: Request, res: Response) => {
    const response: NotebookInterface | undefined | null | never = await deleteNotebookById(req.params.id);
    res.send(response).status(200);
});

notebookRoute.post('/', async (req: Request, res: Response) => {
    const response: NotebookInterface | undefined | never | null = await postNotebook(req.body);
    res.send(response).status(200);
});

notebookRoute.put('/:id', async (req: Request, res: Response) => {
    const response: NotebookInterface | undefined | null | never = await putNotebookById(req.params.id, req.body);
    res.send(response).status(200);
});
