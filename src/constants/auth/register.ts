import { RegisterGroupFields } from "@/types/auth/register";

export const RegisterFields: RegisterGroupFields[] = [
  {
    group: "",
    fields: [
      [
        {
          label: "First Name",
          name: "firstName",
          type: "text",
        },
        {
          label: "Last Name",
          name: "lastName",
          type: "text",
        },
      ],
      {
        label: "Email",
        name: "email",
        type: "email",
      },
      {
        label: "Password",
        name: "password",
        type: "password",
      },
    ],
  },
];
