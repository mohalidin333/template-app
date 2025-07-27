import { Role } from "@/constants/role";
import z, { email, object, string } from "zod";

export const UsersSchema = object({
  firstName: string().min(3, "First Name at least 3 characters"),
  lastName: string().min(1, "Last Name at least 3 characters"),
  role: z.enum(["Admin", "User"], {
    error: "Role is required",
  }),
  email: email("Email is required"),
  password: string().min(6, "Password at least 6 characters "),
  confirmPassword: string().min(6, "Confirm Password at least 6 characters"),
});

export const EditUserSchema = object({
  firstName: string().min(3, "First Name at least 3 characters"),
  lastName: string().min(1, "Last Name at least 3 characters"),
  role: z.enum(["Admin", "User"], {
    error: "Role is required",
  }),
  email: email("Email is required"),
  password: string().refine(
    (value) => value === "" || value.length >= 6,
    "Password at least 6 characters"
  ),
  confirmPassword: string()
    .refine(
      (value) => value === "" || value.length >= 6,
      "Confirm Password at least 6 characters"
    )
    .optional(),
});

export const UsersDefaultValues = {
  firstName: "" as string,
  lastName: "" as string,
  role: "" as Role,
  email: "" as string,
  password: "" as string,
  confirmPassword: "" as string,
};

export const EditUserDefaultValues = {
  firstName: "",
  lastName: "",
  role: "",
  email: "",
  password: "",
  confirmPassword: "",
};
