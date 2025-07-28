"use client";

import ReusableForm from "@/components/reusable-form";
import { Button } from "@/components/ui/button";
import { ResetFields } from "@/constants/auth/reset";
import { ResetSchema, ResetDefaultValues } from "@/validations/auth/reset";
import React, { useState } from "react";
import z from "zod";
import Link from "next/link";
import { Check, RotateCw, X } from "lucide-react";
import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Reset() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleSubmit = async (data: z.infer<typeof ResetSchema>) => {
    const supabase = createClient();
    setIsSubmitting(true);

    if (data.password !== data.confirmPassword) {
      setIsSubmitting(false);
      return toast.error("Passwords do not match", {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    const { error, data: userData } = await supabase.auth.updateUser({
      password: data.password,
    });

    if (error) {
      setIsSubmitting(false);
      return toast.error(error.message, {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    const navigationPath =
      userData.user?.user_metadata?.role === "admin"
        ? "/dashboard"
        : "/user/dashboard";
    router.push(navigationPath);

    setIsSubmitting(false);
    return toast.success("Password reset successfully", {
      icon: <Check className="icon-base text-green-500 mt-1" />,
    });
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
            <Button
              disabled={isSubmitting}
              type="submit"
              className="cursor-pointer w-full"
            >
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
