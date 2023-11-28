import React from 'react';
import { TabBar, Dropdown, PartyResults } from '../components/ElectionTrackerMobile';
import { aadhanAppLogo } from '../assets/images';

const mobile = () => {
  return (
    <div className='bg-[#050D3E] min-h-screen text-white pt-[1rem]'>
      <div className="brand-mobile-logo pt-[1rem] pb-[2rem]">
        <img src={aadhanAppLogo} alt="aadhan app logo" className='block mx-auto w-[23%]' />
      </div>
      <TabBar />
      {/* e1 */}
      <div className="entity-1-container w-[95%] my-3 mx-auto">
        <div className='dropdown-mobile-continer w-full'>
          <Dropdown />
        </div>
        <div className='results-mobile-container my-3'>
          <PartyResults />
        </div>
        <p className='my-3'>Total Seats: {''}</p>
        <div className='flex justify-start items-center gap-2 my-2'>
          <p>Magic figure:</p>
          <div className='w-fit px-4 bg-[#FFA500] text-black rounded-md font-medium'>{''}</div>
        </div>
      </div>
      {/* e2 */}
      <div className="entity-1-container w-[95%] my-3 mx-auto">
        <div className='dropdown-mobile-continer w-full flex justify-start items-center gap-3'>
          <Dropdown />
          <Dropdown />
        </div>
        <p className='my-3'>Round No: 5</p>
        <div className='results-mobile-container my-3'>
          <PartyResults />
        </div>
      </div>
    </div>
  )
}

export default mobile