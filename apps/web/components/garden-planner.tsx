'use client'

import { useEffect, useRef } from 'react'
import { useGarden, useToasts, useSelectedItem } from '@/stores'
import { GardenDisplay } from './garden-display'
import { HorizontalCropSelector } from './horizontal-crop-selector'
import { HorizontalFertilizerSelector } from './horizontal-fertilizer-selector'
import { HorizontalToolSelector } from './horizontal-tool-selector'
import { MenuBar } from './menu-bar'
import { StatsDisplay } from './stats-display'
import { CurrentSelectionDisplay } from './current-selection-display'

export function GardenPlanner() {
    const { garden, initializeGarden, isLoading, error } = useGarden()
    const { addToast } = useToasts()
    const {
        setEraseCropMode,
        setEraseFertiliserMode,
        setEraseMode,
        setErasePlotMode,
        clearSelection
    } = useSelectedItem()
    const hasShownWelcome = useRef(false)

    useEffect(() => {
        // Initialize with a default 3x3 garden
        if (!garden) {
            initializeGarden(3, 3)
        }
    }, [garden, initializeGarden])

    // Show welcome message after garden is initialized and component is mounted
    useEffect(() => {
        if (garden && !hasShownWelcome.current) {
            hasShownWelcome.current = true
            addToast({
                type: 'info',
                message: 'Welcome to Palia Garden Planner! Your garden has been initialized with a 3x3 layout.'
            })
        }
    }, [garden, addToast])

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Ignore if user is typing in an input field
            if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
                return
            }

            switch (event.key) {
                case '1':
                    event.preventDefault()
                    setEraseCropMode()
                    addToast({
                        type: 'info',
                        message: 'Erase Crops mode activated'
                    })
                    break
                case '2':
                    event.preventDefault()
                    setEraseFertiliserMode()
                    addToast({
                        type: 'info',
                        message: 'Erase Fertilizers mode activated'
                    })
                    break
                case '3':
                    event.preventDefault()
                    setEraseMode()
                    addToast({
                        type: 'info',
                        message: 'Erase Both mode activated'
                    })
                    break
                case '4':
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
    }, [setEraseCropMode, setEraseFertiliserMode, setEraseMode, setErasePlotMode, clearSelection, addToast])

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-palia-blue mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading garden planner...</p>
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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Menu Bar */}
            <MenuBar />

            {/* Main Content */}
            <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="space-y-6">
                    {/* Selector Bars - Single Row */}
                    <div className="flex gap-4">
                        <HorizontalCropSelector />
                        <HorizontalFertilizerSelector />
                        <HorizontalToolSelector />
                        <CurrentSelectionDisplay showLabel={false} />
                    </div>

                    {/* Garden and Stats Layout */}
                    <div className="flex flex-col xl:flex-row gap-4 xl:gap-8">
                        {/* Garden Display - Main Content */}
                        <div className="w-full xl:w-3/5">
                            <div className="bg-white rounded-lg shadow p-3 sm:p-4 lg:p-6" data-garden-display>
                                <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Garden Layout</h2>
                                <GardenDisplay />
                            </div>
                        </div>

                        {/* Stats Display - Right Sidebar */}
                        <div className="w-full xl:w-2/5">
                            <StatsDisplay />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
} 