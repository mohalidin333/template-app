import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import React, { RefObject } from "react";

export default function BackupRestoreHeader({
  inputFileRef,
}: {
  inputFileRef: RefObject<HTMLInputElement | null>;
}) {
  return (
    <div className="flex-wrap flex items-end gap-6 justify-between w-full">
      <div>
        <h1 className="title-semi-md">Backup & Restore</h1>
        <p className="sub-title-sm">Manage database here.</p>
      </div>

      <Button
        onClick={() => inputFileRef.current?.click()}
        className="cursor-pointer"
      >
        <RotateCcw className="icon-base " />
        Restore
      </Button>
    </div>
  );
}
