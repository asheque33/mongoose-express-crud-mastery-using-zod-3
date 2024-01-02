import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //  validation check
    // is everything ok , send next() to the controller
    await schema.parseAsync(req.body);
    next();
  });
};
export default validateRequest;
