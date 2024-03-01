import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Footer({id}) {
  return (
    <div className="bg-primary py-2 fixed bottom-0 w-full rounded-full">
        <div className="w-11/12 mx-auto text-white flex justify-between">
          <Link to="/navigate">
            <div className={`${parseInt(id)===1?"bg-secondary text-black border-white":""} border-2 border-transparent p-2 rounded-full`}>
            <IoMdHome className={`text-3xl`}/>
            </div>
          </Link>
            <Link to="/tracking">
            <div className={`${parseInt(id)===2?"bg-secondary text-black border-white":""} border-2 border-transparent p-2 rounded-full`}>
            <FaLocationDot className={`text-3xl`}/>
            </div>
            </Link>
            <Link to="/setting">
            <div className={`${parseInt(id)===3?"bg-secondary text-black border-white":""} border-2 border-transparent p-2 rounded-full`}>
            <IoSettings className={`text-3xl`}/>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Footer 