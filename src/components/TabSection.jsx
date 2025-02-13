import React, { useState } from "react";
import Refer from "./Refer";
import Landingpage from "./Landingpage";

const tabs = ["Refer", "Benefits", "FAQs", "Support"];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Refer");

  return (
    <>
    <div className="w-full h-full">
      <div className="flex justify-center py-4 mb-1 bg-gray-200 shadow-md rounded-full px- py-2 space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab ? "bg-blue-500 text-white" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <Landingpage activeTab={activeTab} />
    </div>
     
     </>
    
  );
};

export default TabSection;
