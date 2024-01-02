import express from 'express';
import { courseController } from './Course.controller';
import validateRequest from '../../middlewares/validateRequest';
import { courseValidations } from './Course.validation';
import checkAuth from '../../middlewares/checkAuth';
import { USER_ROLE } from '../User/User.constant';

const router = express.Router();

router.post(
  '/course',
  checkAuth(USER_ROLE.admin),
  courseController.createCourse,
);
router.get('/courses', courseController.getAllCourses);
router.put(
  '/courses/:courseId',
  checkAuth(USER_ROLE.admin),
  courseController.updateCourse,
);
router.get(
  '/courses/:courseId/reviews',
  courseController.getSingleCourseWithReviews,
);

export const courseRoutes = router;
