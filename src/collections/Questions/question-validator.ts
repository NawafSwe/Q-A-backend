import {body, param} from 'express-validator';
import {validateSchema} from '../../utils/validate-schema';

export const validate: (method: string) => void | never = (method) => {
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
            ];
        }
    }
}
