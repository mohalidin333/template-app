import { Profile } from "@/types/admin/profile";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { createClient } from "./supabase/client";
import { X } from "lucide-react";
import { toast } from "sonner";

export async function UploadAvatar(
  e: ChangeEvent<HTMLInputElement>,
  setAvatar: Dispatch<SetStateAction<string>>,
  setIsUploading: Dispatch<SetStateAction<boolean>>,
  userDetails: Profile
) {
  const supabase = createClient();

  const file = e.target.files![0];

  if (!file) return;

  setIsUploading(true);

  const fileExt = file.name.split(".").pop();
  const filePath = `${file.name.split(".")[0]}-${Date.now()}.${fileExt}`;

  await supabase.storage
    .from("avatars")
    .remove([`${userDetails?.avatar.split("/").pop()}`]);

  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(filePath, file);

  if (uploadError) {
    return toast.error(uploadError.message, {
      icon: <X className="icon-base text-red-500 mt-1" />,
    });
  }

  const { data: getURL } = await supabase.storage
    .from("avatars")
    .getPublicUrl(filePath);

  if (!getURL.publicUrl) {
    return toast.error("Failed to get public URL", {
      icon: <X className="icon-base text-red-500 mt-1" />,
    });
  }

  await supabase.from("avatars").delete().eq("user_id", userDetails?.id);

  const { error: insertError } = await supabase.from("avatars").insert({
    user_id: userDetails?.id,
    url: getURL.publicUrl,
  });

  setIsUploading(false);

  if (insertError) {
    return toast.error(insertError.message, {
      icon: <X className="icon-base text-red-500 mt-1" />,
    });
  }

  setAvatar(getURL.publicUrl);
}
