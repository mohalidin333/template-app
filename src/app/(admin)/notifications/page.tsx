"use client";

import ReusableTable from "@/components/reusable-table";
import { useFilter } from "@/hooks/use-filter";
import { NotificationsColumns } from "@/constants/admin/notifications/columns";
import { NotificationsData } from "@/constants/admin/notifications/data";
import React from "react";

export default function Notifications() {
  const { setColumnFilters, columnFilters } = useFilter();

  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-6">
      {/* table */}
      <ReusableTable
        columns={NotificationsColumns}
        data={NotificationsData}
        setColumnFilters={setColumnFilters}
        columnFilters={columnFilters}
        pageSize={15}
      />
    </main>
  );
}
