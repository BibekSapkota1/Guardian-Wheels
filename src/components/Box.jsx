import React from 'react'

function Box({title,color,img}) {
  return (
    <div className="w-full flex bg-secondary rounded-lg my-5 items-center justify-between">
        <div className="w-5/12 mt-[-30px] justify-center items-center">
            <h1 className="text-xl md:text-2xl text-center my-2 font-bold">{title}</h1>
            <div className={`bg-white md:text-xl shadow-inner border-b-2 mt-3 font-medium w-10/12 md:w-7/12 lg:w-10/12 mx-auto rounded-2xl flex justify-center items-center ${color}`}>
                Learn More
            </div>
        </div>
        <div className="w-7/12 md:w-4/12 lg:w-6/12">
            <img src={img} className="w-full my-3" alt="" />
        </div>
    </div>
  )
}

export default Box