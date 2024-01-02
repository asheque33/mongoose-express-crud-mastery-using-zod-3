import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload, decode } from 'jsonwebtoken';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/appError';
import httpStatus from 'http-status';
import { IUserRole } from '../modules/User/User.interface';
import config from '../config';

const checkAuth = (...roles: IUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log(token, 'token console');
    console.log(req.headers['Authorization']);
    // checking if the token is sent from the client or not
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }
    // check if the token is sent from the authorization server
    jwt.verify(token, config.jwt_access_token, function (err, decoded) {
      if (err) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'unAuthorized token sent');
      }
      const role = (decode as JwtPayload).role;
      if (roles && !roles.includes(role)) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'unAuthorized token sent');
      }
      req.user = decoded as JwtPayload;
      next();
    });
  });
};
export default checkAuth;
