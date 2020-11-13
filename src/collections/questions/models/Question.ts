import {Model, model, Schema} from "mongoose";
import {IQuestion} from "./IQuestion";

const questionSchema: Schema = new Schema({
    courseId: {type: String, required: true},
    question: {type: String, required: true},
    answer: {type: String},
    type: {type: String, required: true},
    status: {type: String, default: 'not Completed'},
});
export const Question: Model<IQuestion> = model<IQuestion>('Question', questionSchema);
