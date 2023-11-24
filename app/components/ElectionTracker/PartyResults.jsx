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
                    <TableHead className="text-center text-white">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {parties.map((party)=>( 
                <TableRow key={party['name']} className='bg-[#dff1df]'>
                    <TableCell className="font-medium text-black ps-3">{party['name']}</TableCell>
                    <TableCell className="text-center text-black">99</TableCell>
                    <TableCell className="text-center text-black">99</TableCell>
                    <TableCell className="text-center text-[indigo]">99</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default PartyResults