import express from 'express';
import { authController } from './auth.controller';
// import { USER_ROLE } from '../User/User.constant';
// import checkAuth from '../../middlewares/checkAuth';
import validateRequest from '../../middlewares/validateRequest';
import { authValidationSchema } from './auth.validation';
import checkAuth from '../../middlewares/checkAuth';
import { USER_ROLE } from '../User/User.constant';

const router = express.Router();

router.post(
  '/auth/register',
  validateRequest(authValidationSchema.registerUserValidationSchema),
  authController.register,
);
router.post(
  '/auth/login',
  validateRequest(authValidationSchema.logInUserValidationSchema),
  authController.login,
);
router.post(
  '/auth/change-password',
  checkAuth(USER_ROLE.user, USER_ROLE.admin),
  // validateRequest(authValidationSchema.passwordChangeValidationSchema),
  authController.changePassword,
);
// router.post('/refresh-token', authController.refreshToken);

export const authRoutes = router;
