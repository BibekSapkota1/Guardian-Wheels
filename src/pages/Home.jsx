import bus from '../assets/School_Bus.png'
import parents from '../assets/Parents.png'
import React from 'react'
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";


function Home() {
  const boxes = [
    { imageUrl: parents, text: 'I am a parent', circle: 'bg-red-400', boxcolor: 'bg-red-300',link:"/login" },
    { imageUrl: '', text: 'I am a School', circle: 'bg-blue-400', boxcolor: 'bg-blue-300',link:"/home" },
    { imageUrl: '', text: 'I am a Bus Driver', circle: 'bg-red-600', boxcolor: 'bg-red-500',link:"/home" },
    { imageUrl: '', text: 'Request for tracking', circle: 'bg-blue-500', boxcolor: 'bg-blue-600',link:"/home" },
  ];

  return (
    <div>
      <div className="relative h-[37vh] lg:pt-36 w-full bg-primary rounded-b-[40px] flex items-end">
        <Link to="/">
        <h1 className="text-left absolute top-[-5px] left-2 w-full flex items-center text-xl pt-6 text-white font-semibold"><IoArrowBackCircle className='mr-1 text-3xl'/>Back</h1>
        </Link>
        <img className="absolute bottom-0 right-0 w-5/12 md:w-6/12 lg:w-2/12" src={bus} alt="school" />
        <div className="text-left pl-2 w-7/12 md:w-6/12 mb-3 pb-6">
          <h1 className="text-white text-2xl md:text-3xl text-center font-semibold pl-3">
            Lets Go</h1>
          <h1 className="text-white text-sm md:text-xl md:mb-20 lg:mb-0 lg:text-justify pl-1 py-2 ">
            "Guardians Wheel is dedicated to ensuring the safe and secure transportation of students during their school bus journeys."</h1>
        </div>
      </div>
      <h1 className='text-2xl font-bold pt-3 pb-1 rounded-sm text-center border-b-2 border-primary w-7/12 md:w-4/12 md:text-3xl mx-auto'>Guardian Wheels</h1>

      <div className="grid grid-cols-2 gap-5 p-4">
        {boxes.map((box, index) => (
          <div key={index} className={`relative rounded-lg overflow-hidden ${box.boxcolor}`}>
            <Link to={box.link}>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 md:w-32 md:h-32 h-16 rounded-full ${box.circle}`}></div>

            <div className="flex flex-col items-center pt-10 pb-8 px-4">
              <img
                src={box.imageUrl}
                alt={``}
                className="md:w-40 w-20 h-20 md:h-40 rounded-full object-cover mb- z-10"
              />
              <p className="text-center text-sm md:text-xl md:mt-5 font-medium">{box.text}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home