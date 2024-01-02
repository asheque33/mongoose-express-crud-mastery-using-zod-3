/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './User.constant';

export type IUser = {
  _id: string;
  username: string;
  email: string;
  password: string;
  passwordChangedAt?: Date;
  role: string;
};

export interface UserModel extends Model<IUser> {
  //instance methods for checking if the user exist
  isUserExistsByBuiltInId(_id: string): Promise<IUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type IUserRole = keyof typeof USER_ROLE;
