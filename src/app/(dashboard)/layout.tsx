"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  // Map routes to header titles
  const routeTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/ai-chat": "AI Academic Advaisor",
    "/programs": "Programs",
    "/planner": "Program Planner",
    "/feedback": "Feedback",
    "/profile": "Profile",
  };

  // Get title from map (fallback: empty string)
  const pageTitle = routeTitles[pathname] || "";

  // Function to check if link is active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B1221] text-white flex flex-col">
        {/* Logo */}
        <Image
          src={"/images/dashboard/logo.svg"}
          alt="Logo"
          width={200}
          height={200}
          className="px-8 py-8 cursor-pointer"
        />

        <div className="border-t border-gray-primary mx-8 pb-6"></div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-6 py-2 rounded-full transition ${
              isActive("/dashboard")
                ? "bg-gray-tertiary"
                : "hover:bg-gray-tertiary"
            }`}
          >
            <Image
              src="/images/dashboard/dashboard.svg"
              alt="Dashboard"
              width={20}
              height={20}
              className="w-6 h-6"
            />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/ai-chat"
            className={`flex items-center gap-3 px-6 py-2 rounded-full transition ${
              isActive("/ai-chat")
                ? "bg-gray-tertiary"
                : "hover:bg-gray-tertiary"
            }`}
          >
            <Image
              src="/images/dashboard/ai.svg"
              alt="AI"
              width={20}
              height={20}
              className="w-6 h-6"
            />
            <span>AI Advaizor</span>
          </Link>

          <Link
            href="/programs"
            className={`flex items-center gap-3 px-6 py-2 rounded-full transition ${
              isActive("/programs")
                ? "bg-gray-tertiary"
                : "hover:bg-gray-tertiary"
            }`}
          >
            <Image
              src="/images/dashboard/book.svg"
              alt="Programs"
              width={20}
              height={20}
              className="w-6 h-6"
            />
            <span>Programs</span>
          </Link>

          <Link
            href="/planner"
            className={`flex items-center gap-3 px-6 py-2 rounded-full transition ${
              isActive("/planner")
                ? "bg-gray-tertiary"
                : "hover:bg-gray-tertiary"
            }`}
          >
            <Image
              src="/images/dashboard/planner.svg"
              alt="Planner"
              width={20}
              height={20}
              className="w-6 h-6"
            />
            <span>Program Planner</span>
          </Link>

          <Link
            href="/feedback"
            className={`flex items-center gap-3 px-6 py-2 rounded-full transition ${
              isActive("/feedback")
                ? "bg-gray-tertiary"
                : "hover:bg-gray-tertiary"
            }`}
          >
            <Image
              src="/images/dashboard/feedback.svg"
              alt="Feedback"
              width={20}
              height={20}
              className="w-6 h-6"
            />
            <span>Feedback</span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="bg-white flex-1 flex flex-col">
        {/* Header */}
        <header className="h-[7%] flex items-center justify-between pt-4 px-6">
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
              {/* Notification Badge */}
              <span className="absolute -top-0 -right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-primary rounded-full">
                8
              </span>
            </button>

            {/* User Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer">
              <Link href="/profile">
                <Image
                  src="/images/dashboard/avatar.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 px-6 py-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
