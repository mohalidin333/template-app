import { ColumnDef } from "@tanstack/react-table";
import { NotificationsData } from "@/types/admin/notifications";

export const NotificationsColumns: ColumnDef<NotificationsData>[] = [
  {
    header: "Notification",
    accessorFn: (row) => row,
    cell: ({ getValue }) => {
      const row = getValue() as NotificationsData;
      return (
        <div className="flex flex-col gap-2">
          <span>{row.notification}</span>
          <span className="sub-title-sm">{row.created_at}</span>
        </div>
      );
    },
  },
];
