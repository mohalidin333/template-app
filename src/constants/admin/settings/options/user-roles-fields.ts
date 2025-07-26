import { UserRolesFormValues, UserRolesGroupFields } from "@/types/admin/user-roles";


export const UserRolesFields: UserRolesGroupFields<UserRolesFormValues>[] = [
  {
    group: "",
    fields: [
      {
          label: "Role",
          name: "role",
          type: "text",
        },
    ],
  },
  
];