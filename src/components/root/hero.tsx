import { Button } from "@/components/ui/button";
import { Stats } from "@/constants/root";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section id="#" className="px-6 md:pt-[10rem] pt-[5rem] pb-[5rem]">
      <div className="lg:flex-row flex-col section-container flex items-center gap-8 justify-between">
        <div className="md:order-1 order-2 space-y-8 max-w-2xl">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-start">
              <span
                className="badge-green border border-green-400"
                aria-label="100% Free Template"
              >
                🚀 100% Free Template
              </span>
              <span
                className="badge-blue border border-blue-400"
                aria-label="Open Source and Developer Friendly"
              >
                💡 Open Source & Dev Friendly
              </span>
            </div>

            <h1 className="title-bold-1xl">
              Your All-in-One Full Stack Template
            </h1>
            <p className="sub-title-lg">
              Build and launch faster with QSoftX — a developer-friendly
              template designed to streamline setup and let you focus on your
              app&apos;s core functionality.
            </p>
          </div>

          <Button asChild size={"lg"} className="cursor-pointer">
            <Link href="/login">Get Started</Link>
          </Button>

          {/* stats */}
          <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
            {Stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <h2 className="title-bold-base">{stat.title}</h2>
                <p className="sub-title-sm">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:order-2 order-1 max-w-2xl">
          <Image
            src="/svg/hero-next.svg"
            alt="hero-next"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
