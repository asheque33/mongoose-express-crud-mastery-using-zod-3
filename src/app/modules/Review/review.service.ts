import { IReview } from './review.interface';
import { Review } from './review.model';

const createReviewIntoDB = async (payLoad: IReview) => {
  const result = await Review.create(payLoad);
  return result;
};

export const reviewServices = {
  createReviewIntoDB,
};
