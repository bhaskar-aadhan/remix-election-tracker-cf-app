import React, { useContext, useEffect, useState } from 'react';
import { ElectionContext } from '~/services/context';
import { getMagicFigureData } from '~/services/ElectionServices';
import { Dropdown } from '.';

const InfoBar = ({ sx }) => {
    const [webSocketData, stateName ] = useContext(ElectionContext)
    const [magicFigureData, setMagicFigureData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMagicFigureData(webSocketData, stateName)
            setMagicFigureData(data)
        }
        fetchData();
    }, [webSocketData, stateName])

    console.log("magicFigureData: ", magicFigureData, "stateName: ", stateName, "webSocketData: ", webSocketData)
    return (
        <div className='text-white text-[14px] my-2 flex-1 flex justify-start items-center gap-x-3 gap-y-2 md:gap-x-5 md:gap-y-5 flex-wrap md:flex-nowrap p-1 max-w-[1280px] font__nunitosans'>
            <div className='hidden md:flex justify-center items-center gap-2'>
                <div className='w-[0.4rem] h-[0.4rem] bg-red-500 rounded-full animate-pulse'></div>
                <div>
                    LIVE
                </div>
            </div>
            <div className='font-medium'>
                ASSEMBLY ELECTION RESULTS
            </div>
            <div className=''>
                <Dropdown />
            </div>
            <div className='flex justify-center items-center gap-2'>
                <p>Magic figure:</p>
                <div className='w-fit px-4 bg-[#FFA500] text-black rounded-md font-medium'>{magicFigureData}</div>
            </div>
            <div className='flex md:hidden justify-center items-center gap-2'>
                <div className='w-[0.4rem] h-[0.4rem] bg-red-500 rounded-full animate-pulse'></div>
                <div>
                    LIVE
                </div>
            </div>
        </div >
    )
}

export default InfoBar