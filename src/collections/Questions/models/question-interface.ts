/**
 * @type {import {Document} from "mongoose"}
 * @namespace Document
 * @description mongoose document to associate it with question interface
 */
import {Document} from "mongoose";

/**
 * @public
 * @class
 * @extends Document
 * @namespace QuestionInterface
 * @description QuestionInterface Document that structure the data of question
 */
export interface QuestionInterface extends Document {
    /**
     * @public courseId
     * @type {string}
     * @namespace courseId
     * @description which courseId does the question belongs to
     */
    courseId: string;
    /**
     * @public question
     * @type {string}
     * @description question itself
     */
    question: string;
    /**
     * @public answer
     * @type {string | undefined}
     * @namespace answer
     * @description answer for the question
     */
    answer?: string;
    /**
     * @public type
     * @type {string}
     * @namespace type
     * @description type of the question
     */
    type: string;
    /**
     * @public status
     * @type {string}
     * @namespace status
     * @description status of the question
     */
    status: string;
};
