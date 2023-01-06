import twilio from 'twilio';
import * as dotenv from 'dotenv';
dotenv.config();

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUM, LISA_PHONE } = process.env;

const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export const textIt = () => {
    twilioClient.messages
        .create({
            body: 'testestestes',
            from: TWILIO_PHONE_NUM,
            to: LISA_PHONE || '',
        })
        .then((message) => console.log(message.sid));
};

export const textTo = async (to: string = LISA_PHONE || '', body: string = 'default message') => {
    twilioClient.messages
        .create({
            to,
            from: TWILIO_PHONE_NUM,
            body,
        })
        .then((message) => console.log(message.sid));
};
