import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row">
      {/* Image container */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <Image
          src="/images/auth/hero.jpg"
          alt="Auth Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Children content */}
      <div className="flex-1 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
