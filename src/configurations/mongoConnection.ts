import Mongoose from "mongoose";
let database: Mongoose.Connection;

export const connect = async (uri: string) => {
    try {
        if (database) {
            return;
        }
        await Mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        database = Mongoose.connection;
        await database.once("open", async () => {
            console.log("Connected to database");
        });
        await database.on("error", async () => {
            console.log("Error connecting to database");
        });


        console.log(`successfully connected to the database`);
    } catch (error) {
        console.log(`error occurred while trying to connect to mongodb error: ${error}`);
    }
};
