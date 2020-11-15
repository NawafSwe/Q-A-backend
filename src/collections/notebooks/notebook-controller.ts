/**
 * this controller requires the following packages
 * @requires NotebookModel
 * @requires NotebookInterface
 */


/**
 * @type {import {NotebookInterface} from"./notebook-interface" }
 * @namespace NotebookInterface
 * @description notebook interface needed to specify the type of mongoose document
 */
import {NotebookInterface} from "./models/notebook-interface";


/**
 * @type {import {NotebookModel} from"./notebook-model" }
 * @namespace NotebookModel
 * @description Notebook model that have all the functions related to database operations
 */
import {NotebookModel} from './models/notebook-model';


/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @name getNotebooks
 * @returnsPromise<NotebookInterface[] | undefined | null> | never
 * @throws {Error} it may throws an error during processing
 * @description getting all notebooks from database
 */
export const getNotebooks: () => Promise<NotebookInterface[] | undefined | null> | never = async () => {
    try {
        const response: NotebookInterface[] | undefined = await NotebookModel.find({});
        return response;
    } catch (error: any) {
        console.log(`error occurred in getNotebooks() error: ${error} `)
    }
};

/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @name postNotebook
 * @param {NotebookInterface} notebook that holds the notebook data
 * @returns Promise<NotebookInterface | undefined | null> | never
 * @throws {Error} it may throws an error during the processing if there is something wrong
 * @description posting new notebook to database
 */

export const postNotebook: (notebook: NotebookInterface) => Promise<NotebookInterface | undefined | null> | never = async (notebook) => {
    try {
        const response: NotebookInterface | undefined = await NotebookModel.create(notebook);
        return response;

    } catch (error: any) {
        console.log(`error occurred in the postNotebook() error: ${error}`);
    }
};

/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @name getNotebookById
 * @param {string} id of question
 * @returns Promise<NotebookInterface | undefined | null> | never
 * @throws {Error} throws an error if there is an error
 * @description getting notebook by id
 */
export const getNotebookById: (id: string) => Promise<NotebookInterface | undefined | null> | never = async (id) => {
    try {
        const response: NotebookInterface | undefined | null = await NotebookModel.findById(id);
        return response;
    } catch (error: any) {
        console.log(`error occurred in getNotebookById() error: ${error}`);
    }
};


/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @name deleteNotebookById
 * @param {string} id
 * @returns Promise<NotebookInterface | undefined | null> | never
 * @throws {Error} it may throws an error during the processing if there is an error
 * @description deleting notebook from the database by id
 */

export const deleteNotebookById: (id: string) => Promise<NotebookInterface | undefined | null> | never = async (id) => {

    try {
        const response: NotebookInterface | undefined | null = await NotebookModel.findByIdAndDelete(id);
        return response;
    } catch (error: any) {
        console.log(`error occurred in deleteNotebookById() error: ${error}`);
    }
};

/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @name putQuestion
 * @param {string} id
 * @param {NotebookInterface} notebook
 * @returns Promise<NotebookInterface | undefined | null> | never
 * @throws {Error} throws an error if there is an error during the process
 * @description update notebook data by id from database
 */
export const putNotebookById: (id: string, notebook: NotebookInterface) => Promise<NotebookInterface | undefined | null> | never = async (id, notebook) => {
    try {
        const response: NotebookInterface | undefined | null = await NotebookModel.findByIdAndUpdate(id, notebook);
        return response;
    } catch (error: any) {
        console.log(`error occurred in putNotebookById() error: ${error}`);
    }
};
