import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import React from 'react'
function Display() {
  return (
    <div>
      <div className='bg-primary h-screen'>

        <div className='text-center h-1/5 text-white'>
          <h1 className='font-semibold pt-10 text-3xl'>Back To</h1>
          <h1 className='font-bold p-2 text-5xl font-Kaushan'>SCHOOL</h1>
        </div>

        <div className="flex justify-center items-center h-3/5">
          <img src={logo} alt="Description of the" className="h-auto lg:h-4/5" />
        </div>


        <div className='flex justify-center items-center h-1/5'>

          <div class="w-full  flex items-center justify-center cursor-pointer">
            <div
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
            >
              <span
                class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"
              ></span>
              <span
                class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <span
                class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <Link to="/home" >
                <span
                  class="relative w-full text-left font-bold transition-colors duration-200 ease-in-out group-hover:text-black"
                >Get Started

                </span>
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div >

  )
}

export default Display