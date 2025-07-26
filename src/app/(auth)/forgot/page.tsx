"use client";

import ReusableForm from "@/components/reusable-form";
import { Button } from "@/components/ui/button";
import { ForgotFields } from "@/constants/auth/forgot";
import { ForgotSchema, ForgotDefaultValues } from "@/validations/auth/forgot";
import React, { useState } from "react";
import z from "zod";
import { RotateCw } from "lucide-react";
import Link from "next/link";

export default function Forgot() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (data: z.infer<typeof ForgotSchema>) => {
    setIsSubmitting(true);
    console.log(data);
  };

  return (
    <main className="px-6 grid place-items-center">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h1 className="title-semi-md text-center">Forgot</h1>
          <p className="sub-title-sm text-center">We'll send you an email</p>
        </div>
        <ReusableForm
          fields={ForgotFields}
          schema={ForgotSchema}
          defaultValues={ForgotDefaultValues}
          handleSubmit={handleSubmit}
          className="mb-4"
        >
          <div className="space-y-6">
            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <RotateCw className="icon-base animate-spin" />
                  Sending
                </>
              ) : (
                "Send"
              )}
            </Button>

            <div className="text-center">
              <Link href="/login" className="sub-title-sm hover:underline">
                Login to your account
              </Link>
            </div>
          </div>
        </ReusableForm>
      </div>
    </main>
  );
}
