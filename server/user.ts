import express, { Router, Request, Response } from 'express';
export const userRouter: Router = express.Router();
import { mailTo, textTo } from './services';

userRouter.post('/email', async (req: Request, res: Response) => {
    try {
        await mailTo(req.body.email);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
});

userRouter.post('/text', async (req: Request, res: Response) => {
    try {
        await textTo(req.body.phoneNumber);
        res.send('hi');
    } catch (error) {
        console.log(error);
    }
});
