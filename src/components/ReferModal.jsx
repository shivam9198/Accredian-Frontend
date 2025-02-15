import React, { useState } from "react";
import axios from "axios";

const ReferModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName:"",
    refereeEmail: "",
    course:""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendInvite = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      const res = await axios.post(
        "https://accredian-backend-4be4.onrender.com/api/referrals",
        formData, // Send form data
        { withCredentials: true }
      );
      console.log("Response:", res.data); // Log response
      alert("Invitation sent successfully!");
      onClose(); // Close modal after sending
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send invitation!");
    }
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-5">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Refer & Earn</h2>
        
 
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Your Name</label>
            <input 
            name="referrerName"
              type="text" 
              className="w-full p-2 bg-gray-800 border rounded " 
              placeholder="Enter your name"
              required
              value={formData.referrerName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium">Your Email</label>
            <input 
              type="email" 
              name="referrerEmail" 
              className="w-full p-2 border rounded bg-gray-800" 
              placeholder="Enter your email"
              required
              value={formData. referrerEmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium">friends Name</label>
            <input 
              type="text" 
                name="refereeName"
              className="w-full p-2 bg-gray-800 border rounded " 
              placeholder="Enter your friend name"
              required
              value={formData.refereeName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium">Friend's Email</label>
            <input 
              type="email" 
              name="refereeEmail" 
              className="w-full p-2 border rounded bg-gray-800 " 
              placeholder="Enter friend's email"
              required
              value={formData.refereeEmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium">Course</label>
            <input 
             type="text" 
               name="course"
              className="w-full p-2 border rounded bg-gray-800 " 
              placeholder="Enter course name"
              required
              value={formData.course}
              onChange={handleChange}
            />
          </div>
          


          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSendInvite}>
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
