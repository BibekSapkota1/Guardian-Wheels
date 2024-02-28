import React from 'react'
import pic from "../assets/signup.png"
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
function Signup() {
  return (
    <>
        <div className="h-[20vh] mb-32 w-full bg-primary rounded-b-[60px]">
            <img className="w-full pt-10" src={pic} alt="studying" />
        </div>
        <div className="flex flex-col w-10/12 mx-auto">
            <h1 className="text-2xl font-semibold my-5">Sign Up</h1>
            <div className="w-full flex flex-col">
                <div className="relative">
                <input type="text" placeholder="Username" className="px-3 w-full bg-gray-300 pl-10 mb-4 rounded-2xl py-2"/>
                <FaUserCircle className="absolute text-gray-500 top-2 left-2 text-2xl"/>
                </div>
                <div className="relative">
                <input type="email" placeholder="Email" className="px-3 w-full bg-gray-300 pl-10 mb-4 rounded-2xl py-2"/>
                <MdEmail className="absolute text-gray-500 top-2 left-2 text-2xl"/>
                </div>
                <div className="relative">
                <input type="password" placeholder="Password" className="px-3 w-full bg-gray-300 pl-10 mb-4 rounded-2xl py-2"/>
                <RiLockPasswordFill className="absolute text-gray-500 top-2 left-2 text-2xl"/>
                </div>
                <div className="relative">
                <input type="password" placeholder="Confirm Password" className="px-3 w-full bg-gray-300 pl-10 mb-4 rounded-2xl py-2"/>
                <RiLockPasswordFill className="absolute text-gray-500 top-2 left-2 text-2xl"/>
                </div>
            </div>
            <div className="flex w-full my-3 text-primary justify-between">
                <div className="flex">
                    <input type="checkbox" name="remember" id="" />
                    <p className="pl-1">Remember me</p>
                </div>                
            </div>
            <div className="bg-primary mt-3 rounded-2xl py-2">
                <button type="submit" className="text-xl text-white w-full font-semibold text-center">Sign Up</button>
            </div>
            <Link to="/login" >
            <p className="w-full text-center text-primary my-1">Have an Account? Login</p>
            </Link>
        </div>
    </>
  )
}

export default Signup