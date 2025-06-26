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

    const plotElement = (
        <div
            className={`
        plot-component m-1 transition-all duration-200
        ${plot.isActive ? 'bg-white border-2 border-gray-300' : 'bg-gray-200 border-2 border-gray-400'}
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

    return showTooltips ? (
        <Tooltip>
            <TooltipTrigger asChild>
                {plotElement}
            </TooltipTrigger>
            <TooltipContent
                side="top"
                sideOffset={8}
                className="z-50"
            >
                <div className="text-xs">
                    Plot ({rowIndex}, {colIndex})
                    <br />
                    Active: {plot.isActive ? 'Yes' : 'No'}
                </div>
            </TooltipContent>
        </Tooltip>
    ) : plotElement
} 