"use client";
import Image from "next/image";
import { useState } from "react";

const PasswordSettingsComponent = () => {
  const [currentPassword, setCurrentPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const devices = [
    {
      name: 'Dell 24"',
      location: "London, UK",
      date: "May 12, 2023 at 2:30 AM",
      icon: "/images/dashboard/laptop.svg", // replace with your monitor icon
    },
    {
      name: "iPhone 11 pro",
      location: "London, UK",
      date: "May 12, 2023 at 2:30 AM",
      icon: "/images/dashboard/phone.svg", // replace with your mobile icon
    },
  ];

  return (
    <div className="">
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-border rounded-[20px] p-5 lg:p-6 bg-white">
          <div className="flex items-center gap-5 mb-7">
            <span className="bg-[#CFE6FF] rounded-full h-18 w-18 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M43 24C43 34.4934 34.4934 43 24 43C13.5067 43 5 34.4934 5 24C5 13.5066 13.5067 5 24 5C31.7912 5 38.4872 9.68956 41.419 16.4M43 11L42.05 17.35L36 16"
                  stroke="#197CEF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 22V19C20 16.7909 21.7908 15 24 15C26.2092 15 28 16.7909 28 19V22M22.5 33H25.5C27.8456 33 29.0184 33 29.8262 32.38C30.0342 32.2204 30.2204 32.0342 30.38 31.8262C31 31.0184 31 29.8456 31 27.5C31 25.1544 31 23.9816 30.38 23.1738C30.2204 22.9658 30.0342 22.7796 29.8262 22.62C29.0184 22 27.8456 22 25.5 22H22.5C20.1544 22 18.9816 22 18.1737 22.62C17.9657 22.7796 17.7795 22.9658 17.6199 23.1738C17 23.9816 17 25.1544 17 27.5C17 29.8456 17 31.0184 17.6199 31.8262C17.7795 32.0342 17.9657 32.2204 18.1737 32.38C18.9816 33 20.1544 33 22.5 33Z"
                  stroke="#197CEF"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3 className="text-2xl font-medium">Change Password</h3>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-medium text-black-primary">Password</h4>

            <div>
              <label className="block text-base font-medium text-black-primary">
                Current Password
              </label>
              <div className="relative">
                {/* Left Icon */}
                <Image
                  src="/images/dashboard/lock.svg"
                  width={20}
                  height={20}
                  alt="lock"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />

                {/* Input */}
                <input
                  type={currentPassword ? "text" : "password"}
                  placeholder="**********"
                  className="w-full mt-1 pl-10 pr-10 py-2 border border-gray-border rounded-md focus:outline-none placeholder:text-gray-primary"
                />

                {/* Right Icon (Eye) */}
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setCurrentPassword(!currentPassword)}
                >
                  {currentPassword ? (
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
            </div>

            <div>
              <label className="block text-base font-medium text-black-primary">
                New Password
              </label>
              <div className="relative">
                {/* Left Icon */}
                <Image
                  src="/images/dashboard/lock.svg"
                  width={20}
                  height={20}
                  alt="lock"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />

                {/* Input */}
                <input
                  type={newPassword ? "text" : "password"}
                  placeholder="**********"
                  className="w-full mt-1 pl-10 pr-10 py-2 border border-gray-border rounded-md focus:outline-none placeholder:text-gray-primary"
                />

                {/* Right Icon (Eye) */}
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setNewPassword(!newPassword)}
                >
                  {newPassword ? (
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
            </div>

            <div>
              <label className="block text-base font-medium text-black-primary">
                Confirm Password
              </label>
              <div className="relative">
                {/* Left Icon */}
                <Image
                  src="/images/dashboard/lock.svg"
                  width={20}
                  height={20}
                  alt="lock"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />

                {/* Input */}
                <input
                  type={confirmPassword ? "text" : "password"}
                  placeholder="**********"
                  className="w-full mt-1 pl-10 pr-10 py-2 border border-gray-border rounded-md focus:outline-none placeholder:text-gray-primary"
                />

                {/* Right Icon (Eye) */}
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setConfirmPassword(!confirmPassword)}
                >
                  {confirmPassword ? (
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
            </div>
          </div>
        </div>

        {/* <div className="border border-gray-border rounded-[20px] p-5 lg:p-6 bg-white">
          <span className="bg-[#CFE6FF] rounded-full h-18 w-18 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M41 33V17C41 12.286 41 9.92894 39.5354 8.46446C38.071 7 35.714 7 31 7H17C12.286 7 9.92892 7 8.46446 8.46446C7 9.92894 7 12.286 7 17V33"
                stroke="#197CEF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M43.9684 41H4.03158C3.2657 41 2.76758 40.2176 3.1101 39.5528L7 33H41L44.8898 39.5528C45.2324 40.2176 44.7342 41 43.9684 41Z"
                stroke="#197CEF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

        </div> */}
        <div className="border border-gray-border rounded-[20px] p-5 lg:p-6 bg-white">
          {/* Top Icon */}
          <div className="bg-[#CFE6FF] rounded-full h-18 w-18 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M41 33V17C41 12.286 41 9.92894 39.5354 8.46446C38.071 7 35.714 7 31 7H17C12.286 7 9.92892 7 8.46446 8.46446C7 9.92894 7 12.286 7 17V33"
                stroke="#197CEF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M43.9684 41H4.03158C3.2657 41 2.76758 40.2176 3.1101 39.5528L7 33H41L44.8898 39.5528C45.2324 40.2176 44.7342 41 43.9684 41Z"
                stroke="#197CEF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-black-primary mb-2">
            Your Devices
          </h2>
          <p className="text-gray-primary text-base font-normal mb-6">
            Your devices linked to this account in ED analytics
          </p>

          {/* Logout All */}
          <button className="w-full bg-[#FFF1EE] hover:bg-orange-primary text-orange-primary hover:text-white cursor-pointer font-medium py-3 rounded-full mb-10">
            Log Out From All Devices
          </button>

          {/* Device List */}
          <div className="space-y-4">
            {devices.map((device, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b last:border-b-0 border-gray-200 pb-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={device.icon}
                    alt={device.name}
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <div>
                    <p className="text-base font-medium text-black-primary">
                      {device.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {device.location}, {device.date}
                    </p>
                  </div>
                </div>

                {/* Logout Single */}
                <button className="text-orange-primary cursor-pointer">
                  <Image
                    src="/images/dashboard/logout.svg"
                    alt="logout"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="w-full flex justify-between mt-6 gap-6">
        <button className="w-1/2 px-6 py-3 bg-[#E9E9E9] hover:bg-orange-primary rounded-full text-black-primary hover:text-white cursor-pointer">
          Cancel
        </button>
        <button className="w-1/2 px-6 py-3 bg-[#E9E9E9] hover:bg-orange-primary rounded-full text-black-primary hover:text-white cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
};

export default PasswordSettingsComponent;
