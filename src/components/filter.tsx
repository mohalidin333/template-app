import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter as FilterIcon } from "lucide-react";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";

export default function Filter({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <FilterIcon size={15} />
          {title}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-1">
        <DropdownMenuLabel>Filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
