'use client'

import { useState } from 'react'
import { Tile } from '@/lib/garden-planner/classes'
import { useSelectedItem, useGarden, useToasts, useUISettings } from '@/stores'
import { CropType, FertiliserType } from '@/lib/garden-planner/enums'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'

interface TileComponentProps {
    tile: Tile
    plotRowIndex: number
    plotColIndex: number
    tileRowIndex: number
    tileColIndex: number
    showBonusIndicators: boolean
    isPlotHovered: boolean
}

export function TileComponent({
    tile,
    plotRowIndex,
    plotColIndex,
    tileRowIndex,
    tileColIndex,
    showBonusIndicators,
    isPlotHovered
}: TileComponentProps) {
    const [isHovered, setIsHovered] = useState(false)
    const { selectedItem, selectedItemType, isEraseMode } = useSelectedItem()
    const { garden, forceUpdate } = useGarden()
    const { addToast } = useToasts()
    const { showTooltips } = useUISettings()

    const handleTileClick = () => {
        if (!garden) return

        const plot = garden.getPlot(plotRowIndex, plotColIndex)
        if (!plot) return

        try {
            if (isEraseMode) {
                // Erase mode - clear tile
                tile.crop = null
                tile.fertiliser = null
                addToast({
                    type: 'info',
                    message: 'Tile cleared'
                })
            } else if (selectedItemType === 'crop' && selectedItem) {
                // Place crop
                tile.crop = selectedItem as any // Crop instance
                addToast({
                    type: 'success',
                    message: `Crop planted`
                })
            } else if (selectedItemType === 'fertiliser' && selectedItem) {
                // Place fertiliser
                tile.fertiliser = selectedItem as any // Fertiliser instance
                addToast({
                    type: 'success',
                    message: `Fertiliser applied`
                })
            }

            // Trigger re-render by forcing a version update
            forceUpdate()
        } catch (error) {
            addToast({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to update tile'
            })
        }
    }

    const getTileBackground = () => {
        if (tile.crop) {
            return 'bg-green-200'
        }
        if (tile.fertiliser) {
            return 'bg-blue-100'
        }
        return 'bg-gray-50'
    }

    const getTileBorder = () => {
        if (isHovered) return 'border-palia-blue border-2'
        if (isPlotHovered) return 'border-gray-400 border'
        return 'border-gray-300 border'
    }

    const getBonusIndicator = () => {
        if (!showBonusIndicators || !tile.bonuses || tile.bonuses.length === 0) {
            return null
        }

        return (
            <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full"></div>
        )
    }

    const getTooltipContent = () => {
        const content = []
        if (tile.crop) {
            content.push(`Crop: ${tile.crop.type}`)
        }
        if (tile.fertiliser) {
            content.push(`Fertiliser: ${tile.fertiliser.type}`)
        }
        if (!tile.crop && !tile.fertiliser) {
            content.push('Empty Tile')
        }
        return content.join('\n')
    }

    const tileElement = (
        <div
            className={`
        tile-component relative w-8 h-8 md:w-12 md:h-12 lg:w-18 lg:h-18 m-px cursor-pointer transition-all duration-150
        ${getTileBackground()}
        ${getTileBorder()}
        hover:scale-110 hover:z-10
      `}
            onClick={handleTileClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Crop display */}
            {tile.crop && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={tile.crop.image}
                        alt={tile.crop.type}
                        className="w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14 object-contain"
                    />
                </div>
            )}

            {/* Fertiliser display */}
            {tile.fertiliser && (
                <div className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden border border-blue-300">
                    <img
                        src={tile.fertiliser.image}
                        alt={tile.fertiliser.type}
                        className="w-3 h-3 md:w-5 md:h-5 lg:w-7 lg:h-7 object-contain"
                    />
                </div>
            )}

            {/* Bonus indicator */}
            {getBonusIndicator()}
        </div>
    )

    return showTooltips ? (
        <Tooltip>
            <TooltipTrigger asChild>
                {tileElement}
            </TooltipTrigger>
            <TooltipContent
                side="top"
                sideOffset={8}
                className="z-50 max-w-xs"
            >
                <div className="text-xs whitespace-pre-line">
                    {getTooltipContent()}
                </div>
            </TooltipContent>
        </Tooltip>
    ) : tileElement
} 