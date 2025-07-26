import { RangeDate } from "@/components/range-date";
import { Button } from "@/components/ui/button";
import { BrushCleaning, Trash } from "lucide-react";
import React from "react";
import { DateRange } from "react-day-picker";

export type RangeDateProps = {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
  setDeleteModal: (state: boolean) => void;
};

export default function AuditLogsHeader({
  date,
  setDate,
  setDeleteModal,
}: RangeDateProps) {
  return (
    <div className="flex-wrap flex items-end gap-6 justify-between w-full">
      <div>
        <h1 className="title-semi-md">Audit Logs</h1>
        <p className="sub-title-sm">Manage audit logs here.</p>
      </div>
      

      <div className="flex items-center gap-2 flex-wrap">
        <RangeDate date={date} setDate={setDate} />
        <Button
          onClick={() => setDate(undefined)}
          variant="outline"
          className="cursor-pointer"
        >
          <BrushCleaning className="icon-base" /> Clear Date
        </Button>
        <Button
          onClick={() => setDeleteModal(true)}
          variant="outline"
          className="cursor-pointer"
        >
          <Trash className="icon-base" />
          Clear Logs
        </Button>
      </div>
    </div>
  );
}
