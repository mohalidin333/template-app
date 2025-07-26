"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Bell, X } from "lucide-react";
import React, { useState } from "react";

export const NotificationItems = [
  {
    id: 1,
    message: "Your subscription expires in 7 days",
    created_at: "2023-01-01",
  },
  {
    id: 2,
    message: "You have a new message from customer support",
    created_at: "2023-01-02",
  },
  {
    id: 3,
    message: "Your profile has been successfully updated",
    created_at: "2023-01-03",
  },
  {
    id: 4,
    message: "There was an issue processing your last payment",
    created_at: "2023-01-04",
  },
  {
    id: 5,
    message: "New update available for your app",
    created_at: "2023-01-05",
  },
  {
    id: 6,
    message: "You have been added to the project: 'Team Alpha'",
    created_at: "2023-01-06",
  },
  {
    id: 7,
    message: "Your password was successfully changed",
    created_at: "2023-01-07",
  },
  {
    id: 8,
    message: "Reminder: Complete your profile to enjoy full features",
    created_at: "2023-01-08",
  },
  {
    id: 9,
    message:
      "Your account has been temporarily suspended due to suspicious activity",
    created_at: "2023-01-09",
  },
  {
    id: 10,
    message: "New product launch alert: Check out the latest features",
    created_at: "2023-01-10",
  },
];

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* bell icon */}
      <div onClick={handleToggle} className="relative cursor-pointer px-1">
        <Button asChild variant={"ghost"} size={"icon"} className="">
          <Bell className="icon-md" />
        </Button>
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-[10px] h-[15px] w-[15px] grid place-items-center">
          {NotificationItems.length > 9 ? "9+" : NotificationItems.length}
        </span>
      </div>

      {/* modal */}
      {isOpen && (
        <div onClick={handleToggle} className="fixed inset-0 z-10">
          <Card
            onClick={(e) => e.stopPropagation()}
            className="absolute top-2 md:right-15 right-0 md:max-w-80 w-full w-full max-h-[80vh] overflow-hidden"
          >
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Notifications</CardTitle>
                <CardAction onClick={handleToggle} className="cursor-pointer">
                  <X className="icon-base" />
                </CardAction>
              </div>
            </CardHeader>

            <CardContent className="max-h-[80vh] overflow-y-auto">
              <ul className="space-y-4">
                {NotificationItems.map((item, index) => (
                  <li key={index} className="border-b pb-4">
                    <p className="text-sm">{item.message}</p>
                    <span className="sub-title-sm">
                      {item.created_at}
                    </span>
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
