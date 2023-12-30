import { Query } from 'mongoose';
import { IQueryObject } from '../interface/iQueryObject';

export const filter = <T>(modelQuery: Query<T[], T>, query: IQueryObject) => {
  const queryObject = { ...query };
  // keywords for filtering
  const excludedCourses = [
    'page',
    'limit',
    'sortBy',
    'sortOrder',
    'fields',
    'minPrice',
    'maxPrice',
    'tags',
    'startDate',
    'endDate',
    'language',
    'provider',
    'durationInWeeks',
    'level',
  ];
  excludedCourses.forEach((element) => delete queryObject[element]);
  modelQuery = modelQuery.find(queryObject);
  return modelQuery;
};
