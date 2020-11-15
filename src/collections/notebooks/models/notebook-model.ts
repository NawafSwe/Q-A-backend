/**
 * @module Notebook
 * @requires {Schema,Model,model}
 * @requires NotebookInterface
 * @description this model builds the question collection model
 */


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
 * @type {import {NotebookInterface} from"./notebook-interface" }
 * @namespace NotebookInterface
 * @description Notebook interface needed to specify the type of mongoose document
 */
import {NotebookInterface} from "./notebook-interface";

/**
 * @type {Schema}
 * @namespace notebookSchema
 * @description notebook schema which contains the data 'tables'
 */

const notebookSchema = new Schema({
    //courseId : note book course id
    courseId: {type: String, required: true},
    //questionsId: questions in the notebook
    questionsId: {type: [], default: []},
    //type: type of the notebook
    type: {type: String, required: true}

});

/**
 * @type {Model<NotebookInterface>}
 * @namespace NotebookModel
 * @description notebook model mongoose model which have all functions to operate CURD operations
 */
export const NotebookModel: Model<NotebookInterface> = model<NotebookInterface>('Notebook', notebookSchema);
