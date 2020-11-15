/**
 * @module srs/index.ts
 * this module requires the following packages
 * @requires {express,Request,Response}
 * @requires{bodyParser}
 * @requires {cors}
 * @requires{helmet}
 * @requires{connect}
 * @requires{questionRoute,notebookRoute}
 * @requires{PORT,HOST,MONGO_URI}
 * @description module to config express server
 */

/* ------------ importing & requiring Packages ------------ */
/**
 * @type {import {express} from "express"}
 * @namespace express
 * @description express application to route on question collection
 */

import express = require('express');

/**
 * @type {import {Request} from "express"}
 * @namespace Request
 * @description Request of express instance where it holds the requests information
 */

/**
 * @type {import {Response} from "express"}
 * @namespace Response
 * @description  Response of express instance where it holds the response information sent back by the server
 */

import {Request, Response} from "express";

/**
 * @type {import {bodyParser} from "body-parser"}
 * @namespace bodyParser
 * @description  body-parser to allow using json and parse body to json and send json objects
 */
import bodyParser = require('body-parser');

/**
 * @type {import {cors} from "cors"}
 * @namespace cors
 * @description  cors to allow requests,responses within an origin
 */
import cors = require('cors');

/**
 * @type {import {helmet} from "helmet"}
 * @namespace helmet
 * @description  helmet module to increase the security of the server by adding more info in the header of a request
 */
import helmet = require('helmet');
/**
 * @type{function(uri:string):VoidFunction}
 * @namespace connect
 * @description connect to database
 */
import {connect} from "./configurations/mongo-connection";
/**
 * @type {express.Router}
 * @namespace questionRoute
 * @description question router to route on questions collection
 */
import {questionRoute} from './collections/questions/question-route';

/**
 * @type {express.Router}
 * @namespace notebookRoute
 * @description notebook router to route on notebooks collection
 */
import {notebookRoute} from "./collections/notebooks/notebook-route";


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

/**
 * Route getting doc page of this project.
 * @name get/
 * @function
 * @memberOf module: src/index.ts~route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
app.get('/', async (req: Request, res: Response) => {
    res.send('Backend health is good').status(200);
});
/* ------------ Using Routes ------------ */
app.use('/questions', questionRoute);
app.use('/notebooks', notebookRoute);

app.listen(PORT);
console.log(`server running on  http://${HOST}:${PORT}`);
