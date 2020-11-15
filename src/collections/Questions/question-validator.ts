import {body, param} from 'express-validator';
import {validateSchema} from '../../utils/validate-schema';

export const validate: (method: string) => void = (method) => {
    switch (method) {
        case 'getQuestions': {
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
        case 'postQuestion': {
            return [
                /* ------------------- Schema Validation ------------------- */
                body(' ').custom((value, {req}) => {
                    const schemas: string[] = ['status', 'type', 'courseId', 'question', 'answer'];
                    if (validateSchema(schemas, req.body)) {
                        return true;
                    }
                }),
                /* ------------------- End Of Schema Validation ------------------- */

                /* ------------------- courseId Validation ------------------- */

                body('courseId', 'course id must exist and be of type String').exists().isString(),
                body('courseId.length', 'courseId cannot be empty string').not().equals('0 || 1'),
                /* ------------------- End Of courseId Validation ------------------- */


                /* ------------------- question Validation ------------------- */

                body('question', 'question  must exist and be of type String').exists().isString(),
                body('question', 'question cannot be empty string').not().equals(' '),
                body('question', 'question cannot be empty string').not().equals(''),
                /* ------------------- End Of question Validation ------------------- */

                /* ------------------- answer Validation ------------------- */
                body('answer', 'answer  must exist and be of type String').optional().isString(),
                body('answer', 'answer cannot be empty string').optional().not().equals(' '),
                body('answer', 'answer cannot be empty string').optional().not().equals(''),
                /* ------------------- End Of answer Validation ------------------- */

                /* ------------------- type Validation ------------------- */
                body('type', 'type  must exist and be of type String').exists().isString(),
                body('type', 'type cannot be empty string').not().equals(' '),
                body('type', 'type cannot be empty string').not().equals(''),
                /* ------------------- End Of type Validation ------------------- */

                /* ------------------- status Validation ------------------- */
                body('status', 'status  must exist and be of type String').optional().isString(),
                body('status', 'status cannot be empty string').optional().not().equals(' '),
                body('status', 'status cannot be empty string').optional().not().equals(''),
                /* ------------------- End Of type Validation ------------------- */
            ];
        }
        case 'getQuestionById': {
            return [
                /* ------------------- Schema Validation ------------------- */
                body(' ').custom((value, {req}) => {
                    const schemas: string[] = [];
                    if (validateSchema(schemas, req.body)) {
                        return true;
                    }
                }),
                /* ------------------- End Of Schema Validation ------------------- */

                /* ------------------- ID Validation ------------------- */
                param('id', 'id must be exists and be valid mongoID').exists().isMongoId(),
                /* ------------------- End of ID Validation ------------------- */


            ];
        }

        case 'deleteQuestionById': {
            return [
                /* ------------------- Schema Validation ------------------- */
                body(' ').custom((value, {req}) => {
                    const schemas: string[] = [];
                    if (validateSchema(schemas, req.body)) {
                        return true;
                    }
                }),
                /* ------------------- ID Validation ------------------- */
                param('id', 'id must be exists and be valid mongoID').exists().isMongoId(),
                /* ------------------- End of ID Validation ------------------- */
            ];
        }
        case 'putQuestionById': {
            return [
                /* ------------------- Schema Validation ------------------- */
                body(' ').custom((value, {req}) => {
                    const schemas: string[] = [];
                    if (validateSchema(schemas, req.body)) {
                        return true;
                    }
                }),
                /* ------------------- ID Validation ------------------- */
                param('id', 'id must be exists and be valid mongoID').exists().isMongoId(),
                /* ------------------- End of ID Validation ------------------- */

                /* ------------------- courseId Validation ------------------- */

                body('courseId', 'course id must exist and be of type String').optional().exists().isString(),
                body('courseId.length', 'courseId cannot be empty string').optional().not().equals('0 || 1'),
                /* ------------------- End Of courseId Validation ------------------- */


                /* ------------------- question Validation ------------------- */

                body('question', 'question  must exist and be of type String').optional().isString(),
                body('question', 'question cannot be empty string').optional().not().equals(' '),
                body('question', 'question cannot be empty string').optional().not().equals(''),
                /* ------------------- End Of question Validation ------------------- */

                /* ------------------- answer Validation ------------------- */
                body('answer', 'answer  must exist and be of type String').optional().isString(),
                body('answer', 'answer cannot be empty string').optional().not().equals(' '),
                body('answer', 'answer cannot be empty string').optional().not().equals(''),
                /* ------------------- End Of answer Validation ------------------- */

                /* ------------------- type Validation ------------------- */
                body('type', 'type  must exist and be of type String').optional().isString(),
                body('type', 'type cannot be empty string').optional().not().equals(' '),
                body('type', 'type cannot be empty string').optional().not().equals(''),
                /* ------------------- End Of type Validation ------------------- */

                /* ------------------- status Validation ------------------- */
                body('status', 'status  must exist and be of type String').optional().isString(),
                body('status', 'status cannot be empty string').optional().not().equals(' '),
                body('status', 'status cannot be empty string').optional().not().equals(''),
                /* ------------------- End Of type Validation ------------------- */
            ];
        }

    }
}


