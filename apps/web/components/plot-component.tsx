'use client'

import { useState } from 'react'
import { Plot } from '@/lib/garden-planner/classes'
import { TileComponent } from './tile-component'
import { useUISettings } from '@/stores'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'

interface PlotComponentProps {
    plot: Plot
    rowIndex: number
    colIndex: number
    showBonusIndicators: boolean
    showGridLines: boolean
}

export function PlotComponent({
    plot,
    rowIndex,
    colIndex,
    showBonusIndicators,
    showGridLines
}: PlotComponentProps) {
    const [isHovered, setIsHovered] = useState(false)
    const { showTooltips } = useUISettings()

    // If plot is not active, render a gray bordered area with same dimensions as active plots
    if (!plot.isActive) {
        const inactivePlotElement = (
            <div
                className={`
                    plot-component m-1 transition-all duration-200
                    border-2 border-green-50
                    flex items-center justify-center
                    ${showGridLines ? 'border-dashed' : ''}
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
        plot-component m-1 transition-all duration-200 bg-white border-2 border-gray-300
        ${isHovered ? 'shadow-lg scale-105' : 'shadow-sm'}
        ${showGridLines ? 'border-dashed' : ''}
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="tile-grid">
                {plot.tiles.map((tileRow, tileRowIndex) => (
                    <div key={tileRowIndex} className="flex">
                        {tileRow.map((tile, tileColIndex) => (
                            <TileComponent
                                key={`${rowIndex}-${colIndex}-${tileRowIndex}-${tileColIndex}`}
                                tile={tile}
                                plotRowIndex={rowIndex}
                                plotColIndex={colIndex}
                                tileRowIndex={tileRowIndex}
                                tileColIndex={tileColIndex}
                                showBonusIndicators={showBonusIndicators}
                                isPlotHovered={isHovered}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )

    return plotElement
} 