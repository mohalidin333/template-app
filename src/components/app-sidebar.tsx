"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarMenu as Menu } from "@/constants/menu/sidebar-menu";
import { Fragment, useEffect, useState } from "react";
import { Role } from "@/constants/role";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";

export function AppSidebar({ role }: { role: Role }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setIsMounted(true), []);

  return (
    <Sidebar>
      <SidebarContent className="bg-white">
        <span className="title-semi-base h-14 flex items-center px-4 border-b">
          QSoftX
        </span>

        <SidebarGroup>
          {Menu[role].map((item, index) => (
            <Fragment key={index}>
              <SidebarGroupLabel>{item.group}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.sub.map((subItem, subIndex) => (
                    <SidebarMenuItem key={subIndex}>
                      {"href" in subItem ? (
                        <SidebarMenuButton
                          onClick={() => setIsSubOpen(false)}
                          asChild
                          className={`${
                            isMounted &&
                            pathname === subItem.href &&
                            "bg-gray-100"
                          } rounded-base hover:bg-gray-100`}
                        >
                          <Link href={subItem.href || ""}>
                            <subItem.icon className="icon-base" />
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      ) : (
                        <SidebarGroupContent>
                          <SidebarMenuButton
                            onClick={() => setIsSubOpen(!isSubOpen)}
                            className="cursor-pointer flex items-center justify-between rounded-base hover:bg-gray-100"
                          >
                            <div className="flex items-center gap-2">
                              <subItem.icon className="icon-base" />
                              <span>{subItem.title}</span>
                            </div>
                            {!isSubOpen ? (
                              <ChevronRight className="icon-base" />
                            ) : (
                              <ChevronDown className="icon-base" />
                            )}
                          </SidebarMenuButton>

                          {isSubOpen && (
                            <SidebarMenu>
                              {subItem.subGroup!.map((subItem, index) => (
                                <SidebarMenuItem key={index}>
                                  <SidebarMenuButton
                                    asChild
                                    className={`${
                                      pathname === subItem.href && "bg-gray-100"
                                    } rounded-base hover:bg-gray-100 px-8`}
                                  >
                                    <Link href={subItem.href}>
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              ))}
                            </SidebarMenu>
                          )}
                        </SidebarGroupContent>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </Fragment>
          ))}
        </SidebarGroup>

        <SidebarFooter className="p-0 absolute bottom-0 border-t w-full text-center bg-muted">
          <p className="sub-title-semi-sm underline cursor-pointer">
            Powered by QSoftX
          </p>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
