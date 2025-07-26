"use server";

import { createAdminClient } from "@/utils/supabase/client";
import { RegisterSchema } from "@/validations/auth/register";

export async function register(formData: FormData) {
  const supabase = await createAdminClient();

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = RegisterSchema.safeParse(data);
  if (result.error) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  const { error } = await supabase.auth.admin.createUser({
    email: data.email as string,
    password: data.password as string,
    user_metadata: {
      role: "User",
      firstName: data.firstName as string,
      lastName: data.lastName as string,
    },
  });

  if (error) {
    if (error.message.includes("User already registered")) {
      return { success: false, error: "Email already registered" };
    }
    return { success: false, error: error.message };
  }

  return { success: true };
}
