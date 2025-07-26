"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function logout() {
  await (await createClient()).auth.signOut();
  redirect("/login");
}
