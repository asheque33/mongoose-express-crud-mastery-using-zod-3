import { IQueryObject } from '../../interface/iQueryObject';
import { getQuery } from '../../trigger/getQuery';
import { Review } from '../Review/review.model';
import { ICourse } from './Course.interface';
import { Course } from './Course.model';

// create a new Course into the database
const createCourseIntoDB = async (payLoad: ICourse) => {
  const result = await Course.create(payLoad);
  return result;
};
// get all courses in the database through the pagination & filtering
const getCoursesFromDB = async (query: IQueryObject) => {
  const result = await getQuery(Course.find(), query);

  return result;
};

// update the courses primitive & non-primitive fields in the db
const updateCourseFromDB = async (id: string, payLoad: Partial<ICourse>) => {
  const { details, ...remainingCourseData } = payLoad;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingCourseData,
  };

  if (details && Object.keys(details).length) {
    for (const [key, value] of Object.entries(details)) {
      modifiedUpdatedData[`details.${key}`] = value;
    }
  }
  console.log(modifiedUpdatedData);

  const result = await Course.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};
// get course by Id with reviews
const getASpecificCoursewithReviewsFromDB = async (courseId: string) => {
  const course = await Course.findById(courseId);
  const reviews = await Review.find({ courseId });
  return { course, reviews };
};

export const courseServices = {
  createCourseIntoDB,
  getCoursesFromDB,
  getASpecificCoursewithReviewsFromDB,
  updateCourseFromDB,
};
