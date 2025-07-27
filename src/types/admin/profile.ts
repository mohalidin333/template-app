import { Role } from "@/constants/role";
import { FieldValues, Path } from "react-hook-form";

export type ProfileFields<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: string;
  options?: string[];
};

export type ProfileGroupFields<T extends FieldValues> = {
  group: string;
  fields: (ProfileFields<T> | ProfileFields<T>[])[];
};

export type ProfileFormValues = {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

export type Profile = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  created_at: string;
  avatar: string;
};

export type ProfileProps = {
  data: Profile;
  avatar: string;
  handleAvatar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputFileRef: React.RefObject<HTMLInputElement | null>;
  isUploading: boolean;
};
