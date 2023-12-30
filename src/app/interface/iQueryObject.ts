export type IQueryObject = {
  [key: string]: unknown;
  page?: string;
  limit?: string;
  sortBy?: string;
  sortOrder?: string;
  fields?: string;
  minPrice?: string;
  maxPrice?: string;
  tags?: string;
  starDate?: string;
  endDate?: string;
  language?: string;
  provider?: string;
  durationInWeeks?: string;
  level?: string;
};
