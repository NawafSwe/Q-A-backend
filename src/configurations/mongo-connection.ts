/**
 * @type {Mongoose}
 * @namespace Mongoose
 * @description mongoose module to establish connection to a database
 */
import Mongoose from "mongoose";

/**
 * @author Nawaf Alsharqi
 * @async
 * @function
 * @namespace connect
 * @param {string} uri
 * @returns {VoidFunction} | never
 * @throws {Error} it my throw an error during connecting to database
 * @description establish connection between server and database
 */
export const connect: (uri: string) => void | never = async function (uri: string) {
    try {
        await Mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log(`successfully connected to the database`);
    } catch (error) {
        console.log(`error occurred while trying to connect to mongodb error: ${error}`);
    }
};
