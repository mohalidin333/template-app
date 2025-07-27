import ReusableForm from "@/components/reusable-form";
import React from "react";
import { Button } from "../../ui/button";
import z from "zod";
import {
  ProfileDefaultValues,
  ProfileSchema,
} from "@/validations/admin/profile";
import { ProfileFields } from "@/constants/admin/profile/fields";
import { RotateCw } from "lucide-react";

export default function EditProfile({
  defaultValues,
  handleSubmit,
  isSubmitting,
}: {
  defaultValues: {
    firstName?: string;
    lastName?: string;
    password?: string;
    confirmPassword?: string;
  };
  handleSubmit: (data: z.infer<typeof ProfileSchema>) => void;
  isSubmitting: boolean;
}) {
  return (
    <div className="flex-1  p-6">
      <h2 className="title-semi-base pb-4">Profile Settings</h2>

      <ReusableForm
        fields={ProfileFields}
        schema={ProfileSchema}
        defaultValues={defaultValues || ProfileDefaultValues}
        handleSubmit={handleSubmit}
        className="mb-4"
      >
        <Button
          disabled={isSubmitting}
          type="submit"
          size={"sm"}
          className="cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <RotateCw className="icon-base animate-spin" />
              Saving
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </ReusableForm>
    </div>
  );
}
