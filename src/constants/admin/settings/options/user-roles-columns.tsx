import { ColumnDef } from "@tanstack/react-table";
import { ChevronDown, Ellipsis } from "lucide-react";
import { UsersColumnsProps } from "@/types/admin/users";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pen, Trash } from "lucide-react";
import { UserRolesColumnsProps, UserRolesData } from "@/types/admin/user-roles";

const Actions = [
  {
    name: "Edit",
    icon: <Pen className="icon-base" />,
  },
  {
    name: "Delete",
    icon: <Trash className="icon-base" />,
  },
] as const;

export const UserRolesColumns = ({
  handleEdit,
  handleDelete,
}: UserRolesColumnsProps): ColumnDef<UserRolesData>[] => [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "role",
    header: "Role",
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
              <ChevronDown className="icon-base" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Actions.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className="bg-white cursor-pointer"
                  onClick={() => {
                    if (item.name === "Edit") {
                      handleEdit && handleEdit(data);
                    } else if (item.name === "Delete") {
                      handleDelete && handleDelete(data.id);
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
];
