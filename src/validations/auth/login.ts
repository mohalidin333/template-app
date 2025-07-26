import { email, object, string } from "zod";

export const LoginSchema = object({
  email: email("Email is required"),
  password: string().min(6, "Password at least 6 characters"),
});

export const LoginDefaultValues = {
  email: "",
  password: "",
};
