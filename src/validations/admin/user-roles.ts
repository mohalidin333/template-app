import z, { email, object, string } from "zod";

export const UserRolesSchema = object({
  role: string().min(3, "Role at least 3 characters"),
});

export const UserRolesDefaultValues = {
  role: ""
};
