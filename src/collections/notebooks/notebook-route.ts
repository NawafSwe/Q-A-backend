/**
 * @module notebooks/notebook-route
 * This file notebook-route have the routes to route on the notebook collection, it requires the following modules
 * @requires {express,Response,Request}
 * @requires NotebookInterface
 * @requires {getNotebookById,getNotebooks,postNotebook,putNotebookById,deleteNotebookById}
 * @requires validate
 * @requires validationResult
 *
 */
/**
 * @type {import {express} from "express"}
 * @namespace express
 * @description express application to route on question collection
 */

import express = require('express');

/**
 * @const
 * @type {express.Router}
 * @namespace notebookRoute
 * @description notebook-router to route on all ends points of the collection notebooks.
 */
export const notebookRoute: express.Router = express.Router();

/**
 * @type {import {NotebookInterface} from"./notebook-interface" }
 * @namespace NotebookInterface
 * @description notebook interface needed to specify the type of mongoose document
 */
import {NotebookInterface} from './models/notebook-interface';

/**
 * @type {import {Request} from "express"}
 * @namespace Request
 * @description Request of express instance where it holds the requests information
 */

/**
 * @type {import {Response} from "express"}
 * @namespace Response
 * @description  Response of express instance where it holds the response information sent back by the server
 */
import {Request, Response} from "express";


/**
 * @const
 * @type {function(): NotebookInterface[] | undefined | null}
 * @namespace getNotebooks
 * @description gets all notebooks from database
 */

/**
 * @const
 * @type {function(question:NotebookInterface): NotebookInterface | undefined | null}
 * @namespace postNotebook
 * @description post new notebook to database
 */

/**
 * @const
 * @type {function(id:string): NotebookInterface | undefined | null}
 * @namespace getNotebookById
 * @description get notebook from database by id
 */

/**
 * @const
 * @type {function(id:string): NotebookInterface | undefined | null}
 * @namespace deleteNotebookById
 * @description deletes notebook from database by id
 */

/**
 * @const
 * @type {function(id:string,notebook:NotebookInterface): NotebookInterface | undefined | null}
 * @namespace putNotebookById
 * @description updates notebook data from database by id
 */
import {getNotebooks, putNotebookById, postNotebook, deleteNotebookById, getNotebookById} from './notebook-controller';


/**
 * @const
 * @type {function (req:Request): [[ValidationChain] }
 * @namespace validationResult
 * @description getting the validation result object from a request
 */
import {validationResult} from "express-validator";


/**
 * @const
 * @type {function(method:string):VoidFunction}
 * @namespace validate
 * @description function used to validate each request before going to server and mess with database
 */

const {validate} = require("./notebook-validator");

/**
 * Route getting all notebooks.
 * @name get/ notebooks
 * @function
 * @memberOf module: notebooks/notebook-route~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express validator middleware.
 * @param {callback} middleware - Express middleware.
 */

notebookRoute.get('/', validate('getNotebooks'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: NotebookInterface[] | undefined | never | null = await getNotebooks();
        res.send(response).status(200);
    }

});

/**
 * Route post new notebooks.
 * @name post/ notebooks
 * @function
 * @memberOf module: notebooks/notebook-route~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express validator middleware.
 * @param {callback} middleware - Express middleware.
 */

notebookRoute.post('/', validate('postNotebook'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: NotebookInterface | undefined | never | null = await postNotebook(req.body);
        res.send(response).status(200);
    }
});

/**
 * Route getting notebook by id.
 * @name get/:id notebooks
 * @function
 * @memberOf module: notebooks/notebook-route~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express validator middleware.
 * @param {callback} middleware - Express middleware.
 */
notebookRoute.get('/:id', validate('getNotebookById'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: NotebookInterface | undefined | null | never = await getNotebookById(req.params.id);
        res.send(response).status(200);
    }
});

/**
 * Route deleting notebook by id.
 * @name delete/:id notebooks
 * @function
 * @memberOf module: notebooks/notebook-route~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express validator middleware.
 * @param {callback} middleware - Express middleware.
 */
notebookRoute.delete('/:id', validate('deleteNotebookById'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: NotebookInterface | undefined | null | never = await deleteNotebookById(req.params.id);
        res.send(response).status(200);
    }
});

/**
 * Route updating notebook by id.
 * @name put/:id notebooks
 * @function
 * @memberOf module: notebooks/notebook-route~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express validator middleware.
 * @param {callback} middleware - Express middleware.
 */
notebookRoute.put('/:id', validate('putNotebookById'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: NotebookInterface | undefined | null | never = await putNotebookById(req.params.id, req.body);
        res.send(response).status(200);
    }
});
