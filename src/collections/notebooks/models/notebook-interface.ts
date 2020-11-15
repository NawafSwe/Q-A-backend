/**
 * @module NotebookInterface
 * @requires Document
 * @description this model holds the notebook interface
 */

/**
 * @type {import {Document} from "mongoose"}
 * @namespace Document
 * @description mongoose document to associate it with question interface
 */

import {Document} from "mongoose"

/**
 * @public
 * @extends Document
 * @namespace NotebookInterface
 * @description NotebookInterface Document that structure the data of notebook
 */
export interface NotebookInterface extends Document {
    /**
     * @public
     * @type {string}
     * @namespace courseId
     * @description which courseId does the question belongs to
     */

    courseId: string;
    /**
     * @public
     * @type {string}
     * @namespace type
     * @description type of the question
     */

    type: string;
    /**
     * @public
     * @type {string[] | undefined}
     * @namespace questionsId
     * @description answer for the question
     */
    questionsId?: string [];

};
