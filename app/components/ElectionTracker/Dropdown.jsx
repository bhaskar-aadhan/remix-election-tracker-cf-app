import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"

const Dropdown = ({sx}) => {
    return (
        <div className={`${sx}`}>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Telangana" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Telangana</SelectItem>
                    <SelectItem value="dark">Andhra Pradesh</SelectItem>
                    <SelectItem value="system">Karnataka</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default Dropdown