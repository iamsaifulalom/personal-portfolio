"use client"
import { Sun } from 'lucide-react'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

    const { theme, setTheme } = useTheme();


    return (
        <div className='bg-background text-sm h-[60px] flex justify-between items-center  px-4 w-full'>
            <Link href="#">
                <Image
                    src="/images/logo.png"
                    alt='site logo'
                    width={40}
                    height={40}
                /></Link>
            <Sun className='bg-primary cursor-pointer p-1.5 size-7 rounded-full' onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
        </div>
    )
}
