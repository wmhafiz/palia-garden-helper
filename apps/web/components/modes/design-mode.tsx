'use client'

import React, { useState } from 'react'
import { GardenMode, ModeComponentProps, DesignModeData } from '@/types/mode'
import { useModeData, useSelectedItem, useGarden } from '@/stores'
import { ModeLayout, ToolGroup, useModeLifecycle } from './base-mode'
import { GardenDisplay } from '../garden/garden-display'
import { HorizontalCropSelector } from '../tools/horizontal-crop-selector'
import { LayoutCreatorModal } from '../modals/layout-creator-modal'
import { Button } from '@workspace/ui/components/button'
import { Grid3X3, Palette, Copy, Trash2 } from 'lucide-react'

export function DesignMode(props: ModeComponentProps) {
    const { mode, isActive, isTransitioning, transitionProgress, onModeChange } = props
    const designData = useModeData<DesignModeData>(GardenMode.DESIGN)
    const { selectedItem, selectedItemType } = useSelectedItem()
    const { garden, clearGarden } = useGarden()
    const [layoutModalOpen, setLayoutModalOpen] = useState(false)

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

    const renderPrimaryInterface = () => (
        <div className="design-mode-primary h-full flex flex-col">
            {/* Garden Display */}
            <div className="flex-1 garden-container">
                <GardenDisplay />
            </div>

            {/* Crop Selection */}
            <div className="mt-4">
                <HorizontalCropSelector />
            </div>
        </div>
    )

    const renderContextualTools = () => (
        <div className="design-tools flex items-center gap-6">
            <ToolGroup title="Design">
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                >
                    <Palette className="w-4 h-4" />
                    Pattern Mode
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                >
                    <Grid3X3 className="w-4 h-4" />
                    Grid Settings
                </Button>
            </ToolGroup>

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
            />

            <LayoutCreatorModal
                open={layoutModalOpen}
                onOpenChange={setLayoutModalOpen}
            />
        </>
    )
}

// Design mode specific components
export function CropPreview({
    cropType,
    position,
    size = 1,
    className,
}: {
    cropType: string
    position: { x: number; y: number }
    size?: number
    className?: string
}) {
    return (
        <div
            className={`crop-preview absolute pointer-events-none border-2 border-dashed border-primary bg-primary/10 rounded ${className}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size * 32}px`,
                height: `${size * 32}px`,
            }}
        >
            <div className="flex items-center justify-center h-full text-xs font-medium text-primary">
                {cropType}
            </div>
        </div>
    )
}

export function PatternSelector({
    patterns,
    selectedPattern,
    onPatternSelect,
    className,
}: {
    patterns: Array<{ id: string; name: string; preview: string }>
    selectedPattern: string | null
    onPatternSelect: (patternId: string) => void
    className?: string
}) {
    return (
        <div className={`pattern-selector ${className}`}>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Patterns</h3>
            <div className="grid grid-cols-3 gap-2">
                {patterns.map((pattern) => (
                    <button
                        key={pattern.id}
                        onClick={() => onPatternSelect(pattern.id)}
                        className={`pattern-item p-2 border rounded hover:bg-accent ${selectedPattern === pattern.id ? 'border-primary bg-primary/10' : 'border-border'
                            }`}
                    >
                        <div className="text-xs font-mono mb-1">{pattern.preview}</div>
                        <div className="text-xs text-muted-foreground">{pattern.name}</div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export function GridControls({
    gridSize,
    showGrid,
    showCoordinates,
    onGridSizeChange,
    onShowGridToggle,
    onShowCoordinatesToggle,
    className,
}: {
    gridSize: number
    showGrid: boolean
    showCoordinates: boolean
    onGridSizeChange: (size: number) => void
    onShowGridToggle: () => void
    onShowCoordinatesToggle: () => void
    className?: string
}) {
    return (
        <div className={`grid-controls ${className}`}>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Grid</h3>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <label className="text-xs">Size:</label>
                    <select
                        value={gridSize}
                        onChange={(e) => onGridSizeChange(parseInt(e.target.value))}
                        className="text-xs border rounded px-2 py-1"
                    >
                        <option value={1}>1x1</option>
                        <option value={2}>2x2</option>
                        <option value={3}>3x3</option>
                        <option value={4}>4x4</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="show-grid"
                        checked={showGrid}
                        onChange={onShowGridToggle}
                        className="w-3 h-3"
                    />
                    <label htmlFor="show-grid" className="text-xs">Show Grid</label>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="show-coordinates"
                        checked={showCoordinates}
                        onChange={onShowCoordinatesToggle}
                        className="w-3 h-3"
                    />
                    <label htmlFor="show-coordinates" className="text-xs">Show Coordinates</label>
                </div>
            </div>
        </div>
    )
} 