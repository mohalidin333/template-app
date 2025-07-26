import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DatabaseBackup } from "lucide-react";
import { BackupRestoreData } from "@/types/admin/backup-restore";

export const BackupRestoreColumns = ({
  handleBackup,
}: {
  handleBackup: (data: BackupRestoreData) => void;
}): ColumnDef<BackupRestoreData>[] => [
  {
    header: "Table",
    accessorKey: "tableName",
  },
  {
    header: "Data Size",
    accessorKey: "dataSize",
  },
  {
    header: "",
    accessorKey: "actions",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="justify-end flex gap-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => handleBackup(data)}
            className="cursor-pointer"
          >
            <DatabaseBackup className="icon-base" />
          </Button>
        </div>
      );
    },
  },
];
