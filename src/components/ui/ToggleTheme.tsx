import { ChangeTheme } from '@/utils/changeTheme'
import React from 'react';
import HeaderCircle from './HeaderCircle';
import HamburgerMenu from './HamburgerMenu';

export default function ToggleTheme() {
    return (
        <div className="flex flex-col relative">
            <HamburgerMenu/>
            <span className="cursor-pointer md:block hidden" onClick={() => ChangeTheme("dark")}>Dark</span>
            <span className="cursor-pointer md:block hidden" onClick={() => ChangeTheme("light")}>Light</span>
            <HeaderCircle/>
        </div>)
}
