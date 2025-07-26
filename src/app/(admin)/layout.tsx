import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Chats from "@/components/chats";
import Notifications from "@/components/notifications";
import Profile from "@/components/profile-drawer";

export default function Admin({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar role="Admin" />
      <div className="bg-two flex flex-col h-screen w-full flex flex-col">
        <header className="bg-white flex items-center gap-4 justify-between px-4 h-14 border-b">
          <SidebarTrigger className="cursor-pointer" />

          <div className="flex items-center gap-4">
            <Chats />
            <Notifications />
            <Profile role="Admin" />
          </div>
        </header>
        {children}
      </div>
    </SidebarProvider>
  );
}
