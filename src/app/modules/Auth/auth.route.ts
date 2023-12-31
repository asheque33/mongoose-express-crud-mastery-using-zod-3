import express from 'express';
import { authController } from './auth.controller';
import { USER_ROLE } from '../User/User.constant';
import checkAuth from '../../middlewares/checkAuth';

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.patch(
  '/change-password',
  checkAuth(USER_ROLE.admin, USER_ROLE.user),
  authController.changePassword,
);
router.post('/refresh-token', authController.refreshToken);

export const authRoutes = router;
