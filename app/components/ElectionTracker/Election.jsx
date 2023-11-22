import React from 'react';
import { InfoBar, Card } from '.';


const Election = () => {
  return (
    <div className='w-full h-screen font__nunitosans flex flex-col' style={{ background: "linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)" }}>
      <div className="info-bar-container w-full bg-[#003D75] ps-8 pe-6" style={{alignSelf:'flex-start'}}>
        <InfoBar />
      </div>
      <div className="result-cards-container flex-1 flex justify-center content-center gap-5 flex-wrap">
        <Card w={'30%'}  />
        <Card w={'30%'}  />
        <Card w={'30%'}  />
        <Card w={'30%'}  />
        <Card w={'30%'}  />
        <Card w={'30%'}  />
      </div>
    </div>
  )
}

export default Election