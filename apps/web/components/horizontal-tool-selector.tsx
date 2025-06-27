'use client'

import { useSelectedItem, useGarden } from '@/stores'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'
import { ScrollArea, ScrollBar } from '@workspace/ui/components/scroll-area'

export function HorizontalToolSelector() {
    const {
        setEraseCropMode,
        setEraseFertiliserMode,
        setEraseMode,
        setErasePlotMode,
        isEraseCropMode,
        isEraseFertiliserMode,
        isEraseMode,
        isErasePlotMode,
        clearSelection
    } = useSelectedItem()

    const { clearAllFertilizers } = useGarden()

    return (
        <div className="bg-card border border-border rounded-lg flex-1 min-w-0">
            {/* Header */}
            <div className="px-3 sm:px-4 py-2 bg-muted border-b border-border rounded-t-lg">
                <span className="text-sm font-semibold text-foreground">Erase Tools</span>
            </div>

            {/* Content */}
            <div className="p-2 sm:p-3">
                <ScrollArea className="w-full">
                    <div className="flex items-center space-x-2 pb-2 w-max">
                        {/* Erase crops only */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={setEraseCropMode}
                                    className={`
                                        relative flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all duration-200 hover:scale-105
                                        ${isEraseCropMode
                                            ? 'border-red-500 bg-red-500/20 shadow-lg ring-2 ring-red-500/30 z-10'
                                            : 'border-border bg-card hover:border-palia-blue hover:shadow-sm z-0'
                                        }
                                    `}
                                    style={{
                                        zIndex: isEraseCropMode ? 10 : 1
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
                                    <div className="text-gray-500">Clear crops only (per tile)</div>
                                </div>
                            </TooltipContent>
                        </Tooltip>

                        {/* Erase fertilizer only */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={setEraseFertiliserMode}
                                    className={`
                                        relative flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all duration-200 hover:scale-105
                                        ${isEraseFertiliserMode
                                            ? 'border-blue-500 bg-blue-500/20 shadow-lg ring-2 ring-blue-500/30 z-10'
                                            : 'border-border bg-card hover:border-palia-blue hover:shadow-sm z-0'
                                        }
                                    `}
                                    style={{
                                        zIndex: isEraseFertiliserMode ? 10 : 1
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
                                    <div className="text-gray-500">Clear fertilizers only (per tile)</div>
                                </div>
                            </TooltipContent>
                        </Tooltip>

                        {/* Erase both */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={setEraseMode}
                                    className={`
                                        relative flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all duration-200 hover:scale-105
                                        ${isEraseMode
                                            ? 'border-orange-500 bg-orange-500/20 shadow-lg ring-2 ring-orange-500/30 z-10'
                                            : 'border-border bg-card hover:border-palia-blue hover:shadow-sm z-0'
                                        }
                                    `}
                                    style={{
                                        zIndex: isEraseMode ? 10 : 1
                                    }}
                                >
                                    <div className="w-full h-full flex items-center justify-center text-2xl">
                                        🗑️
                                    </div>
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={8}>
                                <div className="text-xs">
                                    <div className="font-semibold">Erase Both</div>
                                    <div className="text-gray-500">Clear crops and fertilizers (per tile)</div>
                                </div>
                            </TooltipContent>
                        </Tooltip>

                        {/* Erase plot */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={setErasePlotMode}
                                    className={`
                                        relative flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all duration-200 hover:scale-105
                                        ${isErasePlotMode
                                            ? 'border-purple-500 bg-purple-500/20 shadow-lg ring-2 ring-purple-500/30 z-10'
                                            : 'border-border bg-card hover:border-palia-blue hover:shadow-sm z-0'
                                        }
                                    `}
                                    style={{
                                        zIndex: isErasePlotMode ? 10 : 1
                                    }}
                                >
                                    <div className="w-full h-full flex items-center justify-center text-2xl">
                                        🧹
                                    </div>
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={8}>
                                <div className="text-xs">
                                    <div className="font-semibold">Erase Plot</div>
                                    <div className="text-gray-500">Clear entire plot (all 9 tiles)</div>
                                </div>
                            </TooltipContent>
                        </Tooltip>

                        {/* Erase all fertilizers */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={() => {
                                        clearAllFertilizers()
                                        clearSelection()
                                    }}
                                    className="relative flex-shrink-0 w-16 h-16 rounded-lg border-2 border-border bg-card hover:border-red-500 hover:bg-red-500/10 hover:shadow-sm hover:scale-105 transition-all duration-200"
                                >
                                    <div className="w-full h-full flex items-center justify-center text-2xl">
                                        🧪❌
                                    </div>
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={8}>
                                <div className="text-xs">
                                    <div className="font-semibold">Clear All Fertilizers</div>
                                    <div className="text-gray-500">Remove all fertilizers from the entire garden</div>
                                </div>
                            </TooltipContent>
                        </Tooltip>

                        {/* Divider */}
                        <div className="h-8 w-px bg-gray-300 mx-2 flex-shrink-0"></div>

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
    )
} 