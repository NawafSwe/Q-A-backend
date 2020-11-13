import {Document} from "mongoose";
export interface IQuestion extends Document {
    courseId: string;
    question: string;
    answer: string;
    type: string;
    status: string;
};
