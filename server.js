import express from 'express';
import { PORT } from './API/constants/index.js';
import user from './API/routes/user/user.js';
import poll from './API/routes/poll/poll.js';
import 'dotenv/config.js';
import connectDatabase from './API/config/db.js';
import bodyParser from 'body-parser';
import pino from 'express-pino-logger';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use(`${process.env.BASEURL}/poll`, poll);
app.use(`${process.env.BASEURL}/signup`, user);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

connectDatabase();

app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);