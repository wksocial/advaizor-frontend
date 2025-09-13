"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const AvatarDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <Image
          src="/images/dashboard/avatar.png"
          alt="User Avatar"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out transform ${
          dropdownOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <Link
          href="/profile"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setDropdownOpen(false)}
        >
          View Profile
        </Link>
        <button
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          onClick={() => {
            setDropdownOpen(false);
            // 🔑 Add your logout logic here
            console.log("Logout clicked");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AvatarDropdown;
