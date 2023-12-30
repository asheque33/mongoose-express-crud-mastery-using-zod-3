import express from 'express';
import { courseController } from './Course.controller';
import validateRequest from '../../middlewares/validateRequest';
import { courseValidations } from './Course.validation';

const router = express.Router();

router.post(
  '/course',
  // validateRequest(courseValidations.createCourseValidationSchema),
  courseController.createCourse,
);
router.get('/courses', courseController.getAllCourses);
router.put(
  '/courses/:courseId',
  validateRequest(courseValidations.updateCourseValidationSchema),
  courseController.updateCourse,
);
router.get(
  '/courses/:courseId/reviews',
  courseController.getSingleCourseWithReviews,
);

export const courseRoutes = router;
