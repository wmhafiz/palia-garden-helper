'use client'

import React, { useState } from 'react'
import { GardenMode, ModeComponentProps, DesignModeData } from '@/types/mode'
import { useModeData, useSelectedItem, useGarden } from '@/stores'
import { ModeLayout, ToolGroup, useModeLifecycle } from './base-mode'
import { GardenDisplay } from '../garden/garden-display'
import { LayoutCreatorModal } from '../modals/layout-creator-modal'
import { ModeWidgets } from '../widget-router'
import { Button } from '@workspace/ui/components/button'
import { Badge } from '@workspace/ui/components/badge'
import { ScrollArea } from '@workspace/ui/components/scroll-area'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'
import { Grid3X3, Copy, Trash2, Sprout, Eraser, X } from 'lucide-react'
import { useUISettings } from '@/stores'
import cropList from '@/lib/garden-planner/cropList'
import { CropType } from '@/lib/garden-planner/enums'
import { Crop } from '@/lib/garden-planner/classes'
import Bonus from '@/lib/garden-planner/enums/bonus'
import { cn } from '@workspace/ui/lib/utils'
import {
    Sidebar,
    SidebarContent,
    SidebarProvider,
    SidebarInset,
} from '@workspace/ui/components/sidebar'

type DesignSubMode = 'plant' | 'remove'

