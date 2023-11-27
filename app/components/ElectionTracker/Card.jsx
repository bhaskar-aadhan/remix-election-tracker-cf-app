import React from 'react';
import { PartyResults } from '.';

const Card = ({ w, h, sx, media, parties }) => {
    return (
        <div className={`${sx}`} style={{ width: `${w}`, height: `${h}` }}>
            <div className='ps-3 py-1 text-black font-semibold rounded-md'>
                {media}
            </div>
            <div className='card-table-container table__shadow rounded-[7px]'>
                <PartyResults parties={parties} />
            </div>
        </div>
    )
}

export default Card