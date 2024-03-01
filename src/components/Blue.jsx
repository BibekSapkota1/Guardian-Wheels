import React from 'react'
import { FaUserAlt, FaArrowRight, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { MdPrivacyTip, MdLaptopChromebook, MdLogout  } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdPricetag } from "react-icons/io";
function Blue() {
    return (
        <div className='w-full text-white'>
            <div className='bg-last mb-1 py-3 rounded-b-xl'>
                <div className='w-11/12  mx-auto'>
                    <div className='flex items-center border-b border-white'>
                        <FaUserAlt className='text-4xl rounded-full mx-2 bg-black p-1' />
                        <div className='flex flex-col pl-2'>
                            <h1 className='text-lg font-semibold my-1'>Solomon Silwal</h1>
                            <p className='mb-2 text-sm'>9869374141</p>
                        </div>
                    </div>
                    <div className='flex pt-2 items-center justify-between'>
                        <p className='pl-3'>View profile</p>
                        <FaArrowRight className='mr-3' />
                    </div>
                </div>
            </div>
            <div className='w-full bg-last'>
                <div className='w-11/12 mx-auto flex flex-col'>
                    <h1 className='font-semibold pt-2 pl-3 text-lg'>My Account</h1>
                    <div className='flex my-2 items-center'>
                        <MdPrivacyTip className='text-3xl mr-3' />
                        <div className='flex flex-col'>
                            <h1 className='w-full font-semibold'>Privacy Checkup</h1>
                            <p>A guided review of your important privacy </p>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 mx-auto flex flex-col'>
                    <div className='flex my-2 items-center'>
                        <FaCalendarAlt className='text-3xl mr-3' />
                        <div className='flex flex-col'>
                            <h1 className='w-full font-semibold'>Activity log</h1>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 mx-auto flex flex-col'>
                    <div className='flex my-2 items-center'>
                        <MdLaptopChromebook className='text-3xl mr-3' />
                        <div className='flex flex-col'>
                            <h1 className='w-full font-semibold'>Device Permission</h1>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 mx-auto flex flex-col'>
                    <div className='flex my-2 items-center'>
                        <FaSearch className='text-3xl mr-3' />
                        <div className='flex flex-col'>
                            <h1 className='w-full font-semibold'>Learn how to manage your information</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-last my-1'>
                <div className='w-11/12 mx-auto flex flex-col'>
                    <h1 className='font-semibold pt-2 pl-3 text-lg'>Help and FAQs</h1>

                    <div className='flex my-2 items-center'>
                        <BiSolidPhoneCall className='text-3xl mr-3' />
                        <div className='flex flex-col'>
                            <h1 className='w-full font-semibold'>Customer Support</h1>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 mx-auto flex flex-col'>
                    <div className='flex my-2 items-center'>
                        <FaCalendarAlt className='text-3xl mr-3' />
                        <div className='flex flex-col'>
                            <h1 className='w-full font-semibold'>Help & FAQs</h1>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 mx-auto flex flex-col'>
                    <div className='flex my-2 items-center'>
                        <IoMdPricetag className='text-3xl text-white mr-3' />
                        <div className='flex flex-col'>
                            <h1 className='w-full font-semibold'>About</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-last'>
                <div className='w-11/12 mb-16 m mx-auto flex items-center py-3'>
                    <MdLogout  className='text-3xl text-white mr-3' />
                    <div className='flex flex-col'>
                        <h1 className='w-full font-semibold'>Logout</h1>
                        <p>Signout from this device</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blue