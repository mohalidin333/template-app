"use server";

import { createAdminClient } from "@/utils/supabase/client";

export async function DeleteUser(id: string) {
  const supabase = await createAdminClient();
  try {
    const { error } = await supabase.auth.admin.deleteUser(id);

    if (error) {
      return null;
    }

    return true;
  } catch (error) {
    return error;
  }
}
