import {QuestionModel} from "./models/question-model";
import {QuestionInterface} from "./models/question-interface";

export const getQuestions: () => Promise<QuestionInterface[] | undefined> | never = async () => {
    try {
        const response: QuestionInterface[] = await QuestionModel.find({});
        return response;
    } catch (error: any) {
        console.log(`error occurred in getQuestions() error: ${error}`);
    }
};

export const postQuestion: (question: QuestionInterface) => Promise<QuestionInterface | undefined> | never = async (question) => {
    try {
        const response: QuestionInterface = await QuestionModel.create(question);
        return response;
    } catch (error: any) {
        console.log(`error occurred in postQuestion() error: ${error}`);
    }
};
export const deleteQuestion: (id: string) => Promise<QuestionInterface | null | undefined> | never = async (id) => {
    try {
        //returns null if not exist , return QuestionModel if found and delete it
        const response: QuestionInterface | null = await QuestionModel.findByIdAndDelete(id);
        return response;
    } catch (error: any) {
        console.log(`error occurred in deleteQuestion() error: ${error}`);
    }
}
export const putQuestion: (id: string, question: QuestionInterface) => Promise<QuestionInterface | null | undefined> | never = async (id, question) => {
    try {
        const response: QuestionInterface | null | undefined = await QuestionModel.findByIdAndUpdate(id, question);
        return response;
    } catch (error: any) {
        console.log(`error occurred in putQuestion() error: ${error}`);
    }
}
