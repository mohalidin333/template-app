"use client";

import ReusableForm from "@/components/reusable-form";
import { Button } from "@/components/ui/button";
import { RegisterFields } from "@/constants/auth/register";
import {
  RegisterSchema,
  RegisterDefaultValues,
} from "@/validations/auth/register";
import React, { useState } from "react";
import z from "zod";
import { Check, RotateCw, X } from "lucide-react";
import Link from "next/link";
import { register } from "@/app/actions/auth/register";
import { toast } from "sonner";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    const response = await register(formData);

    if (!response.success) {
      setIsSubmitting(false);
      return toast.error(response.error as string, {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    setIsSubmitting(false);
    return toast.success("Registration successful", {
      icon: <Check className="icon-base text-green-500 mt-1" />,
    });
  };

  return (
    <main className="px-6 grid place-items-center">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h1 className="title-semi-md text-center">Register</h1>
          <p className="sub-title-sm text-center">Create an account</p>
        </div>
        <ReusableForm
          fields={RegisterFields}
          schema={RegisterSchema}
          defaultValues={RegisterDefaultValues}
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
                  Registering
                </>
              ) : (
                "Register"
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
