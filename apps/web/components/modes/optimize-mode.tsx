'use client'

import React from 'react'
import { GardenMode, ModeComponentProps, OptimizeModeData } from '@/types/mode'
import { useModeData, useSelectedItem } from '@/stores'
import { ModeLayout, ToolGroup, useModeLifecycle } from './base-mode'
import { GardenDisplay } from '../garden/garden-display'
import { HorizontalFertilizerSelector } from '../tools/horizontal-fertilizer-selector'
import { Button } from '@workspace/ui/components/button'
import { Eye, EyeOff, Zap, Target, Layers, Trash2, RefreshCw } from 'lucide-react'

export function OptimizeMode(props: ModeComponentProps) {
    const { mode, isActive, isTransitioning, transitionProgress, onModeChange } = props
    const optimizeData = useModeData<OptimizeModeData>(GardenMode.OPTIMIZE)
    const { selectedItem, selectedItemType } = useSelectedItem()

    // Mode lifecycle hooks
    useModeLifecycle(mode, isActive, isTransitioning, {
        onActivated: () => {
            console.log('Optimize mode activated')
        },
        onDeactivated: () => {
            console.log('Optimize mode deactivated')
        },
    })

    const renderPrimaryInterface = () => (
        <div className="optimize-mode-primary h-full flex flex-col">
            {/* Garden Display with bonus visualization */}
            <div className="flex-1 garden-container">
                <GardenDisplay />
            </div>

            {/* Fertilizer Selection */}
            <div className="mt-4">
                <HorizontalFertilizerSelector />
            </div>
        </div>
    )

    const renderContextualTools = () => (
        <div className="optimize-tools flex items-center gap-6">
            <ToolGroup title="Visualization">
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                >
                    <Eye className="w-4 h-4" />
                    Show Effectiveness
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                >
                    <Layers className="w-4 h-4" />
                    Bonus Heat Map
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                >
                    <Target className="w-4 h-4" />
                    Coverage Areas
                </Button>
            </ToolGroup>

            <ToolGroup title="Application">
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                >
                    <Zap className="w-4 h-4" />
                    Batch Mode
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                >
                    <RefreshCw className="w-4 h-4" />
                    Auto Optimize
                </Button>
            </ToolGroup>

            <ToolGroup title="Clear">
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-destructive hover:text-destructive"
                >
                    <Trash2 className="w-4 h-4" />
                    Clear Fertilizers
                </Button>
            </ToolGroup>
        </div>
    )

    return (
        <ModeLayout
            mode={mode}
            isActive={isActive}
            isTransitioning={isTransitioning}
            transitionProgress={transitionProgress}
            onModeChange={onModeChange}
            primaryInterface={renderPrimaryInterface()}
            contextualTools={renderContextualTools()}
        />
    )
}

// Optimize mode specific components
export function EffectivenessIndicator({
    effectiveness,
    fertilizerType,
    cropType,
    className,
}: {
    effectiveness: number
    fertilizerType: string
    cropType: string
    className?: string
}) {
    const getEffectivenessColor = (value: number) => {
        if (value >= 80) return 'text-green-600 bg-green-100'
        if (value >= 60) return 'text-yellow-600 bg-yellow-100'
        if (value >= 40) return 'text-orange-600 bg-orange-100'
        return 'text-red-600 bg-red-100'
    }

    return (
        <div className={`effectiveness-indicator ${className}`}>
            <div className={`text-xs font-medium px-2 py-1 rounded ${getEffectivenessColor(effectiveness)}`}>
                {effectiveness}%
            </div>
            <div className="text-xs text-muted-foreground mt-1">
                {fertilizerType} → {cropType}
            </div>
        </div>
    )
}

export function BonusHeatMap({
    bonusData,
    selectedBonusType,
    onBonusTypeSelect,
    className,
}: {
    bonusData: Record<string, number[][]>
    selectedBonusType: string | null
    onBonusTypeSelect: (bonusType: string) => void
    className?: string
}) {
    const bonusTypes = Object.keys(bonusData)

    return (
        <div className={`bonus-heat-map ${className}`}>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Bonus Coverage</h3>

            {/* Bonus type selector */}
            <div className="flex flex-wrap gap-1 mb-3">
                {bonusTypes.map((bonusType) => (
                    <button
                        key={bonusType}
                        onClick={() => onBonusTypeSelect(bonusType)}
                        className={`text-xs px-2 py-1 rounded border ${selectedBonusType === bonusType
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:bg-accent'
                            }`}
                    >
                        {bonusType}
                    </button>
                ))}
            </div>

            {/* Heat map visualization */}
            {selectedBonusType && bonusData[selectedBonusType] && (
                <div className="heat-map-grid">
                    <div className="text-xs text-muted-foreground mb-1">
                        Coverage intensity for {selectedBonusType}
                    </div>
                    <div className="grid grid-cols-8 gap-1">
                        {bonusData[selectedBonusType].flat().map((intensity, index) => (
                            <div
                                key={index}
                                className="w-4 h-4 rounded-sm border"
                                style={{
                                    backgroundColor: `rgba(34, 197, 94, ${intensity / 100})`,
                                    borderColor: intensity > 0 ? '#22c55e' : '#e5e7eb',
                                }}
                                title={`${intensity}% coverage`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export function BatchApplicationPanel({
    selectedFertilizer,
    targetCrops,
    onApplyToAll,
    onApplyToSelection,
    onClearAll,
    className,
}: {
    selectedFertilizer: string | null
    targetCrops: string[]
    onApplyToAll: () => void
    onApplyToSelection: () => void
    onClearAll: () => void
    className?: string
}) {
    return (
        <div className={`batch-application-panel ${className}`}>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Batch Operations</h3>

            {selectedFertilizer && (
                <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">
                        Selected: {selectedFertilizer}
                    </div>

                    <div className="flex flex-col gap-2">
                        <Button
                            size="sm"
                            onClick={onApplyToAll}
                            className="text-xs"
                        >
                            Apply to All Crops
                        </Button>

                        {targetCrops.length > 0 && (
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={onApplyToSelection}
                                className="text-xs"
                            >
                                Apply to {targetCrops.length} Selected
                            </Button>
                        )}

                        <Button
                            size="sm"
                            variant="destructive"
                            onClick={onClearAll}
                            className="text-xs"
                        >
                            Clear All Fertilizers
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export function OptimizationSuggestions({
    suggestions,
    onApplySuggestion,
    className,
}: {
    suggestions: Array<{
        id: string
        title: string
        description: string
        impact: number
        fertilizerType: string
        locations: Array<{ row: number; col: number }>
    }>
    onApplySuggestion: (suggestionId: string) => void
    className?: string
}) {
    return (
        <div className={`optimization-suggestions ${className}`}>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Optimization Suggestions</h3>

            <div className="space-y-2">
                {suggestions.map((suggestion) => (
                    <div
                        key={suggestion.id}
                        className="p-3 border rounded-lg hover:bg-accent cursor-pointer"
                        onClick={() => onApplySuggestion(suggestion.id)}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="text-sm font-medium">{suggestion.title}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    {suggestion.description}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    {suggestion.locations.length} locations • {suggestion.fertilizerType}
                                </div>
                            </div>
                            <div className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                                +{suggestion.impact}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 