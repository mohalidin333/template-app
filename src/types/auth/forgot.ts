export type ForgotFields = {
  label: string;
  name: "email";
  type: string;
};

export type ForgotFieldsGroup = {
  group: string;
  fields: ForgotFields[];
};
