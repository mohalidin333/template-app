import { CardItems as CardItemsType } from "@/types/admin/backup-restore";
import { Database, DatabaseBackup, Table } from "lucide-react";

export const CardItems: CardItemsType[] = [
  {
    title: "Database Size",
    icon: Database,
    value: "2.5GB",
  },
  {
    title: "Total Tables",
    icon: Table,
    value: "10",
  },
  {
    title: "Total Backup",
    icon: DatabaseBackup,
    value: "2.5GB",
  },
];
