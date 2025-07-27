import { format } from "date-fns";

export const FormatDate = (date: string | Date) => {
  if (date) {
    return format(new Date(date), "yyyy-MM-dd");
  }

  return "";
};
