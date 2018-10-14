import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import winston from 'winston';

dotenv.config();

const app = express();
const port = process.env.PORT || 3200;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  winston.info(`Connected on port: ${port}`);
});

export default app;