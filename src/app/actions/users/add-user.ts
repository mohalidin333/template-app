"use server";

import { Role } from "@/constants/role";
import { createAdminClient } from "@/utils/supabase/client";
import { UsersSchema } from "@/validations/admin/users";

export async function addUser(formData: FormData) {
  const supabase = await createAdminClient();

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    role: formData.get("role"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const result = UsersSchema.safeParse(data);
  if (result.error) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  const { error: userError } = await supabase.auth.admin.createUser({
    email_confirm: true,
    email: data.email as string,
    password: data.password as string,
    user_metadata: {
      role: data.role as Role,
      firstName: data.firstName as string,
      lastName: data.lastName as string,
    },
  });

  if (userError) {
    return { success: false, error: userError.message };
  }

  return { success: true };
}
