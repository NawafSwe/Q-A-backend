/* ------------ importing & requiring Packages ------------ */
import express = require('express');
import {Request, Response} from "express";
import bodyParser = require('body-parser');
import cors = require('cors');
import helmet = require('helmet');
import {MONGO_URI} from "./configurations/config";
import {connect} from "./configurations/mongoConnection";

/* ------------ Choosing Env ------------ */
if (process.env.NODE === 'production') {
    require('custom-env').env(process.env.NODE_ENV);
} else {
    require('dotenv').config();
}
/* ------------ Connecting to db ------------ */
connect(MONGO_URI);

/* ------------ App Config ------------ */
const app: express.Application = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

/* ------------ Testing Backend ------------ */


app.get('/', async (req: Request, res: Response) => {
    res.send('hi world').status(200);
});

/* ------------ Establish Server Connection ------------ */
import {PORT, HOST} from "./configurations/config";

app.listen(PORT);
console.log(`server running on  http://${HOST}:${PORT}`);
