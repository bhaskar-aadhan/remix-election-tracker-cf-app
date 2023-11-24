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
                    <TableHead className="text-white ps-3">Party</TableHead>
                    <TableHead className="text-center text-white">Leading</TableHead>
                    <TableHead className="text-center text-white">Won</TableHead>
                    <TableHead className="text-center text-white">Lost</TableHead>
                    <TableHead className="text-center text-white">Con</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {parties.map((party)=>( 
                <TableRow key={party['name']} className='bg-[#dff1df]'>
                    <TableCell className="font-medium text-black ps-3">
                        <div className='flex justify-start items-center gap-2'>
                            <img className='w-5 h-5 rounded-full' src={party['logo']} alt="" />
                            <p>{party['name']}</p>
                        </div>
                    </TableCell>
                    <TableCell className="text-center text-black">{party['leading']}</TableCell>
                    <TableCell className="text-center text-black">{party['won']}</TableCell>
                    <TableCell className="text-center text-[indigo]">{party['lost']}</TableCell>
                    <TableCell className="text-center text-[indigo]">{party['contested']}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default PartyResults