import { Dispatch, SetStateAction } from "react";

export type ReportsCardsProps = {
  usersData: number;
  auditLogsData: number;
  setUsersModal: Dispatch<SetStateAction<boolean>>;
  setAuditLogsModal: Dispatch<SetStateAction<boolean>>;
};