'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { Button } from '@workspace/ui/components/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@workspace/ui/components/dropdown-menu'
import { useUISettings } from '@/stores'

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const { updateSetting } = useUISettings()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" size="sm">
                <Sun className="h-4 w-4" />
            </Button>
        )
    }

    const getIcon = () => {
        switch (theme) {
            case 'dark':
                return <Moon className="h-4 w-4" />
            case 'light':
                return <Sun className="h-4 w-4" />
            case 'system':
            default:
                return <Monitor className="h-4 w-4" />
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white dark:text-foreground hover:bg-white/10 dark:hover:bg-accent">
                    {getIcon()}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => {
                    setTheme('light')
                    updateSetting('isDarkMode', false)
                }}>
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                    setTheme('dark')
                    updateSetting('isDarkMode', true)
                }}>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                    setTheme('system')
                    // For system theme, update based on current system preference
                    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                    updateSetting('isDarkMode', systemPrefersDark)
                }}>
                    <Monitor className="mr-2 h-4 w-4" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
