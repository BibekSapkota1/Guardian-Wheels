import React from 'react'
import { IoNotifications } from "react-icons/io5";
function Header() {
    const user = "Solomon"
  return (
    <div className="h-[70px] items-center shadow-lg flex justify-between w-full rounded-b-2xl">
        <h1 className="ml-5 text-xl font-semibold">Hi, {user}</h1>
        <IoNotifications className="text-3xl mr-3" />
    </div>
  )
}

export default Header