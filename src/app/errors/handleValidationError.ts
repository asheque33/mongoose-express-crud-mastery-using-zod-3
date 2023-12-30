import mongoose from 'mongoose';
import { IGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errorMessage = error?.message;
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation error',
    errorMessage,
  };
};
export default handleValidationError;
