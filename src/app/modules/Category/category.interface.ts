import { Types } from 'mongoose';

export type ICategory = {
  name: string;
  createdBy: Types.ObjectId;
};
