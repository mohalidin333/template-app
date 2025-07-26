"use client";
import DashboardHeader from "@/components/admin/dashboard/header";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import { UsersData } from "@/constants/admin/users/data";
import { AuditLogsData } from "@/constants/admin/audit-logs/data";
import { FilterDate } from "@/utils/filter-date";
import Cards from "@/components/admin/dashboard/cards";
import Barchart from "@/components/admin/dashboard/bar-chart";

export default function Dashboard() {
  const [date, setDate] = useState<DateRange | undefined>(undefined);

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

  const chartData = [
    {
      name: "Analytics",
      Users: filteredUsersData.length,
      AuditLogs: filteredAuditLogsData.length,
      Storage: 10,
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-6">
      <DashboardHeader date={date} setDate={setDate} />

      {/* cards */}
      <Cards
        filteredUsersData={filteredUsersData}
        filteredAuditLogsData={filteredAuditLogsData}
      />

      {/* charts */}
      <div className="space-y-6">
        <div>
          <h2 className="title-semi-md">Analytics</h2>
          <p className="sub-title-sm">Manage analytics here.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Barchart data={chartData} />
          <Barchart data={chartData} />
        </div>
      </div>
    </main>
  );
}
