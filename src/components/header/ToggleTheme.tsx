import { ChangeTheme } from '@/utils/changeTheme'
import React from 'react'

export default function ToggleTheme() {
    return (
        <div className="flex flex-col relative">
            <span className="cursor-pointer" onClick={() => ChangeTheme("dark")}>Dark</span>
            <span className="cursor-pointer" onClick={() => ChangeTheme("light")}>Light</span>
            <div className="absolute border pointer-events-none border-light-gray size-50 rounded-full -top-20 -right-20"></div>
        </div>)
}
