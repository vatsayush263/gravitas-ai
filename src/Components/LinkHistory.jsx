import React from 'react'
import { LinkHistoryCard } from './LinkHistoryCard'

export const LinkHistory = (props) => {

    // console.log(props.history)    
    localStorage.setItem("urlset", JSON.stringify(props.history))
    

    return (
        <div className='z-0 my-10 w-[95%] lg:w-[80%] mx-4 md:mx-auto'>
            <div className='text-xl lg:text-3xl py-5'>Your Previous Customized Links</div>
            <div className='grid grid-cols-1 md:grid-cols-2 py-2 gap-x-2 gap-y-3 mx-2'>
                {
                    (props.history.length) !== 0  ?
                    [...props.history].reverse().map((item) => {
                    return(
                        <LinkHistoryCard key={item.url} details = {item}  />   ) 
                    }):<div className='flex flex-col justify-center items-center col-span-2 space-y-3'>
                        <div className='text-2xl font-extrabold'>Boost your Links Today!</div>
                        <div> <div className='text-xl cursor-pointer bg-teal-500 px-4 py-2 rounded-full text-white w-fit'>
                Get Started!
            </div></div>
                    </div>
                }
            </div>
        </div>
    )
}
