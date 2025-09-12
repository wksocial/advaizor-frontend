import Image from "next/image";
import { useState } from "react";

const GeneralSettingsComponent = () => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Gender");

  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [cityOpen, setCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const genderOptions = ["Male", "Female", "Other"];

  return (
    <div className="">
      {/* Header */}
      <div className="flex items-center justify-between bg-white border border-gray-border rounded-[20px] p-6 mb-3">
        <div className="flex items-center gap-4">
          <Image
            src={"/images/dashboard/avatar.png"}
            alt={"Avatar"}
            width={80}
            height={80}
            className={"w-20 h-20"}
          />
          <h2 className="text-2xl font-medium text-blue-primary">
            Martine Donaldo
          </h2>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-blue-primary rounded-full text-black-primary hover:bg-gray-100 cursor-pointer">
            Delete Picture
          </button>
          <button className="px-4 py-2 border border-blue-primary rounded-full text-black-primary hover:bg-gray-100 cursor-pointer">
            Change Picture
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="border border-gray-border rounded-[20px] p-5 lg:p-6 bg-white">
          <h3 className="text-lg font-medium mb-4">Personal information</h3>
          <div className="space-y-5">
            {/* First Name */}
            <div>
              <label className="block text-base font-medium text-black-primary">
                First name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full mt-1 px-3 py-2 border border-gray-border rounded-md focus:outline-none placeholder:text-gray-primary"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-base font-medium text-black-primary">
                Last name
              </label>
              <input
                type="text"
                placeholder="Milton"
                className="w-full mt-1 px-3 py-2 border border-gray-border rounded-md focus:outline-none placeholder:text-gray-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-base font-medium text-black-primary">
                Email Address
              </label>
              <div className="relative">
                <Image
                  src="/images/dashboard/envelope.svg"
                  width={20}
                  height={20}
                  alt="envelope"
                  className="absolute left-3 top-1/2 -translate-y-1/2 "
                />
                <input
                  type="email"
                  placeholder="johnmilton@gmail.com"
                  className="w-full mt-1 pl-10 pr-3 py-2 border border-gray-border rounded-md focus:outline-none placeholder:text-gray-primary"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-base font-medium text-black-primary">
                Phone Number
              </label>
              <div className="flex items-center border border-gray-border rounded-md overflow-hidden">
                <span className="px-3 border-r border-gray-border">🇺🇸</span>
                <input
                  type="tel"
                  placeholder="(+1) 1632 960001"
                  className="flex-1 px-3 py-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Gender */}
            <div className="relative">
              <label className="block mb-1 text-base font-medium text-black-primary">
                Gender
              </label>

              {/* Trigger */}
              <div
                className="flex items-center justify-between bg-white border border-gray-border focus:outline-none rounded-md p-[10px] text-sm cursor-pointer"
                onClick={() => setGenderOpen(!genderOpen)}
              >
                <span
                  className={
                    selectedGender === "Gender"
                      ? "text-gray-primary"
                      : "text-black-primary"
                  }
                >
                  {selectedGender}
                </span>
                <Image
                  src="/images/dashboard/arrowDown.svg"
                  alt="Down"
                  width={20}
                  height={20}
                  className={`w-5 h-5 transition-transform duration-300 ${
                    genderOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Options */}
              <div
                className={`absolute z-10 top-full left-0 w-full bg-white border border-gray-border rounded-md mt-2 shadow-md overflow-hidden transition-all duration-300 ${
                  genderOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {genderOptions.map((opt) => (
                  <div
                    key={opt}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedGender(opt);
                      setGenderOpen(false);
                    }}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </div>

            {/* Birth Date */}
            <div>
              <label className="block text-base font-medium text-black-primary">
                Birth Date
              </label>
              <div className="relative">
                <Image
                  src="/images/dashboard/calendar.svg"
                  width={20}
                  height={20}
                  alt="calendar"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="date"
                  className="w-full mt-1 pl-10 pr-3 py-2 border border-gray-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Personal Address & Resume */}
        <div className="space-y-6">
          <div className="border border-gray-border rounded-[20px] p-5 lg:p-6 bg-white">
            <h3 className="text-xl font-medium mb-4">Personal Address</h3>
            <div className="space-y-5">
              {/* Country */}
              <div className="relative">
                <label className="block mb-1 text-base font-medium text-black-primary">
                  Country
                </label>

                {/* Trigger */}
                <div
                  className="flex items-center justify-between bg-white border border-gray-border rounded-md p-[10px] text-sm cursor-pointer"
                  onClick={() => setCountryOpen(!countryOpen)}
                >
                  <span className={`${selectedCity ? "text-black-primary" : "text-gray-primary"}`}>{selectedCountry || "Select Country"}</span>
                  <Image
                    src="/images/dashboard/arrowDown.svg"
                    alt="Down"
                    width={20}
                    height={20}
                    className={`w-5 h-5 transition-transform duration-300 ${
                      countryOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Options */}
                <div
                  className={`absolute z-10 top-full left-0 w-full bg-white border border-gray-border rounded-md mt-2 shadow-md overflow-hidden transition-all duration-300 ${
                    countryOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {["United States", "Canada", "UK"].map((opt) => (
                    <div
                      key={opt}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCountry(opt);
                        setCountryOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              </div>

              {/* City */}
              <div className="relative">
                <label className="block mb-1 text-base font-medium text-black-primary">
                  City
                </label>

                {/* Trigger */}
                <div
                  className="flex items-center justify-between bg-white border border-gray-border rounded-md p-[10px] text-sm cursor-pointer"
                  onClick={() => setCityOpen(!cityOpen)}
                >
                  <span className={`${selectedCity ? "text-black-primary" : "text-gray-primary"}`}>{selectedCity || "Select City"}</span>
                  <Image
                    src="/images/dashboard/arrowDown.svg"
                    alt="Down"
                    width={20}
                    height={20}
                    className={`w-5 h-5 transition-transform duration-300 ${
                      cityOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Options */}
                <div
                  className={`absolute z-10 top-full left-0 w-full bg-white border border-gray-border rounded-md mt-2 shadow-md overflow-hidden transition-all duration-300 ${
                    cityOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {["Portland", "New York", "Los Angeles"].map((opt) => (
                    <div
                      key={opt}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCity(opt);
                        setCityOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <div className="border border-gray-border rounded-[20px] p-5 lg:p-6 bg-white">
            <h3 className="text-xl font-medium mb-4">Resume</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border border-gray-border rounded-lg p-3">
                <div className="flex gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M25.0001 28.0005H6.99908C6.73387 28.0005 6.47951 27.8951 6.29198 27.7076C6.10444 27.5201 5.99908 27.2657 5.99908 27.0005V5.00049C5.99908 4.73527 6.10444 4.48092 6.29198 4.29338C6.47951 4.10585 6.73387 4.00049 6.99908 4.00049H19.0001L26.0001 11.0005V27.0005C26.0001 27.1318 25.9742 27.2618 25.9239 27.3832C25.8737 27.5045 25.8 27.6147 25.7072 27.7076C25.6143 27.8005 25.5041 27.8741 25.3827 27.9244C25.2614 27.9746 25.1314 28.0005 25.0001 28.0005Z"
                      stroke="#197CEF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9999 4.00049V11.0005H26.0009"
                      stroke="#197CEF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16.9995H20"
                      stroke="#197CEF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 21H20"
                      stroke="#197CEF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <p className="text-blue-secondary font-medium">
                      Professional Resume
                    </p>
                    <span className="text-sm text-gray-500">3.5 MB</span>
                  </div>
                </div>
                <button className="text-gray-500">
                  <Image
                    src="/images/dashboard/dotMenu.svg"
                    alt="Down"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </button>
              </div>
              <div className="flex justify-between items-center border border-gray-border rounded-lg p-3">
                <div className="flex gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M25.0001 28.0005H6.99908C6.73387 28.0005 6.47951 27.8951 6.29198 27.7076C6.10444 27.5201 5.99908 27.2657 5.99908 27.0005V5.00049C5.99908 4.73527 6.10444 4.48092 6.29198 4.29338C6.47951 4.10585 6.73387 4.00049 6.99908 4.00049H19.0001L26.0001 11.0005V27.0005C26.0001 27.1318 25.9742 27.2618 25.9239 27.3832C25.8737 27.5045 25.8 27.6147 25.7072 27.7076C25.6143 27.8005 25.5041 27.8741 25.3827 27.9244C25.2614 27.9746 25.1314 28.0005 25.0001 28.0005Z"
                      stroke="#197CEF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9999 4.00049V11.0005H26.0009"
                      stroke="#197CEF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16.9995H20"
                      stroke="#197CEF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 21H20"
                      stroke="#197CEF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <p className="text-blue-secondary font-medium">
                      Professional Resume
                    </p>
                    <span className="text-sm text-gray-500">3.5 MB</span>
                  </div>
                </div>
                <button className="text-gray-500">
                  <Image
                    src="/images/dashboard/dotMenu.svg"
                    alt="Down"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </button>
              </div>

              <button className="w-full border text-sm font-bold cursor-pointer rounded-full py-3 flex items-center justify-center text-orange-primary bg-[#FFF1EE] hover:bg-orange-primary hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <path
                    d="M16.4999 28.0005C23.1274 28.0005 28.4999 22.6279 28.4999 16.0005C28.4999 9.37307 23.1274 4.00049 16.4999 4.00049C9.87252 4.00049 4.49994 9.37307 4.49994 16.0005C4.49994 22.6279 9.87252 28.0005 16.4999 28.0005Z"
                    stroke="#F34822"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M11.5001 16.0005H21.5001"
                    stroke="#F34822"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.4999 10.9995V20.9995"
                    stroke="#F34822"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add CV/Resume
              </button>
            </div>
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

export default GeneralSettingsComponent;
