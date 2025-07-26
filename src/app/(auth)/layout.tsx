import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {" "}
      <div className=" grid md:grid-cols-2 grid-cols-1 h-screen">
        {children}

        <div className="relative bg-two md:grid place-items-center hidden bg-red-100">
          <div className="absolute top-0 right-0 px-4 py-2">
            <Button
              asChild
              variant={"ghost"}
              size={"icon"}
              className="cursor-pointer"
            >
              <Link href="/">
                <ArrowLeft className="icon-base" />
              </Link>
            </Button>
          </div>

          <div className="section section-sub-container">
            <p className="title-bold-xl">Your All-in-One Full Stack Template</p>
            <p className="sub-title-lg">
              Build and launch faster with QSoftX — a developer-friendly
              template designed to streamline setup and let you focus on your
              app's core functionality.
            </p>

            <Image
              src="/svg/hero-next.svg"
              alt="Hero"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
