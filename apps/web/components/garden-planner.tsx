'use client'

import { useEffect, useRef } from 'react'
import { useGarden, useToasts } from '@/stores'
import { GardenDisplay } from './garden-display'
import { HorizontalCropSelector } from './horizontal-crop-selector'
import { HorizontalFertilizerSelector } from './horizontal-fertilizer-selector'
import { MenuBar } from './menu-bar'
import { StatsDisplay } from './stats-display'

export function GardenPlanner() {
    const { garden, initializeGarden, isLoading, error } = useGarden()
    const { addToast } = useToasts()
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
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="space-y-6">
                    {/* Horizontal Crop Selection Bar */}
                    <HorizontalCropSelector />

                    {/* Horizontal Fertilizer Selection Bar */}
                    <HorizontalFertilizerSelector />

                    {/* Garden and Stats Layout */}
                    <div className="flex gap-8">
                        {/* Garden Display - Main Content */}
                        <div className="flex-1">
                            <div className="bg-white rounded-lg shadow p-6" data-garden-display>
                                <h2 className="text-lg font-semibold mb-4">Garden Layout</h2>
                                <GardenDisplay />
                            </div>
                        </div>

                        {/* Stats Display - Right Sidebar */}
                        <div className="w-80 flex-shrink-0">
                            <StatsDisplay />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
} 