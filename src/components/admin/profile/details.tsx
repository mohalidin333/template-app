import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import React from "react";
import { Input } from "../../ui/input";
import { Calendar, Mail, RotateCw } from "lucide-react";
import { ProfileProps } from "@/types/admin/profile";
import { FormatDate } from "@/utils/format-date";
import { getRoleColor } from "@/utils/role-color";

export function ProfileDetails({
  data,
  avatar,
  handleAvatar,
  inputFileRef,
  isUploading,
}: ProfileProps) {
  return (
    <div className="max-w-[300px] p-6 border-r">
      <div className="border-b pb-6 gap-4 flex flex-col items-center text-center">
        <div className="relative">
          <Avatar
            onClick={() => inputFileRef.current?.click()}
            className="border hover:border-gray-400 cursor-pointer h-24 w-24"
          >
            <AvatarImage src={avatar || data.avatar} className="object-cover" />
            <AvatarFallback>
              {data.firstName.charAt(0)}
              {data.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          {isUploading && (
            <div className="absolute inset-0 bg-gray-100/50 grid place-items-center rounded-full">
              <RotateCw className="animate-spin icon-base" />
            </div>
          )}
        </div>

        <Input
          ref={inputFileRef}
          type="file"
          accept="image/*"
          onChange={handleAvatar}
          className="hidden"
        />
        <div className="space-y-2">
          <h1 className="title-semi-md">
            {data.firstName} {data.lastName}
          </h1>
          <span className={`${getRoleColor(data.role)}`}>{data.role}</span>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 py-4 border-b">
          <Mail className="icon-base" />
          <span className="sub-title-sm truncate">{data.email}</span>
        </div>
        <div className="flex items-center gap-2 py-4">
          <Calendar className="icon-base" />
          <span className="sub-title-sm">{FormatDate(data.created_at)}</span>
        </div>
      </div>
    </div>
  );
}
