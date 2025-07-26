import { email, object } from "zod";

export const ForgotSchema = object({
  email: email("Email is required"),
});

export const ForgotDefaultValues = {
  email: "",
};
