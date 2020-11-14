import {Document} from "mongoose"

export interface NotebookInterface extends Document {
    courseId: string;
    type: string;
    questionsId?: string [];

};
