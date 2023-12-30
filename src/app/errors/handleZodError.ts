import { ZodError } from 'zod';
import { IGenericErrorResponse } from '../interface/error';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errorMessage = error.issues[0]?.message;
  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid ID provided',
    errorMessage,
  };
};
export default handleZodError;
