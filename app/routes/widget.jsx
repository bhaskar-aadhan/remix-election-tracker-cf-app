import React from 'react';
import { indiaMapImg, voteImg, vottingBoothImg } from '../assets/images';

const widget = () => {
  return (
    <div className='bg-[#262C42] min-h-screen text-white font__chivo flex justify-between items-start p-[0.7rem]'>
      <div className="widget-container-1 flex-1">
        <div className="live-widget-container bg-[red] w-fit px-2 rounded-lg my-1">
          <span className='inline-block w-2 h-2 bg-white rounded-full font-semibold'></span> LIVE
        </div>
        <div className="body-widget-container border-t-[2px] border-t-[#454A5A] pt-2 flex justify-center items-center gap-3">
          <img src={voteImg} alt="vote" className='translate-y-8' />
          <div className='info-widget-container text-[1.3rem]'>
            <p>ASSEMBLY <br /> ELECTION</p>
            <div className='flex justify-between items-center'>
              <p><span className='text-[#FFC700]'>RESULTS</span><br /> 2023</p>
              <img src={vottingBoothImg} alt="votting booth" className='translate-x-[1rem]' />
            </div>
          </div>
        </div>
      </div>
      <div className="widget-container-2 flex-1 flex justify-end items-center">
        <img src={indiaMapImg} alt="bharath map" className='w-[80%]' />
      </div>
    </div>
  )
}

export default widget