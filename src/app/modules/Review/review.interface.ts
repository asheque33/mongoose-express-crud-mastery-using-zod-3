import { Types } from 'mongoose';

export type IReview = {
  courseId: Types.ObjectId;
  rating: number;
  review: string;
};
