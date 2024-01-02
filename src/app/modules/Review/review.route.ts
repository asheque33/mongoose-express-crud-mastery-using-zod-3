import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { reviewValidations } from './review.validation';
import { reviewController } from './review.controller';
import checkAuth from '../../middlewares/checkAuth';
import { USER_ROLE } from '../User/User.constant';

const router = express.Router();

router.post(
  '/reviews',
  checkAuth(USER_ROLE.user),
  reviewController.createReview,
);

export const reviewRoutes = router;
