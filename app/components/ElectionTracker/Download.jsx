import React, { useState, useEffect } from 'react'
import { Link } from "@remix-run/react";
import platform from 'platform';
import { aadhanLogo } from '~/assets/images';

const Download = ({ sx }) => {
    const [appLink, setAppLink] = useState("https://aadhan.in")

    useEffect(() => {
        if (platform.os.family === 'Android') {
            setAppLink('https://play.google.com/store/apps/details?id=com.aadhan.hixic&referrer=utm_source=website')
        } else if (platform.os.family === "iOS" || platform.os.family === "OS X") {
            setAppLink('https://apps.apple.com/in/app/aadhan-breaking-short-news/id1415681829')
        } else {
            setAppLink('/#download')
        }
    }, [])
    console.log("platform", platform.os)
    return (
        <div className='ms-auto mt-auto md:mt-0 mb-2 md:mb-0 flex flex-col md:flex-row gap-2'>
        <img src={aadhanLogo} className='w-[50%] md:w-[30%] block ms-auto md:ms-0' alt="aadhan logo" />
        <button className={`${sx} w-fit bg-[#EFEFEF] btn__shadow text-black py-1 px-3 text-[14px] outline-none border-[1px] border-[#151515] rounded-md font-semibold  hover:scale-95 transition ease-in-out duration-300 hover:border-indigo-300`}>
            <Link to={appLink}>Download now</Link>
        </button>
        </div>
    )
}

export default Download