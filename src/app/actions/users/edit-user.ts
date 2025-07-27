"use server";

import { Role } from "@/constants/role";
import { createAdminClient } from "@/utils/supabase/client";
import { EditUserSchema } from "@/validations/admin/users";

export async function editUser(formData: FormData) {
  const supabase = await createAdminClient();

  const data = {
    id: formData.get("id")?.toString(),
    firstName: formData.get("firstName")?.toString(),
    lastName: formData.get("lastName")?.toString(),
    role: formData.get("role")?.toString(),
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
    confirmPassword: formData.get("confirmPassword")?.toString(),
  };

  const result = EditUserSchema.safeParse(data);
  if (result.error) {
    return { success: false, error: "Validation failed" };
  }

  const { error: userError } = await supabase.auth.admin.updateUserById(
    data.id as string,
    {
      ...(data.password && { password: data.password }),
      email_confirm: true,
      email: data.email as string,

      user_metadata: {
        role: data.role as Role,
        firstName: data.firstName as string,
        lastName: data.lastName as string,
      },
    }
  );

  if (userError) {
    return { success: false, error: userError.message };
  }

  return { success: true };
}
