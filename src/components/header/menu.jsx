"use client"

import { SquareChartGantt } from "lucide-react";
import Command from "./command";
import { useState } from "react";


export default function HeaderDialog() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <SquareChartGantt onClick={() => { setIsOpen(p => !p) }} className='cursor-pointer' />
            {isOpen && <Command isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </>
    )
}
