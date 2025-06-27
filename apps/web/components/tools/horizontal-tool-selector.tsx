'use client'

import { useState } from 'react'
import { useSelectedItem, useGarden } from '@/stores'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'
import { ScrollArea, ScrollBar } from '@workspace/ui/components/scroll-area'

type EraseMode = 'tile' | 'plot' | 'all'
type EraseAction = 'crop' | 'fertilizer'

export function HorizontalToolSelector() {
    const {
        setEraseCropMode,
        setEraseFertiliserMode,
        setEraseMode,
        setErasePlotMode,
        setErasePlotCropMode,
        setErasePlotFertiliserMode,
        isEraseCropMode,
        isEraseFertiliserMode,
        isEraseMode,
        isErasePlotMode,
        isErasePlotCropMode,
        isErasePlotFertiliserMode,
        clearSelection
    } = useSelectedItem()

    const { clearAllFertilizers, clearAllCrops } = useGarden()

    const [selectedMode, setSelectedMode] = useState<EraseMode>('tile')
    const [selectedAction, setSelectedAction] = useState<EraseAction>('crop')

    const handleActionClick = (action: EraseAction) => {
        setSelectedAction(action)

        if (selectedMode === 'all') {
            // Handle "remove all" actions
            if (action === 'fertilizer') {
                clearAllFertilizers()
                clearSelection()
            } else if (action === 'crop') {
                clearAllCrops()
                clearSelection()
            }
        } else {
            // Handle per-tile and per-plot actions
            if (selectedMode === 'tile') {
                if (action === 'crop') {
                    setEraseCropMode()
                } else {
                    setEraseFertiliserMode()
                }
            } else if (selectedMode === 'plot') {
                if (action === 'crop') {
                    setErasePlotCropMode()
                } else {
                    setErasePlotFertiliserMode()
                }
            }
        }
    }

    const isActionActive = (action: EraseAction) => {
        if (selectedMode === 'tile') {
            return action === 'crop' ? isEraseCropMode : isEraseFertiliserMode
        } else if (selectedMode === 'plot') {
            return action === 'crop' ? isErasePlotCropMode : isErasePlotFertiliserMode
        }
        return false
    }

    return (
        <div className="bg-card border border-border rounded-lg flex-1 min-w-0">
            {/* Header */}
            <div className="px-3 sm:px-4 py-2 bg-muted border-b border-border rounded-t-lg">
                <span className="text-sm font-semibold text-foreground">Erase Tools</span>
            </div>

            {/* Content */}
            <div className="p-2 sm:p-3 space-y-3">
                {/* Mode Selection */}
                <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground">Mode</div>
                    <div className="flex space-x-1">
                        {([
                            { mode: 'tile' as EraseMode, label: 'Per Tile', icon: '📍' },
                            { mode: 'plot' as EraseMode, label: 'Per Plot', icon: '🟫' },
                            { mode: 'all' as EraseMode, label: 'Remove All', icon: '🌍' }
                        ]).map(({ mode, label, icon }) => (
                            <button
                                key={mode}
                                onClick={() => setSelectedMode(mode)}
                                className={`
                                    flex-1 px-2 py-1.5 text-xs rounded border transition-all duration-200
                                    ${selectedMode === mode
                                        ? 'border-palia-blue bg-palia-blue/10 text-palia-blue font-medium'
                                        : 'border-border bg-background hover:border-palia-blue/50'
                                    }
                                `}
                            >
                                <div className="flex items-center justify-center gap-1">
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Selection */}
                <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground">Action</div>
                    <ScrollArea className="w-full">
                        <div className="flex space-x-2 pb-2 w-max">
                            {/* Erase Crops */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        onClick={() => handleActionClick('crop')}
                                        className={`
                                            relative flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all duration-200 hover:scale-105
                                            ${isActionActive('crop')
                                                ? 'border-red-500 bg-red-500/20 shadow-lg ring-2 ring-red-500/30 z-10'
                                                : 'border-border bg-card hover:border-palia-blue hover:shadow-sm z-0'
                                            }
                                        `}
                                        style={{
                                            zIndex: isActionActive('crop') ? 10 : 1
                                        }}
                                    >
                                        <div className="w-full h-full flex items-center justify-center text-2xl">
                                            🌱
                                        </div>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" sideOffset={8}>
                                    <div className="text-xs">
                                        <div className="font-semibold">Erase Crops</div>
                                        <div className="text-gray-500">
                                            {selectedMode === 'tile' && 'Clear crops (per tile)'}
                                            {selectedMode === 'plot' && 'Clear entire plot (all 9 tiles)'}
                                            {selectedMode === 'all' && 'Remove all crops from garden'}
                                        </div>
                                    </div>
                                </TooltipContent>
                            </Tooltip>

                            {/* Erase Fertilizers */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        onClick={() => handleActionClick('fertilizer')}
                                        className={`
                                            relative flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all duration-200 hover:scale-105
                                            ${isActionActive('fertilizer')
                                                ? 'border-blue-500 bg-blue-500/20 shadow-lg ring-2 ring-blue-500/30 z-10'
                                                : 'border-border bg-card hover:border-palia-blue hover:shadow-sm z-0'
                                            }
                                        `}
                                        style={{
                                            zIndex: isActionActive('fertilizer') ? 10 : 1
                                        }}
                                    >
                                        <div className="w-full h-full flex items-center justify-center text-2xl">
                                            🧪
                                        </div>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" sideOffset={8}>
                                    <div className="text-xs">
                                        <div className="font-semibold">Erase Fertilizers</div>
                                        <div className="text-gray-500">
                                            {selectedMode === 'tile' && 'Clear fertilizers (per tile)'}
                                            {selectedMode === 'plot' && 'Clear fertilizers from entire plot'}
                                            {selectedMode === 'all' && 'Remove all fertilizers from garden'}
                                        </div>
                                    </div>
                                </TooltipContent>
                            </Tooltip>

                            {/* Divider */}
                            <div className="h-16 w-px bg-gray-300 mx-2 flex-shrink-0"></div>

                            {/* Clear selection */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        onClick={clearSelection}
                                        className="relative flex-shrink-0 w-16 h-16 rounded-lg border-2 border-border bg-card hover:border-palia-blue hover:shadow-sm hover:scale-105 transition-all duration-200"
                                    >
                                        <div className="w-full h-full flex items-center justify-center text-2xl">
                                            ✋
                                        </div>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" sideOffset={8}>
                                    <div className="text-xs">
                                        <div className="font-semibold">Clear Selection</div>
                                        <div className="text-gray-500">Deselect all items</div>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
} 