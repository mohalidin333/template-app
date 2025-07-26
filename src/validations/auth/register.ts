import { email, object, string } from "zod";

export const RegisterSchema = object({
  firstName: string().min(3, "First Name at least 3 characters"),
  lastName: string().min(3, "Last Name at least 3 characters"),
  email: email("Email is required"),
  password: string().min(6, "Password at least 6 characters"),
});

export const RegisterDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
