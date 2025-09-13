"use client";

import AvatarDropdown from "@/components/AvatarDropdown";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const routeTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/ai-chat": "AI Academic Advaisor",
    "/programs": "Programs",
    "/planner": "Program Planner",
    "/feedback": "Feedback",
    "/profile": "Profile",
  };

  const pageTitle = routeTitles[pathname] || "";

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 ml-64 flex flex-col bg-white h-screen overflow-y-auto">
        {/* Header */}
        <header className="h-[7%] flex items-center justify-between pt-4 px-6 relative">
          <h1 className="text-3xl font-bold text-black-primary">{pageTitle}</h1>

          <div className="flex items-center gap-6">
            {/* Notification Bell */}
            <button className="relative p-2 rounded-full hover:bg-gray-secondary cursor-pointer">
              <Image
                src="/images/dashboard/notification.svg"
                alt="Bell"
                width={20}
                height={20}
                className="w-7 h-7"
              />
              <span className="absolute -top-0 -right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-primary rounded-full">
                8
              </span>
            </button>

            {/* Avatar Dropdown */}
            <AvatarDropdown />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 px-6 py-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
