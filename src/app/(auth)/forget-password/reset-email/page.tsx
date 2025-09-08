"use client";
import Image from "next/image";
import Link from "next/link";

const ResetEmailPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-indigo-200/60 via-white to-orange-100 px-[20%]">
      <div className="w-full max-w-lg bg-[#FFFFFF8C] backdrop-blur-xl shadow-xl rounded-2xl px-12 py-12 text-center">
        {/* Illustration */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/auth/forgot.svg"
            alt="Forget Password Illustration"
            width={120}
            height={120}
          />
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-[#1E293B]">Forget password</h2>
          <p className="text-[#7C7C7C] text-base mt-2">
            Enter your email for instruction.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div className="text-left">
            <label className="block text-lg font-medium text-[#1E293B] mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-[#C2C2C2] px-5 py-3 text-base focus:ring-indigo-500 outline-none placeholder:text-[#777777]"
            />
          </div>

          {/* Send Code Button */}
          <Link href="/forget-password/verify-code" className="block">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-red-600 cursor-pointer text-white font-medium py-3 rounded-full transition"
            >
              Send 4-Digit Code
            </button>
          </Link>

          {/* Back Button */}
          <Link
            href="/signin"
            className="w-full block text-center border border-[#C2C2C2] bg-white text-[#111827] font-medium py-3 rounded-full hover:bg-gray-50 transition"
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetEmailPage;
