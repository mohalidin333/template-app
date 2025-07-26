import { Send, Trash2 } from "lucide-react";
import React from "react";

export default function ChatSection<T extends Record<string, any>>({
  ChatItems,
}: {
  ChatItems: T[];
}) {
  return (
    <div className="md:order-2 order-1 min-w-[300px] relative bg-white rounded-md border w-full w-full">
      <header className="gap-4 justify-between flex items-center h-[60px] p-4 border-b">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
          <span className="title-semi-base">John Doe</span>
        </div>

        <button className="cursor-pointer">
          <Trash2 size={15} />
        </button>
      </header>

      {/* chats */}
      <ul className="max-h-[calc(100vh-290px)] overflow-y-auto p-6 flex flex-col gap-2">
        {ChatItems.map((chat, index) => (
          <li
            key={index}
            className={`${
              chat.sender === "Me"
                ? "self-end bg-blue-500 text-white"
                : "self-start bg-gray-200"
            }  p-4 py-2 rounded-md`}
          >
            <div className="flex flex-col gap-2">
              <p>{chat.message}</p>
              <span
                className={`${
                  chat.sender === "Me"
                    ? "text-right text-gray-200"
                    : "text-gray-600"
                } text-xs`}
              >
                {chat.timestamp}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* input */}
      <div className="bg-white absolute bottom-0 left-0 right-0 left-0 p-4 flex items-center gap-4 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 rounded-md border"
        />
        <button className="cursor-pointer">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
