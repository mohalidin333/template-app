import { Role } from "@/constants/role";
import { FieldValues, Path } from "react-hook-form";

export type AuditLogsData = {
  id: string;
  firstName: string;
  lastName: string;
  action: string;
  status: string;
  created_at: string;
};

export type AuditLogsColumnsProps = {
  handleEdit: (id: AuditLogsData) => void;
  handleDelete: (id: string) => void;
};

export type AuditLogsFields<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: string;
  options?: string[];
};

export type AuditLogsGroupFields<T extends FieldValues> = {
  group: string;
  fields: (AuditLogsFields<T> | AuditLogsFields<T>[])[];
};

export type AuditLogsFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  password: string;
  confirmPassword: string;
};

export type AuditLogsModalState = {
  add: boolean;
  edit: AuditLogsData;
  delete: string;
};
