import React, { useContext } from 'react'
import { ElectionContext } from '../../services/context';

const TabBar = () => {
  return (
    <div className='tabBar-container text-center rounded-sm w-[95%] mx-auto bg-white text-[#0165FF] flex justify-center items-center'>
        <div  className={`entity-1 rounded-sm flex-1 text-white bg-[#0165FF] py-1`}>State</div>
        <div  className={`entity-2 rounded-sm flex-1 py-1`}>Constituency</div>
    </div>
  )
}

export default TabBar