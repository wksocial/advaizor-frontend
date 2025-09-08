import Header from "@/components/Header";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
