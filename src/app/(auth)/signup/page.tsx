"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-indigo-200/60 via-white to-orange-tertiary px-[20%]">
      <div className="w-full bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl px-12 py-12">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-black-primary">Sign Up</h2>
          <p className="text-gray-primary text-base mt-2">
            Elevate your experience, sign up today
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium text-black-primary mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-lg border border-gray-secondary px-5 py-3 text-base focus:ring-indigo-500 outline-none placeholder:text-gray-primary"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-black-primary mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full rounded-lg border border-gray-secondary px-5 py-3 text-base focus:ring-indigo-500 outline-none placeholder:text-gray-primary"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-black-primary mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-secondary px-5 py-3 text-base focus:ring-indigo-500 outline-none placeholder:text-gray-primary"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-lg font-medium text-black-primary mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-secondary px-5 py-3 text-base focus:ring-indigo-500 outline-none placeholder:text-gray-primary"
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

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-lg font-medium text-black-primary mb-1">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-secondary px-5 py-3 text-base focus:ring-indigo-500 outline-none placeholder:text-gray-primary"
            />
            <span
              className="absolute right-4 top-11 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
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

          {/* Terms & Conditions */}
          <div className="flex items-center text-sm text-black-secondary">
            <input
              type="checkbox"
              className="h-4 w-4 mr-2 rounded-[5px] border-gray-secondary"
            />
            <span>
              I agree to the{" "}
              <Link href="#" className="text-orange-primary hover:underline">
                Terms & Conditions
              </Link>{" "}
              Or I agree to the{" "}
              <Link href="#" className="text-orange-primary hover:underline">
                Privacy Policy
              </Link>
            </span>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-orange-primary hover:bg-red-600 cursor-pointer text-white font-medium py-3 rounded-full transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-gray-secondary"></div>
          <span className="text-black-secondary text-sm">Or sign up with</span>
          <div className="flex-1 h-px bg-gray-secondary"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-secondary rounded-xl py-3 cursor-pointer transition">
            <Image
              src={"/images/auth/google.svg"}
              alt={"Google"}
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-black-primary">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-secondary rounded-xl py-3 cursor-pointer transition">
            <Image
              src={"/images/auth/linkedin.svg"}
              alt={"Linkedin"}
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-black-primary">LinkedIn</span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-primary mt-6">
          Already have account?{" "}
          <Link
            href={"/signin"}
            className="text-orange-primary hover:underline font-medium"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
