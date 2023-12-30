import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { reviewServices } from './review.service';

const createReview = catchAsync(async (req, res) => {
  const result = await reviewServices.createReviewIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review is created succesfully',
    data: result,
  });
});

export const reviewController = {
  createReview,
};
