"use client";

import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileMenu } from "@/constants/menu/profile-menu";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Role } from "@/constants/role";
import { logout } from "@/app/actions/auth/logout";
import { UserDetails } from "@/services/user-details";
import { Profile } from "@/types/admin/profile";

export default function ProfileDrawer({ role }: { role: Role }) {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const getAvatar = async () => {
      const data = await UserDetails() as Profile;
      setAvatar(data?.avatar || "");
    };

    getAvatar();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {ProfileMenu[role].map((route, index) => (
          <Link key={index} href={route.href}>
            <DropdownMenuItem
              key={index}
              className="bg-white hover:bg-gray-100 cursor-pointer"
            >
              <route.icon className="icon-base" />
              <span>{route.title}</span>
            </DropdownMenuItem>
          </Link>
        ))}
        <DropdownMenuItem
          onClick={() => logout()}
          className="bg-white hover:bg-gray-100 cursor-pointer"
        >
          <LogOut className="icon-base" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
