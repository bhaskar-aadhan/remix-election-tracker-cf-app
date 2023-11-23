import React, { useContext, useEffect, useState } from 'react';
import { ElectionContext } from '~/services/context';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { getMagicFigure } from '~/services/ElectionServices';

const InfoBar = ({ sx }) => {
    const websocketdata = useContext(ElectionContext)
    const [stateName, setStateName] = useState('Telangana') 
    const stateData = websocketdata && getMagicFigure(websocketdata, stateName)
    console.log("sateData", stateData)
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
                <div className={`${sx}`}>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={stateName} />
                        </SelectTrigger>
                        <SelectContent>
                            {websocketdata && websocketdata[0]['states'].map((state) => (
                                <SelectItem key={state['name']} onClick={(e) => {e.preventDefault(); setStateName(state['name'])}} value="light">{state['name']}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='hidden md:flex justify-center items-center gap-2'>
                <p>Magic figure:</p>
                <div className='w-fit px-4 bg-[#FFA500] text-black rounded-md font-medium'></div>
            </div>
        </div>
    )
}

export default InfoBar