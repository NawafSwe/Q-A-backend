import {Question} from "../models/Question";
import {IQuestion} from "../models/IQuestion";

export const getQuestions: () => Promise<IQuestion[] | undefined> = async function () {
    try {
        const response: IQuestion[] = await Question.find({});
        return response;
    } catch (error: any) {
        console.log(`error occurred in getQuestions() error: ${error}`);
    }
};
