import React, { useState } from 'react';
import pic from "../assets/2.png";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className='lg:flex lg:min-h-screen'>
      <div className="h-[40vh] mb-32 w-full bg-primary rounded-b-[90px]">
        <h1 className="text-center text-2xl pt-6 text-white font-semibold">Welcome Back</h1>
        <img className="w-full md:w-auto md:h-[50vh] lg:h-[80vh] md:mx-auto" src={pic} alt="studying" />
      </div>
      <div className="flex flex-col lg:items-center lg:justify-center w-10/12 mx-auto">
        <form onSubmit={handleSubmit} className='lg:border lg:border-primary lg:rounded-2xl lg:px-7 lg:py-7'>
          <div className="w-full flex flex-col">
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-3 w-full bg-gray-300 pl-10 mb-4 rounded-2xl py-2"
              />
              <FaUserCircle className="absolute text-gray-500 top-2 left-2 text-2xl" />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 w-full bg-gray-300 pl-10 mb-4 rounded-2xl py-2"
              />
              <RiLockPasswordFill className="text-gray-500 absolute top-2 left-2 text-2xl" />
            </div>
          </div>
          <div className="flex w-full my-3 text-primary justify-between">
            <div className="flex">
              <input type="checkbox" name="remember" id="" />
              <p className="pl-1">Remember me</p>
            </div>
            <p>Forgot Password</p>

          </div>
          <div className="bg-primary mt-3 rounded-2xl py-2">
            <Link to="/navigate">
            <button type="submit" className="text-xl text-white w-full font-semibold text-center">Login</button>
            </Link>
          </div>
        <Link to="/signup" >
          <p className="w-full text-center text-primary my-1">Don't Have an Account? Sign Up</p>
        </Link>
        </form>
      </div>
    </div>
  )
}

export default Login;
