import { ProfileFormValues } from "@/types/admin/profile";
import { ProfileGroupFields } from "@/types/admin/profile";

export const ProfileFields: ProfileGroupFields<ProfileFormValues>[] =
  [
    {
      group: "Personal Information",
      fields: [
        [
          {
            name: "firstName",
            type: "text",
            label: "First Name",
          },
          {
            name: "lastName",
            type: "text",
            label: "Last Name",
          },
        ],
      ],
    },
    {
      group: "New Password",
      fields: [
        {
          name: "password",
          type: "password",
          label: "Password",
        },
        {
          name: "confirmPassword",
          type: "password",
          label: "Confirm Password",
        },
      ],
    },
  ];
