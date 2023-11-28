import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

const PartyResults = () => {
    return (
        <Table className="">
            <TableHeader>
                <TableRow className="text-center bg-[#34509d] border-0 border-transparent">
                    <TableHead className="text-white ps-3">Party</TableHead>
                    <TableHead className="text-center text-white">Leading</TableHead>
                    <TableHead className="text-center text-white">Won</TableHead>
                    <TableHead className="text-center text-white">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
               
                <TableRow key={''} className='bg-[#dff1df]'>
                    <TableCell className="font-medium text-black ps-3">
                        <div className='flex justify-start items-center gap-2'>
                            <img className='w-5 h-5 rounded-full' src={''} alt="" />
                            <p></p>
                        </div>
                    </TableCell>
                    <TableCell className="text-center text-black">{''}</TableCell>
                    <TableCell className="text-center text-black">{''}</TableCell>
                    <TableCell className="text-center text-[indigo]">{''}</TableCell>
                </TableRow>
               
            </TableBody>
        </Table>
    )
}

export default PartyResults