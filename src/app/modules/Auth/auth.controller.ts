/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { authServices } from './auth.service';
import sendResponse from '../../utils/sendResponse';
import { config } from 'dotenv';





const register = catchAsync(async (req: Request, res: Response) => {
  const result = await authServices.register(req.body);

  sendResponse(res, {
    success:true,
    statusCode: 201,
    message: 'User registered successfully',
    data: result,
  });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const { accessToken, refreshToken } = await authServices.login(req.body);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: config.node_env === 'production',
  });

  sendResponse(res, {
    success:true,
    statusCode: 200,
    message: 'User logged in successfully',
    data: { accessToken },
  });
});

const changePassword = catchAsync(
  async (req: Request, res: Response) => {

    const decodedToken = req.user;
    const result = await authServices.changePassword(decodedToken, req.body);

    sendResponse(res, {
        success:true,
      statusCode: 200,
      message: 'Password changed successfully',
      data: result,
    });
  },
);

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    throw new Error('Invalid token');
  }
  const result = await authServices.refreshToken(refreshToken);

  sendResponse(res, {
    success:true,
    statusCode: 200,
    message: 'Token refreshed successfully',
    data: result,
  });
});

export const authController = {
  register,
  login,
  changePassword,
  refreshToken,
};
