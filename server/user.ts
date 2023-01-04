import express, { Router, Request, Response } from 'express';
export const userRouter: Router = express.Router();

userRouter.get('/email', (req: Request, res: Response) => {
    console.log('email route');
    res.send('hi');
});
