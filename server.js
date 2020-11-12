import express from 'express';
import { PORT } from './API/constants/index.js';
import user from './API/routes/user/user.js';
import poll from './API/routes/poll/poll.js';
import 'dotenv/config.js';

const app = express();

app.use(express.json());
app.use(`${process.env.BASEURL}/user`, user);
app.use(express.json());
app.use(`${process.env.BASEURL}/poll`, poll);

app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);