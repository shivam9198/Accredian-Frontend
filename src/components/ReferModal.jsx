import React from "react";

const ReferModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-5">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Refer & Earn</h2>
        
 
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Your Name</label>
            <input 
              type="text" 
              className="w-full p-2 bg-gray-800 border rounded " 
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Your Email</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded bg-gray-800" 
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Friend's Email</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded bg-gray-800 " 
              placeholder="Enter friend's email"
              required
            />
          </div>

          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Send Invite
            </button>
            <button type="button" onClick={onClose} className="text-gray-500">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferModal;
