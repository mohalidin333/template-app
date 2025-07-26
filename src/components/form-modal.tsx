import React from "react";
import { Button } from "./ui/button";
import { RotateCw, X } from "lucide-react";
import ReusableForm from "./reusable-form";
import { FieldValues } from "react-hook-form";
import { FormModalProps } from "@/types/components/form-modal";

export default function FormModal<T extends FieldValues>({
  title,
  subTitle,
  fields,
  schema,
  defaultValues,
  handleSubmit,
  isSubmitting,
  setIsSubmitting,
  addModal,
  setAddModal,
  editModal,
  setEditModal,
}: FormModalProps<T>) {
  const handleClose = () => {
    setAddModal?.(false);
    setEditModal?.(false);
    setIsSubmitting(false);
  };

  if (!addModal && !editModal) return null;

  return (
    <div
      onClick={handleClose}
      className="overflow-y-auto fixed inset-0 z-10 bg-black/50 grid place-items-center p-6"
    >
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-md">
        <div className="px-6 py-4 border-b flex items-start justify-between">
          <div>
            <h1 className="title-semi-base">{title}</h1>
            <p className="sub-title-sm">{subTitle}</p>
          </div>

          <Button
            type="button"
            variant={"ghost"}
            size={"icon"}
            className="cursor-pointer"
            onClick={handleClose}
          >
            <X className="icon-base" />
          </Button>
        </div>

        <ReusableForm
          fields={fields}
          schema={schema}
          defaultValues={defaultValues}
          handleSubmit={(data) => handleSubmit(data)}
          className="p-6"
        >
          <div className="border-t px-6 py-4 flex items-center gap-2 justify-end">
            <Button
              onClick={handleClose}
              type="button"
              variant={"ghost"}
              className="cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              disabled={isSubmitting}
              type="submit"
              className="cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <RotateCw className="animate-spin" />
                  Submitting
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </ReusableForm>
      </div>
    </div>
  );
}
