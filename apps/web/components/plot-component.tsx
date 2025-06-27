'use client'

import { useState } from 'react'
import { Plot as PlotClass } from '@/lib/garden-planner/classes'
import { TileComponent } from './tile-component'
import { useUISettings, useSelectedItem } from '@/stores'
import { CropSize } from '@/lib/garden-planner/enums'
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
    const [hoveredTile, setHoveredTile] = useState<{ row: number, col: number } | null>(null)
    const { showTooltips } = useUISettings()
    const { selectedItem, selectedItemType } = useSelectedItem()

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
        if (!plot) return false

        const { width, height } = getCropSizeDimensions(cropSize)

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

    // Helper function to find the top-left corner for multi-size crop placement
    const findCropOrigin = (hoverRow: number, hoverCol: number, cropSize: CropSize) => {
        const { width, height } = getCropSizeDimensions(cropSize)

        // For single crops, the origin is the hovered tile
        if (width === 1 && height === 1) {
            return { row: hoverRow, col: hoverCol }
        }

        // For multi-size crops, try different origins to see if the hovered tile can be part of the crop
        for (let originRow = Math.max(0, hoverRow - height + 1); originRow <= Math.min(2, hoverRow); originRow++) {
            for (let originCol = Math.max(0, hoverCol - width + 1); originCol <= Math.min(2, hoverCol); originCol++) {
                // Check if this origin would include the hovered tile and is valid
                if (hoverRow >= originRow && hoverRow < originRow + height &&
                    hoverCol >= originCol && hoverCol < originCol + width &&
                    isValidCropPlacement(originRow, originCol, cropSize)) {
                    return { row: originRow, col: originCol }
                }
            }
        }

        return null // No valid placement found
    }

    // Get preview tiles for the currently hovered position
    const getPreviewTiles = () => {
        if (!selectedItem || selectedItemType !== 'crop' || !hoveredTile) return []

        const crop = selectedItem as any
        if (!crop.size) return []

        const { width, height } = getCropSizeDimensions(crop.size)
        if (width === 1 && height === 1) return []

        const origin = findCropOrigin(hoveredTile.row, hoveredTile.col, crop.size)
        if (!origin) return []

        const previewTiles = []
        for (let r = origin.row; r < origin.row + height; r++) {
            for (let c = origin.col; c < origin.col + width; c++) {
                if (r < 3 && c < 3) {
                    previewTiles.push({ row: r, col: c })
                }
            }
        }

        return previewTiles
    }

    const handleTileHover = (tileRow: number, tileCol: number) => {
        setHoveredTile({ row: tileRow, col: tileCol })
    }

    const handleTileLeave = () => {
        setHoveredTile(null)
    }

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
                                    className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 m-px"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )

        return inactivePlotElement
    }

    const previewTiles = getPreviewTiles()

    // Active plot - render with tiles
    const plotElement = (
        <div
            className={`
        plot-component relative m-1 p-1 bg-card rounded-lg shadow-sm transition-all duration-200 border border-border
        ${plotBorder()}
        ${isHovered ? 'shadow-md scale-105' : ''}
        ${plot.isActive ? 'opacity-100' : 'opacity-40'}
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false)
                setHoveredTile(null)
            }}
        >
            <div className="relative grid grid-cols-3 gap-px">
                {plot.tiles.map((tileRow, tileRowIndex) =>
                    tileRow.map((tile, tileColIndex) => {
                        const isPreviewTile = previewTiles.some(
                            p => p.row === tileRowIndex && p.col === tileColIndex
                        )

                        return (
                            <div key={`${rowIndex}-${colIndex}-${tileRowIndex}-${tileColIndex}-${version || 0}`} className="relative">
                                <TileComponent
                                    tile={tile}
                                    plotRowIndex={rowIndex}
                                    plotColIndex={colIndex}
                                    tileRowIndex={tileRowIndex}
                                    tileColIndex={tileColIndex}
                                    showBonusIndicators={showBonusIndicators}
                                    isPlotHovered={isHovered}
                                    onTileHover={handleTileHover}
                                    onTileLeave={handleTileLeave}
                                    previewOrigin={hoveredTile && selectedItem && selectedItemType === 'crop' ?
                                        findCropOrigin(hoveredTile.row, hoveredTile.col, (selectedItem as any).size) : null}
                                />

                                {/* Preview overlay */}
                                {isPreviewTile && selectedItem && selectedItemType === 'crop' && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-palia-blue/20 border-2 border-palia-blue border-dashed rounded pointer-events-none z-20">
                                        {/* Show the crop image on each preview tile */}
                                        <img
                                            src={(selectedItem as any).image}
                                            alt={(selectedItem as any).type}
                                            className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain opacity-80"
                                        />
                                    </div>
                                )}
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )

    return plotElement
} 