/**
 * @type {import {Model} from "mongoose"}
 * @namespace Model
 * @description mongoose Model to create a questionModel instance to operate CURD operations
 */

/**
 * @type {import {model} from "mongoose"}
 * @namespace model
 * @description mongoose model to specify which type of the mongoose document
 */

/**
 * @type {import {Schema} from "mongoose"}
 * @namespace Schema
 * @description mongoose Schema to create the structure schema of question model
 */
import {Model, model, Schema} from "mongoose";

/**
 * @type {import {QuestionInterface} from"./question-interface" }
 * @namespace QuestionInterface
 * @description Question interface needed to specify the type of mongoose document
 */
import {QuestionInterface} from "./question-interface";

/**
 * @type {Schema}
 * @namespace questionSchema
 * @description question schema which contains the data 'tables'
 */
const questionSchema: Schema = new Schema({
    //courseId: course id
    courseId: {type: String, required: true},
    //question: question
    question: {type: String, required: true},
    //answer: answer of question
    answer: {type: String},
    //type: type of question
    type: {type: String, required: true},
    //status: status of question
    status: {type: String, default: 'not Completed'},
});
/**
 * @type {Model<QuestionInterface>}
 * @namespace QuestionModel
 * @description question model mongoose model which have all functions to operate CURD operations
 */
export const QuestionModel: Model<QuestionInterface> = model<QuestionInterface>('Question', questionSchema);
