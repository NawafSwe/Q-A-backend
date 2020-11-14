"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate_schema_1 = require("../../utils/validate-schema");
exports.validate = (method) => {
    switch (method) {
        case 'getQuestions': {
            return [
                /* ------------------- Schema Validation ------------------- */
                express_validator_1.body(' ').custom((value, { req }) => {
                    const schemas = [];
                    if (validate_schema_1.validateSchema(schemas, req.body)) {
                        return true;
                    }
                }),
            ];
        }
    }
};
