import {Question} from "../models/Question";
import {IQuestion} from "../models/IQuestion";

export const getQuestions: () => Promise<IQuestion[] | undefined> = async () => {
    try {
        const response: IQuestion[] = await Question.find({});
        return response;
    } catch (error: any) {
        console.log(`error occurred in getQuestions() error: ${error}`);
    }
};

export const postQuestion: (question: IQuestion) => Promise<IQuestion | undefined> = async (question) => {
    try {
        const response: IQuestion = await Question.create(question);
        return response;
    } catch (error: any) {
        console.log(`error occurred in postQuestion() error: ${error}`);
    }
};
export const deleteQuestion: (id: string) => Promise<IQuestion | null | undefined> = async (id) => {
    try {
        //returns null if not exist , return Question if found and delete it
        const response: IQuestion | null = await Question.findByIdAndDelete(id);
        return response;
    } catch (error: any) {
        console.log(`error occurred in deleteQuestion() error: ${error}`);
    }
}
