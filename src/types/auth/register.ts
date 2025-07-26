export type RegisterFields = {
  label: string;
  name: "firstName" | "lastName" | "email" | "password";
  type: string;
};

export type RegisterGroupFields = {
  group: string;
  fields: (RegisterFields | RegisterFields[])[];
};
