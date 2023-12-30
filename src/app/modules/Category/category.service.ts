import { ICategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (payLoad: ICategory) => {
  const result = await Category.create(payLoad);
  return result;
};
const getAllCategoriesDataFromDB = async () => {
  const result = await Category.find();
  return result;
};

export const categoryServices = {
  createCategoryIntoDB,
  getAllCategoriesDataFromDB,
};
