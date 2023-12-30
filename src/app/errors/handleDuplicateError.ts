/* eslint-disable @typescript-eslint/no-explicit-any */

import { IGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (error: any): IGenericErrorResponse => {
  // Use match to find the first occurrence
  const match = error.message.match(/"([^"]*)"/);

  // Extract the captured group (the value within double quotes)
  const extractedMessage = match && match[1];
  const errorMessage = `${extractedMessage} is already exists!`;

  const statusCode = 400;
  return {
    statusCode,
    message: 'Duplicate key!',
    errorMessage,
  };
};
export default handleDuplicateError;
