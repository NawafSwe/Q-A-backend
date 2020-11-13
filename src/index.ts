// importing packages
import express = require('express');
import {Request, Response} from "express";
import bodyParser = require('body-parser');

/* ------------ Choosing Env ------------ */
if (process.env.NODE === 'production') {
    require('custom-env').env(process.env.NODE_ENV);
} else {
    require('dotenv').config();
}
//establish database connection
import {MONGO_URI} from "./configurations/config";
import {connect} from "./configurations/mongoConnection";

connect(MONGO_URI);


// Create a new express app instance
const app: express.Application = express();
//config app
app.use(bodyParser.json())
app.get('/', async (req: Request, res: Response) => {
    res.send('hi world');
});
//establish connection
import {PORT, HOST} from "./configurations/config";

app.listen(PORT);
console.log(`server running on  http://${HOST}:${PORT}`);
