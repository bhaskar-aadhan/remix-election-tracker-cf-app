import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

const Card = ({ w, h, sx, viewportWidth }) => {
    return (
        <div className={`${sx}`} style={{ width: `${w}`, height: `${h}` }}>
            <div className='hidden md:block ps-3 py-1 text-black font-semibold rounded-md'>
                ABN
            </div>
            {viewportWidth > '768' ?
                    <div className='card-table-container table__shadow rounded-[7px]'>
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
                                <TableRow className='bg-[#dff1df]'>
                                    <TableCell className="font-medium text-black ps-3">BRS</TableCell>
                                    <TableCell className="text-center text-black">99</TableCell>
                                    <TableCell className="text-center text-black">99</TableCell>
                                    <TableCell className="text-center text-[indigo]">99</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                :
                <div className='card-table-container'>
                    <Table className="">
                        <TableHeader>
                            <TableRow className="text-center bg-[#698077] border-0 border-transparent">
                                <TableHead className="text-white ps-3">Party</TableHead>
                                <TableHead className="text-center text-white">Leading</TableHead>
                                <TableHead className="text-center text-white">Won</TableHead>
                                <TableHead className="text-center text-white">Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className='bg-[#1D2949]'>
                                <TableCell className="font-medium text-white ps-3">BRS</TableCell>
                                <TableCell className="text-center text-white">99</TableCell>
                                <TableCell className="text-center text-white">99</TableCell>
                                <TableCell className="text-center text-[#FFA500]">99</TableCell>
                            </TableRow>
                            <TableRow className='bg-[#1D2949]'>
                                <TableCell className="font-medium text-white ps-3">BRS</TableCell>
                                <TableCell className="text-center text-white">99</TableCell>
                                <TableCell className="text-center text-white">99</TableCell>
                                <TableCell className="text-center text-[#FFA500]">99</TableCell>
                            </TableRow>
                            <TableRow className='bg-[#1D2949]'>
                                <TableCell className="font-medium text-white ps-3">BRS</TableCell>
                                <TableCell className="text-center text-white">99</TableCell>
                                <TableCell className="text-center text-white">99</TableCell>
                                <TableCell className="text-center text-[#FFA500]">99</TableCell>
                            </TableRow>
                            <TableRow className='bg-[#1D2949]'>
                                <TableCell className="font-medium text-white ps-3">BRS</TableCell>
                                <TableCell className="text-center text-white">99</TableCell>
                                <TableCell className="text-center text-white">99</TableCell>
                                <TableCell className="text-center text-[#FFA500]">99</TableCell>
                            </TableRow>
                            <TableRow className='bg-[#1D2949]'>
                                <TableCell className="font-medium text-white ps-3">BRS</TableCell>
                                <TableCell className="text-center text-white">99</TableCell>
                                <TableCell className="text-center text-white">99</TableCell>
                                <TableCell className="text-center text-[#FFA500]">99</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            }
        </div>
    )
}

export default Card