import React, { useState } from 'react';
import pic from "../assets/signup.png";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Signup() {
  // State to manage form input values as one object
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // State to manage error message
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(formData.password==='' && formData.username==='' && formData.email==='' &&formData.confirmPassword===''){
        setErrorMessage('Cannot be empty');
      return;
    }

    if(formData.password.length <= 8 && formData.confirmPassword.length <= 8 ){
        setErrorMessage('The password length must be more than 8');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    console.log(formData);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrorMessage('');
  };

  return (
    <>
      <div className="h-[20vh] mb-32 w-full bg-primary rounded-b-[60px]">
        <img className="w-full pt-10" src={pic} alt="studying" />
      </div>
      <div className="flex flex-col w-10/12 mx-auto">
        <h1 className="text-2xl font-semibold my-5">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col">
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="px-3 w-full bg-gray-300 pl-10 mb-4 rounded-2xl py-2"
              />
              <FaUserCircle className="absolute text-gray-500 top-2 left-2 text-2xl" />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-3 w-full bg-gray-300 pl-10 mb-4 rounded-2xl py-2"
              />
              <MdEmail className="absolute text-gray-500 top-2 left-2 text-2xl" />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="px-3 w-full bg-gray-300 pl-10 mb-4 rounded-2xl py-2"
              />
              <RiLockPasswordFill className="absolute text-gray-500 top-2 left-2 text-2xl" />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="px-3 w-full bg-gray-300 pl-10 mb-4 rounded-2xl py-2"
              />
              <RiLockPasswordFill className="absolute text-gray-500 top-2 left-2 text-2xl" />
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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
        </form>
        <Link to="/login" >
          <p className="w-full text-center text-primary my-1">Have an Account? Login</p>
        </Link>
      </div>
    </>
  )
}

export default Signup;
