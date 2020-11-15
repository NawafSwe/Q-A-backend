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
    }
}

