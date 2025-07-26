"use server";

import { createClient } from "@/utils/supabase/server";
import { LoginSchema } from "@/validations/auth/login";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = LoginSchema.safeParse(data);
  if (result.error) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  const { data: userData, error } = await supabase.auth.signInWithPassword({
    email: data.email as string,
    password: data.password as string,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  const redirectionPath =
    userData.user.user_metadata?.role === "Admin"
      ? "/dashboard"
      : "/user/dashboard";

  redirect(redirectionPath);
}
