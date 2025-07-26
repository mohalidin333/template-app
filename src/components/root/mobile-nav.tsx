import { Button } from "@/components/ui/button";
import { Nav } from "@/constants/root";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MobileNav({
  handleToggle,
}: {
  handleToggle: () => void;
}) {
  return (
    <div onClick={handleToggle} className="fixed z-90 inset-0 bg-black/50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full flex flex-col items-start max-w-screen-xl mx-auto"
      >
        <div className="border-b px-6 h-14 flex justify-between items-center w-full">
          <span className="title-semi-md">QSoftX</span>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={handleToggle}
            className="cursor-pointer"
          >
            <X className="icon-base" />
          </Button>
        </div>

        <nav className="p-6 flex flex-col space-y-6">
          {Nav.map((item, index) => (
            <Link
              onClick={handleToggle}
              key={index}
              href={item.href}
              className="hover:underline sub-title-xs cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="cursor-pointer">
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
