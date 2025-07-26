import { format } from "date-fns";

export const FormatDate = (date: string | Date) => {
  return format(new Date(date), "yyyy-MM-dd");
};