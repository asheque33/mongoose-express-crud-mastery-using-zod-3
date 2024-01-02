import { z } from 'zod';

const registerUserValidationSchema = z.object({
  username: z.string({ required_error: 'username is required' }),
  email: z.string({ required_error: 'email is required' }),
  password: z.string({ required_error: 'password is required' }),
});

const logInUserValidationSchema = z.object({
  username: z.string({ required_error: 'username is required' }),
  password: z.string({ required_error: 'password is required' }),
});
const passwordChangeValidationSchema = z.object({
  currentPassword: z.string({ required_error: 'old password is required' }),
  newPassword: z.string({ required_error: 'new password is required' }),
});

export const authValidationSchema = {
  registerUserValidationSchema,
  logInUserValidationSchema,
  passwordChangeValidationSchema,
};
