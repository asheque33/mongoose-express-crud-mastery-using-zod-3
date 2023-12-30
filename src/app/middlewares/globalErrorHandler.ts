/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Response, Request, NextFunction, ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import config from '../config';
import handleZodError from '../errors/handleZodError';

import handleCastError from '../errors/handleCastError';
import handleDuplicateError from '../errors/handleDuplicateError';
import handleValidationError from '../errors/handleValidationError';
import AppError from '../errors/appError';

// Only for express application development
const globalErrorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  next,
) => {
  // default error handler
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessage = error?.message;

  // customize error handler with zod error for Validation
  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorMessage = simplifiedError?.errorMessage;
  } else if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorMessage = simplifiedError?.errorMessage;
  } else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorMessage = simplifiedError?.errorMessage;
  } else if (error?.code === 11000) {
    const simplifiedError = handleDuplicateError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorMessage = simplifiedError?.errorMessage;
  } else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessage = error?.message;
  } else if (error instanceof Error) {
    message = error.message;
    errorMessage = error?.message;
  }

  // ultimate return value
  return response.status(statusCode).json({
    success: false,
    message: message,
    errorMessage,
    errorDetails: error,
  });
};
