import { BackupRestoreData as BackupRestoreDataType } from "@/types/admin/backup-restore";

export const BackupRestoreData: BackupRestoreDataType[] = [
  {
    tableName: "users",
    dataSize: "2.5GB",
  },
  {
    tableName: "audit_logs",
    dataSize: "1.5GB",
  },
];
