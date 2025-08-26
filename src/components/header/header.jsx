"use client"

import HeaderMenu from './menu'
import Navigation from './Navigaion'
export default function Header() {
    
    return (
        <nav className='font-Montserrat h-16 bg-background/5 backdrop-blur-xs flex justify-between p-4 w-full fixed top-0 left-0'>
            <p>Logo</p>
            <Navigation/>
            <HeaderMenu/>
        </nav>
    )
}
