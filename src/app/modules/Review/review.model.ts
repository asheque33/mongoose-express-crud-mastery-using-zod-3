import { Schema, model } from 'mongoose';
import { IReview } from './review.interface';

const reviewSchema = new Schema<IReview>({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  rating: { type: Number, required: [true, 'Rating is required'] },
  review: { type: String, required: [true, 'Review is required'] },
});

export const Review = model<IReview>('Review', reviewSchema);
