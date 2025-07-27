"use server";

import { createAdminClient } from "@/utils/supabase/client";
import { ProfileSchema } from "@/validations/admin/profile";

export async function updateUser(formData: FormData) {
  const supabase = await createAdminClient();

  const data = {
    id: formData.get("id")?.toString(),
    firstName: formData.get("firstName")?.toString(),
    lastName: formData.get("lastName")?.toString(),
    password: formData.get("password")?.toString(),
    confirmPassword: formData.get("confirmPassword")?.toString(),
  };

  const result = ProfileSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Validation failed" };
  }

  const { error } = await supabase.auth.admin.updateUserById(data.id!, {
    ...(data.password && { password: data.password }),
    user_metadata: {
      firstName: data.firstName,
      lastName: data.lastName,
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
