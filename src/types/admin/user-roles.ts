import { FieldValues, Path } from "react-hook-form";

export type UserRolesData = {
  id: string;
  role: string
  created_at: string;
};

export type UserRolesColumnsProps = {
  handleEdit?: (id: UserRolesData) => void;
  handleDelete?: (id: string) => void;
};

export type UserRolesFields<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: string;
  options?: string[];
};

export type UserRolesGroupFields<T extends FieldValues> = {
  group: string;
  fields: (UserRolesFields<T> | UserRolesFields<T>[])[];
};

export type UserRolesFormValues = {
  role: string;
};

// export type UsersModalState = {
//   add: boolean;
//   edit: UsersData;
//   deleteId: string;
// };
