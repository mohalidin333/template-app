"use client";

import ReusableForm from "@/components/reusable-form";
import { Button } from "@/components/ui/button";
import { ResetFields } from "@/constants/auth/reset";
import { ResetSchema, ResetDefaultValues } from "@/validations/auth/reset";
import React, { useState } from "react";
import z from "zod";
import Link from "next/link";
import { RotateCw } from "lucide-react";

export default function Reset() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (data: z.infer<typeof ResetSchema>) => {
    setIsSubmitting(true);
    console.log(data);
  };

  return (
    <main className="px-6 grid place-items-center">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h1 className="title-semi-md text-center">Reset</h1>
          <p className="sub-title-sm text-center">Enter new password</p>
        </div>
        <ReusableForm
          fields={ResetFields}
          schema={ResetSchema}
          defaultValues={ResetDefaultValues}
          handleSubmit={handleSubmit}
          className="mb-4"
        >
          <div className="space-y-6">
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? (
                <>
                  <RotateCw className="icon-base animate-spin" />
                  Resetting
                </>
              ) : (
                "Reset"
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
