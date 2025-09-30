import { ChangeTheme } from '@/utils/changeTheme'
import React from 'react';
import HeaderCircle from '../ui/HeaderCircle';
import HamburgerMenu from '../ui/HamburgerMenu';

export default function ToggleTheme() {
    return (
        <div className="flex flex-col relative">
            <HamburgerMenu/>
            <span className="cursor-pointer lg:block hidden" onClick={() => ChangeTheme("dark")}>Dark</span>
            <span className="cursor-pointer lg:block hidden" onClick={() => ChangeTheme("light")}>Light</span>
            <HeaderCircle/>
        </div>)
}
