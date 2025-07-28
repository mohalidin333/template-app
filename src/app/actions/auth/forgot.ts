"use server";

import { createClient } from "@/utils/supabase/server";
import { ForgotSchema } from "@/validations/auth/forgot";

export async function forgot(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
  };

  const result = ForgotSchema.safeParse(data);
  if (result.error) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  const { error } = await supabase.auth.resetPasswordForEmail(
    data.email as string,
    {
      redirectTo: `${process.env.NEXT_APP_URL}/reset`,
    }
  );

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
