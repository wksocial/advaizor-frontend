"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-indigo-200/60 via-white to-orange-100 px-[20%]">
      <div className="w-full bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl px-12 py-18">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-[#1E293B]">
            Welcome back <span className="inline-block">👋</span>
          </h2>
          <p className="text-[#7C7C7C] text-base mt-2">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-[#1E293B] mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="i.e. davon@mail.com"
              className="w-full rounded-lg border border-[#C2C2C2] mt-2 px-5 py-3 text-base focus:ring-indigo-500 outline-none placeholder:text-[#777777]"
            />
          </div>

          <div className="relative">
            <label className="block text-lg font-medium text-[#1E293B] mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#C2C2C2] px-5 py-3 text-base focus:ring-indigo-500 outline-none placeholder:text-[#777777]"
            />
            <span
              className="absolute right-4 top-11 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Image
                  src="/images/auth/closedEye.svg"
                  alt="eye"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/images/auth/eye.svg"
                  alt="eye"
                  width={20}
                  height={20}
                />
              )}
            </span>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded-[5px] border-[#334155] text-orange-500 focus:ring-indigo-500"
              />
              <span className="text-sm text-[#1E293B]">Remember me</span>
            </label>
            <Link
              href={"/forget-password/reset-email"}
              className="text-[#1E293B] hover:underline"
            >
              Forgot Password!
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-red-600 cursor-pointer text-white font-medium py-3 rounded-full transition"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-[#D1D5DB]"></div>
          <span className="text-[#464646] text-sm">Or sign in with</span>
          <div className="flex-1 h-px bg-[#D1D5DB]"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#C2C2C2] rounded-xl py-3 cursor-pointer transition">
            <Image
              src={"/images/auth/google.svg"}
              alt={"Google"}
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-[#111827]">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#C2C2C2] rounded-xl py-3 cursor-pointer transition">
            <Image
              src={"/images/auth/linkedin.svg"}
              alt={"Linkedin"}
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-[#111827]">LinkedIn</span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-[#64748B] mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href={"/signup"}
            className="text-orange-500 hover:underline font-medium"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
