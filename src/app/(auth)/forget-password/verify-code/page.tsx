"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const VerifyCodePage = () => {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus to next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-indigo-200/60 via-white to-orange-100 px-[20%]">
      <div className="w-full max-w-lg bg-[#FFFFFF8C] backdrop-blur-xl shadow-xl rounded-2xl px-12 py-12 text-center">
        {/* Illustration */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/auth/code.svg"
            alt="Verification Illustration"
            width={120}
            height={120}
          />
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[#1E293B]">Enter Your Code</h2>
          <p className="text-[#7C7C7C] text-base mt-2">
            We sent a code to{" "}
            <span className="font-semibold">johnmilton@gmail.com</span>
          </p>
        </div>

        {/* Code Inputs */}
        <div className="flex justify-center gap-4 mb-6">
          {code.map((digit, idx) => (
            <input
              key={idx}
              id={`code-${idx}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              className="w-14 h-14 text-center border border-gray-300 rounded-full text-2xl font-bold focus:ring-2 focus:ring-orange-400 outline-none"
            />
          ))}
        </div>

        <p className="text-sm text-[#7C7C7C] mb-6">
          Didn&apos;t get the code?{" "}
          <button className="text-orange-500 font-medium cursor-pointer hover:underline">
            Resend
          </button>
        </p>

        {/* Continue Button */}
        <Link href="/forget-password/set-password" className="block">
          <button
            type="button"
            className="w-full bg-orange-500 hover:bg-red-600 cursor-pointer text-white font-medium py-3 rounded-full transition"
          >
            Continue
          </button>
        </Link>

        {/* Back Button */}
        <Link
          href="/forget-password/reset-email"
          className="w-full block text-center border border-[#C2C2C2] bg-white text-[#111827] font-medium py-3 rounded-full mt-3 hover:bg-gray-50 transition"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default VerifyCodePage;
