import { IUser } from '../User/User.interface';

export interface IRegister extends Omit<IUser, 'passwordChangedAt'> {}
// export interface ILogin extends Omit<IRegister, 'role' | 'passwordChangedAt'> {}

export interface ILogin {
  _id: string;
  username: string;
  password: string;
}
