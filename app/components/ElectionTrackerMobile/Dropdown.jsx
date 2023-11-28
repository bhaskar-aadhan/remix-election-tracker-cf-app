import React, { useContext } from 'react';
// import { ElectionContext } from '~/services/context';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    // DropdownMenuRadioItem,
} from "~/components/ui/dropdown-menu";
import { Button } from '~/components/ui/button';
import { downArrowIcon } from '~/assets/images';

const Dropdown = ({ sx }) => {
    // const [webSocketData, stateName, setStateName] = useContext(ElectionContext)
    return (
        <div className={`${sx}`}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="min-w-[155px] justify-start" variant="outline">
                        <div className='w-full flex justify-between items-center'>
                            <p>{""}</p>
                            <img src={downArrowIcon} alt="down icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[180px]">
                    <DropdownMenuLabel>Select a State</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={""} onValueChange={""}>
                        {/* {webSocketData?.[0]?.['states']?.map((state) => (
                            <DropdownMenuRadioItem key={state['name']} value={state['name']}>{state['name']}</DropdownMenuRadioItem>
                        ))} */}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Dropdown