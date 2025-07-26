import { LoginGroupFields } from "@/types/auth/login";

export const LoginFields: LoginGroupFields[] = [
  {
    group: "",
    fields: [
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
