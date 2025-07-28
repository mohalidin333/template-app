"use client";

import ReusableForm from "@/components/reusable-form";
import { Button } from "@/components/ui/button";
import { ForgotFields } from "@/constants/auth/forgot";
import { ForgotSchema, ForgotDefaultValues } from "@/validations/auth/forgot";
import React, { useState } from "react";
import z from "zod";
import { Check, RotateCw, X } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { forgot } from "@/app/actions/auth/forgot";

export default function Forgot() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (data: z.infer<typeof ForgotSchema>) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("email", data.email);
    const response = await forgot(formData);

    if (!response.success) {
      setIsSubmitting(false);
      return toast.error(response.error as string, {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    setIsSubmitting(false);
    return toast.success("Email sent", {
      icon: <Check className="icon-base text-green-500 mt-1" />,
    });
  };

  return (
    <main className="px-6 grid place-items-center">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h1 className="title-semi-md text-center">Forgot</h1>
          <p className="sub-title-sm text-center">We&apos;ll send you an email</p>
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
