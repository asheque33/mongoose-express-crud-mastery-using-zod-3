import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { categoryServices } from './category.service';

const createCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.createCategoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category is created succesfully',
    data: result,
  });
});
const getAllCategoriesData = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategoriesDataFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved succesfully',
    data: result,
  });
});

export const categoryController = {
  createCategory,
  getAllCategoriesData,
};
