import { AuditLogsData } from "@/types/admin/audit-logs";
import { UsersData } from "@/types/admin/users";
import { FileSearch, Users } from "lucide-react";
import React from "react";

export default function Cards({
  filteredUsersData,
  filteredAuditLogsData,
}: {
  filteredUsersData: UsersData[];
  filteredAuditLogsData: AuditLogsData[];
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 space-y-2 rounded-md bg-white border p-6">
        <div className="flex items-center gap-2 justify-between">
          <p className="sub-title-semi-sm">Users</p>
          <Users className="icon-base sub-title-semi-sm" />
        </div>
        <p className="title-semi-md">{filteredUsersData.length}</p>
      </div>

      <div className="flex-1 space-y-2 rounded-md bg-white border p-6">
        <div className="flex items-center gap-2 justify-between">
          <p className="sub-title-semi-sm">Audit Logs</p>
          <FileSearch className="icon-base sub-title-semi-sm" />
        </div>
        <p className="title-semi-md">{filteredAuditLogsData.length}</p>
      </div>
    </div>
  );
}
