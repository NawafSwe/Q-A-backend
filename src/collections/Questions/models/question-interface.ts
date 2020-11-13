import {Document} from "mongoose";
export interface QuestionInterface extends Document {
    courseId: string;
    question: string;
    answer: string;
    type: string;
    status: string;
};
