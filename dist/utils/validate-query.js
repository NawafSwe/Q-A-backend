"use strict";
/**
 * since all the request must has validation schema a separate file created to check the schema of a request
 * @module utils/validate-query
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuery = void 0;
/** @author Nawaf Alsharqi
 * @export
 * @function
 * @name validateQuery.
 * @param {string[]}  queries - list hold all the schema of a particular request.
 * @param {Request} request - request Object that holds the request query.
 * @returns {boolean} if there is no error.
 * @throws {Error} if there is an error.
 * @description validates the query of a request url
 */
exports.validateQuery = (queries, request) => {
    //the purpose of the unRequiredSchemas is to add any key from the request body inside it;
    let unRequiredQueries = [];
    //looping throw the object keys
    for (let [key, value] of Object.entries(request.query)) {
        //checking if the key is not in the schema
        if (!queries.includes(key)) {
            //if there is error we push the key into the list
            unRequiredQueries.push(key);
        }
    }
    //if there is an error throw with all unRequired schemas else return  by checking if the unRequiredSchemas length is zero;;
    if (unRequiredQueries.length === 0) {
        return true;
    }
    else {
        throw new Error(`invalid queries [${unRequiredQueries}] were included in the request`);
    }
};
