import { User as UserIcon } from "lucide-react";

export const ProfileMenu = {
  Admin: [
    {
      title: "Profile",
      href: "/profile",
      icon: UserIcon,
    },
  ],
  User: [
    {
      title: "Profile",
      href: "/user/profile",
      icon: UserIcon,
    },
  ],
} as const;
