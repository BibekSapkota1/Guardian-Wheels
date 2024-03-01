import bus from '../assets/School_Bus.png'
import parents from '../assets/Parents.png'
import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  const boxes = [
    { imageUrl: parents, text: 'I am a parent', circle: 'bg-red-400', boxcolor: 'bg-red-300',link:"/login" },
    { imageUrl: '', text: 'I am a School', circle: 'bg-blue-400', boxcolor: 'bg-blue-300',link:"/home" },
    { imageUrl: '', text: 'I am a Bus Driver', circle: 'bg-red-600', boxcolor: 'bg-red-500',link:"/home" },
    { imageUrl: '', text: 'Request for tracking', circle: 'bg-blue-500', boxcolor: 'bg-blue-600',link:"/home" },
  ];

  return (
    <div>
      <div className="relative h-[50vh]  w-full bg-primary rounded-b-[50px] flex items-end">
        <Link to="/">
        <h1 className="text-left absolute top-0 left-6 w-full text-2xl pt-6 text-white font-semibold">Back</h1>
        </Link>
        <img className="absolute bottom-0 right-0 w-1/2" src={bus} alt="school" />
        <div className="text-left pl-6 pb-6">
          <h1 className="text-white text-2xl font-semibold pl-3">
            Lets Go</h1>
          <h1 className="text-white text-sm font-semibold w-2/3 p-3 ">
            "Guardians Wheel is dedicated to ensuring the safe and secure transportation of students during their school bus journeys."</h1>
        </div>
      </div>
      <h1 className='text-2xl font-semibold p-3 '>Guardian Wheel</h1>

      <div className="grid grid-cols-2 gap-5 p-4">
        {boxes.map((box, index) => (
          <div key={index} className={`relative rounded-lg overflow-hidden ${box.boxcolor}`}>
            <Link to={box.link}>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full ${box.circle}`}></div>

            <div className="flex flex-col items-center pt-10 pb-8 px-4">
              <img
                src={box.imageUrl}
                alt={``}
                className="w-24 h-24 rounded-full object-cover mb- z-10"
              />
              <p className="text-center text-sm font-medium">{box.text}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home