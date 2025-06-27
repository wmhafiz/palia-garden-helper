'use client'

import { useMemo } from 'react'
import { useSelectedItem, useUISettings, useGarden } from '@/stores'
import fertiliserList from '@/lib/garden-planner/fertiliserList'
import { FertiliserType, CropSize } from '@/lib/garden-planner/enums'
import { Fertiliser } from '@/lib/garden-planner/classes'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'

export function HorizontalFertilizerSelector() {
    const { selectedItem, selectedItemType, selectFertiliser } = useSelectedItem()
    const { showTooltips } = useUISettings()
    const { garden, version } = useGarden()

    const handleFertiliserSelect = (fertiliserType: FertiliserType) => {
        const fertiliser = fertiliserList[fertiliserType as keyof typeof fertiliserList]
        if (fertiliser) {
            selectFertiliser(fertiliser)
        }
    }

    const isItemSelected = (fertiliser: Fertiliser) => {
        return selectedItemType === 'fertiliser' && selectedItem?.type === fertiliser.type
    }

    // Calculate actual fertilizer counts from the garden state
    const fertilizerCounts = useMemo(() => {
        if (!garden) return {} as Record<FertiliserType, number>

        const counts: Record<FertiliserType, number> = {} as Record<FertiliserType, number>
        const processedFertilizerIds = new Set<string>()

        // Count fertilizer applications
        for (let i = 0; i < garden.rows; i++) {
            for (let j = 0; j < garden.columns; j++) {
                const plot = garden.getPlot(i, j)
                if (plot && plot.isActive) {
                    for (let ti = 0; ti < 3; ti++) {
                        for (let tj = 0; tj < 3; tj++) {
                            const tile = plot.getTile(ti, tj)
                            if (tile?.fertiliser && tile.fertiliser.type !== FertiliserType.None) {
                                // For multi-tile crops (trees/bushes), only count once per shared fertilizer ID
                                // For single-tile crops, count each tile separately
                                const crop = tile.crop
                                const isMultiTileCrop = crop?.size === CropSize.Tree || crop?.size === CropSize.Bush

                                if (isMultiTileCrop && tile.fertiliser.id) {
                                    // Multi-tile crop: only count once per fertilizer ID
                                    if (!processedFertilizerIds.has(tile.fertiliser.id)) {
                                        processedFertilizerIds.add(tile.fertiliser.id)
                                        counts[tile.fertiliser.type] = (counts[tile.fertiliser.type] || 0) + 1
                                    }
                                } else {
                                    // Single-tile crop: count each tile separately
                                    counts[tile.fertiliser.type] = (counts[tile.fertiliser.type] || 0) + 1
                                }
                            }
                        }
                    }
                }
            }
        }

        return counts
    }, [garden, version])

    const getFertilizerCount = (fertiliserType: FertiliserType): number => {
        return fertilizerCounts[fertiliserType] || 0
    }

    const fertilisers = Object.values(fertiliserList).filter(
        (fertiliser): fertiliser is Fertiliser => fertiliser !== null && fertiliser.type !== FertiliserType.None
    )

    return (
        <div className="bg-card border border-border rounded-lg flex-1 min-w-0">
            {/* Header */}
            <div className="px-3 sm:px-4 py-2 bg-muted border-b border-border rounded-t-lg">
                <span className="text-sm font-semibold text-foreground">Fertilisers per Day</span>
            </div>

            {/* Content */}
            <div className="p-2 sm:p-3">
                <div className="flex flex-wrap gap-2">
                    {fertilisers.map((fertiliser: Fertiliser) => {
                        const isSelected = isItemSelected(fertiliser)
                        const count = getFertilizerCount(fertiliser.type)

                        const fertilizerButton = (
                            <button
                                key={fertiliser.type}
                                onClick={() => handleFertiliserSelect(fertiliser.type)}
                                className={`
                                    relative flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all duration-200 hover:scale-105
                                    ${isSelected
                                        ? 'border-purple-500 bg-purple-500/20 shadow-lg ring-2 ring-purple-500/30 z-10'
                                        : 'border-border bg-card hover:border-palia-blue hover:shadow-sm z-0'
                                    }
                                `}
                                style={{
                                    zIndex: isSelected ? 10 : 1
                                }}
                            >
                                <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-md">
                                    <img
                                        src={fertiliser.image}
                                        alt={fertiliser.type}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>

                                {/* Quantity indicator - overlapping the icon */}
                                {count > 0 && (
                                    <div className="absolute bottom-0 left-0 min-w-[28px] h-7 bg-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center px-2 shadow-lg border-2 border-white z-20">
                                        {count}
                                    </div>
                                )}
                            </button>
                        )

                        return showTooltips ? (
                            <Tooltip key={fertiliser.type}>
                                <TooltipTrigger asChild>
                                    {fertilizerButton}
                                </TooltipTrigger>
                                <TooltipContent
                                    side="bottom"
                                    sideOffset={8}
                                    className="z-50 max-w-xs"
                                >
                                    <div className="text-xs">
                                        <div className="font-semibold">{fertiliser.type}</div>
                                        <div className="text-muted-foreground">Effect: {fertiliser.effect}</div>
                                        {count > 0 && (
                                            <div className="text-palia-blue font-semibold">Applied: {count}</div>
                                        )}
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        ) : fertilizerButton
                    })}
                </div>
            </div>
        </div>
    )
} 