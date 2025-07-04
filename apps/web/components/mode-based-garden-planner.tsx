'use client'

import { useEffect, useRef } from 'react'
import { useGarden, useToasts, useSelectedItem, useCurrentMode, useIsTransitioning } from '@/stores'
import { useUndoRedoIntegration } from '@/hooks/useUndoRedoIntegration'
import { useScheduleIntegration } from '@/hooks/useScheduleIntegration'
import { GardenMode } from '@/types/mode'

import { MenuBar } from './menu-bar'
import { ModeIndicator } from './mode-switcher'
import { DesignMode } from './modes/design-mode'
import { OptimizeMode } from './modes/optimize-mode'
import { AdaptiveWidgetContainer } from './widget-router'
import { ScrollArea } from '@workspace/ui/components/scroll-area'

export function ModeBasedGardenPlanner() {
    const { garden, initializeGarden, isLoading, error } = useGarden()
    const { addToast } = useToasts()
    const {
        setEraseCropMode,
        setEraseFertiliserMode,
        setEraseMode,
        setErasePlotMode,
        clearSelection
    } = useSelectedItem()
    const currentMode = useCurrentMode()
    const isTransitioning = useIsTransitioning()
    const hasShownWelcome = useRef(false)

    // Initialize undo/redo functionality
    useUndoRedoIntegration()

    // Initialize schedule integration
    useScheduleIntegration()

    // Show welcome message after garden is initialized and component is mounted
    useEffect(() => {
        if (garden && !hasShownWelcome.current) {
            hasShownWelcome.current = true
            // Only show welcome message if no layout was loaded from URL
            const urlParams = new URLSearchParams(window.location.search)
            if (!urlParams.get('layout')) {
                addToast({
                    type: 'info',
                    message: `Welcome to Palia Garden Helper! Your garden has been initialized with a ${garden.rows}x${garden.columns} layout. Use the mode switcher to explore different features.`
                })
            }
        }
    }, [garden, addToast])

    // Enhanced keyboard shortcuts that work with modes
    useEffect(() => {
        // Only add event listeners on the client side
        if (typeof window === 'undefined') return

        const handleKeyDown = (event: KeyboardEvent) => {
            // Ignore if user is typing in an input field
            if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
                return
            }

            // Don't handle shortcuts during transitions
            if (isTransitioning) {
                return
            }

            switch (event.key) {
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                    // Mode switching is handled by ModeSwitcher component
                    break
                case 'x':
                    event.preventDefault()
                    setEraseCropMode()
                    addToast({
                        type: 'info',
                        message: 'Erase Crops mode activated'
                    })
                    break
                case 'z':
                    event.preventDefault()
                    setEraseFertiliserMode()
                    addToast({
                        type: 'info',
                        message: 'Erase Fertilizers mode activated'
                    })
                    break
                case 'c':
                    event.preventDefault()
                    setEraseMode()
                    addToast({
                        type: 'info',
                        message: 'Erase Both mode activated'
                    })
                    break
                case 'v':
                    event.preventDefault()
                    setErasePlotMode()
                    addToast({
                        type: 'info',
                        message: 'Erase Plot mode activated'
                    })
                    break
                case 'Escape':
                    event.preventDefault()
                    clearSelection()
                    addToast({
                        type: 'info',
                        message: 'Selection cleared'
                    })
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [setEraseCropMode, setEraseFertiliserMode, setEraseMode, setErasePlotMode, clearSelection, addToast, isTransitioning])

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-palia-blue mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading Garden Helper...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
                    <div className="text-red-600 text-xl mb-2">⚠️ Error</div>
                    <p className="text-red-800 mb-4">{error}</p>
                    <button
                        onClick={() => initializeGarden(3, 3)}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        )
    }

    const renderModeContent = () => {
        const modeProps = {
            mode: currentMode,
            isActive: true,
            isTransitioning,
            transitionProgress: 100,
            onModeChange: () => { }, // Handled by ModeSwitcher
        }

        switch (currentMode) {
            case GardenMode.DESIGN:
                return <DesignMode {...modeProps} />
            case GardenMode.OPTIMIZE:
                return <OptimizeMode {...modeProps} />
            case GardenMode.ANALYZE:
                // TODO: Implement AnalyzeMode
                return (
                    <div className="flex items-center justify-center h-64 text-muted-foreground">
                        Analyze mode coming soon...
                    </div>
                )
            case GardenMode.PROCESS:
                // TODO: Implement ProcessMode
                return (
                    <div className="flex items-center justify-center h-64 text-muted-foreground">
                        Process mode coming soon...
                    </div>
                )
            case GardenMode.SCHEDULE:
                // TODO: Implement ScheduleMode
                return (
                    <div className="flex items-center justify-center h-64 text-muted-foreground">
                        Schedule mode coming soon...
                    </div>
                )
            default:
                return <DesignMode {...modeProps} />
        }
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Menu Bar */}
            <MenuBar />

            {/* Mode Indicator */}
            <div className="fixed top-10 right-4 z-40">
                <ModeIndicator />
            </div>

            {/* Main Content */}
            <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
                <div className="space-y-6">
                    {/* Mode Content */}
                    <div className="flex flex-col 2xl:flex-row gap-6">
                        {/* Mode Interface - Main Content */}
                        <div className="flex-1 min-h-[600px]">
                            {renderModeContent()}
                        </div>

                        {/* Adaptive Widgets - Right Sidebar */}
                        <div className="w-80 2xl:w-96">
                            <ScrollArea className="max-h-[80vh] overflow-auto">
                                <AdaptiveWidgetContainer layout="vertical" />
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            </main>

            {/* Transition Overlay */}
            {isTransitioning && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                            <span className="text-sm font-medium">Switching modes...</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
} 