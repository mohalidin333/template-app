"use client";
import React, { useState } from "react";
import ReportsHeader from "@/components/admin/reports/header";
import { UsersData } from "@/constants/admin/users/data";
import { Printer } from "lucide-react";
import { AuditLogsData } from "@/constants/admin/audit-logs/data";
import UsersReportModal from "@/components/admin/reports/users-report";
import AuditLogsReportModal from "@/components/admin/reports/audit-logs-report";
import { FilterDate } from "@/utils/filter-date";
import { DateRange } from "react-day-picker";
import ReportsCards from "@/components/admin/reports/cards";

export default function Reports() {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [usersModal, setUsersModal] = useState(false);
  const [auditLogsModal, setAuditLogsModal] = useState(false);

  const filteredUsersData = FilterDate({
    dateFrom: date?.from,
    dateTo: date?.to,
    data: UsersData,
    dateField: "created_at",
  });

  const filteredAuditLogsData = FilterDate({
    dateFrom: date?.from,
    dateTo: date?.to,
    data: AuditLogsData,
    dateField: "created_at",
  });

  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-6">
      <ReportsHeader date={date} setDate={setDate} />

      {/* cards */}
      <ReportsCards
        usersData={filteredUsersData.length}
        auditLogsData={filteredAuditLogsData.length}
        setUsersModal={setUsersModal}
        setAuditLogsModal={setAuditLogsModal}
      />

      {/* users report modal */}
      <UsersReportModal
        isOpen={usersModal}
        setIsOpen={setUsersModal}
        UsersData={filteredUsersData}
      />
      <AuditLogsReportModal
        isOpen={auditLogsModal}
        setIsOpen={setAuditLogsModal}
        AuditLogsData={filteredAuditLogsData}
      />
    </main>
  );
}
