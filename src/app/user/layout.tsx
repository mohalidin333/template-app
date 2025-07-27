import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Chats from "@/components/chats";
import Notifications from "@/components/notifications";
import Profile from "@/components/profile-drawer";
import { Toaster } from "sonner";
import { ReactQueryProvider } from "@/providers/react-query";

export default function User({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <SidebarProvider>
        <AppSidebar role="User" />
        <div className="bg-two flex flex-col h-screen w-full">
          <header className="bg-white flex items-center gap-4 justify-between px-4 h-14 border-b">
            <SidebarTrigger className="cursor-pointer" />
            <div className="flex items-center gap-4">
              <Chats />
              <Notifications />
              <Profile role="User" />
            </div>
          </header>
          {children}
          <Toaster />
        </div>
      </SidebarProvider>
    </ReactQueryProvider>
  );
}
