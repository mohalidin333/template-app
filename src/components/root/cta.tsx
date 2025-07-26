import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Cta() {
  return (
    <section className="px-6 pb-[5rem]">
      <div className="section-container bg-cta p-6 rounded-lg border ">
        <div className="section-sub-container">
          <h1 className="title-bold-xl">Still have questions?</h1>
          <p className="sub-title-lg">Contact us and we’ll get back to you as soon as possible</p>
          <Button asChild size={"lg"} className="mt-8 cursor-pointer">
            <Link href="/login">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
