import Mongoose from "mongoose";

export const connect = async (uri: string) => {
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
