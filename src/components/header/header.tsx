"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionMoon = motion(Moon);
const MotionSun = motion(Sun);

export default function Header() {
    const { theme, setTheme } = useTheme();
    const isLight = theme === "light";
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    const toggleTheme = () => setTheme(isLight ? "dark" : "light");

    return (
        <header className="bg-background text-sm h-[60px] flex justify-between items-center px-4 w-full">
            {/* Logo */}
            <Link href="#">
                <Image src="/images/logo.png" alt="site logo" width={40} height={40} />
            </Link>

            {/* Theme Toggle */}
            <div className="bg-primary cursor-pointer p-1.5 size-7 flex justify-center items-center rounded-full overflow-hidden">
                <AnimatePresence mode="wait">
                    {isLight ? (
                        <MotionMoon
                            suppressHydrationWarning
                            key="moon"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={toggleTheme}
                            className="cursor-pointer"
                        />
                    ) : (
                        <MotionSun
                            suppressHydrationWarning
                            key="sun"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={toggleTheme}
                            className="cursor-pointer"
                        />
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
