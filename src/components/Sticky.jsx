import React from 'react'

function Sticky() {
    return (
        <div className='absolute bottom-20 example overflow-x-hidden h-72 w-full'>
            <div className='sticky  top-0 overflow-y-hidden pt-64'>
                <div className='flex bg-white sticky bottom-0 text-lg font-bold shadow-lg py-2 justify-between'>
                    <h1 className='w-6/12 pl-4'>Tracking</h1>
                    <h1 className='w-6/12 border-l-2 pr-5 text-right border-black'>Bus Info</h1>
                </div>
                <div className="bg-white">
                    <div className='w-11/12  mx-auto'>
                        <div className='flex flex-col'>
                            <h1 className='mt-1 font-semibold'>Bus Number</h1>
                            <p>BA 1 kha 2023</p>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='mt-1 font-semibold'>Driver Name</h1>
                            <p>Ram Rai</p>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='mt-1 font-semibold'>Driver Phone Number</h1>
                            <p>984114727</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Sticky