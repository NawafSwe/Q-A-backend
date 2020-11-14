import express = require('express');

const notebookRoute: express.Router = express.Router();
import {NotebookInterface} from './models/notebook-interface'
import {Request, Response} from "express";
import {getNotebooks} from './notebook-controller';

notebookRoute.get('/', async (req: Request, res: Response) => {
    const response: NotebookInterface[] | undefined = await getNotebooks();
    res.send(response).status(200);
});
