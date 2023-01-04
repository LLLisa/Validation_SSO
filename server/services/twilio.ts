import twilio from 'twilio';
import * as dotenv from 'dotenv';
dotenv.config();

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUM } = process.env;

const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export const textIt = () => {
    twilioClient.messages
        .create({
            body: 'testestestes',
            from: TWILIO_PHONE_NUM,
            to: '+16468585409',
        })
        .then((message) => console.log(message.sid));
};

export const textTo = async (to: string = '+16468585409', body: string) => {
    twilioClient.messages.create({
        to,
        from: TWILIO_PHONE_NUM,
        body,
    });
};
