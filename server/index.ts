import express, { Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import { userRouter } from './user';

const app: express.Application = express();

const PORT: string = process.env.PORT || '3000';

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

//router routes go here
app.use('/user', userRouter);

//nodemailer
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'justsingedthings@gmail.com',
        pass: 'sunrnqlbwvgybtxf',
    },
});

const mailConfig = {
    from: 'justsingedthings@gmail.com',
    to: 'lisaknox83@gmail.com',
    subject: 'tets',
    text: 'maybe works?',
};

transporter.sendMail(mailConfig, (err, info) => {
    if (err) throw Error(err.message);
    console.log('emaoil sent');
    console.log(info);
});

//default route-------------------------------
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`glistening on port ${PORT}`));
