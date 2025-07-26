"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const ChatItems = [
  {
    id: 1,
    sender: "John Doe",
    message: "Hey, how's the project coming along?",
    created_at: "2023-01-01",
  },
  {
    id: 2,
    sender: "Jane Smith",
    message: "Meeting at 2 PM tomorrow",
    created_at: "2023-01-01",
  },
  {
    id: 3,
    sender: "Team Updates",
    message: "New features deployed to staging",
    time: "Jul 20",
    created_at: "2023-01-01",
  },
  {
    id: 4,
    sender: "Alex Johnson",
    message: "Can you review my PR when you get a chance?",
    created_at: "2023-01-01",
  },
  {
    id: 5,
    sender: "Support Team",
    message: "Your ticket #4567 has been resolved",
    created_at: "2023-01-01",
  },
];

export default function Chats() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* chat icon */}
      <div onClick={handleToggle} className="relative cursor-pointer px-1">
        <Button asChild variant={"ghost"} size={"icon"} className="">
          <MessageCircle className="icon-md" />
        </Button>
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-[10px] h-[15px] w-[15px] grid place-items-center">
          {ChatItems.length > 9 ? "9+" : ChatItems.length}
        </span>
      </div>

      {/* modal */}
      {isOpen && (
        <div onClick={handleToggle} className="fixed inset-0 z-10">
          <Card
            onClick={(e) => e.stopPropagation()}
            className="absolute top-2 md:right-25 right-0 md:max-w-80 w-full max-h-[80vh] overflow-hidden"
          >
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Chats</CardTitle>
                <CardAction onClick={handleToggle} className="cursor-pointer">
                  <X className="icon-base" />
                </CardAction>
              </div>
            </CardHeader>

            <CardContent className="max-h-[80vh] overflow-y-auto">
              <ul className="space-y-4">
                {ChatItems.map((item, index) => (
                  <li
                    onClick={() => router.push(`/chats/${item.id}`)}
                    key={index}
                    className="border-b pb-4 cursor-pointer"
                  >
                    <p className="font-semibold">{item.sender}</p>
                    <p>{item.message}</p>
                    <span className="sub-title-sm">{item.created_at}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
