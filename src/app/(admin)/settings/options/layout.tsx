import Link from "next/link";
import React, { ReactNode } from "react";

export const OptionLinks = [
  {
    name: "User Roles",
    href: "/settings/options",
  },
  {
    name: "Categories",
    href: "/settings/options/category",
  },
];

export default function Settings({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      <div className="space-y-4 bg-white py-6 rounded-md border">
        <div className="divide-x flex border-b pb-4">
          {OptionLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className=" px-6 text-sm font-medium text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {children}
      </div>
    </div>
  );
}
