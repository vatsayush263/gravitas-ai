import React, { useState } from 'react'
import ReactTransitionCollapse from 'react-transition-collapse'

export const Sidebar = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <div className='z-0 flex flex-row justify-between py-5 items-center px-6 sm:hidden'>
                <div className='text-3xl'>Shortly</div>
                <div className='text-xl border-2 border-black rounded-lg' onClick={() => setExpanded(expanded => !expanded)}><img src="./assets/hamburger.svg" className='p-2 h-10 w-10' alt="" /></div>
            </div>
            <ReactTransitionCollapse expanded={expanded} duration={400}>
                <div className='text-xl font-light cursor-pointer px-6 my-1'>Features</div>
                <div className='text-xl font-light cursor-pointer px-6 my-1'>Pricing</div>
                <div className='text-xl font-light cursor-pointer px-6 my-1'>Resources</div>
            </ReactTransitionCollapse>
        </>
    )
}
