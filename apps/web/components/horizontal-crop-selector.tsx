'use client'

import { useMemo } from 'react'
import { useSelectedItem, useUISettings, useGarden } from '@/stores'
import cropList from '@/lib/garden-planner/cropList'
import { CropType } from '@/lib/garden-planner/enums'
import { Crop } from '@/lib/garden-planner/classes'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'
import { ScrollArea, ScrollBar } from '@workspace/ui/components/scroll-area'

export function HorizontalCropSelector() {
    const { selectedItem, selectedItemType, selectCrop } = useSelectedItem()
    const { showTooltips } = useUISettings()
    const { garden, version } = useGarden()

    const handleCropSelect = (cropType: CropType) => {
        const crop = cropList[cropType]
        if (crop) {
            selectCrop(crop)
        }
    }

    const isItemSelected = (crop: Crop) => {
        return selectedItemType === 'crop' && selectedItem?.type === crop.type
    }

    // Calculate actual crop counts from the garden state
    const cropCounts = useMemo(() => {
        if (!garden) return {} as Record<CropType, number>

        const counts: Record<CropType, number> = {} as Record<CropType, number>
        const uniqueCrops = new Map<string, { type: CropType, tile: any }>()

        // Count unique crops by their tile ID (multi-size crops share the same ID)
        for (let i = 0; i < garden.rows; i++) {
            for (let j = 0; j < garden.columns; j++) {
                const plot = garden.getPlot(i, j)
                if (plot && plot.isActive) {
                    for (let ti = 0; ti < 3; ti++) {
                        for (let tj = 0; tj < 3; tj++) {
                            const tile = plot.getTile(ti, tj)
                            if (tile?.crop && tile.crop.type !== CropType.None) {
                                // Use tile ID to ensure multi-size crops are only counted once
                                uniqueCrops.set(tile.id, { type: tile.crop.type, tile })
                            }
                        }
                    }
                }
            }
        }

        // Count each unique crop
        for (const { type } of uniqueCrops.values()) {
            counts[type] = (counts[type] || 0) + 1
        }

        return counts
    }, [garden, version])

    const getCropCount = (cropType: CropType): number => {
        return cropCounts[cropType] || 0
    }

    const crops = Object.values(cropList).filter((crop: Crop) => crop.type !== CropType.None)

    return (
        <div className="bg-card border border-border rounded-lg flex-2 min-w-0">
            {/* Header */}
            <div className="px-3 sm:px-4 py-2 bg-muted border-b border-border rounded-t-lg">
                <span className="text-sm font-semibold text-foreground">Crops</span>
            </div>

            {/* Scrollable crop grid */}
            <div className="p-2 sm:p-3">
                <ScrollArea className="w-full">
                    <div className="flex space-x-2 pb-2 w-max">
                        {crops.map((crop: Crop) => {
                            const isSelected = isItemSelected(crop)
                            const count = getCropCount(crop.type)

                            const cropButton = (
                                <button
                                    key={crop.type}
                                    onClick={() => handleCropSelect(crop.type)}
                                    className={`
                                        relative flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all duration-200 hover:scale-105
                                        ${isSelected
                                            ? 'border-green-500 bg-green-500/20 shadow-lg ring-2 ring-green-500/30 z-10'
                                            : 'border-border bg-card hover:border-palia-blue hover:shadow-sm z-0'
                                        }
                                    `}
                                    style={{
                                        zIndex: isSelected ? 10 : 1
                                    }}
                                >
                                    {/* Crop image */}
                                    <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-md">
                                        <img
                                            src={crop.image}
                                            alt={crop.type}
                                            className="w-12 h-12 object-contain"
                                        />
                                    </div>

                                    {/* Quantity indicator - overlapping the icon */}
                                    {count > 0 && (
                                        <div className="absolute bottom-0 left-0 min-w-[28px] h-7 bg-red-500 text-white text-sm font-bold rounded-full flex items-center justify-center px-2 shadow-lg border-2 border-white z-20">
                                            {count}
                                        </div>
                                    )}
                                </button>
                            )

                            return showTooltips && crop.cropTooltip ? (
                                <Tooltip key={crop.type}>
                                    <TooltipTrigger asChild>
                                        {cropButton}
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side="bottom"
                                        sideOffset={8}
                                        className="z-50 max-w-xs"
                                    >
                                        <div className="text-xs">
                                            <div className="font-semibold">{crop.type}</div>
                                            <div className="text-gray-500">Growth: {crop.produceInfo.growthTime}d</div>
                                            {count > 0 && (
                                                <div className="text-palia-blue font-semibold">Planted: {count}</div>
                                            )}
                                            {crop.cropTooltip && (
                                                <div className="mt-1 whitespace-pre-line">{crop.cropTooltip}</div>
                                            )}
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            ) : cropButton
                        })}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    )
} 