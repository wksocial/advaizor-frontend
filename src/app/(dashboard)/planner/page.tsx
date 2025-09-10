"use client";
import Image from "next/image";
import { useState } from "react";

const PlannerPage = () => {
  const [activeTab, setActiveTab] = useState<"graduation" | "cost">("graduation");

  // Graduation states
  const [startTerm, setStartTerm] = useState("Fall 2024");
  const [totalCredit, setTotalCredit] = useState(120);
  const [creditPerTerm, setCreditPerTerm] = useState(10);
  const [completed, setCompleted] = useState(30);
  const [graduation, setGraduation] = useState("Fall 2029");

  // Cost states
  const [creditCost, setCreditCost] = useState(500); // example default
  const [totalCost, setTotalCost] = useState<number | null>(null);

  const handleGenerateGraduation = () => {
    const remaining = totalCredit - completed;
    const termsNeeded = Math.ceil(remaining / creditPerTerm);

    const startYear = parseInt(startTerm.split(" ")[1]);
    const startSeason = startTerm.split(" ")[0];
    const seasons = ["Spring", "Summer", "Fall"];

    let currentIndex = seasons.indexOf(startSeason);
    let year = startYear;

    for (let i = 0; i < termsNeeded; i++) {
      currentIndex++;
      if (currentIndex >= seasons.length) {
        currentIndex = 0;
        year++;
      }
    }

    setGraduation(`${seasons[currentIndex]} ${year}`);
  };

  const handleGenerateCost = () => {
    const remaining = totalCredit - completed;
    const cost = remaining * creditCost;
    setTotalCost(cost);
  };

  return (
    <div className="bg-[#FAFBFC] px-6 pt-6 pb-14 flex flex-col gap-6 rounded-[20px] border border-gray-200">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-2xl text-black-primary font-semibold mb-2">
            Make Your Plans
          </h2>
          <p className="text-gray-primary">
            We&apos;ve identified education programs that match your career
          </p>
        </div>

        {/* Tabs */}
        <div className="h-12 flex bg-[#DBDEE08C] rounded-full w-fit p-1">
          <button
            onClick={() => setActiveTab("graduation")}
            className={`px-6 py-1 rounded-full text-sm font-medium cursor-pointer transition ${
              activeTab === "graduation"
                ? "bg-blue-primary text-white"
                : "text-black-primary"
            }`}
          >
            Predict Graduation Year
          </button>
          <button
            onClick={() => setActiveTab("cost")}
            className={`px-6 py-1 rounded-full text-sm font-medium cursor-pointer transition ${
              activeTab === "cost"
                ? "bg-blue-primary text-white"
                : "text-black-primary"
            }`}
          >
            Cost Estimator
          </button>
        </div>
      </div>

      {/* Content Area */}
      {activeTab === "graduation" ? (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Graduation Form */}
          <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-secondary">
            <h2 className="text-xl font-semibold mb-8">Plan Configuration</h2>

            {/* Start Term */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Start Term</label>
              <select
                className="w-full rounded-lg border border-gray-secondary p-2"
                value={startTerm}
                onChange={(e) => setStartTerm(e.target.value)}
              >
                <option>Fall 2024</option>
                <option>Spring 2025</option>
                <option>Summer 2025</option>
              </select>
            </div>

            {/* Total Credit */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Total Credit</label>
              <input
                type="number"
                className="w-full rounded-lg border border-gray-secondary p-2"
                value={totalCredit}
                onChange={(e) => setTotalCredit(Number(e.target.value))}
              />
            </div>

            {/* Credit Per Term */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Credit Per Term</label>
              <input
                type="number"
                className="w-full rounded-lg border border-gray-secondary p-2"
                value={creditPerTerm}
                onChange={(e) => setCreditPerTerm(Number(e.target.value))}
              />
            </div>

            {/* Completed */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Completed</label>
              <input
                type="number"
                className="w-full rounded-lg border border-gray-secondary p-2"
                value={completed}
                onChange={(e) => setCompleted(Number(e.target.value))}
              />
            </div>

            <button
              onClick={handleGenerateGraduation}
              className="w-full bg-orange-primary hover:bg-red-500 text-white py-3 rounded-full font-semibold cursor-pointer"
            >
              Generate Plan
            </button>
          </div>

          {/* Right: Graduation Result */}
          <div className="flex-1 flex items-center justify-center bg-white p-6 rounded-2xl border border-gray-secondary">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-secondary">
                <Image
                  src="/images/dashboard/tick.svg"
                  width={60}
                  height={60}
                  alt="Graduation"
                />
              </div>
              <p className="text-gray-tertiary text-xl font-semibold mb-2">
                You are on track to graduate in
              </p>
              <p className="text-2xl font-bold text-orange-primary">{graduation}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Cost Form */}
          <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-secondary">
            <h2 className="text-xl font-semibold mb-8">Plan Configuration</h2>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Start Term</label>
              <select
                className="w-full rounded-lg border border-gray-secondary p-2"
                value={startTerm}
                onChange={(e) => setStartTerm(e.target.value)}
              >
                <option>Fall 2024</option>
                <option>Spring 2025</option>
                <option>Summer 2025</option>
              </select>
            </div>

            {/* Total Credit */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Total Credit</label>
              <input
                type="number"
                className="w-full rounded-lg border border-gray-secondary p-2"
                value={totalCredit}
                onChange={(e) => setTotalCredit(Number(e.target.value))}
              />
            </div>

            {/* Completed */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Completed</label>
              <input
                type="number"
                className="w-full rounded-lg border border-gray-secondary p-2"
                value={completed}
                onChange={(e) => setCompleted(Number(e.target.value))}
              />
            </div>

            {/* Credit Cost */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Credit Cost ($)</label>
              <input
                type="number"
                className="w-full rounded-lg border border-gray-secondary p-2"
                value={creditCost}
                onChange={(e) => setCreditCost(Number(e.target.value))}
              />
            </div>

            <button
              onClick={handleGenerateCost}
              className="w-full bg-orange-primary hover:bg-red-500 text-white py-3 rounded-full font-semibold cursor-pointer"
            >
              Generate Cost
            </button>
          </div>

          {/* Right: Cost Result */}
          <div className="flex-1 flex items-center justify-center bg-white p-6 rounded-2xl border border-gray-secondary">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-primary">
                <Image
                  src="/images/dashboard/complete.svg"
                  width={60}
                  height={60}
                  alt="Cost Estimation"
                />
              </div>
              {totalCost !== null ? (
                <>
                  <p className="text-gray-tertiary text-xl font-semibold mb-2">
                    The estimated cost to complete your graduation is
                  </p>
                  <p className="text-2xl font-bold text-orange-primary">
                    ${totalCost.toLocaleString()}
                  </p>
                </>
              ) : (
                <p className="text-gray-tertiary text-xl font-semibold">
                  Enter details and click Generate Cost
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlannerPage;
