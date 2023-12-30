import { Query } from 'mongoose';
import { IQueryObject } from '../interface/iQueryObject';

export const select = <T>(modelQuery: Query<T[], T>, query: IQueryObject) => {
  if (query.fields) {
    const fields = query.fields.split(',').join(' ');
    console.log(fields, 'fields');
    modelQuery.select(fields);
  }

  return modelQuery;
};
