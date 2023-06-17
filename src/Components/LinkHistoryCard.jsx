import React from 'react'

export const LinkHistoryCard = ({details}) => {
    return (

        <div className='col-span-1 bg-white rounded-xl p-2 border shadow-md'>
            <div className='flex flex-col space-y-2 justify-center items-center '>
                <div className='text-md sm:text-lg lg:text-xl font-semibold'>
                 {details.url}
                </div>
                <div className='flex flex-row items-center space-x-3 justify-between'>
                    <div className='text-md sm:text-lg'>
                       
                 {details.shorturl}
                    </div>
                    <div className='cursor-pointer' onClick={() => { navigator.clipboard.writeText(details.shorturl) }}>
                        <img src="./assets/copy.png" className='h-8 w-8' alt="" />
                    </div>
                </div>

            </div>
        </div>

    )
}
