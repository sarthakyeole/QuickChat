import React, { useState } from 'react'
import ChatContainer from '../components/ChatContainer'
import Sidebar from '../components/Sidebar'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
    
    const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
      <div className='backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid-cols-1 relative' >
        <Sidebar /> 
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage
