/**
 * this controller requires the following packages
 * @requires QuestionModel
 * @requires QuestionInterface
 */

/**
 * @type {import {QuestionModel} from"./question-model" }
 * @namespace QuestionModel
 * @description Question model that have all the functions related to database operations
 */
import {QuestionModel} from "./models/question-model";

/**
 * @type {import {QuestionInterface} from"./question-interface" }
 * @namespace QuestionInterface
 * @description Question interface needed to specify the type of mongoose document
 */
import {QuestionInterface} from "./models/question-interface";

/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @name getQuestions
 * @returns Promise<QuestionInterface[] | undefined | null> | never
 * @throws {Error} it may throws an error during processing
 * @description getting all questions from database
 */
export const getQuestions: () => Promise<QuestionInterface[] | undefined | null> | never = async () => {
    try {
        const response: QuestionInterface[] = await QuestionModel.find({});
        return response;
    } catch (error: any) {
        console.log(`error occurred in getQuestions() error: ${error}`);
    }
};
/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @name getQuestionById
 * @param {string} id of question
 * @returns Promise<QuestionInterface | undefined | null> | never
 * @throws {Error} throws an error if there is an error
 * @description getting question by id
 */
export const getQuestionById: (id: string) => Promise<QuestionInterface | undefined | null> = async (id) => {
    try {
        const response: QuestionInterface | undefined | null = await QuestionModel.findById(id);
        return response;
    } catch (error: any) {
        console.log(`error occurred in getQuestionById error: ${error}`)
    }
}

/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @name postQuestion
 * @param {QuestionInterface} question that holds the question data
 * @returns Promise<QuestionInterface | undefined | null> | never
 * @throws {Error} it may throws an error during the processing if there is something wrong
 * @description posting new question to database
 */
export const postQuestion: (question: QuestionInterface) => Promise<QuestionInterface | undefined | null> | never = async (question) => {
    try {
        const response: QuestionInterface = await QuestionModel.create(question);
        return response;
    } catch (error: any) {
        console.log(`error occurred in postQuestion() error: ${error}`);
    }
};
/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @name deleteQuestion
 * @param {string} id
 * @returns Promise<QuestionInterface | null | undefined> | never
 * @throws {Error} it may throws an error during the processing if there is an error
 * @description deleting question from the database by id
 */
export const deleteQuestion: (id: string) => Promise<QuestionInterface | null | undefined> | never = async (id) => {
    try {
        //returns null if not exist , return QuestionModel if found and delete it
        const response: QuestionInterface | null = await QuestionModel.findByIdAndDelete(id);
        return response;
    } catch (error: any) {
        console.log(`error occurred in deleteQuestion() error: ${error}`);
    }
}
/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @name putQuestion
 * @param {string} id
 * @param {QuestionInterface} question
 * @returns  Promise<QuestionInterface | null | undefined> | never
 * @throws {Error} throws an error if there is an error during the process
 * @description update question data by id
 */
export const putQuestion: (id: string, question: QuestionInterface) => Promise<QuestionInterface | null | undefined> | never = async (id, question) => {
    try {
        const response: QuestionInterface | null | undefined = await QuestionModel.findByIdAndUpdate(id, question);
        return response;
    } catch (error: any) {
        console.log(`error occurred in putQuestion() error: ${error}`);
    }
}
