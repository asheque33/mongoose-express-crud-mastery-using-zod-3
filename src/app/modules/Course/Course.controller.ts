import { courseServices } from './Course.service';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createCourse = catchAsync(async (req, res) => {
  const result = await courseServices.createCourseIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course created succesfully',
    data: result,
  });
});
//
const getAllCourses = catchAsync(async (req, res) => {
  const result = await courseServices.getCoursesFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses  retrieved successfully',
    // meta: {
    //   page: parseInt(page),
    //   limit: parseInt(limit),
    //   total: totalCount,
    // },
    // data: courses,
    // // });
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const result = await courseServices.updateCourseFromDB(courseId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course is updated succesfully',
    data: result,
  });
});
//
const getSingleCourseWithReviews = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const course =
    await courseServices.getASpecificCoursewithReviewsFromDB(courseId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course and Reviews retrieved succesfully',
    data: course,
  });
});

export const courseController = {
  createCourse,
  getAllCourses,
  updateCourse,
  getSingleCourseWithReviews,
};
