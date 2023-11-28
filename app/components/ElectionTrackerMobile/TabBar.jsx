import React, { useContext } from 'react'
import { ElectionContext } from '../../services/context';

const TabBar = () => {
    const [ isTx, setIsTx, ] = useContext(ElectionContext)
  return (
    <div className='tabBar-container text-center rounded-sm w-[95%] mx-auto bg-white text-[#0165FF] flex justify-center items-center'>
        <div onClick={()=>setIsTx(false)} className={`entity-1 rounded-sm flex-1 ${isTx && 'text-white bg-[#0165FF]'}`}>State</div>
        <div  className={`entity-2 rounded-sm flex-1 ${!isTx && 'text-white bg-[#0165FF]'}`}>Constituency</div>
    </div>
  )
}

export default TabBar