import {Model} from "mongoose";
import {NotebookInterface} from "./models/notebook-interface";
import {body} from "express-validator";

const Notebook: Model<NotebookInterface> = require('./models/notebook-model');

export const getNotebooks: () => Promise<NotebookInterface[] | undefined> | never = async () => {
    try {
        const response: NotebookInterface[] | undefined = await Notebook.find({});
        return response;
    } catch (error: any) {
        console.log(`error occurred in getNotebooks() error: ${error} `)
    }
}
export const postNotebook: (notebook: NotebookInterface) => Promise<NotebookInterface | undefined> | never = async (notebook) => {
    try {
        const response: NotebookInterface | undefined = await Notebook.create(notebook);
        return response;

    } catch (error: any) {
        console.log(`error occurred in the postNotebook() error: ${error}`);
    }
}
