"use client";

import ReusableTable from "@/components/reusable-table";
import { useFilter } from "@/hooks/use-filter";
import BackupRestoreHeader from "@/components/admin/backup-restore/header";
import React, { ChangeEvent, useRef } from "react";
import { BackupRestoreColumns } from "@/constants/admin/backup-restore/columns";
import { BackupRestoreData } from "@/constants/admin/backup-restore/data";
import { BackupRestoreData as BackupRestoreDataType } from "@/types/admin/backup-restore";
import { CardItems } from "@/constants/admin/backup-restore/card-items";
import Cards from "@/components/admin/backup-restore/cards";
import { Input } from "@/components/ui/input";

export default function BackupRestore() {
  const { setColumnFilters, columnFilters } = useFilter();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleBackup = (data: BackupRestoreDataType) => {
    console.log(data);
  };

  const handleRestore = (data: ChangeEvent<HTMLInputElement>) => {
    const file = URL.createObjectURL(data.target.files![0]);
    console.log(file);
  };

  const columns = BackupRestoreColumns({ handleBackup });

  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-6">
      <BackupRestoreHeader inputFileRef={inputFileRef} />
      <Input
        onChange={handleRestore}
        type="file"
        ref={inputFileRef}
        className="hidden"
      />

      <Cards CardItems={CardItems} />

      {/* table */}
      <ReusableTable
        columns={columns}
        data={BackupRestoreData}
        setColumnFilters={setColumnFilters}
        columnFilters={columnFilters}
        pageSize={15}
      />
    </main>
  );
}
