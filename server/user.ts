import express, { Router, Request, Response } from 'express';
export const userRouter: Router = express.Router();
import { mailTo } from './services/nodemailer';

userRouter.post('/email', async (req: Request, res: Response) => {
    try {
        await mailTo(req.body.email);
        res.send('hi');
    } catch (error) {
        console.log(error);
    }
});
