import {Model} from "mongoose";
import {NotebookInterface} from "./models/notebook-interface";


const Notebook: Model<NotebookInterface> = require('./models/notebook-model');

export const getNotebooks: () => Promise<NotebookInterface[] | undefined | null> | never = async () => {
    try {
        const response: NotebookInterface[] | undefined = await Notebook.find({});
        return response;
    } catch (error: any) {
        console.log(`error occurred in getNotebooks() error: ${error} `)
    }
};
export const postNotebook: (notebook: NotebookInterface) => Promise<NotebookInterface | undefined | null> | never = async (notebook) => {
    try {
        const response: NotebookInterface | undefined = await Notebook.create(notebook);
        return response;

    } catch (error: any) {
        console.log(`error occurred in the postNotebook() error: ${error}`);
    }
};
export const getNotebookById: (id: string) => Promise<NotebookInterface | undefined | null> | never = async (id) => {
    try {
        const response: NotebookInterface | undefined | null = await Notebook.findById(id);
        return response;
    } catch (error: any) {
        console.log(`error occurred in getNotebookById() error: ${error}`);
    }
};
export const deleteNotebookById: (id: string) => Promise<NotebookInterface | undefined | null> | never = async (id) => {

    try {
        const response: NotebookInterface | undefined | null = await Notebook.findByIdAndDelete(id);
        return response;
    } catch (error: any) {
        console.log(`error occurred in deleteNotebookById() error: ${error}`);
    }
};

export const putNotebookById: (id: string, notebook: NotebookInterface) => Promise<NotebookInterface | undefined | null> | never = async (id, notebook) => {
    try {
        const response: NotebookInterface | undefined | null = await Notebook.findByIdAndUpdate(id, notebook);
        return response;
    } catch (error: any) {
        console.log(`error occurred in putNotebookById() error: ${error}`);
    }
};
