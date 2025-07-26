export type LoginFields = {
  label: string;
  name: "email" | "password";
  type: string;
};

export type LoginGroupFields = {
  group: string;
  fields: LoginFields[];
};
