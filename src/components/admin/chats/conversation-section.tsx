import React from "react";

export default function ConversationSection<T extends Record<string, any>>({
  ConversationItems,
}: {
  ConversationItems: T[];
}) {
  return (
    <div className="md:order-1 order-2 bg-white rounded-md border w-full md:max-w-[300px]">
      <header className="flex items-center h-[60px] p-4 border-b">
        <span className="title-semi-base">Conversations</span>
      </header>
      {/* conversations */}
      <ul className="max-h-[calc(100vh-215px)] overflow-y-auto p-4 flex flex-col gap-4">
        {ConversationItems.map((conversation, index) => (
          <li key={index} className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="flex-col flex">
              <div className="flex items-center gap-2">
                <span className="font-medium">{conversation.name}</span>
                <span className="text-xs text-gray-600">
                  {conversation.timestamp}
                </span>
              </div>
              <p className="text-sm text-gray-600 truncate max-w-[200px]">
                {conversation.lastMessage}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
