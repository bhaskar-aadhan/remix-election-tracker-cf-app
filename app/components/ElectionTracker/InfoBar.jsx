import React from 'react';
import { Dropdown } from '.';

const InfoBar = () => {
    return (
        <div className='text-white text-[14px] flex justify-start items-center gap-5 p-1 max-w-[1280px] font__nunitosans'>
            <div className='flex justify-center items-center gap-2'>
                <div className='w-[0.4rem] h-[0.4rem] bg-red-500 rounded-full animate-pulse'></div>
                <div>
                    LIVE
                </div>
            </div>
            <div className='font-medium'>
                ASSEMBLY ELECTION RESULTS
            </div>
            <div className='hidden md:block'>
                <Dropdown />
            </div>
            <div className='hidden md:flex justify-center items-center gap-2'>
                <p>Magic figure:</p>
                <div className='w-fit px-4 bg-[#FFA500] text-black rounded-md font-medium'>60</div>
            </div>
        </div>
    )
}

export default InfoBar