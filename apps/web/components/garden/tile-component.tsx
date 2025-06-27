'use client'

import { useState } from 'react'
import uniqid from 'uniqid'
import { Tile } from '@/lib/garden-planner/classes'
import { useSelectedItem, useGarden, useToasts, useUISettings } from '@/stores'
import { CropType, FertiliserType, Bonus, CropSize } from '@/lib/garden-planner/enums'
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
    onTileHover?: (tileRow: number, tileCol: number) => void
    onTileLeave?: () => void
    previewOrigin?: { row: number, col: number } | null
}

export function TileComponent({
    tile,
    plotRowIndex,
    plotColIndex,
    tileRowIndex,
    tileColIndex,
    showBonusIndicators,
    isPlotHovered,
    onTileHover,
    onTileLeave,
    previewOrigin
}: TileComponentProps) {
    const [isHovered, setIsHovered] = useState(false)
    const {
        selectedItem,
        selectedItemType,
        isEraseMode,
        isEraseCropMode,
        isEraseFertiliserMode,
        isErasePlotMode,
        isErasePlotCropMode,
        isErasePlotFertiliserMode
    } = useSelectedItem()
    const { garden, forceUpdate } = useGarden()
    const { addToast } = useToasts()
    const { showTooltips } = useUISettings()

    // Helper function to get crop size dimensions
    const getCropSizeDimensions = (cropSize: CropSize) => {
        switch (cropSize) {
            case CropSize.Tree:
                return { width: 3, height: 3 }
            case CropSize.Bush:
                return { width: 2, height: 2 }
            case CropSize.Single:
            default:
                return { width: 1, height: 1 }
        }
    }

    // Helper function to check if crop placement is valid
    const isValidCropPlacement = (startRow: number, startCol: number, cropSize: CropSize) => {
        if (!garden) return false

        const { width, height } = getCropSizeDimensions(cropSize)
        const plot = garden.getPlot(plotRowIndex, plotColIndex)
        if (!plot) return false

        // Check if the crop fits within the current plot
        if (startRow + height > 3 || startCol + width > 3) {
            return false
        }

        // Check if all tiles in the area are empty
        for (let r = startRow; r < startRow + height; r++) {
            for (let c = startCol; c < startCol + width; c++) {
                const checkTile = plot.getTile(r, c)
                if (checkTile?.crop) {
                    return false
                }
            }
        }

        return true
    }

    // Helper function to get preview tiles for multi-size crops
    const getPreviewTiles = () => {
        if (!selectedItem || selectedItemType !== 'crop' || !isHovered) return []

        const crop = selectedItem as any // Crop instance
        if (!crop.size) return []

        const { width, height } = getCropSizeDimensions(crop.size)
        if (width === 1 && height === 1) return [] // Single crops don't need preview

        const previewTiles = []
        for (let r = tileRowIndex; r < tileRowIndex + height; r++) {
            for (let c = tileColIndex; c < tileColIndex + width; c++) {
                if (r < 3 && c < 3) { // Ensure we stay within plot bounds
                    previewTiles.push({ row: r, col: c })
                }
            }
        }

        return previewTiles
    }

    // Check if this tile should show a preview overlay (only for single tile preview)
    const shouldShowPreview = () => {
        if (!selectedItem || selectedItemType !== 'crop' || !garden) return false

        const crop = selectedItem as any
        if (!crop.size) return false

        const { width, height } = getCropSizeDimensions(crop.size)
        if (width !== 1 || height !== 1) return false // Multi-tile previews are handled by PlotComponent

        // Show preview only if hovering over a valid placement area
        return isHovered && isValidCropPlacement(tileRowIndex, tileColIndex, crop.size)
    }

    const handleTileClick = () => {
        if (!garden) return

        const plot = garden.getPlot(plotRowIndex, plotColIndex)
        if (!plot) return

        try {
            if (isEraseMode) {
                // Erase mode - clear both crop and fertilizer from tile or entire multi-tile group
                if (tile.crop) {
                    const cropType = tile.crop.type
                    const cropSize = tile.crop.size

                    if (cropSize === CropSize.Tree || cropSize === CropSize.Bush) {
                        // For multi-tile crops, erase the entire group
                        const tileId = tile.id
                        let erasedCount = 0

                        // Find and erase all tiles with the same ID across all plots
                        for (let plotRow = 0; plotRow < garden.rows; plotRow++) {
                            for (let plotCol = 0; plotCol < garden.columns; plotCol++) {
                                const targetPlot = garden.getPlot(plotRow, plotCol)
                                if (targetPlot && targetPlot.isActive) {
                                    for (let tileRow = 0; tileRow < 3; tileRow++) {
                                        for (let tileCol = 0; tileCol < 3; tileCol++) {
                                            const targetTile = targetPlot.getTile(tileRow, tileCol)
                                            if (targetTile && targetTile.id === tileId && targetTile.crop) {
                                                targetTile.crop = null
                                                targetTile.fertiliser = null
                                                erasedCount++
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        addToast({
                            type: 'info',
                            message: `${cropType} (${erasedCount} tiles) and fertilizers cleared`
                        })

                        // Recalculate bonuses after erasing multi-tile crop
                        garden.calculateBonuses()
                        forceUpdate()
                    } else {
                        // Single tile crop
                        tile.crop = null
                        tile.fertiliser = null
                        addToast({
                            type: 'info',
                            message: 'Tile cleared (both crop and fertilizer)'
                        })
                    }
                } else {
                    // No crop, just clear fertilizer
                    tile.fertiliser = null
                    addToast({
                        type: 'info',
                        message: 'Fertilizer cleared from tile'
                    })
                }
            } else if (isEraseCropMode) {
                // Erase crop mode - clear crop from tile or entire multi-tile group
                if (tile.crop) {
                    const cropType = tile.crop.type
                    const cropSize = tile.crop.size

                    if (cropSize === CropSize.Tree || cropSize === CropSize.Bush) {
                        // For multi-tile crops, erase the entire group
                        const tileId = tile.id
                        let erasedCount = 0

                        // Find and erase all tiles with the same ID across all plots
                        for (let plotRow = 0; plotRow < garden.rows; plotRow++) {
                            for (let plotCol = 0; plotCol < garden.columns; plotCol++) {
                                const targetPlot = garden.getPlot(plotRow, plotCol)
                                if (targetPlot && targetPlot.isActive) {
                                    for (let tileRow = 0; tileRow < 3; tileRow++) {
                                        for (let tileCol = 0; tileCol < 3; tileCol++) {
                                            const targetTile = targetPlot.getTile(tileRow, tileCol)
                                            if (targetTile && targetTile.id === tileId && targetTile.crop) {
                                                targetTile.crop = null
                                                erasedCount++
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        addToast({
                            type: 'info',
                            message: `${cropType} (${erasedCount} tiles) cleared`
                        })

                        // Recalculate bonuses after erasing multi-tile crop
                        garden.calculateBonuses()
                    } else {
                        // Single tile crop
                        tile.crop = null
                        addToast({
                            type: 'info',
                            message: 'Crop cleared from tile'
                        })
                    }
                }
            } else if (isEraseFertiliserMode) {
                // Erase fertilizer mode - clear only fertilizer from tile
                tile.fertiliser = null
                addToast({
                    type: 'info',
                    message: 'Fertilizer cleared from tile'
                })
            } else if (isErasePlotMode) {
                // Erase plot mode - clear entire plot
                garden.clearPlot(plotRowIndex, plotColIndex)
                addToast({
                    type: 'info',
                    message: 'Entire plot cleared'
                })
            } else if (isErasePlotCropMode) {
                // Erase plot crop mode - clear only crops from entire plot
                for (let r = 0; r < 3; r++) {
                    for (let c = 0; c < 3; c++) {
                        const plotTile = plot.getTile(r, c)
                        if (plotTile) {
                            plotTile.crop = null
                        }
                    }
                }
                addToast({
                    type: 'info',
                    message: 'All crops cleared from plot'
                })
            } else if (isErasePlotFertiliserMode) {
                // Erase plot fertilizer mode - clear only fertilizers from entire plot
                for (let r = 0; r < 3; r++) {
                    for (let c = 0; c < 3; c++) {
                        const plotTile = plot.getTile(r, c)
                        if (plotTile) {
                            plotTile.fertiliser = null
                        }
                    }
                }
                addToast({
                    type: 'info',
                    message: 'All fertilizers cleared from plot'
                })
            } else if (selectedItemType === 'crop' && selectedItem) {
                const crop = selectedItem as any

                // For multi-size crops, use the preview origin if available
                if (crop.size && (crop.size === CropSize.Bush || crop.size === CropSize.Tree)) {
                    const originRow = previewOrigin?.row ?? tileRowIndex
                    const originCol = previewOrigin?.col ?? tileColIndex

                    if (!isValidCropPlacement(originRow, originCol, crop.size)) {
                        addToast({
                            type: 'error',
                            message: `Cannot place ${crop.size} crop here - not enough space or tiles occupied`
                        })
                        return
                    }

                    // Place crop on all required tiles with the same ID
                    const { width, height } = getCropSizeDimensions(crop.size)
                    const cropId = uniqid() // Generate a unique ID for this multi-size crop
                    for (let r = originRow; r < originRow + height; r++) {
                        for (let c = originCol; c < originCol + width; c++) {
                            if (r < 3 && c < 3) {
                                const targetTile = plot.getTile(r, c)
                                if (targetTile) {
                                    targetTile.crop = crop
                                    targetTile.id = cropId // Assign the same ID to all tiles
                                }
                            }
                        }
                    }
                } else {
                    // Single crop placement
                    tile.crop = crop
                }

                addToast({
                    type: 'success',
                    message: `${crop.type || 'Crop'} planted`
                })
            } else if (selectedItemType === 'fertiliser' && selectedItem) {
                // Place fertiliser using the plot method to handle multi-size crops
                plot.addFertiliserToTile(tileRowIndex, tileColIndex, selectedItem as any)
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

    const handleMouseEnter = () => {
        setIsHovered(true)
        onTileHover?.(tileRowIndex, tileColIndex)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        onTileLeave?.()
    }

    const getTileBackground = () => {
        if (tile.crop) {
            // Return background color based on crop's bonus type
            switch (tile.crop.cropBonus) {
                case Bonus.SpeedIncrease:
                    return 'bg-orange-100 dark:bg-orange-900/30' // Speed increase
                case Bonus.HarvestIncrease:
                    return 'bg-green-100 dark:bg-green-900/30' // Harvest boost
                case Bonus.QualityIncrease:
                    return 'bg-yellow-100 dark:bg-yellow-900/30' // Quality increase
                case Bonus.WaterRetain:
                    return 'bg-blue-100 dark:bg-blue-900/30' // Water retain
                case Bonus.WeedPrevention:
                    return 'bg-purple-100 dark:bg-purple-900/30' // Weed prevention
                default:
                    return 'bg-green-200 dark:bg-green-800/30'
            }
        }
        if (tile.fertiliser) {
            return 'bg-blue-100 dark:bg-blue-900/30'
        }
        return 'bg-muted'
    }

    const getTileBorder = () => {
        if (isHovered) return 'border-palia-blue border-2'
        if (isPlotHovered) return 'border-muted-foreground border'
        return 'border-border border'
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
            <div className="absolute top-0 left-0 flex gap-0.5 p-0.5 bg-background/80 rounded-br-md border border-border">
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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

            {/* Preview overlay for single crops only (multi-tile previews handled by PlotComponent) */}
            {shouldShowPreview() && selectedItem && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 border-2 border-palia-blue border-dashed rounded">
                    <img
                        src={(selectedItem as any).image}
                        alt={(selectedItem as any).type}
                        className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain opacity-70"
                    />
                </div>
            )}

            {/* Fertiliser display */}
            {tile.fertiliser && (
                <div className="absolute bottom-0 right-0">
                    <img
                        src={tile.fertiliser.image}
                        alt={tile.fertiliser.type}
                        className="w-2 h-2 md:w-4 md:h-4 lg:w-5 lg:h-5 object-contain"
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