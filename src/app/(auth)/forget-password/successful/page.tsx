"use client";
import Image from "next/image";
import Link from "next/link";

const ResetCompletePage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-indigo-200/60 via-white to-orange-100 px-[20%]">
      <div className="w-full max-w-lg bg-[#FFFFFF8C] backdrop-blur-xl shadow-xl rounded-2xl px-12 py-16 text-center">
        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/auth/success.svg"
            alt="Success Illustration"
            width={120}
            height={120}
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#1E293B] mb-2">Complete!</h2>
        <p className="text-[#7C7C7C] text-base mb-8">
          Your password has been reset successfully!
        </p>

        {/* Go To Login Button */}
        <Link
          href="/signin"
          className="w-full block text-center bg-orange-500 hover:bg-red-600 cursor-pointer text-white font-medium py-3 rounded-full transition"
        >
          Go To Login
        </Link>
      </div>
    </div>
  );
};

export default ResetCompletePage;
