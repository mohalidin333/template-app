"use client";

import ReusableForm from "@/components/reusable-form";
import { Button } from "@/components/ui/button";
import { LoginFields } from "@/constants/auth/login";
import { LoginSchema, LoginDefaultValues } from "@/validations/auth/login";
import React, { useState } from "react";
import z from "zod";
import { Check, RotateCw, X } from "lucide-react";
import Link from "next/link";
import { login } from "@/app/actions/auth/login";
import { toast } from "sonner";
export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    const response = await login(formData);

    if (!response.success) {
      setIsSubmitting(false);
      return toast.error(response.error as string, {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    setIsSubmitting(false);
    return toast.success("Login successful", {
      icon: <Check className="icon-base text-green-500 mt-1" />,
    });
  };

  return (
    <main className="px-6 grid place-items-center">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h1 className="title-semi-md text-center">Login</h1>
          <p className="sub-title-sm text-center">Login to your account</p>
        </div>

        <ReusableForm
          fields={LoginFields}
          schema={LoginSchema}
          defaultValues={LoginDefaultValues}
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
                  Logging in
                </>
              ) : (
                "Login"
              )}
            </Button>

            <div className="flex flex-col items-center gap-4">
              <Link href="/forgot" className="sub-title-sm hover:underline">
                Forgot password?
              </Link>
              <Link href="/register" className="sub-title-sm hover:underline">
                Create an account
              </Link>
            </div>
          </div>
        </ReusableForm>
      </div>
    </main>
  );
}
