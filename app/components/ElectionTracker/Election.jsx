import React from 'react';
import { InfoBar, Card, Dropdown } from '.';
import { aadhanLogo } from '../../assets/images';

const Election = ({viewportWidth}) => {
  return (
    <div className='w-full h-screen font__nunitosans flex flex-col items-center md:items bg-[#050D3E]' style={{ background: `${viewportWidth > '768' ? 'linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)' : '#050D3E'}` }}>
      {/* pc */}
      <div className="info-bar-container hidden  md:block w-full bg-[#003D75] ps-8 pe-6" style={{ alignSelf: 'flex-start' }}>
        <InfoBar />
      </div>
      <div className="result-cards-container hidden md:flex flex-1 justify-center content-center gap-5 flex-wrap">
        <Card w={'30%'} viewportWidth={viewportWidth} />
        <Card w={'30%'} viewportWidth={viewportWidth} />
        <Card w={'30%'} viewportWidth={viewportWidth} />
        <Card w={'30%'} viewportWidth={viewportWidth} />
        <Card w={'30%'} viewportWidth={viewportWidth} />
        <Card w={'30%'} viewportWidth={viewportWidth} />
      </div>
      {/* mobile */}
      <div className="info-bar-container block md:hidden w-full bg-[#003D75] ps-4 pe-2 py-1 mt-5" style={{ alignSelf: 'flex-start' }}>
        <InfoBar />
      </div>
      <div className='w-[90%] flex md:hidden justify-between items-center my-3'>
        <Dropdown sx={'text-white'} />
        <img src={aadhanLogo} alt="aadhan logo" />
      </div>
      <div className="result-cards-container flex md:hidden flex-1 justify-center content-start gap-5 flex-wrap">
        <Card w={'90%'} viewportWidth={viewportWidth} />
        <div className='flex justify-center items-center gap-2 my-2'>
          <p className='text-white'>Magic figure:</p>
          <div className='w-fit px-4 bg-[#FFA500] text-black rounded-md font-semibold'>60</div>
        </div>
      </div>
    </div>
  )
}

export default Election