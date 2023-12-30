import { Schema, model } from 'mongoose';
import { ICourse, IDetails, ITags } from './Course.interface';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';

const tagsSchema = new Schema<ITags>({
  name: { type: String, required: [true, 'Name is required'] },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
const detailsSchema = new Schema<IDetails>({
  level: {
    type: String,
    enum: {
      values: ['Beginner', 'Intermediate', 'Advanced'],
      message: '{VALUE} is not a valid level',
    },
  },
  description: { type: String, required: [true, 'Description is required'] },
});

const courseSchema = new Schema<ICourse>({
  title: { type: String, unique: true, required: [true, 'title is required'] },
  instructor: { type: String, required: [true, 'instructor is required'] },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'categoryId is required'],
  },
  price: { type: Number, required: [true, 'price is required'] },
  tags: [tagsSchema],
  startDate: { type: String, required: [true, 'startData is required'] },
  endDate: { type: String, required: [true, 'endData is required'] },
  language: { type: String, required: [true, 'Language is required'] },
  provider: { type: String, required: [true, 'provider is  required'] },
  durationInWeeks: {
    type: Number,
    required: [true, 'durationInWeeks is required'],
  },
  details: detailsSchema,
});

courseSchema.pre('save', async function (next) {
  const isCourseExist = await Course.findOne({
    title: this.title,
  });

  if (isCourseExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Course is already exist!');
  }

  next();
});

export const Course = model<ICourse>('Course', courseSchema);
