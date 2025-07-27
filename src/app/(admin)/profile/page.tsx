"use client";
import z from "zod";
import { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ProfileSchema } from "@/validations/admin/profile";
import { ProfileDetails } from "@/components/admin/profile/details";
import EditProfile from "@/components/admin/profile/edit";
import { UserDetails } from "@/services/user-details";
import { Profile as ProfileType } from "@/types/admin/profile";
import { updateUser } from "@/app/actions/update-user";
import { toast } from "sonner";
import { Check, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { UploadAvatar } from "@/utils/upload-avatar";

export default function Profile() {
  const queryClient = useQueryClient();
  const [avatar, setAvatar] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const { data: userDetails, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const data = await UserDetails();
      return data as ProfileType;
    },
  });

  const handleSubmit = async (data: z.infer<typeof ProfileSchema>) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords do not match", {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("id", userDetails?.id || "");
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("password", data.password);

    const response = await updateUser(formData);

    if (!response.success) {
      setIsSubmitting(false);
      return toast.error(response.error as string, {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    if (data.password) {
      router.push("/login");
    }

    await queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    setIsSubmitting(false);
    toast.success("Profile updated", {
      icon: <Check className="icon-base text-green-500 mt-1" />,
    });
  };

  useEffect(() => {
    return () => {
      if (avatar) {
        URL.revokeObjectURL(avatar);
      }
    };
  }, [avatar]);

  if (isLoading || !userDetails) {
    return (
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-6">
      <div className="max-w-2xl mx-auto flex bg-white rounded-md border">
        <ProfileDetails
          avatar={avatar || userDetails.avatar}
          data={userDetails}
          handleAvatar={(e) =>
            UploadAvatar(e, setAvatar, setIsUploading, userDetails)
          }
          inputFileRef={inputFileRef}
          isUploading={isUploading}
        />
        <EditProfile
          defaultValues={{
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            password: "",
            confirmPassword: "",
          }}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </main>
  );
}
