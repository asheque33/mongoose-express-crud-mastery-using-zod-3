import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import userValidationSchema from './User.validation';
import { userController } from './User.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(userValidationSchema),
  userController.createUser,
);
export const userRoutes = router;
