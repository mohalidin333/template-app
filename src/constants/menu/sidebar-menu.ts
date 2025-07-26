import {
  DatabaseBackup,
  FilePieChart,
  FileSearch,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

export const SidebarMenu = {
  Admin: [
    // Monitoring Section
    {
      group: "Monitoring",
      sub: [
        {
          title: "Dashboard",
          href: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Users",
          href: "/users",
          icon: Users,
        },
        {
          title: "Audit Logs",
          href: "/audit-logs",
          icon: FileSearch,
        },
        {
          title: "Reports",
          href: "/reports",
          icon: FilePieChart,
        },
      ],
    },

    // Administration Section
    {
      group: "Administration",
      sub: [
        {
          title: "Backup & Restore",
          href: "/backup-restore",
          icon: DatabaseBackup,
        },
        {
          title: "Settings",
          icon: Settings,
          subGroup: [
            {
              title: "Options",
              href: "/settings/options",
            },
            {
              title: "CMS",
              href: "/settings/cms",
            },
          ],
        },
      ],
    },
  ],

  User: [
    // User Workspace
    {
      group: "Workspace",
      sub: [
        {
          title: "Dashboard",
          href: "/user/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Settings",
          icon: Settings,
          subGroup: [
            {
              title: "Global Settings",
              href: "/settings/global",
            },
            {
              title: "Module Settings",
              href: "/settings/modules",
            },
            {
              title: "API Settings",
              href: "/settings/api",
            },
          ],
        },
      ],
    },
  ],
} as const;
