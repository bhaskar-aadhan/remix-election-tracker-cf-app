import React, { useContext } from 'react';
import { ElectionContext } from '~/services/context';
import { PartyResults } from '.';

const Card = ({ w, h, sx, viewportWidth }) => {
    const [ webSocketData, stateName ] = useContext(ElectionContext)
    return (
        <div className={`${sx}`} style={{ width: `${w}`, height: `${h}` }}>
            <div className='hidden md:block ps-3 py-1 text-black font-semibold rounded-md'>
                ABN
            </div>
            {viewportWidth > '768' ?
                <div className='card-table-container table__shadow rounded-[7px]'>
                    <PartyResults />
                </div>
                :
                <div className='card-table-container'>
                    <PartyResults />
                </div>
            }
        </div>
    )
}

export default Card