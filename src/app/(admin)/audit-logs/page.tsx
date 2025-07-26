"use client";

import ReusableTable from "@/components/reusable-table";
import { useFilter } from "@/hooks/use-filter";
import React, { useState } from "react";
import { AuditLogsColumns } from "@/constants/admin/audit-logs/columns";
import AuditLogsHeader from "@/components/admin/audit-logs/header";
import { AuditLogsData } from "@/constants/admin/audit-logs/data";
import { DateRange } from "react-day-picker";
import { FormatDate } from "@/utils/format-date";
import DeleteModal from "@/components/delete-modal";
import { FilterDate } from "@/utils/filter-date";

export default function Users() {
  const { setColumnFilters, columnFilters } = useFilter();
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const filteredData = FilterDate({
    dateFrom: date?.from,
    dateTo: date?.to,
    data: AuditLogsData,
    dateField: "created_at",
  });

  const handleClear = () => {
    setIsSubmitting(true);
  };

  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-6">
      <AuditLogsHeader
        date={date}
        setDate={setDate}
        setDeleteModal={setDeleteModal}
      />
      {/* table */}
      <ReusableTable
        columns={AuditLogsColumns}
        data={filteredData}
        setColumnFilters={setColumnFilters}
        columnFilters={columnFilters}
        pageSize={15}
      />

      {/* delete modal */}
      <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        isSubmitting={isSubmitting}
        handleDeleteData={handleClear}
        setIsSubmitting={setIsSubmitting}
      />
    </main>
  );
}
