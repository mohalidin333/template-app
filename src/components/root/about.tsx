import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Benefits, ProblemsSolved } from "@/constants/root";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="section-sub-container">
          <span className="badge-gray">About</span>
          <h1 className="title-bold-xl">
            We focused on making your life easier
          </h1>
          <p className="sub-title-lg">
            QSoftX simplifies full stack development so you can save time,
            reduce setup complexity, and build what truly matters.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ProblemsSolved.map((problem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg space-y-4 border"
              >
                <div
                  className={`w-12 h-12 ${problem.iconBg} rounded-lg flex items-center justify-center`}
                >
                  <problem.icon className={`icon-md ${problem.iconColor}`} />
                </div>
                <div className="space-y-2">
                  <h3 className="title-semi-md">{problem.title}</h3>
                  <p className="sub-title-base">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-container border bg-cta rounded-lg md:p-8 p-6">
            <div className="section-sub-container">
              <h2 className="title-bold-xl">Why Choose QSoftX?</h2>
              <p className="sub-title-lg">
                We understand the pain points of modern development. That&apos;s why
                we&apos;ve built a template that eliminates the friction and lets you
                focus on what you do best - creating amazing applications.
              </p>
            </div>

            <div className="section-sub-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {Benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                      <Check className="icon-sm text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="title-semi-md">{benefit.title}</h3>
                      <p className="sub-title-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <Button asChild size={"lg"} className="cursor-pointer">
              <Link href="/login">Get Started</Link>
            </Button>
            <p className="sub-title-base">
              Join thousands of developers who have already made the switch to
              QSoftX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
