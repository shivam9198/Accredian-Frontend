import React, { useState } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import TabSection from './TabSection'
import Landingpage from './Landingpage'


function Body() {
    const [activeTab, setActiveTab] = useState("Refer");
  return (
    <>
    <div className='w-full h-full '>
    <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
   
</div>

</>
  )
}

export default Body