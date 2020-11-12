import express from 'express';
import { PORT } from './API/constants/index.js';

import 'dotenv/config.js';

const app = express();

app.use(express.json());

app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);