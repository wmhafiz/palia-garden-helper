'use client'

import { useEffect } from 'react'
import { useGarden, useToasts } from '@/stores'
import { ToastContainer } from './ui/toast-container'
import { GardenDisplay } from './garden-display'
import { ItemSelector } from './item-selector'

export function GardenPlanner() {
    const { garden, initializeGarden, isLoading, error } = useGarden()
    const { addToast } = useToasts()

    useEffect(() => {
        // Initialize with a default 3x3 garden
        if (!garden) {
            initializeGarden(3, 3)
            addToast({
                type: 'info',
                message: 'Welcome to Palia Garden Planner! Your garden has been initialized with a 3x3 layout.'
            })
        }
    }, [garden, initializeGarden, addToast])

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
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-gray-900">
                                Palia Garden Planner
                            </h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500">
                                React Port v0.1
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Item Selector - Left Panel */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-lg font-semibold mb-4">Item Selector</h2>
                            <ItemSelector />
                        </div>
                    </div>

                    {/* Garden Display - Center Panel */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-lg font-semibold mb-4">Garden Layout</h2>
                            <GardenDisplay />
                        </div>
                    </div>

                    {/* Stats Display - Right Panel */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-lg font-semibold mb-4">Statistics</h2>
                            <p className="text-gray-500 text-sm">
                                Garden statistics will be displayed here.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Toast Notifications */}
            <ToastContainer />
        </div>
    )
} 