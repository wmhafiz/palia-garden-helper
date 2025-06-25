'use client'

import { useState } from 'react'
import { useSelectedItem, useUISettings } from '@/stores'
import cropList from '@/lib/garden-planner/cropList'
import fertiliserList from '@/lib/garden-planner/fertiliserList'
import { CropType, FertiliserType } from '@/lib/garden-planner/enums'
import { Crop, Fertiliser } from '@/lib/garden-planner/classes'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'

type TabType = 'crops' | 'fertilisers' | 'tools'

export function ItemSelector() {
    const [activeTab, setActiveTab] = useState<TabType>('crops')
    const { selectedItem, selectedItemType, isEraseMode, selectCrop, selectFertiliser, setEraseMode, clearSelection } = useSelectedItem()
    const { showTooltips } = useUISettings()

    const handleCropSelect = (cropType: CropType) => {
        const crop = cropList[cropType]
        if (crop) {
            selectCrop(crop)
        }
    }

    const handleFertiliserSelect = (fertiliserType: FertiliserType) => {
        const fertiliser = fertiliserList[fertiliserType as keyof typeof fertiliserList]
        if (fertiliser) {
            selectFertiliser(fertiliser)
        }
    }

    const isItemSelected = (type: string, item: any) => {
        if (selectedItemType === 'crop' && type === 'crop') {
            return selectedItem?.type === item.type
        }
        if (selectedItemType === 'fertiliser' && type === 'fertiliser') {
            return selectedItem?.type === item.type
        }
        return false
    }

    return (
        <div className="item-selector">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-4">
                <button
                    onClick={() => setActiveTab('crops')}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'crops'
                        ? 'border-palia-blue text-palia-blue'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    Crops
                </button>
                <button
                    onClick={() => setActiveTab('fertilisers')}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'fertilisers'
                        ? 'border-palia-blue text-palia-blue'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    Fertilisers
                </button>
                <button
                    onClick={() => setActiveTab('tools')}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'tools'
                        ? 'border-palia-blue text-palia-blue'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    Tools
                </button>
            </div>

            {/* Selection Display */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-700 mb-1">Selected:</div>
                {isEraseMode ? (
                    <div className="text-red-600 font-medium flex items-center space-x-2">
                        <span>🗑️</span>
                        <span>Erase Mode</span>
                    </div>
                ) : selectedItem ? (
                    <div className="text-palia-blue font-medium flex items-center space-x-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.type}
                                className="w-5 h-5 object-contain"
                            />
                        </div>
                        <span>{selectedItem.type}</span>
                    </div>
                ) : (
                    <div className="text-gray-500">None</div>
                )}
            </div>

            {/* Content */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
                {activeTab === 'crops' && (
                    <div className="grid grid-cols-1 gap-2">
                        {Object.values(cropList)
                            .filter((crop: Crop) => crop.type !== CropType.None)
                            .map((crop: Crop) => {
                                const cropButton = (
                                    <button
                                        key={crop.type}
                                        onClick={() => handleCropSelect(crop.type)}
                                        className={`
                         p-3 rounded-lg border-2 transition-all duration-200 text-left w-full
                         ${isItemSelected('crop', crop)
                                                ? 'border-palia-blue bg-blue-50'
                                                : 'border-gray-200 hover:border-gray-300 bg-white'
                                            }
                       `}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={crop.image}
                                                    alt={crop.type}
                                                    className="w-6 h-6 object-contain"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm">{crop.type}</div>
                                                <div className="text-xs text-gray-500">
                                                    {crop.produceInfo.growthTime}d
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                )

                                return showTooltips && crop.cropTooltip ? (
                                    <Tooltip key={crop.type}>
                                        <TooltipTrigger asChild>
                                            {cropButton}
                                        </TooltipTrigger>
                                        <TooltipContent
                                            side="right"
                                            sideOffset={8}
                                            className="z-50 max-w-xs"
                                        >
                                            <div className="text-xs whitespace-pre-line">
                                                {crop.cropTooltip}
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                ) : cropButton
                            })}
                    </div>
                )}

                {activeTab === 'fertilisers' && (
                    <div className="grid grid-cols-1 gap-2">
                        {Object.values(fertiliserList)
                            .filter((fertiliser): fertiliser is Fertiliser => fertiliser !== null && fertiliser.type !== FertiliserType.None)
                            .map((fertiliser: Fertiliser) => (
                                <button
                                    key={fertiliser.type}
                                    onClick={() => handleFertiliserSelect(fertiliser.type)}
                                    className={`
                     p-3 rounded-lg border-2 transition-all duration-200 text-left
                     ${isItemSelected('fertiliser', fertiliser)
                                            ? 'border-palia-blue bg-blue-50'
                                            : 'border-gray-200 hover:border-gray-300 bg-white'
                                        }
                   `}
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center overflow-hidden">
                                            <img
                                                src={fertiliser.image}
                                                alt={fertiliser.type}
                                                className="w-6 h-6 object-contain"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{fertiliser.type}</div>
                                            <div className="text-xs text-gray-500">
                                                Effect: {fertiliser.effect}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                    </div>
                )}

                {activeTab === 'tools' && (
                    <div className="space-y-2">
                        <button
                            onClick={setEraseMode}
                            className={`
                w-full p-3 rounded-lg border-2 transition-all duration-200 text-left
                ${isEraseMode
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-gray-200 hover:border-gray-300 bg-white'
                                }
              `}
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center text-sm">
                                    🗑️
                                </div>
                                <div>
                                    <div className="font-medium text-sm">Erase Tool</div>
                                    <div className="text-xs text-gray-500">
                                        Clear crops and fertilisers
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={clearSelection}
                            className="w-full p-3 rounded-lg border-2 border-gray-200 hover:border-gray-300 bg-white transition-all duration-200 text-left"
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm">
                                    ✋
                                </div>
                                <div>
                                    <div className="font-medium text-sm">Clear Selection</div>
                                    <div className="text-xs text-gray-500">
                                        Deselect all items
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                )}
            </div>

            {/* Keyboard Shortcuts */}
            <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-xs text-gray-500">
                    <div className="font-semibold mb-1">Keyboard Shortcuts:</div>
                    <div>C - Crops tab</div>
                    <div>F - Fertilisers tab</div>
                    <div>E - Erase mode</div>
                    <div>Esc - Clear selection</div>
                </div>
            </div>
        </div>
    )
} 