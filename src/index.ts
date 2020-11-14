/* ------------ importing & requiring Packages ------------ */
import express = require('express');
import {Request, Response} from "express";
import bodyParser = require('body-parser');
import cors = require('cors');
import helmet = require('helmet');
import {connect} from "./configurations/mongo-connection";


/* ------------ Choosing Env ------------ */
if (process.env["NODE_ENV"] === 'production') {
    require('custom-env').env(process.env.NODE_ENV);
    console.log(`server running on ${process.env["NODE_ENV"]} mode`);
} else {
    require('dotenv').config();
    console.log(`server running on ${process.env["NODE_ENV"]} mode`);
}
/* ------------ Import Server Configuration and variables after choosing Node env ------------ */
const {PORT, HOST, MONGO_URI} = require("./configurations/config");
/* ------------ Connecting to db ------------ */
connect(MONGO_URI);
/* ------------ App Config ------------ */
const app: express.Application = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(express.static("docs"));

/* ------------ Testing Backend ------------ */

//will show the documentation page
app.get('/', async (req: Request, res: Response) => {
    res.send('Backend health is good').status(200);
});
/* ------------ importing Routes ------------ */
import {questionRoute} from './collections/questions/question-route';
app.use('/questions', questionRoute);

app.listen(PORT);
console.log(`server running on  http://${HOST}:${PORT}`);
