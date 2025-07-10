'use client'

import { useEffect } from 'react'
import { useCurrentMode, useIsTransitioning, useModeSwitch } from '@/stores'
import { GardenMode } from '@/types/mode'
import { MODE_CONFIGS } from '@/lib/mode-config'
import { cn } from '@workspace/ui/lib/utils'

interface ModeSwitcherProps {
    className?: string
}

export function ModeSwitcher({ className }: ModeSwitcherProps) {
    const currentMode = useCurrentMode()
    const isTransitioning = useIsTransitioning()
    const switchMode = useModeSwitch()

    // Keyboard shortcuts for mode switching
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Only handle shortcuts if no input is focused
            if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
                return
            }

            // Don't handle shortcuts during transitions
            if (isTransitioning) {
                return
            }

            const key = event.key
            const modes = Object.values(GardenMode)

            // Handle number keys 1-5 for mode switching
            if (['1', '2', '3', '4', '5'].includes(key)) {
                event.preventDefault()
                const modeIndex = parseInt(key) - 1
                if (modes[modeIndex]) {
                    switchMode(modes[modeIndex])
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isTransitioning, switchMode])

    const handleModeClick = async (mode: GardenMode) => {
        if (mode === currentMode || isTransitioning) return
        await switchMode(mode)
    }

    return (
        <div className={cn(
            "flex items-center justify-center backdrop-blur-sm border border-border rounded-lg p-1 shadow-lg",
            className
        )}>
            {Object.values(GardenMode).map((mode, index) => {
                const config = MODE_CONFIGS[mode]
                const isActive = currentMode === mode
                const shortcutKey = (index + 1).toString()

                return (
                    <button
                        key={mode}
                        type="button"
                        onClick={() => handleModeClick(mode)}
                        disabled={isTransitioning}
                        className={cn(
                            "relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200",
                            "hover:bg-accent hover:text-accent-foreground hover:scale-105",
                            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                            "disabled:opacity-50 disabled:cursor-not-allowed",
                            "active:scale-95",
                            isActive && "text-primary-foreground shadow-sm"
                        )}
                        style={{
                            backgroundColor: isActive ? config.primaryColor : undefined,
                        }}
                    >
                        {/* Content */}
                        <div className="relative flex items-center gap-2">
                            <span className="text-lg" role="img" aria-label={config.name}>
                                {config.icon}
                            </span>
                            <span className="font-medium text-sm">
                                {config.name}
                            </span>
                            <span className="text-xs opacity-60 bg-background/20 px-1 rounded">
                                {shortcutKey}
                            </span>
                        </div>

                        {/* Transition indicator */}
                        {isTransitioning && isActive && (
                            <div className="absolute inset-0 border-2 border-primary rounded-md animate-pulse" />
                        )}
                    </button>
                )
            })}
        </div>
    )
}

// Compact version for mobile
export function CompactModeSwitcher({ className }: ModeSwitcherProps) {
    const currentMode = useCurrentMode()
    const isTransitioning = useIsTransitioning()
    const switchMode = useModeSwitch()

    const handleModeClick = async (mode: GardenMode) => {
        if (mode === currentMode || isTransitioning) return
        await switchMode(mode)
    }

    return (
        <div className={cn(
            "flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border rounded-lg p-1 shadow-lg",
            className
        )}>
            {Object.values(GardenMode).map((mode) => {
                const config = MODE_CONFIGS[mode]
                const isActive = currentMode === mode

                return (
                    <button
                        key={mode}
                        type="button"
                        onClick={() => handleModeClick(mode)}
                        disabled={isTransitioning}
                        className={cn(
                            "relative flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200",
                            "hover:bg-accent hover:text-accent-foreground hover:scale-110",
                            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                            "disabled:opacity-50 disabled:cursor-not-allowed",
                            "active:scale-90",
                            isActive && "text-primary-foreground shadow-sm"
                        )}
                        style={{
                            backgroundColor: isActive ? config.primaryColor : undefined,
                        }}
                        title={config.description}
                    >
                        {/* Icon */}
                        <span className="relative text-lg" role="img" aria-label={config.name}>
                            {config.icon}
                        </span>

                        {/* Transition indicator */}
                        {isTransitioning && isActive && (
                            <div className="absolute inset-0 border-2 border-primary rounded-md animate-pulse" />
                        )}
                    </button>
                )
            })}
        </div>
    )
}

// Mode indicator for showing current mode description
export function ModeIndicator({ className }: { className?: string }) {
    const currentMode = useCurrentMode()
    const isTransitioning = useIsTransitioning()
    const config = MODE_CONFIGS[currentMode]

    return (
        <div className={cn(
            "flex items-center gap-3 p-3 bg-background/30 backdrop-blur-sm border border-border rounded-lg transition-all duration-300",
            className
        )}>
            <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: config.primaryColor }}
            />
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <span className="text-lg" role="img" aria-label={config.name}>
                        {config.icon}
                    </span>
                    <span className="font-medium text-sm">
                        {config.name} Mode
                    </span>
                    {isTransitioning && (
                        <span className="text-xs text-muted-foreground animate-pulse">
                            Switching...
                        </span>
                    )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                    {config.description}
                </p>
            </div>
        </div>
    )
} 