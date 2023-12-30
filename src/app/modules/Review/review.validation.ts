import { z } from 'zod';

export const createReviewValidationSchema = z.object({
  courseId: z.string(),
  rating: z
    .number()
    .positive()
    .min(1)
    .max(5, { message: 'Rating must be between 1 and 5' }),
  review: z.string(),
});

export const reviewValidations = {
  createReviewValidationSchema,
};
