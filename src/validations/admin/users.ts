import z, { email, object, string } from "zod";
import { Role } from "@/constants/role";

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

export const UsersDefaultValues = {
  firstName: "",
  lastName: "",
  role: "" as Role,
  email: "",
  password: "",
  confirmPassword: "",
};
