"use client";

import EditProfileComponent from "@/components/EditProfileComponent";
import GeneralSettingsComponent from "@/components/GeneralSettingsComponent";
import PasswordSettingsComponent from "@/components/PasswordSettingsComponent";
import React, { useState } from "react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("General");

  const tabs = ["General", "Password", "Edit Profile"];

  const renderContent = () => {
    switch (activeTab) {
      case "General":
        return <GeneralSettingsComponent/>;
      case "Password":
        return <PasswordSettingsComponent/>;
      case "Edit Profile":
        return <EditProfileComponent/>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      {/* Tabs */}
      <div className="flex border-b-[3px] border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative py-2 px-6 font-medium text-lg cursor-pointer transition-colors duration-300 ${
              activeTab === tab
                ? "text-blue-secondary"
                : "text-black-primary hover:text-blue-secondary"
            }`}
          >
            {tab}
            {/* underline effect */}
            <span
              className={`absolute bottom-[-3px] left-0 h-[3px] w-full transition-all duration-300 ${
                activeTab === tab ? "bg-blue-secondary" : "bg-transparent"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-background-primary mt-6 p-3 flex flex-col gap-6 rounded-[20px] border border-gray-border">{renderContent()}</div>
    </div>
  );
};

export default ProfilePage;
