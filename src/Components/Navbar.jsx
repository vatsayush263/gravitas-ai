import React from 'react'
import { Sidebar } from './Sidebar'

export const Navbar = () => {
  return (
    <>
    <div className='z-0 hidden sm:flex sm:flex-row justify-between px-8 md:px-12 lg:px-20 py-10  '>
        <div className='flex flex-row items-center justify-center space-x-4'>
            <div className='text-3xl font-bold cursor-pointer'>Gravitas AI</div>
            <div className='text-xl font-light cursor-pointer'>Features</div>
            <div className='text-xl font-light cursor-pointer'>Pricing</div>
            <div className='text-xl font-light cursor-pointer'>Resources</div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-4'>
            <div className='text-xl cursor-pointer'>Signin</div>
            <div className='text-xl cursor-pointer bg-teal-500 px-4 py-2 rounded-full text-white '>Signup</div>
        </div>
    </div>
    <div>
      <Sidebar />
    </div>
    </>
  )
}
