import React, { useState } from 'react'
import { LinkHistory } from './LinkHistory'

export const Link = (props) => {
    const [text, settext] = useState("")
    const [url, seturl] = useState("")
    const [urlset, seturlset] = useState(JSON.parse(localStorage.getItem("urlset")) || [])
    




    const submit = async (text) => {

        if (text.length > 0) {
            const encodedParams = new URLSearchParams();
    encodedParams.append("url", text);
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'd43b2461e6msh09a2004d6d0ce05p1a78d8jsn9c63df3e395c',
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
        },
        body: encodedParams
    };

    const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
    const data = await response.json()
    seturl(data["result_url"])
    seturlset([...urlset, ({ "url": text, "shorturl": data["result_url"] })])
    settext("")
    setTimeout(() => {
        seturl("")
    }, 10000);

        }
        else {
            props.showAlert()
        }
    }
    return (
        <>
            <div className='z-0 mt-20 px-4 md:px-10 py-6 sm:py-10 rounded-xl w-[95%] md:w-[90%] xl:w-[80%] mx-auto bg-[#0F172A]'>
                <div className='flex flex-col justify-center items-center space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3 lg:space-x-5'>
                    <input type="text" name="" id="" className='text-[#333] w-full sm:w-[74%] lg:w-[80%] p-3 rounded-xl' placeholder='Your Link!' value={text} onChange={(e) => { settext(e.target.value) }} />
                    <button className='text-lg lg:text-xl cursor-pointer bg-teal-500 px-4 py-2 rounded-xl text-white w-fit' onClick={() => { submit(text) }}>
                        Shorten Link
                    </button>
                </div>

            </div>
            {url === "" ? "" :
                <div className=' mx-4 sm:mx-14 w-[90%] lg:w-[80%] lg:mx-auto my-2 sm:my-5'>
                    <div className='text-xl lg:text-3xl text-opacity-80'>Your Customized Link</div>
                    <div className='text-md flex flex-col  lg:text-xl my-4 px-4 md:px-10 sm:flex sm:flex-row w-[90%] lg:w-[80%] items-start sm:items-center justify-start sm:justify-between'>
                        <div className='bg-white text-[#333] border rounded-xl w-full px-2 py-2'>
                            {url}
                        </div>
                        <div className='cursor-pointer' onClick={() => { navigator.clipboard.writeText(url) }}>
                            <img src="./assets/copy.png" className='h-12 w-12' alt="" />
                        </div>
                    </div>
                </div>
            }
            <LinkHistory history={urlset} />
        </>
    )
}
