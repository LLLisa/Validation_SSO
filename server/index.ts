import express, { Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import { userRouter } from './user';

const app: express.Application = express();

const PORT: string = process.env.PORT || '3000';

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

//router routes go here-------------------------
app.use('/user', userRouter);

//default route-------------------------------
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`glistening on port ${PORT}`));
