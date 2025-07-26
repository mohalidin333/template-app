import { Role } from "@/constants/role";
import { FieldValues, Path } from "react-hook-form";

export type UsersData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "Admin" | "User";
  created_at: string;
};

export type UsersColumnsProps = {
  handleChat?: (id: string) => void;
  handleEdit?: (id: UsersData) => void;
  handleDelete?: (id: string) => void;
};

export type UsersFields<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: string;
  options?: string[];
};

export type UsersGroupFields<T extends FieldValues> = {
  group: string;
  fields: (UsersFields<T> | UsersFields<T>[])[];
};

export type UsersFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  password: string;
  confirmPassword: string;
};

export type UsersModalState = {
  add: boolean;
  edit: UsersData;
  deleteId: string;
};