export function DesignMode(props: ModeComponentProps) {
    const { mode, isActive, isTransitioning, transitionProgress, onModeChange } = props
    const designData = useModeData<DesignModeData>(GardenMode.DESIGN)
    const { selectedItem, selectedItemType, selectCrop, setEraseCropMode, setEraseFertiliserMode, setErasePlotMode, clearSelection } = useSelectedItem()
    const { garden, clearGarden, clearAllCrops, clearAllFertilizers } = useGarden()
    const { showTooltips } = useUISettings()
    const [layoutModalOpen, setLayoutModalOpen] = useState(false)
    const [subMode, setSubMode] = useState<DesignSubMode>('plant')

    // Mode lifecycle hooks
    useModeLifecycle(mode, isActive, isTransitioning, {
        onActivated: () => {
            console.log('Design mode activated')
        },
        onDeactivated: () => {
            console.log('Design mode deactivated')
        },
    })

    const handleClearGarden = () => {
        if (garden && window.confirm('Are you sure you want to clear the entire garden? You can undo this action with Ctrl+Z.')) {
            clearGarden()
        }
    }

    const handleCropSelect = (cropType: CropType) => {
        const crop = cropList[cropType]
        if (crop) {
            selectCrop(crop)
        }
    }

    const isItemSelected = (crop: Crop) => {
        return selectedItemType === 'crop' && selectedItem?.type === crop.type
    }

    // Group crops by bonus type
    const groupedCrops = React.useMemo(() => {
        const crops = Object.values(cropList).filter((crop: Crop) => crop.type !== CropType.None)

        const groups: Record<Bonus, Crop[]> = {
            [Bonus.WaterRetain]: [],
            [Bonus.HarvestIncrease]: [],
            [Bonus.WeedPrevention]: [],
            [Bonus.QualityIncrease]: [],
            [Bonus.SpeedIncrease]: [],
            [Bonus.None]: []
        }

        crops.forEach(crop => {
            groups[crop.cropBonus].push(crop)
        })

        // Filter out empty groups and return in desired order
        const orderedBonuses = [
            Bonus.WaterRetain,
            Bonus.HarvestIncrease,
            Bonus.WeedPrevention,
            Bonus.QualityIncrease,
            Bonus.SpeedIncrease
        ]

        return orderedBonuses
            .filter(bonus => groups[bonus].length > 0)
            .map(bonus => ({
                bonus,
                crops: groups[bonus]
            }))
    }, [])

    const getBonusDisplayName = (bonus: Bonus): string => {
        switch (bonus) {
            case Bonus.WaterRetain:
                return 'Water Retain'
            case Bonus.HarvestIncrease:
                return 'Harvest Increase'
            case Bonus.WeedPrevention:
                return 'Weed Prevention'
            case Bonus.QualityIncrease:
                return 'Quality Increase'
            case Bonus.SpeedIncrease:
                return 'Speed Increase'
            default:
                return 'Other'
        }
    }

    const getBonusColor = (bonus: Bonus): string => {
        switch (bonus) {
            case Bonus.WaterRetain:
                return 'text-blue-600'
            case Bonus.HarvestIncrease:
                return 'text-green-600'
            case Bonus.WeedPrevention:
                return 'text-purple-600'
            case Bonus.QualityIncrease:
                return 'text-yellow-600'
            case Bonus.SpeedIncrease:
                return 'text-orange-600'
            default:
                return 'text-gray-600'
        }
    }

    const getBonusIcon = (bonus: Bonus): string => {
        switch (bonus) {
            case Bonus.WaterRetain:
                return '💧'
            case Bonus.HarvestIncrease:
                return '🌾'
            case Bonus.WeedPrevention:
                return '🛡️'
            case Bonus.QualityIncrease:
                return '⭐'
            case Bonus.SpeedIncrease:
                return '⚡'
            default:
                return '🌱'
        }
    }

    // Render the design sidebar content
    const renderDesignSidebar = () => (
        <div className="h-full flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 p-4 border-b flex-shrink-0">
                <div className="text-sm font-semibold">Design Tools</div>
                <Badge variant="outline" className="text-xs">
                    {subMode === 'plant' ? 'Plant' : 'Remove'}
                </Badge>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden min-h-0">
                {/* Sub-mode Switcher */}
                <div className="p-4 border-b flex-shrink-0">
                    <div className="grid grid-cols-2 gap-2">
                        <Button
                            variant={subMode === 'plant' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSubMode('plant')}
                            className="gap-2"
                        >
                            <Sprout className="w-4 h-4" />
                            Plant
                        </Button>
                        <Button
                            variant={subMode === 'remove' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSubMode('remove')}
                            className="gap-2"
                        >
                            <Eraser className="w-4 h-4" />
                            Remove
                        </Button>
                    </div>
                </div>

                {/* Plant Mode Content */}
                {subMode === 'plant' && (
                    <div className="flex-1 overflow-y-auto min-h-0">
                        <div className="space-y-4 p-4">
                            {groupedCrops.map(({ bonus, crops }) => (
                                <div key={bonus} className="space-y-2">
                                    <div className="flex items-center gap-2 py-1">
                                        <span className="text-lg">{getBonusIcon(bonus)}</span>
                                        <h3 className={cn("text-sm font-semibold", getBonusColor(bonus))}>
                                            {getBonusDisplayName(bonus)}
                                        </h3>
                                        <div className="flex-1 h-px bg-border"></div>
                                    </div>

                                    <div className="grid grid-cols-4 gap-2">
                                        {crops.map((crop: Crop) => {
                                            const isSelected = isItemSelected(crop)

                                            const cropButton = (
                                                <button
                                                    key={crop.type}
                                                    onClick={() => handleCropSelect(crop.type)}
                                                    className={cn(
                                                        "relative w-14 h-14 rounded-lg border-2 transition-all duration-200 hover:scale-105",
                                                        isSelected
                                                            ? "border-green-500 bg-green-500/20 shadow-lg ring-2 ring-green-500/30"
                                                            : "border-border bg-card hover:border-primary hover:shadow-sm"
                                                    )}
                                                >
                                                    <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-md">
                                                        <img
                                                            src={crop.image}
                                                            alt={crop.type}
                                                            className="w-10 h-10 object-contain"
                                                        />
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
                                                        <div className="text-xs">
                                                            <div className="font-semibold">{crop.type}</div>
                                                            <div className="text-muted-foreground">
                                                                Growth: {crop.produceInfo.growthTime}d
                                                            </div>
                                                            <div className="text-muted-foreground">
                                                                Value: {crop.goldValues.crop}g
                                                            </div>
                                                            {crop.cropTooltip && (
                                                                <div className="mt-1 whitespace-pre-line text-muted-foreground">
                                                                    {crop.cropTooltip}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </TooltipContent>
                                                </Tooltip>
                                            ) : cropButton
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Remove Mode Content */}
                {subMode === 'remove' && (
                    <div className="flex-1 overflow-y-auto min-h-0">
                        <div className="space-y-4 p-4">
                            <div className="space-y-3">
                                <div className="text-sm font-medium text-muted-foreground">Remove Tools</div>

                                {/* Remove by Tile */}
                                <div className="space-y-2">
                                    <div className="text-xs font-medium text-muted-foreground">By Tile</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setEraseCropMode()}
                                            className="gap-2 text-xs"
                                        >
                                            <span>🌱</span>
                                            Crops
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setEraseFertiliserMode()}
                                            className="gap-2 text-xs"
                                        >
                                            <span>🧪</span>
                                            Fertilizers
                                        </Button>
                                    </div>
                                </div>

                                {/* Remove by Plot */}
                                <div className="space-y-2">
                                    <div className="text-xs font-medium text-muted-foreground">By Plot</div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setErasePlotMode()}
                                        className="gap-2 text-xs w-full"
                                    >
                                        <span>🧹</span>
                                        Clear Entire Plot
                                    </Button>
                                </div>

                                {/* Remove All */}
                                <div className="space-y-2">
                                    <div className="text-xs font-medium text-muted-foreground">Remove All</div>
                                    <div className="space-y-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                if (window.confirm('Remove all crops from the garden?')) {
                                                    clearAllCrops()
                                                    clearSelection()
                                                }
                                            }}
                                            className="gap-2 text-xs w-full text-orange-600 hover:text-orange-700"
                                        >
                                            <span>🌾</span>
                                            All Crops
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                if (window.confirm('Remove all fertilizers from the garden?')) {
                                                    clearAllFertilizers()
                                                    clearSelection()
                                                }
                                            }}
                                            className="gap-2 text-xs w-full text-blue-600 hover:text-blue-700"
                                        >
                                            <span>💧</span>
                                            All Fertilizers
                                        </Button>
                                    </div>
                                </div>

                                {/* Clear Selection */}
                                <div className="pt-2 border-t border-border">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => clearSelection()}
                                        className="gap-2 text-xs w-full"
                                    >
                                        <X className="w-4 h-4" />
                                        Clear Selection
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

    const renderPrimaryInterface = () => (
        <SidebarProvider defaultOpen={true}>
            <div className="design-mode-primary h-full flex w-full -m-4 overflow-hidden">
                <Sidebar side="left" variant="sidebar" collapsible="icon" className="border-r">
                    <SidebarContent className="h-full">
                        {renderDesignSidebar()}
                    </SidebarContent>
                </Sidebar>

                <SidebarInset className="flex-1 h-full">
                    <div className="flex h-full flex-col overflow-hidden">
                        <div className="flex-1 overflow-hidden p-4">
                            <div className="h-full w-full max-w-none">
                                <GardenDisplay />
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )

    const renderContextualTools = () => (
        <div className="design-tools flex items-center gap-6">
            <ToolGroup title="Tools">
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => setLayoutModalOpen(true)}
                >
                    <Grid3X3 className="w-4 h-4" />
                    Layout Creator
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                >
                    <Copy className="w-4 h-4" />
                    Copy
                </Button>
            </ToolGroup>

            <ToolGroup title="Clear">
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-destructive hover:text-destructive"
                    onClick={handleClearGarden}
                >
                    <Trash2 className="w-4 h-4" />
                    Clear Garden
                </Button>
            </ToolGroup>
        </div>
    )

    const renderWidgets = () => (
        <div className="h-full overflow-hidden">
            <ModeWidgets mode={GardenMode.DESIGN} layout="vertical" />
        </div>
    )

    return (
        <>
            <ModeLayout
                mode={mode}
                isActive={isActive}
                isTransitioning={isTransitioning}
                transitionProgress={transitionProgress}
                onModeChange={onModeChange}
                primaryInterface={renderPrimaryInterface()}
                contextualTools={renderContextualTools()}
                widgets={renderWidgets()}
            />

            <LayoutCreatorModal
                open={layoutModalOpen}
                onOpenChange={setLayoutModalOpen}
            />
        </>
    )
}
