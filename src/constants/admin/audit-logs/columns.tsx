import { ColumnDef } from "@tanstack/react-table";
import { AuditLogsData } from "@/types/admin/audit-logs";

export const AuditLogsColumns: ColumnDef<AuditLogsData>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => (
      <span className="sub-title-sm">{row.getValue("created_at")}</span>
    ),
  },
  {
    header: "User",
    accessorFn: (row) => row,
    cell: ({ row }) => {
      const logs = row.original;
      return <span >{`${logs.firstName} ${logs.lastName}`}</span>;
    },
  },
  {
    accessorKey: "action",
    header: "Action",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const logs = row.original;
      const color = logs.status === "success" ? "badge-green" : " badge-yellow";
      return <span className={color}>{logs.status}</span>;
    },
  },
];
