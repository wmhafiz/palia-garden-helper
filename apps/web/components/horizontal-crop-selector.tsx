'use client'

import { useSelectedItem, useUISettings } from '@/stores'
import cropList from '@/lib/garden-planner/cropList'
import { CropType } from '@/lib/garden-planner/enums'
import { Crop } from '@/lib/garden-planner/classes'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'
import { ScrollArea, ScrollBar } from '@workspace/ui/components/scroll-area'

export function HorizontalCropSelector() {
    const { selectedItem, selectedItemType, selectCrop } = useSelectedItem()
    const { showTooltips } = useUISettings()

    const handleCropSelect = (cropType: CropType) => {
        const crop = cropList[cropType]
        if (crop) {
            selectCrop(crop)
        }
    }

    const isItemSelected = (crop: Crop) => {
        return selectedItemType === 'crop' && selectedItem?.type === crop.type
    }

    // Get crop count for quantity indicators (placeholder - would come from garden state)
    const getCropCount = (cropType: CropType): number => {
        // This would be calculated from the garden state
        // For now, return placeholder values matching the original design
        const counts: Record<string, number> = {
            'Tomato': 6,
            'Potato': 10,
            'Rice': 6,
            'Wheat': 4,
            'Carrot': 4,
            'Onion': 1,
            'Cotton': 1,
            'Blueberry': 4,
            'Apple': 1,
            'Corn': 5,
            'Spicy Pepper': 12,
            'Sweet Leaf': 5
        }
        return counts[cropType] || 0
    }

    const crops = Object.values(cropList).filter((crop: Crop) => crop.type !== CropType.None)

    return (
        <div className="bg-palia-accent border border-gray-300 rounded-lg flex-1 min-w-0">
            {/* Header */}
            <div className="px-3 sm:px-4 py-2 bg-gray-100 border-b border-gray-300 rounded-t-lg">
                <span className="text-sm font-semibold text-gray-700">Crops</span>
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
                                        relative flex-shrink-0 w-12 h-12 rounded-lg border-2 transition-all duration-200
                                        ${isSelected
                                            ? 'border-palia-blue bg-blue-50 shadow-md'
                                            : 'border-gray-300 bg-white hover:border-palia-blue hover:shadow-sm'
                                        }
                                    `}
                                >
                                    {/* Crop image */}
                                    <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-md">
                                        <img
                                            src={crop.image}
                                            alt={crop.type}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>

                                    {/* Quantity indicator */}
                                    {count > 0 && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-palia-blue text-white text-xs font-bold rounded-full flex items-center justify-center">
                                            {count}
                                        </div>
                                    )}

                                    {/* Selection indicator */}
                                    {isSelected && (
                                        <div className="absolute inset-0 rounded-lg border-4 border-palia-blue"></div>
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