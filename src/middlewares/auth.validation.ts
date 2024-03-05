import { NextFunction, Request, Response } from 'express';



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function isAuth(err: Error, req: Request, res: Response<any>, next: NextFunction) {
    
  console.log('Authorized router')

  next();
}