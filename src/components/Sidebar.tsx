"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-[#0B1221] text-white flex flex-col">
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
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
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
            isActive("/ai-chat") ? "bg-gray-tertiary" : "hover:bg-gray-tertiary"
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
            isActive("/planner") ? "bg-gray-tertiary" : "hover:bg-gray-tertiary"
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
  );
};

export default Sidebar;
