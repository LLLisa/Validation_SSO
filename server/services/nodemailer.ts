import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

const { GMAIL_AUTH_USER, GMAIL_AUTH_PASS, GMAIL_FROM_ADDRESS } = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_AUTH_USER,
        pass: GMAIL_AUTH_PASS,
    },
});

// const mailConfig = {
//     from: GMAIL_FROM_ADDRESS,
//     to: 'lisaknox83@gmail.com',
//     subject: 'tets',
//     text: 'maybe works?',
// };

// export const mailIt = () => {
//     transporter.sendMail(mailConfig, (err, info) => {
//         if (err) throw Error(err.message);
//         console.log('emaoil sent');
//         console.log(info);
//     });
// };

type EmailType = {
    subject: string;
    body: string;
};

const defaultEmail: EmailType = {
    subject: 'default subject value',
    body: 'default body content',
};

export const mailTo = (address: string, content: EmailType = defaultEmail) => {
    transporter.sendMail({ from: GMAIL_FROM_ADDRESS, to: address, ...content }, (err, info) => {
        if (err) throw Error(err.message);
        // console.log(info);
    });
};
