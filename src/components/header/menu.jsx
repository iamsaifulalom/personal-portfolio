"use client"

import { Menu } from "lucide-react";
import Command from "./command";
import { useState } from "react";


export default function HeaderDialog() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Menu onClick={() => { setIsOpen(p => !p) }} className='cursor-pointer' />
            <Command setIsOpen={setIsOpen} isOpen={isOpen}/>
        </>
    )
}
