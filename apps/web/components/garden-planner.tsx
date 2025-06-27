'use client'

import { useEffect, useRef, useState } from 'react'
import { useGarden, useToasts, useSelectedItem } from '@/stores'
import { GardenDisplay } from './garden-display'
import { HorizontalCropSelector } from './horizontal-crop-selector'
import { HorizontalFertilizerSelector } from './horizontal-fertilizer-selector'
import { HorizontalToolSelector } from './horizontal-tool-selector'
import { MenuBar } from './menu-bar'
import { StatsDisplay } from './stats-display'
import { CurrentSelectionDisplay } from './current-selection-display'
import { ScrollArea } from '@workspace/ui/components/scroll-area'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@workspace/ui/components/collapsible'

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
    const [isSelectorsOpen, setIsSelectorsOpen] = useState(true)

    // Garden initialization is now handled in the page component

    // Show welcome message after garden is initialized and component is mounted
    useEffect(() => {
        if (garden && !hasShownWelcome.current) {
            hasShownWelcome.current = true
            // Only show welcome message if no layout was loaded from URL
            const urlParams = new URLSearchParams(window.location.search)
            if (!urlParams.get('layout')) {
                addToast({
                    type: 'info',
                    message: `Welcome to Palia Garden Helper! Your garden has been initialized with a ${garden.rows}x${garden.columns} layout.`
                })
            }
        }
    }, [garden, addToast])

    // Keyboard shortcuts
    useEffect(() => {
        // Only add event listeners on the client side
        if (typeof window === 'undefined') return

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

    return (
        <div className="min-h-screen bg-background">
            {/* Menu Bar */}
            <MenuBar />

            {/* Main Content */}
            <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-40">
                <div className="space-y-6">
                    {/* Collapsible Selector Bars */}
                    <Collapsible open={isSelectorsOpen} onOpenChange={setIsSelectorsOpen}>
                        <CollapsibleTrigger asChild>
                            <button className="flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
                                <div className={`transform transition-transform duration-200 ${isSelectorsOpen ? 'rotate-180' : ''}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-4">
                            <div className="flex flex-col xl:flex-row gap-4">
                                <HorizontalCropSelector />
                                <HorizontalFertilizerSelector />
                                <HorizontalToolSelector />
                                <CurrentSelectionDisplay showLabel={false} />
                            </div>
                        </CollapsibleContent>
                    </Collapsible>

                    {/* Garden and Stats Layout */}
                    <div className="flex flex-col 2xl:flex-row gap-4 2xl:gap-8">
                        {/* Garden Display - Main Content */}
                        <div className="flex-2">
                            <div className="bg-card rounded-lg shadow p-3 sm:p-4 lg:p-6 border border-border" data-garden-display>
                                <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Garden Layout</h2>
                                <ScrollArea className="max-h-[65vh] overflow-auto p-4 border rounded-lg">
                                    <GardenDisplay />
                                </ScrollArea>
                            </div>
                        </div>

                        {/* Stats Display - Right Sidebar */}
                        <div className="flex-3">
                            <ScrollArea className="max-h-[70vh] overflow-auto p-4 border rounded-lg pr-4 lg:pr-8">
                                <StatsDisplay />
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
} 