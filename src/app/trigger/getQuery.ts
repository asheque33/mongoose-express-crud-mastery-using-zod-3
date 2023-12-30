import { Query } from 'mongoose';
import { IQueryObject } from '../interface/iQueryObject';

import { filter } from './filterData';
import { sort } from './sortData';
import { paginate } from './paginateData';
import { select } from './selectedFieldsData';

export const getQuery = <T>(modelQuery: Query<T[], T>, query: IQueryObject) => {
  const filteredQuery = filter(modelQuery, query);
  const sortedQuery = sort(filteredQuery, query);
  const paginatedQuery = paginate(sortedQuery, query);
  const selectedQuery = select(paginatedQuery, query);
  return selectedQuery;
};
