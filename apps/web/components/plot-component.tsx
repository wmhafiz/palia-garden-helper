'use client'

import { useState } from 'react'
import { Plot as PlotClass } from '@/lib/garden-planner/classes'
import { TileComponent } from './tile-component'
import { useUISettings } from '@/stores'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'

interface PlotComponentProps {
    plot: PlotClass
    rowIndex: number
    colIndex: number
    showBonusIndicators: boolean
    showGridLines: boolean
    version?: number
}

export function PlotComponent({
    plot,
    rowIndex,
    colIndex,
    showBonusIndicators,
    showGridLines,
    version
}: PlotComponentProps) {
    const [isHovered, setIsHovered] = useState(false)
    const { showTooltips } = useUISettings()

    const plotBorder = () => {
        if (showGridLines) {
            return 'border-2 border-dashed border-gray-400'
        }
        return 'border border-gray-300'
    }

    // If plot is not active, render a gray bordered area with same dimensions as active plots
    if (!plot.isActive) {
        const inactivePlotElement = (
            <div
                className={`
                    plot-component m-1 transition-all duration-200
                    border-2 border-green-50
                    flex items-center justify-center
                    ${plotBorder()}
                `}
            >
                {/* Create a 3x3 grid structure to match active plot dimensions */}
                <div className="tile-grid">
                    {Array.from({ length: 3 }, (_, rowIdx) => (
                        <div key={rowIdx} className="flex">
                            {Array.from({ length: 3 }, (_, colIdx) => (
                                <div
                                    key={`${rowIdx}-${colIdx}`}
                                    className="w-8 h-8 md:w-12 md:h-12 lg:w-18 lg:h-18 m-px"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )

        return inactivePlotElement
    }

    // Active plot - render with tiles
    const plotElement = (
        <div
            className={`
        plot-component relative m-1 p-1 bg-white rounded-lg shadow-sm transition-all duration-200
        ${plotBorder()}
        ${isHovered ? 'shadow-md scale-105' : ''}
        ${plot.isActive ? 'opacity-100' : 'opacity-40'}
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="grid grid-cols-3 gap-px">
                {plot.tiles.map((tileRow, tileRowIndex) =>
                    tileRow.map((tile, tileColIndex) => (
                        <TileComponent
                            key={`${rowIndex}-${colIndex}-${tileRowIndex}-${tileColIndex}-${version || 0}`}
                            tile={tile}
                            plotRowIndex={rowIndex}
                            plotColIndex={colIndex}
                            tileRowIndex={tileRowIndex}
                            tileColIndex={tileColIndex}
                            showBonusIndicators={showBonusIndicators}
                            isPlotHovered={isHovered}
                        />
                    ))
                )}
            </div>
        </div>
    )

    return plotElement
} 