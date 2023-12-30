import { Query } from 'mongoose';
import { IQueryObject } from '../interface/iQueryObject';

export const sort = <T>(modelQuery: Query<T[], T>, query: IQueryObject) => {
  if (query.sortBy && query.sortOrder) {
    const sortBy = query.sortBy; //"title" | "price" | "startDate" | "endDate"| "language" | "durationInWeeks"
    const sortOrder = query.sortOrder; //"asc" | "desc"
    const sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
    modelQuery.sort(sortStr);
  }

  return modelQuery;
};
