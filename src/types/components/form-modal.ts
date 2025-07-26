import { DefaultValues, FieldValues } from "react-hook-form";
import { ReusableFormGroupFields } from "./reusable-form";
import { ZodSchema } from "zod";
import { Dispatch, SetStateAction } from "react";

export type FormModalProps<T extends FieldValues> = {
  title: string;
  subTitle: string;
  fields: ReusableFormGroupFields<T>[];
  schema: ZodSchema<T, FieldValues>;
  defaultValues: DefaultValues<T>;
  handleSubmit: (data: T) => void;
  isSubmitting: boolean;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
  addModal?: boolean;
  setAddModal?: Dispatch<SetStateAction<boolean>>;
  editModal?: boolean;
  setEditModal?: Dispatch<SetStateAction<boolean>>;
};
