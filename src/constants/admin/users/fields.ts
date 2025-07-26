import {
  UsersFormValues,
  UsersGroupFields,
} from "@/types/admin/users";

export const UsersFields: UsersGroupFields<UsersFormValues>[] = [
  {
    group: "Personal Information",
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
    ],
  },
  {
    group: "Select Role",
    fields: [
      {
        label: "Role",
        name: "role",
        type: "select",
        options: ["Admin", "User"],
      },
    ],
  },
  {
    group: "Credentials",
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
      {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password",
      },
    ],
  },
];