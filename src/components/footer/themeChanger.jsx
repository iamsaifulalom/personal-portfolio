"use client"

import React, { useEffect, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Sun, Moon, Laptop2 } from "lucide-react"
import { useTheme } from 'next-themes';

export default function ThemeChanger() {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null
    return (
        <ToggleGroup
            type="single"
            size="sm"
            value={theme}
            className="border-2"
            onValueChange={(val) => val && setTheme(val)}
        >
            <ToggleGroupItem value="light" aria-label="Toggle light">
                <Sun className="h-4 w-4" />
            </ToggleGroupItem>

            <ToggleGroupItem value="dark" aria-label="Toggle dark">
                <Moon className="h-4 w-4" />
            </ToggleGroupItem>

            <ToggleGroupItem value="system" aria-label="Toggle system">
                <Laptop2 className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    )
}
