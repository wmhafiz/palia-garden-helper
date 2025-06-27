'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useUISettings } from '@/stores'

export function ThemeSync() {
    const { theme, setTheme } = useTheme()
    const { isDarkMode } = useUISettings()

    // Only sync UI settings to next-themes (one-way sync)
    useEffect(() => {
        const targetTheme = isDarkMode ? 'dark' : 'light'
        if (theme !== targetTheme) {
            setTheme(targetTheme)
        }
    }, [isDarkMode, theme, setTheme])

    return null
} 