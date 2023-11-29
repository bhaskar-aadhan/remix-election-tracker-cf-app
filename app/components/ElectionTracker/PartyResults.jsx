import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

const PartyResults = ({parties}) => {
    return (
        <Table className="">
            <TableHeader>
                <TableRow className="text-center bg-[#34509d] border-0 border-transparent">
                    <TableHead className="text-white text-[1rem] ps-4">Party</TableHead>
                    <TableHead className="text-center text-[1rem] text-white">Leading</TableHead>
                    <TableHead className="text-center text-[1rem] text-white">Won</TableHead>
                    <TableHead className="text-center text-[1rem] text-white">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {parties.map((party)=>( 
                <TableRow key={party['name']} className='bg-[#1D2949] text-white'>
                    <TableCell className="font-medium text-white ps-5">
                        <div className='flex justify-start items-center gap-2'>
                            <img className='w-5 h-5 rounded-full' src={party['logo']} alt="" />
                            <p>{party['name']}</p>
                        </div>
                    </TableCell>
                    <TableCell className="text-center text-[16px] text-white">{party['leading']}</TableCell>
                    <TableCell className="text-center text-[16px] text-white">{party['won']}</TableCell>
                    <TableCell className="text-center text-[16px] text-[white]">{party['leading'] + party['won']}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default PartyResults