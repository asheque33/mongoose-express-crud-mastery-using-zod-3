import mongoose from 'mongoose';
import { IGenericErrorResponse } from '../interface/error';

const handleCastError = (
  error: mongoose.Error.CastError,
): IGenericErrorResponse => {
  const errorMessage = error?.message;
  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid ID ',
    errorMessage,
  };
};
export default handleCastError;
