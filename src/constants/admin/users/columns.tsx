import { ColumnDef } from "@tanstack/react-table";
import { Role } from "@/constants/role";
import { Ellipsis } from "lucide-react";
import { UsersData, UsersColumnsProps } from "@/types/admin/users";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageCircle, Pen, Trash, UserLock } from "lucide-react";
import Image from "next/image";

const Actions = [
  {
    name: "Chat",
    icon: <MessageCircle className="icon-base" />,
  },
  {
    name: "Permissions",
    icon: <UserLock className="icon-base" />,
  },
  {
    name: "Edit",
    icon: <Pen className="icon-base" />,
  },
  {
    name: "Delete",
    icon: <Trash className="icon-base" />,
  },
] as const;

export const UsersColumns = ({
  handleChat,
  handleEdit,
  handleDelete,
}: UsersColumnsProps): ColumnDef<UsersData>[] => [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return (
        <span className="sub-title-sm">
          {String(row.getValue("id")).slice(0, 4)}...
        </span>
      );
    },
  },
  {
    header: "User",
    id: "user",
    accessorFn: (row) => row,
    cell: ({ row }) => {
      const { avatar, firstName, lastName } = row.original;
      return (
        <div className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <span>
            {firstName} {lastName}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role") as Role;
      const color = role === "Admin" ? "badge-green" : "badge-yellow";
      return <span className={color}>{role}</span>;
    },
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => {
      return <span className="sub-title-sm">{row.getValue("created_at")}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right w-full"></div>,
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="justify-end flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Ellipsis className="icon-base" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Actions.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className="bg-white cursor-pointer"
                  onClick={() => {
                    if (item.name === "Chat") {
                      handleChat?.(data.id);
                    } else if (item.name === "Edit") {
                      handleEdit?.(data);
                    } else if (item.name === "Delete") {
                      handleDelete?.(data.id);
                    }
                  }}
                >
                  {item.icon} {item.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
  {
    id: "search",
    accessorFn: () => "Admin",
    cell: () => null,
    header: () => null,
    enableColumnFilter: true,
    filterFn: (row, _id, value) => {
      const fullName =
        `${row.original.firstName} ${row.original.lastName}`.toLowerCase();
      return fullName.includes(value.toLowerCase());
    },
    meta: { hidden: true },
  },
];
