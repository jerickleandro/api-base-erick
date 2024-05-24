
import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import base from './routes/baseRouter';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    console.log('Olá, mundo!');
    res.send("Olá, mundo!");
});

app.use("/base", base);

export default app;
