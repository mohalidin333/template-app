import React, { Dispatch, SetStateAction } from "react";
import { Input } from "../../ui/input";
import Filter from "@/components/filter";
import { FilterRole } from "@/constants/admin/users/filter-role";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "../../ui/button";
import { Plus } from "lucide-react";
import { UsersModalState } from "@/types/admin/users";

export default function UsersHeader({
  handleFilter,
  setAddModal,
}: {
  handleFilter: (key: string, value: string) => void;
  setAddModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex-wrap flex items-end gap-6 justify-between w-full">
      <div>
        <h1 className="title-semi-md">Users</h1>
        <p className="sub-title-sm">Manage users and permissions here.</p>
      </div>

      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Search"
          onChange={(e) => handleFilter("search", e.target.value)}
          className="bg-white"
        />
        <Filter title="Role">
          {FilterRole.map((item) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => handleFilter("role", item.value)}
              className="py-1 px-2 rounded-base cursor-pointer bg-white hover:bg-gray-100"
            >
              {item.name}
            </DropdownMenuItem>
          ))}
        </Filter>
        <Button
          onClick={() => setAddModal((prev) => !prev)}
          className="cursor-pointer"
        >
          <Plus className="icon-base" />
          Add User
        </Button>
      </div>
    </div>
  );
}
