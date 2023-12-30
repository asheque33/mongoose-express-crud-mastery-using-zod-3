import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes/routes';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/', router);

const testing = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Localhost API!',
  });
};
app.get('/', testing);

console.log(process.cwd());

export default app;
