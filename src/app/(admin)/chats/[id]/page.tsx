import React from "react";
import { ConversationItems } from "@/constants/admin/chats/conversations";
import { ChatItems } from "@/constants/admin/chats/chats";
import ConversationSection from "@/components/admin/chats/conversation-section";
import ChatSection from "@/components/admin/chats/chat-section";

export default function Chats() {
  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-6">
      <div className="flex gap-4 md:flex-row flex-col">
        {/* conversations section */}
        <ConversationSection ConversationItems={ConversationItems} />

        {/* chat section */}
        <ChatSection ChatItems={ChatItems} />
      </div>
    </main>
  );
}
