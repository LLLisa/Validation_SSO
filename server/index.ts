import express, { Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import { userRouter } from './user';

const app: express.Application = express();

const PORT: string = process.env.PORT || '3000';

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

//router routes go here-------------------------
app.use('/user', userRouter);

//dotenv
import * as dotenv from 'dotenv';
dotenv.config();

//nodemailer------------------------------------
import nodemailer from 'nodemailer';
const { GMAIL_AUTH_USER, GMAIL_AUTH_PASS, GMAIL_FROM_ADDRESS } = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_AUTH_USER,
        pass: GMAIL_AUTH_PASS,
    },
});

const mailConfig = {
    from: GMAIL_FROM_ADDRESS,
    to: 'lisaknox83@gmail.com',
    subject: 'tets',
    text: 'maybe works?',
};

// transporter.sendMail(mailConfig, (err, info) => {
//     if (err) throw Error(err.message);
//     console.log('emaoil sent');
//     console.log(info);
// });

//twilio-----------------------------------
import twilio from 'twilio';
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUM } = process.env;
const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// twilioClient.messages
//     .create({
//         body: 'testestestes',
//         from: TWILIO_PHONE_NUM,
//         to: '+16468585409',
//     })
//     .then((message) => console.log(message.sid));

//default route-------------------------------
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`glistening on port ${PORT}`));
