import React, { useState, useEffect } from "react";

const Billing: React.FC = () => {
  // Load initial plan from localStorage or set default to 'base'
  const initialPlan =
    (localStorage.getItem("plan") as "base" | "business") || "base";
  const [selectedPlan, setSelectedPlan] = useState<"base" | "business">(
    initialPlan
  );

  // Update localStorage whenever selectedPlan changes
  useEffect(() => {
    localStorage.setItem("plan", selectedPlan);
  }, [selectedPlan]);

  // Handle toggle between plans
  const handleTogglePlan = () => {
    setSelectedPlan((prevPlan) => (prevPlan === "base" ? "business" : "base"));
  };

  return (
    <div className="space-y-5">
      <p className="text-2xl font-bold">Billing and Pricing</p>

      {/* Business Plan */}
      <div
        className={`p-4 border-2 rounded-[11px] ${
          selectedPlan === "business" ? "border-black" : "border-gray-300"
        }`}
      >
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <p className="font-medium text-[18px]">Business Plan</p>
            {selectedPlan === "business" && (
              <div className="text-red-500 px-3 font-medium bg-gray-100 rounded-[15px] pb-[2px]">
                Current
              </div>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-medium text-[18px]">$14/mo</p>
            {selectedPlan === "base" && (
              <button
                onClick={handleTogglePlan}
                className="text-white font-medium bg-[#C32148] px-3 py-2 rounded-md"
              >
                Upgrade
              </button>
            )}
          </div>
        </div>
        <p className="text-[20px]">
          Access to AI insights, unlimited uploads, and much more
        </p>
      </div>

      {/* Base Plan */}
      <div
        className={`p-4 border-2 rounded-[11px] ${
          selectedPlan === "base" ? "border-black" : "border-gray-300"
        }`}
      >
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <p className="font-medium text-[18px]">Base Plan</p>
            {selectedPlan === "base" && (
              <div className="text-black px-3 font-medium bg-gray-100 rounded-[15px] pb-[2px]">
                Current
              </div>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-medium text-[18px]">$9/mo</p>
            {selectedPlan === "business" && (
              <button
                onClick={handleTogglePlan}
                className="text-white font-medium bg-[#C32148] px-3 py-2 rounded-md"
              >
                Downgrade
              </button>
            )}
          </div>
        </div>
        <p className="text-[20px]">Next billed March 3, 2024</p>
      </div>
    </div>
  );
};

export default Billing;
