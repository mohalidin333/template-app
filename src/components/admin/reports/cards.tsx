import { ReportsCardsProps } from "@/types/admin/reports";
import { Printer } from "lucide-react";
import React from "react";

export default function ReportsCards({
  usersData,
  auditLogsData,
  setUsersModal,
  setAuditLogsModal,
}: ReportsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        onClick={() => setUsersModal(true)}
        className="hover:border-gray-400 cursor-pointer p-6 rounded-md bg-white border space-y-4"
      >
        <div className="flex items-center gap-2 justify-between">
          <h2 className="sub-title-semi-sm">Users Report</h2>

          <Printer className="icon-base sub-title-semi-sm" />
        </div>

        <span className="title-semi-md">{usersData} total data</span>
      </div>
      <div
        onClick={() => setAuditLogsModal(true)}
        className="hover:border-gray-400 cursor-pointer p-6 rounded-md bg-white border space-y-2"
      >
        <div className="flex items-center gap-2 justify-between">
          <h2 className="sub-title-semi-sm">Audit Logs Report</h2>

          <Printer className="icon-base sub-title-semi-sm" />
        </div>

        <div>
          <span className="title-semi-md">
            {auditLogsData} total data
          </span>
        </div>
      </div>
    </div>
  );
}
