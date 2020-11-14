import {validateSchema} from "../../utils/validate-schema";
import {body, param, ValidationChain} from "express-validator";

export const validate: (method: string) => void = (method) => {
    switch (method) {
        case 'getNotebooks': {
            return [
                body(' ')
                    .custom((value, {req}) => {
                        const schemas: string[] = [];
                        if (validateSchema(schemas, req.body)) {
                            return true;
                        }
                    }),
            ];
        }
    }
}

