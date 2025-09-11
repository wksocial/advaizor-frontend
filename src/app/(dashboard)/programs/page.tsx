"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProgramsPage = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Program Type");
  const [visibleCount, setVisibleCount] = useState(3);

  const options = ["Onsite", "Online", "Hybrid"];
  const programs = [
    {
      title: "Bachelor's in Computer Science",
      university: "Yale University",
      duration: "4 years",
      totalCost: "$45,000",
      creditCost: "$130/credit",
      totalCredit: "120",
      highlights: ["CSE", "AI", "Data Science"],
    },
    {
      title: "Bachelor's in Computer Science",
      university: "MIT",
      duration: "4 years",
      totalCost: "$45,000",
      creditCost: "$130/credit",
      totalCredit: "120",
      highlights: ["CSE", "AI", "Data Science"],
    },
    {
      title: "Bachelor's in Computer Science",
      university: "Bangladesh University of Engineering and Technology",
      duration: "4 years",
      totalCost: "$45,000",
      creditCost: "$130/credit",
      totalCredit: "120",
      highlights: ["CSE", "AI", "Data Science"],
    },
    {
      title: "Bachelor's in Computer Science",
      university: "Brace University",
      duration: "4 years",
      totalCost: "$45,000",
      creditCost: "$130/credit",
      totalCredit: "120",
      highlights: ["CSE", "AI", "Data Science"],
    },
    {
      title: "Bachelor's in Computer Science",
      university: "North South University",
      duration: "4 years",
      totalCost: "$45,000",
      creditCost: "$130/credit",
      totalCredit: "120",
      highlights: ["CSE", "AI", "Data Science"],
    },
    {
      title: "Bachelor's in Computer Science",
      university: "University of Dhaka",
      duration: "4 years",
      totalCost: "$45,000",
      creditCost: "$130/credit",
      totalCredit: "120",
      highlights: ["CSE", "AI", "Data Science"],
    },
  ];

  return (
    <div className="bg-background-primary px-6 pt-6 pb-14 flex flex-col gap-7 rounded-[20px] border border-gray-secondary">
      {/* Heading */}
      <h2 className="text-2xl text-black font-semibold">
        Perfect Program Matches
      </h2>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-white border border-gray-secondary rounded-full p-[14px] w-full md:w-1/3">
          <Image
            src="/images/dashboard/search.svg"
            alt="Search"
            width={20}
            height={20}
            className="w-5 h-5 text-gray-secondary"
          />
          <input
            type="text"
            placeholder="Search program"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Program Type */}
        <div className="relative w-full md:w-1/3">
          {/* Trigger */}
          <div
            className="flex items-center justify-between bg-white border border-gray-secondary rounded-full p-[14px] text-sm cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span
              className={
                selected === "Program Type"
                  ? "text-gray-500"
                  : "text-black-primary"
              }
            >
              {selected}
            </span>
            <Image
              src="/images/dashboard/arrowDown.svg"
              alt="Down"
              width={20}
              height={20}
              className={`w-5 h-5 transition-transform duration-300 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          {/* Options */}
          <div
            className={`absolute top-full left-0 w-full bg-white border border-gray-secondary rounded-xl mt-2 shadow-md overflow-hidden transition-all duration-300 ${
              open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {options.map((opt) => (
              <div
                key={opt}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 bg-white border border-gray-secondary rounded-full p-[14px] w-full md:w-1/3">
          <Image
            src="/images/dashboard/location.svg"
            alt="Location"
            width={20}
            height={20}
            className="w-5 h-5 text-gray-secondary"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.slice(0, visibleCount).map((program, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] shadow-sm p-6 flex flex-col justify-between custom-shadow"
          >
            {/* Title */}
            <div>
              <h3 className="text-lg font-semibold text-black-primary">
                {program.title}
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/dashboard/time.svg"
                  alt="University"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-sm text-gray-primary">
                  {program.university}
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex gap-3 items-start text-sm border border-gray-secondary rounded-xl p-3">
                  <Image
                    src="/images/dashboard/time.svg"
                    alt="Duration"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <div className="flex flex-col">
                    <span className="text-black-primary font-medium">
                      Duration
                    </span>
                    <span className="inline-block font-medium text-gray-primary border border-gray-secondary rounded-full px-3 py-0.5 mt-[6px]">
                      {program.duration}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-start text-sm border border-gray-secondary rounded-xl p-3">
                  <Image
                    src="/images/dashboard/cost.svg"
                    alt="Total Cost"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <div className="flex flex-col">
                    <span className="text-black-primary font-medium">
                      Total Cost
                    </span>
                    <span className="inline-block font-medium text-gray-primary border border-gray-secondary rounded-full px-3 py-0.5 mt-[6px]">
                      {program.totalCost}
                    </span>
                  </div>
                </div>
                {program.creditCost && (
                  <div className="flex gap-3 items-start text-sm border border-gray-secondary rounded-xl p-3">
                    <Image
                      src="/images/dashboard/cost.svg"
                      alt="Credit Cost"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <div className="flex flex-col">
                      <span className="text-black-primary font-medium">
                        Credit Cost
                      </span>
                      <span className="inline-block font-medium text-gray-primary border border-gray-secondary rounded-full px-3 py-0.5 mt-[6px]">
                        {program.creditCost}
                      </span>
                    </div>
                  </div>
                )}
                {program.totalCredit && (
                  <div className="flex gap-3 items-start text-sm border border-gray-secondary rounded-xl p-3">
                    <Image
                      src="/images/dashboard/dashboard.svg"
                      alt="Total Credit"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <div className="flex flex-col">
                      <span className="text-black-primary font-medium">
                        Total Credit
                      </span>
                      <span className="inline-block font-medium text-gray-primary border border-gray-secondary rounded-full px-3 py-0.5 mt-[6px]">
                        {program.totalCredit}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Highlighted */}
              <p className="text-sm text-black-primary font-semibold mb-2">
                Highlighted Program
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {program.highlights.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-xs text-gray-primary px-3 py-1 font-medium border border-gray-secondary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <button className="flex-1 text-orange-primary hover:text-white bg-orange-100 hover:bg-orange-primary rounded-[50px] px-4 py-3 text-base font-medium cursor-pointer transition">
                Learn More
              </button>

              <Link
                href="/planner"
                className="flex-1 text-center text-orange-primary hover:text-white bg-orange-100 hover:bg-orange-primary rounded-[50px] px-4 py-3 text-base font-medium transition cursor-pointer"
              >
                Create Plan
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < programs.length && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-white border border-gray-secondary px-9 py-4 rounded-full text-sm font-medium hover:bg-gray-50 cursor-pointer"
            onClick={() => setVisibleCount(programs.length)}
          >
            View More Programs
          </button>
        </div>
      )}
    </div>
  );
};

export default ProgramsPage;
