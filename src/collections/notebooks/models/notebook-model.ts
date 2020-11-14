import {Model, model, Schema} from "mongoose";
import {NotebookInterface} from "./notebook-interface";

const notebookSchema = new Schema({
    courseId: {type: String, required: true},
    questionsId: {type: [], default: []},
    type: {type: String, required: true}

});
export const Notebook: Model<NotebookInterface> = model('Notebook', notebookSchema);
