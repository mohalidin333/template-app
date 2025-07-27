import { FormatDate } from "./format-date";

type FilterDateParams<T> = {
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
  data: T[];
  dateField: keyof T;
};

export const FilterDate = <T extends Record<string, unknown>>({
  dateFrom,
  dateTo,
  data,
  dateField,
}: FilterDateParams<T>): T[] => {
  if (!dateFrom || !dateTo) {
    return data;
  }

  const from = FormatDate(dateFrom);
  const to = FormatDate(dateTo);

  return data.filter((item) => {
    const dateValue = item[dateField];
    if (!dateValue) return false;
    
    const itemDate = FormatDate(new Date(dateValue as string));
    return itemDate >= from && itemDate <= to;
  });
};