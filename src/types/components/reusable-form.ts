import { DefaultValues, FieldValues, Path } from "react-hook-form";
import { ZodSchema } from "zod";
import { ReactNode } from "react";

export type ReusableFormFields<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: string;
  options?: string[];
};

export type ReusableFormGroupFields<T extends FieldValues> = {
  group?: string;
  fields: (ReusableFormFields<T> | ReusableFormFields<T>[])[];
}

export type ReusableFormProps<T extends FieldValues> = {
  fields: ReusableFormGroupFields<T>[];
  schema: ZodSchema<T, FieldValues>;
  defaultValues: DefaultValues<T>;
  handleSubmit: (data: T) => void;
  className?: string;
  children?: ReactNode;
};

