"use client";

import { Button } from "@/components/ui/button";
import { Nav } from "@/constants/root";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MobileNav from "./mobile-nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [href, setHref] = useState("");

  const handleSmoothScroll = (href: string) => {
    setHref(href);
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggle = () => {
    document.body.classList.toggle("overflow-hidden");
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-6 h-14 flex items-center bg-white border-b fixed z-10 left-0 top-0 right-0">
      <div className="w-full flex items-center gap-8 justify-between max-w-screen-xl mx-auto">
        <span className="title-semi-md">QSoftX</span>

        <nav className="md:block hidden space-x-8">
          {Nav.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => handleSmoothScroll(item.href)}
              className={`${
                href !== "#" && href === item.href && "underline"
              } hover:underline sub-title-xs cursor-pointer`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="cursor-pointer">
            <Link href="/login">Login</Link>
          </Button>
        </nav>

        <Button
          onClick={handleToggle}
          variant={"ghost"}
          className="md:hidden block cursor-pointer"
        >
          <AlignRight className="icon-base" />
        </Button>
      </div>

      {isOpen && <MobileNav handleToggle={handleToggle} />}
    </header>
  );
}
