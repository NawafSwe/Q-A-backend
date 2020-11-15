/**
 * this module notebook-validator requires the following modules
 * @requires {body,param}
 * @requires {validateSchema}
 */


/**
 * @type (function(schemas:string[], request:Request):boolean)
 * @namespace validateSchema
 * @description function to validate request schemas before process
 */
import {validateSchema} from "../../utils/validate-schema";

/**
 * @type {body}
 * @namespace body
 * @description body of the request
 */

/**
 * @type {param}
 * @namespace param
 * @description param of the request
 */

import {body, param} from "express-validator";
/**
 * @type {ObjectId}
 * @namespace ObjectId
 * @description object id module used to check if the object has valid mongo id or not
 */

import ObjectId = require('mongoose');

/**
 * @author Nawaf Alsharqi
 * @const
 * @function
 * @name validate
 * @param {string} method holds the name of the end point to check with it
 * @returns VoidFunction
 * @description validation function to validate request body
 */

export const validate: (method: string) => void = (method) => {
    switch (method) {
        case 'getNotebooks': {
            return [
                /* ------------------- Schema Validation ------------------- */
                body(' ').custom((value, {req}) => {
                    const schemas: string [] = [];
                    if (validateSchema(schemas, req.body)) {
                        return true;
                    }
                }),

                /* ------------------- End Of Schema Validation ------------------- */
            ];
        }
        case 'getNotebookById': {
            return [
                /* ------------------- Schema Validation ------------------- */
                body(' ').custom((value, {req}) => {
                    const schemas: string [] = [];
                    if (validateSchema(schemas, req.body)) {
                        return true;
                    }
                }),

                /* ------------------- End Of Schema Validation ------------------- */

                /* ------------------- ID Validation ------------------- */
                param('id', 'id must exists and be a valid mongoId').exists().isMongoId()
                /* ------------------- End of ID Validation ------------------- */
            ];
        }
        case 'postNotebook': {
            return [

                /* ------------------- Schema Validation ------------------- */
                body(' ').custom((value, {req}) => {
                    const schemas: string [] = ['courseId', 'type', 'questionsId'];
                    if (validateSchema(schemas, req.body)) {
                        return true;
                    }
                }),

                /* ------------------- End Of Schema Validation ------------------- */

                /* ------------------- courseId Validation ------------------- */
                body('courseId', 'course id must exists and be of type string').exists().isString(),
                body('courseId', 'course id cannot be empty string').not().equals(''),
                body('courseId', 'course id cannot be empty string').not().equals(' '),
                /* ------------------- End of courseId Validation ------------------- */


                /* ------------------- type Validation ------------------- */
                body('type', 'type must exists and be of type string').exists().isString(),
                body('type', 'type cannot be empty string').not().equals(''),
                body('type', 'type cannot be empty string').not().equals(' '),
                /* ------------------- End of type Validation ------------------- */

                /* ------------------- questionId Validation ------------------- */

                body('questionsId').optional().custom((value, {req}) => {
                    for (let question of value) {
                        if (!ObjectId.isValidObjectId(question)) {
                            throw new Error('question must be valid mongoID');
                        }
                    }
                    return true;
                }),

                /* ------------------- End of questionId Validation ------------------- */

            ];
        }
        case 'deleteNotebookById': {
            return [
                /* ------------------- Schema Validation ------------------- */
                body(' ').custom((value, {req}) => {
                    const schemas: string [] = [];
                    if (validateSchema(schemas, req.body)) {
                        return true;
                    }
                }),

                /* ------------------- End Of Schema Validation ------------------- */

                /* ------------------- ID Validation ------------------- */
                param('id', 'id must exists and be a valid mongoId').exists().isMongoId(),
                /* ------------------- End of ID Validation ------------------- */
            ];
        }
        case 'putNotebookById': {
            return [
                /* ------------------- Schema Validation ------------------- */
                body(' ').custom((value, {req}) => {
                    const schemas: string [] = ['courseId', 'type', 'questionsId'];
                    if (validateSchema(schemas, req.body)) {
                        return true;
                    }
                }),

                /* ------------------- End Of Schema Validation ------------------- */

                /* ------------------- ID Validation ------------------- */
                param('id', 'id must exists and be a valid mongoId').optional().isMongoId(),
                /* ------------------- End of ID Validation ------------------- */

                /* ------------------- courseId Validation ------------------- */
                body('courseId', 'course id must exists and be of type string').optional().isString(),
                body('courseId', 'course id cannot be empty string').optional().not().equals(''),
                body('courseId', 'course id cannot be empty string').optional().not().equals(' '),
                /* ------------------- End of courseId Validation ------------------- */


                /* ------------------- type Validation ------------------- */
                body('type', 'type must exists and be of type string').optional().isString(),
                body('type', 'type cannot be empty string').optional().not().equals(''),
                body('type', 'type cannot be empty string').optional().not().equals(' '),
                /* ------------------- End of type Validation ------------------- */

                /* ------------------- questionId Validation ------------------- */
                body('questionsId').optional().custom((value, {req}) => {
                    for (let question of value) {
                        if (!ObjectId.isValidObjectId(question)) {
                            throw new Error('question must be valid mongoID');
                        }
                    }
                    return true;
                }),
                /* ------------------- End of questionId Validation ------------------- */

            ];
        }
    }
}
