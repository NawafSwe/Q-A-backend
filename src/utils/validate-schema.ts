/**
 * since all the request must has validation schema a separate file created to check the schema of a request
 * @module utils/validate-schema
 */
import Request from "express";

/** @author Nawaf Alsharqi
 * @export
 * @function
 * @name validateSchema.
 * @param {string []}  schemas - list hold all the schema of a particular request.
 * @param {Request} request - request Object that holds the request body.
 * @returns {boolean} if there is no error.
 * @throws {Error} if there is an error.
 * @description validates the schema of a request.
 */
export const validateSchema: (schemas: string[], request: Request) => boolean | never = (schemas, request) => {
    //the purpose of the unRequiredSchemas is to add any key from the request body inside it;
    let unRequiredSchemas = [];

    //looping throw the object keys
    for (let [key, value] of Object.entries(request)) {
        //checking if the key is not in the schema
        if (!schemas.includes(key)) {
            //if there is error we push the key into the list
            unRequiredSchemas.push(key);
        }
    }
    //if there is an error throw with all unRequired schemas else return  by checking if the unRequiredSchemas length is zero;;
    if (unRequiredSchemas.length === 0) {
        return true;
    } else {
        throw new Error(`invalid queries [${unRequiredSchemas}] were included in the request`);
    }
}
