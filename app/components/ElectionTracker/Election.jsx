import React, { memo, useContext } from 'react';
import { ElectionContext } from '~/services/context';
import { getSateData } from '~/services/ElectionServices';
import { InfoBar, Card, Download } from '.';

const Election = () => {
  const [webSocketData, stateName] = useContext(ElectionContext);
  const stateData = getSateData(webSocketData, stateName)
  console.log("sateData", stateData)
  return (
    <div className='w-full min-h-screen font__nunitosans flex flex-col items-center bg-[#050D3E]' style={{ background: `linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)` }}>
      {/* pc */}
      <div className="info-bar-container w-full flex items-center  bg-[#003D75] px-2 md:px-6" style={{ alignSelf: 'flex-start' }}>
        <InfoBar />
        <Download />
      </div>
      <div className="w-full result-cards-container my-5 md:my-0 flex flex-1 justify-center md:content-center gap-y-5 md:gap-x-8 md:gap-y-11 flex-wrap overflow-y-auto">
        {stateData[0]['media_sources'].map((media) => (
          <Card key={media['name']} sx={`w-[90%] mx-auto md:w-[30%]`} media={media['name']} parties={media['party_wise_data']} />
        ))}
      </div>
      {/* mobile */}
      {/* <div className="info-bar-container block md:hidden w-full bg-[#003D75] ps-4 pe-2 py-1 mt-5" style={{ alignSelf: 'flex-start' }}>
        <InfoBar />
      </div>
      <div className='w-[90%] flex md:hidden justify-between items-center my-3'>
        <Dropdown sx={'text-[#0387D1]'} />
        <img src={aadhanLogo} alt="aadhan logo" />
      </div>
      <div className="result-cards-container flex md:hidden flex-1 justify-center content-start gap-5 flex-wrap">
        <Card w={'90%'} />
        <div className='flex justify-center items-center gap-2 my-2'>
          <p className='text-white'>Magic figure:</p>
          <div className='w-fit px-4 bg-[#FFA500] text-black rounded-md font-semibold'>60</div>
        </div>
      </div> */}
    </div>
  )
}

export default memo(Election)