import express from 'express';
import { courseRoutes } from '../modules/Course/Course.route';
import { reviewRoutes } from '../modules/Review/review.route';
import { categoryRoutes } from '../modules/Category/category.route';
import { userRoutes } from '../modules/User/User.route';
import { authRoutes } from '../modules/Auth/auth.route';

const router = express.Router();

const allRoutes = [
  {
    path: '/api',
    route: authRoutes,
  },
  {
    path: '/api',
    route: userRoutes,
  },
  {
    path: '/api',
    route: courseRoutes,
  },
  {
    path: '/api',
    route: reviewRoutes,
  },
  {
    path: '/api',
    route: categoryRoutes,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
