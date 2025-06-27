'use client'

import { useEffect } from 'react'
import { useGarden, useUISettings } from '@/stores'
import { PlotGrid } from './plot-grid'
import { BonusCoverageWidget } from '../widgets/bonus-coverage-widget'

export function GardenDisplay() {
    const { garden, version } = useGarden()
    const { showGridLines, showBonusIndicators } = useUISettings()

    // Calculate bonuses whenever garden changes
    useEffect(() => {
        if (garden) {
            garden.calculateBonuses()
        }
    }, [garden, version])

    if (!garden) {
        return (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                <p className="text-gray-500">No garden initialized</p>
            </div>
        )
    }

    return (
        <div className="garden-display">
            <div
                className={`
          garden-grid w-full flex justify-center p-1 rounded-lg 
          ${showGridLines ? 'border-dashed' : ''}
        `}
            >
                <PlotGrid
                    plots={garden.plots}
                    showBonusIndicators={showBonusIndicators}
                    showGridLines={showGridLines}
                    version={version}
                />
            </div>
            {/* Bonus Coverage Statistics */}
            <BonusCoverageWidget />
        </div>
    )
} 