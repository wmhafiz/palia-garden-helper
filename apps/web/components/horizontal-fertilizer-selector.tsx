'use client'

import { useSelectedItem, useUISettings } from '@/stores'
import fertiliserList from '@/lib/garden-planner/fertiliserList'
import { FertiliserType } from '@/lib/garden-planner/enums'
import { Fertiliser } from '@/lib/garden-planner/classes'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'

export function HorizontalFertilizerSelector() {
    const { selectedItem, selectedItemType, selectFertiliser } = useSelectedItem()
    const { showTooltips } = useUISettings()

    const handleFertiliserSelect = (fertiliserType: FertiliserType) => {
        const fertiliser = fertiliserList[fertiliserType as keyof typeof fertiliserList]
        if (fertiliser) {
            selectFertiliser(fertiliser)
        }
    }

    const isItemSelected = (fertiliser: Fertiliser) => {
        return selectedItemType === 'fertiliser' && selectedItem?.type === fertiliser.type
    }

    const fertilisers = Object.values(fertiliserList).filter(
        (fertiliser): fertiliser is Fertiliser => fertiliser !== null && fertiliser.type !== FertiliserType.None
    )

    return (
        <div className="bg-palia-accent border border-gray-300 rounded-lg">
            {/* Header */}
            <div className="px-4 py-2 bg-gray-100 border-b border-gray-300 rounded-t-lg">
                <span className="text-sm font-semibold text-gray-700">Fertilisers per Day</span>
            </div>

            {/* Content */}
            <div className="p-3">
                <div className="flex items-center space-x-4">
                    {/* Fertilizer buttons */}
                    <div className="flex space-x-2">
                        {fertilisers.map((fertiliser: Fertiliser) => {
                            const isSelected = isItemSelected(fertiliser)

                            const fertilizerButton = (
                                <button
                                    key={fertiliser.type}
                                    onClick={() => handleFertiliserSelect(fertiliser.type)}
                                    className={`
                                        relative w-12 h-12 rounded-lg border-2 transition-all duration-200
                                        ${isSelected
                                            ? 'border-palia-blue bg-blue-50 shadow-md'
                                            : 'border-gray-300 bg-white hover:border-palia-blue hover:shadow-sm'
                                        }
                                    `}
                                >
                                    <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-md">
                                        <img
                                            src={fertiliser.image}
                                            alt={fertiliser.type}
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>

                                    {/* Selection indicator */}
                                    {isSelected && (
                                        <div className="absolute inset-0 rounded-lg border-4 border-palia-blue"></div>
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
                                            <div className="text-gray-500">Effect: {fertiliser.effect}</div>
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            ) : fertilizerButton
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
} 