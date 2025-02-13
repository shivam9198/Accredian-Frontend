// src/components/Refer.jsx
import React, { useState } from "react";
import ReferModal from "./ReferModal";


const Refer = ({ activeTab }) => {
  const [isReferModalOpen, setReferModalOpen] = useState(false)
  return (
    <div className="flex-1 w-full h-full bg-gray-900 rounded-lg p-8 text-white mb-8">
      {/* Hero Section */}
      <div className=" felx-col justify-center items-center ">
        <h1 className="text-6xl font-bold  mb-6">Refer & Earn Rewards</h1>
        <p className="text-xl mb-8">Invite your friends and get exclusive benefits!</p>

        {/* Refer Now Button */}
        <button 
          onClick={() => setReferModalOpen(true)}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          Refer Now
        </button>
      </div>

      {/* Modal */}
      <ReferModal isOpen={isReferModalOpen} onClose={() => setReferModalOpen(false)} />
      </div>
  );
};

export default Refer;
