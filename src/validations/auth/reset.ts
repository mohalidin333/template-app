import { object, string } from "zod";

export const ResetSchema = object({
  password: string().min(6, "Password at least 6 characters"),
  confirmPassword: string().min(6, "Confirm Password at least 6 characters"),
});

export const ResetDefaultValues = {
  password: "",
  confirmPassword: "",
};
