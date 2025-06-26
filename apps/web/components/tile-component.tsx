'use client'

import { useState } from 'react'
import { Tile } from '@/lib/garden-planner/classes'
import { useSelectedItem, useGarden, useToasts, useUISettings } from '@/stores'
import { CropType, FertiliserType, Bonus } from '@/lib/garden-planner/enums'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'
import {
    Zap,
    Wheat,
    Star,
    Droplets,
    Shield
} from 'lucide-react'

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

            // Calculate bonuses and trigger re-render
            garden.calculateBonuses()
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
            // Return background color based on crop's bonus type
            switch (tile.crop.cropBonus) {
                case Bonus.SpeedIncrease:
                    return 'bg-orange-100' // Speed increase
                case Bonus.HarvestIncrease:
                    return 'bg-green-100' // Harvest boost
                case Bonus.QualityIncrease:
                    return 'bg-yellow-100' // Quality increase
                case Bonus.WaterRetain:
                    return 'bg-blue-100' // Water retain
                case Bonus.WeedPrevention:
                    return 'bg-purple-100' // Weed prevention
                default:
                    return 'bg-green-200'
            }
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

    const getBonusIndicators = () => {
        if (!showBonusIndicators || !tile.bonuses || tile.bonuses.length === 0) {
            return null
        }

        const getBonusIcon = (bonus: Bonus) => {
            switch (bonus) {
                case Bonus.SpeedIncrease:
                    return <Zap className="w-2 h-2 md:w-3 md:h-3 text-green-600" />
                case Bonus.HarvestIncrease:
                    return <Wheat className="w-2 h-2 md:w-3 md:h-3 text-yellow-600" />
                case Bonus.QualityIncrease:
                    return <Star className="w-2 h-2 md:w-3 md:h-3 text-purple-600" />
                case Bonus.WaterRetain:
                    return <Droplets className="w-2 h-2 md:w-3 md:h-3 text-blue-600" />
                case Bonus.WeedPrevention:
                    return <Shield className="w-2 h-2 md:w-3 md:h-3 text-orange-600" />
                default:
                    return null
            }
        }

        return (
            <div className="absolute top-0 left-0 flex gap-0.5 p-0.5 bg-white/80 rounded-br-md">
                {tile.bonuses.map((bonus, index) => (
                    <div key={`${bonus}-${index}`} className="flex items-center justify-center">
                        {getBonusIcon(bonus)}
                    </div>
                ))}
            </div>
        )
    }

    const getTooltipContent = () => {
        const content = []
        if (tile.crop) {
            content.push(`Crop: ${tile.crop.type}`)
            content.push(`Provides: ${tile.crop.cropBonus}`)
        }
        if (tile.fertiliser) {
            content.push(`Fertiliser: ${tile.fertiliser.type}`)
        }
        if (tile.bonuses && tile.bonuses.length > 0) {
            content.push(`Active Bonuses: ${tile.bonuses.join(', ')}`)
        }
        if (!tile.crop && !tile.fertiliser) {
            content.push('Empty Tile')
        }
        return content.join('\n')
    }

    const tileElement = (
        <div
            className={`
        tile-component relative w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 m-px cursor-pointer transition-all duration-150
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
                        className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                    />
                </div>
            )}

            {/* Fertiliser display */}
            {tile.fertiliser && (
                <div className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden border border-blue-300">
                    <img
                        src={tile.fertiliser.image}
                        alt={tile.fertiliser.type}
                        className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 object-contain"
                    />
                </div>
            )}

            {/* Bonus indicators */}
            {getBonusIndicators()}
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