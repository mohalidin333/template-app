"use server";

import { createClient } from "@/utils/supabase/server";

export async function UserDetails() {
  const supabase = await createClient();
  try {
    const { data: user } = await supabase.auth.getUser();
    const { data: avatar } = await supabase
      .from("avatars")
      .select("*")
      .single();

    const userData = {
      id: user.user?.id,
      role: user.user?.user_metadata?.role,
      email: user.user?.email,
      firstName: user.user?.user_metadata?.firstName,
      lastName: user.user?.user_metadata?.lastName,
      created_at: user.user?.created_at,
      avatar: avatar?.url || "https://github.com/shadcn.png",
    };
    return userData;
  } catch (error) {
    return error;
  }
}
