import React from 'react';
import { chevronright, indiaMapImg, voteImg, vottingBoothImg } from '../assets/images';

const widget = () => {
  return (
    <div className='bg-[#262C42] min-h-screen relative text-white font__chivo overflow-hidden'>
      <div className="widget-container h-screen pb-[32.5px] flex items-end overflow-hidden">
      <div className="widget-container-1 flex-1 p-[0.5rem]">
        <div className="body-widget-container pt-2 font-semibold flex justify-start items-center gap-3">
          <img src={voteImg} alt="vote" className='translate-y-8 z-0' />
          <div className='info-widget-container text-[1.2rem]'>
            <p>ASSEMBLY <br /> ELECTION</p>
            <div className='flex justify-between items-center'>
              <p><span className='text-[#FFC700]'>RESULTS</span><br /> 2023</p>
              <img src={vottingBoothImg} alt="votting booth" className='translate-x-[1rem]' />
            </div>
          </div>
        </div>
      </div>
      <div className="widget-container-2 flex-1 flex justify-end items-end">
        <img src={indiaMapImg} alt="bharath map" className='object-contain w-full max-h-[135px]' />
      </div>
      </div>
      <div className="live-mobile-container px-2 fixed bottom-0 py-1 z-10 bg-[#3E4355] w-full flex justify-between items-center">
        <div className="live-widget-container font__poppins bg-[red] text-[11px] w-fit px-2 rounded-sm font-semibold my-1 flex justify-center items-center gap-1">
          <span className='inline-block w-[0.3rem] h-[0.3rem] animate-pulse bg-white rounded-full font-semibold'></span> LIVE
        </div>
        <div className='flex justify-center items-center text-[13px] gap-1 text-white'>
          <p>Live Results </p>
          <img src={chevronright} alt="chevron right" />
        </div>
      </div>
    </div>
  )
}

export default widget