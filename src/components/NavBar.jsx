import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TabSection from './TabSection'

function NavBar({activeTab,setActiveTab}) {
 
  return (
    <header className=" shadow-sm fixed w-full top-0 h-30 p-4  bg-gray-100 ">
      <nav className="container mx-auto px-32 py-2 mb-2 flex justify-between items-center">
        <div className="text-3xl font-bold text-blue-900">Accredian</div>
        <div className="flex items-center space-x-6">
          <Link href="#courses" className="text-gray-600 hover:text-blue-600">Courses</Link>
          <Link href="#resources" className="text-gray-600 hover:text-blue-600">Resources</Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </div>
      </nav>
      <div className='flex justify-center mt-1'><TabSection activeTab={activeTab} setActiveTab={setActiveTab} /></div>
      
    </header>
   
    
  )
}

export default NavBar