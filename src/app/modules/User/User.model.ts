/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser } from './User.interface';
import { USER_ROLE } from './User.constant';
// import config from '../../config';
// import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: true,
  },
  email: { type: String, required: [true, 'email is required'], unique: true },
  password: {
    type: String,
    required: [true, 'password is required'],
    select: 0,
  },
  passwordChangedAt: {
    type: Date,
    default: null,
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLE), // ['user', 'admin']
    default: USER_ROLE.user,
  },
});

// userSchema.pre('save', async function (next) {
//   const user = this;
//   // hashing password and save into DB
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds),
//   );
//   next();
// });
// // post middleware hook will work after create() / save() data in database,but before response data.
// userSchema.post('save', function (updatedDoc, next) {
//   updatedDoc.password = '';
//   next();
// });

export const User = model<IUser>('User', userSchema);
