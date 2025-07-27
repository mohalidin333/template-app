"use server";

import { createAdminClient } from "@/utils/supabase/client";

export async function UserList() {
  const supabase = await createAdminClient();
  try {
    const { data: user } = await supabase.auth.admin.listUsers();
    const { data: avatar } = await supabase.from("avatars").select("*");

    const userList = user.users.map((item) => ({
      id: item.id,
      role: item.user_metadata.role,
      email: item.email,
      firstName: item.user_metadata.firstName,
      lastName: item.user_metadata.lastName,
      created_at: item.created_at,
      avatar:
        avatar!.find((subItem) => subItem.user_id === item.id)?.url ||
        "https://github.com/shadcn.png",
    }));

    return userList;
  } catch (error) {
    return error;
  }
}
