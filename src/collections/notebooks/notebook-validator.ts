import {validateSchema} from "../../utils/validate-schema";
import {body, param} from "express-validator";

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
                body('questionsId', 'questionId id must be valid MongoId').exists().isMongoId(),
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
                param('id', 'id must exists and be a valid mongoId').exists().isMongoId(),
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
                body('questionsId', 'questionId id must be valid MongoId').optional().exists().isMongoId(),
                /* ------------------- End of questionId Validation ------------------- */

            ];
        }
    }
}
