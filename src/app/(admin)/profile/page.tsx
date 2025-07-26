"use client";
import z from "zod";
import { ChangeEvent, useRef, useState } from "react";
import { ProfileSchema } from "@/validations/admin/profile";
import { ProfileDetails } from "@/components/admin/profile/details";
import EditProfile from "@/components/admin/profile/edit";

export default function Profile() {
  const [avatar, setAvatar] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const user = {
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@example.com",
    role: "Admin",
    created_at: "Joined March 15, 2022",
    avatar: "",
  };

  const defaultValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    password: "",
    confirmPassword: "",
  };

  const handleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = URL.createObjectURL(e.target.files![0]);
    setAvatar(file);
  };

  const handleSubmit = (data: z.infer<typeof ProfileSchema>) => {
    console.log(data);
  };

  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-6">
      <div className="max-w-2xl mx-auto flex bg-white rounded-md border">
        <ProfileDetails
          data={user}
          avatar={avatar}
          handleAvatar={handleAvatar}
          inputFileRef={inputFileRef}
        />
        <EditProfile
          defaultValues={defaultValues}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}
