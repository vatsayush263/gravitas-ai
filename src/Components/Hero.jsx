import React from 'react'

export const Hero = () => {
  return (
    <div className='z-0 flex flex-col space-y-3  sm:space-y-0 sm:grid sm:grid-cols-3 px-6 sm:px-12 xl:px-20 pt-20 place-content-center place-items-center'>
        <div className='col-span-2 flex flex-col space-y-6 justify-start'>
            <div className='text-4xl xl:text-6xl font-bold'>
                More than just <br className='hidden sm:block'></br> shorter links
            </div>
            <div className='text-lg xl:text-2xl text-[#333333] text-opacity-70 flex flex-col space-y-4'>
                <div>Build your brand's own custom short link! </div>
            <div className='text-md xl:text-xl cursor-pointer bg-teal-500 px-4 py-2 rounded-full text-white w-fit'>
                Get Started!
            </div>
            </div>

        </div>
        <div className='col-span-1'>
            <img src="./assets/person.gif" className='h-60 w-60 sm:h-fit sm:w-fit' alt="" />
        </div>
    </div>
  )
}
