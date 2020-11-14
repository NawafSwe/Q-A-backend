"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* ------------ importing & requiring Packages ------------ */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const mongo_connection_1 = require("./configurations/mongo-connection");
/* ------------ Choosing Env ------------ */
if (process.env["NODE_ENV"] === 'production') {
    require('custom-env').env(process.env.NODE_ENV);
    console.log(`server running on ${process.env["NODE_ENV"]} mode`);
}
else {
    require('dotenv').config();
    console.log(`server running on ${process.env["NODE_ENV"]} mode`);
}
/* ------------ Import Server Configuration and variables after choosing Node env ------------ */
const { PORT, HOST, MONGO_URI } = require("./configurations/config");
/* ------------ Connecting to db ------------ */
mongo_connection_1.connect(MONGO_URI);
/* ------------ App Config ------------ */
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(express.static("docs"));
/* ------------ Testing Backend ------------ */
//will show the documentation page
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Backend health is good').status(200);
}));
/* ------------ importing Routes ------------ */
const question_route_1 = require("./collections/questions/question-route");
app.use('/questions', question_route_1.questionRoute);
app.listen(PORT);
console.log(`server running on  http://${HOST}:${PORT}`);
