import { CardItems } from "@/types/admin/backup-restore";
import React from "react";

export default function BackupRestoreCards({ CardItems }: { CardItems: CardItems[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {CardItems.map((card) => (
        <div
          key={card.title}
          className="space-y-2 rounded-md bg-white border p-6"
        >
          <div className="flex items-center gap-2 justify-between">
            <p className="sub-title-semi-sm">{card.title}</p>
            <card.icon className="icon-base sub-title-semi-sm" />
          </div>
          <p className="title-semi-md">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
