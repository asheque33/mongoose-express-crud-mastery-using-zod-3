import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { categoryController } from './category.controller';
import categoryValidationSchema from './category.validation';

const router = express.Router();

router.post(
  '/categories',
  validateRequest(categoryValidationSchema),
  categoryController.createCategory,
);
router.get('/categories', categoryController.getAllCategoriesData);

export const categoryRoutes = router;
