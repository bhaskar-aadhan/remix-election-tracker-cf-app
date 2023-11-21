import React from 'react';
import { Dropdown } from '.';

const InfoBar = () => {
    return (
        <ul className='bg-[#003D75] text-white flex justify-center items-center gap-3 p-1'>
            <li className='flex justify-center items-center gap-2'>
                <div className='w-[0.4rem] h-[0.4rem] bg-red-500 rounded-full animate-pulse'></div>
                <div>
                    LIVE
                </div>
            </li>
            <li>
                ASSEMBLY ELECTION RESULTS
            </li>
            <li>
                <Dropdown />
            </li>
            <li className='flex justify-center items-center gap-2'>
                <p>Magic figure:</p>
                <div className='w-fit px-4 bg-[#FFA500] text-black rounded-md'>60</div>
            </li>
        </ul>
    )
}

export default InfoBar