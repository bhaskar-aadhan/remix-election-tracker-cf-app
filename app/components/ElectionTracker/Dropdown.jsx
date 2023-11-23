import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";

const Dropdown = ({ sx }) => {
    return (
        <div className={`${sx}`}>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Telangana" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">1</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default Dropdown