import { object, string } from "zod";

export const ProfileSchema = object({
  firstName: string().min(3, "First Name at least 3 characters"),
  lastName: string().min(3, "Last Name at least 3 characters"),
  password: string().refine(
    (value) => value === "" || value.length >= 6,
    "Password at least 6 characters"
  ),
  confirmPassword: string().refine(
    (value) => value === "" || value.length >= 6,
    "Confirm Password at least 6 characters"
  ),
});

export const ProfileDefaultValues = {
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};
