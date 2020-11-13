import {Model, model, Schema} from "mongoose";
import {QuestionInterface} from "./question-interface";

const questionSchema: Schema = new Schema({
    courseId: {type: String, required: true},
    question: {type: String, required: true},
    answer: {type: String},
    type: {type: String, required: true},
    status: {type: String, default: 'not Completed'},
});
export const QuestionModel: Model<QuestionInterface> = model<QuestionInterface>('QuestionModel', questionSchema);
