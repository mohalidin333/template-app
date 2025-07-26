import { Button } from "@/components/ui/button";
import { DeleteModalProps } from "@/types/components/delete-modal";
import { RotateCw } from "lucide-react";
import React from "react";

export default function DeleteModal({
  deleteModal,
  setDeleteModal,
  handleDeleteData,
  isSubmitting,
  setIsSubmitting,
}: DeleteModalProps) {
  const handleClose = () => {
    setDeleteModal(false);
    setIsSubmitting(false);
  };

  if (!deleteModal) return null;

  return (
    <div
      onClick={handleClose}
      className="overflow-y-auto fixed inset-0 z-10 bg-black/50 grid place-items-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-md p-6 flex flex-col items-center gap-8"
      >
        <div className="space-y-2">
          <h1 className="title-semi-base text-center">Delete Data</h1>
          <p className="sub-title-sm text-center">
            Are you sure you want to delete this data?
          </p>
        </div>

        <div className="space-x-2">
          <Button
            onClick={handleClose}
            variant={"ghost"}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            disabled={isSubmitting}
            variant={"destructive"}
            className="cursor-pointer"
            onClick={handleDeleteData}
          >
            {isSubmitting ? (
              <>
                <RotateCw className="icon-base animate-spin" /> Deleting
              </>
            ) : (
              "Delete"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
