"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SetNewPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // TODO: Call API to update password
    console.log("Password successfully reset:", password);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-indigo-200/60 via-white to-orange-100 px-[20%]">
      <div className="w-full max-w-lg bg-[#FFFFFF8C] backdrop-blur-xl shadow-xl rounded-2xl px-12 py-12 text-center">
        {/* Illustration */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/auth/password.svg"
            alt="Password Illustration"
            width={120}
            height={120}
          />
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#1E293B]">
            Set New Password
          </h2>
          <p className="text-[#7C7C7C] text-base mt-2">
            Must be at least 6 character
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* New Password */}
          <div>
            <label className="block text-lg font-medium text-[#1E293B] mb-1">
              Add New Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-[#C2C2C2] px-5 py-3 text-base focus:ring-indigo-500 outline-none placeholder:text-[#777777]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-lg font-medium text-[#1E293B] mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border border-[#C2C2C2] px-5 py-3 text-base focus:ring-indigo-500 outline-none placeholder:text-[#777777]"
            />
          </div>

          {/* Set New Password Button */}
          <Link href="/forget-password/successful" className="block">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-red-600 cursor-pointer text-white font-medium py-3 rounded-full transition"
            >
              Set New Password
            </button>
          </Link>

          {/* Back Button */}
          <Link
            href="/forget-password/verify-code"
            className="w-full block text-center border border-[#C2C2C2] bg-white text-[#111827] font-medium py-3 rounded-full hover:bg-gray-50 transition"
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SetNewPasswordPage;
