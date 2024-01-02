import express from 'express';
import { categoryController } from './category.controller';
import checkAuth from '../../middlewares/checkAuth';
import { USER_ROLE } from '../User/User.constant';

const router = express.Router();

router.post(
  '/categories',
  checkAuth(USER_ROLE.admin),
  categoryController.createCategory,
);
router.get('/categories', categoryController.getAllCategoriesData);

export const categoryRoutes = router;
