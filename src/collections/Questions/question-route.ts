/**
 * @module questions/question-route
 * This file question-route have the routes to route on the question collection, it requires the following modules
 * @requires {express,Response,Request}
 * @requires QuestionInterface
 * @requires {getQuestionById,getQuestions,postQuestion,putQuestion,deleteQuestion}
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
 * @type {import {QuestionInterface} from"./question-interface" }
 * @namespace QuestionInterface
 * @description Question interface needed to specify the type of mongoose document
 */
import {QuestionInterface} from "./models/question-interface";

//encrypt the route all
// function encrypt(data) {
//     let key = ``;
//     return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
// }
//
// function decrypt(data, key) {
//     var bytes = CryptoJS.AES.decrypt(data, key);
//     return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// }
/**
 * @type {function(method:string):VoidFunction}
 * @namespace validate
 * @description function used to validate each request before going to server and mess with database
 */
const {validate} = require('./question-validator');
/**
 * @type {function (req:Request): [[ValidationChain] }
 * @namespace validationResult
 * @description getting the validation result object from a request
 */
const {validationResult} = require('express-validator');


/**
 * @type {function(): QuestionInterface[] | undefined | null}
 * @namespace getQuestions
 * @description gets all questions from database
 */

/**
 * @type {function(question:QuestionInterface): QuestionInterface | undefined | null}
 * @namespace postQuestion
 * @description post new question to database
 */

/**
 * @type {function(id:string): QuestionInterface | undefined | null}
 * @namespace getQuestionById
 * @description get question from database by id
 */

/**
 * @type {function(id:string): QuestionInterface | undefined | null}
 * @namespace deleteQuestion
 * @description deletes question from database by id
 */

/**
 * @type {function(id:string,question:QuestionInterface): QuestionInterface | undefined | null}
 * @namespace putQuestion
 * @description updates question data from database by id
 */

const {getQuestions, postQuestion, deleteQuestion, putQuestion, getQuestionById} = require("./question-controller");

/**
 * @type {express.Router}
 * @namespace questionRoute
 * @description question-router to route on all ends points of the collection questions.
 */
export const questionRoute: express.Router = express.Router();


/**
 * Route getting all questions.
 * @name get/ questions
 * @function
 * @memberOf module: questions/question-route~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express validator middleware.
 * @param {callback} middleware - Express middleware.
 */
questionRoute.get('/', validate('getQuestions'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface[] | undefined | null | never = await getQuestions();

        res.send(response).status(200);
    }
});

/**
 * Route getting question by id.
 * @name get/:id questions
 * @function
 * @memberOf module: questions/question-route~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express validator middleware.
 * @param {callback} middleware - Express middleware.
 */
questionRoute.get('/:id', validate('getQuestionById'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface | undefined | null | never = await getQuestionById(req.params.id);
        res.send(response).status(200);
    }
});

/**
 * Route post new question.
 * @name post/ questions
 * @function
 * @memberOf module: questions/question-route~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express validator middleware.
 * @param {callback} middleware - Express middleware.
 */
questionRoute.post('/', validate('postQuestion'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface | undefined | null | never = await postQuestion(req.body);
        res.send(response).status(200);
    }
});

/**
 * Route delete question by id.
 * @name delete/:id questions
 * @function
 * @memberOf module: questions/question-route~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express validator middleware.
 * @param {callback} middleware - Express middleware.
 */
questionRoute.delete('/:id', validate('deleteQuestionById'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface | undefined | null | never = await deleteQuestion(req.params.id);
        res.send(response).status(200);
    }
});

/**
 * Route update question by id.
 * @name put/:id questions
 * @function
 * @memberOf module: questions/question-route~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express validator middleware.
 * @param {callback} middleware - Express middleware.
 */
questionRoute.put('/:id', validate('putQuestionById'), async (req: Request, res: Response) => {
    const err: any = validationResult(req);
    if (!err.isEmpty()) {
        res.send(err.mapped()).status(400);
    } else {
        const response: QuestionInterface | undefined | null | never | null = await putQuestion(req.params.id, req.body);
        res.send(response).status(200);
    }
});
