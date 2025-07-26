import { RangeDate } from "@/components/range-date";
import { Button } from "@/components/ui/button";
import { BrushCleaning } from "lucide-react";
import React from "react";
import { DateRange } from "react-day-picker";

export default function DashboardHeader({
  date,
  setDate,
}: {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}) {
  return (
    <div className="flex-wrap flex items-end gap-6 justify-between w-full">
      <div>
        <h1 className="title-semi-md">Overview</h1>
        <p className="sub-title-sm">Manage dashboard here.</p>
      </div>

      <div className="flex items-center gap-2">
        <RangeDate date={date} setDate={setDate} />
        <Button
          onClick={() => setDate(undefined)}
          variant="outline"
          className="cursor-pointer"
        >
          <BrushCleaning className="icon-base" /> Clear Date
        </Button>
      </div>
    </div>
  );
}
