export type ResetFields = {
  label: string;
  name: "password" | "confirmPassword";
  type: string;
};

export type ResetGroupFields = {
  group: string;
  fields: ResetFields[];
};
