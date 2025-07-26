import { ResetGroupFields } from "@/types/auth/reset";

export const ResetFields: ResetGroupFields[] = [
  {
    group: "",
    fields: [
      {
        label: "Password",
        name: "password",
        type: "password",
      },
      {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password",
      },
    ],
  },
];
