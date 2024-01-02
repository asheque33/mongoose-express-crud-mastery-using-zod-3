import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from '../User/User.model';
import { ILogin, IRegister } from './auth.interface';
import { createToken } from './auth.utils';
import config from '../../config';
import { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const registerUserIntoDB = async (payLoad: IRegister) => {
  const result = await User.create(payLoad);
  console.log(result);
  return result;
};
const loginUserIntoDB = async (payLoad: ILogin) => {
  // checking if the user is exist
  const user = await User.isUserExistsByBuiltInId(payLoad.username);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  //   checking if the password is correct
  if (!(await User.isPasswordMatched(payLoad?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  //create token and sent to the  client
  const jwtPayload = {
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_token,
    config.jwt_token_expiration,
  );

  //   const refreshToken = createToken(
  //     jwtPayload,
  //     config.jwt_refresh_token,
  //     config.jwt_refresh_expiration,
  //   );

  return {
    username: user?.username,
    email: user?.email,
    role: user?.role,
    token: accessToken,
  };
};
// To change password
const changePassword = async (
  userData: JwtPayload,
  payload: { currentPassword: string; newPassword: string },
) => {
  // checking if the user is exist
  const user = await User.isUserExistsByBuiltInId(userData._id);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  //checking if the password is correct

  if (!(await User.isPasswordMatched(payload.currentPassword, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //hash new password
  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds),
  );

  await User.findOneAndUpdate(
    {
      userId: userData._id,
      role: userData.role,
    },
    {
      password: newHashedPassword,
      passwordChangedAt: new Date(),
    },
  );

  return null;
};

export const authServices = {
  registerUserIntoDB,
  loginUserIntoDB,
  changePassword,
  //   refreshToken,
};
