'use client'

import React, { useMemo } from 'react'
import { GardenMode } from '@/types/mode'
import { getToolsForMode } from '@/lib/mode-config'
import { cn } from '@workspace/ui/lib/utils'

// Import all tool components
import { ItemSelector } from './tools/item-selector'
import { HorizontalToolSelector } from './tools/horizontal-tool-selector'
import { HorizontalCropSelector } from './tools/horizontal-crop-selector'
import { HorizontalFertilizerSelector } from './tools/horizontal-fertilizer-selector'
import { UndoRedoToolbar } from './tools/undo-redo-toolbar'
import { CurrentSelectionDisplay } from './tools/current-selection-display'

// Tool component registry
const TOOL_COMPONENTS: Record<string, React.ComponentType<any>> = {
    // Core selectors
    'crop-selector': HorizontalCropSelector,
    'fertilizer-selector': HorizontalFertilizerSelector,
    'item-selector': ItemSelector,

    // Erase and utility tools
    'erase-tools': HorizontalToolSelector,
    'selection-display': CurrentSelectionDisplay,

    // Action tools
    'undo-redo': UndoRedoToolbar,

    // Design mode tools
    'pattern-tools': () => <div className="tool-placeholder">Pattern Tools (Coming Soon)</div>,
    'grid-controls': () => <div className="tool-placeholder">Grid Controls (Coming Soon)</div>,

    // Optimize mode tools
    'bonus-visualizer': () => <div className="tool-placeholder">Bonus Visualizer (Coming Soon)</div>,
    'batch-tools': () => <div className="tool-placeholder">Batch Tools (Coming Soon)</div>,

    // Analyze mode tools
    'chart-selector': () => <div className="tool-placeholder">Chart Selector (Coming Soon)</div>,
    'metric-toggles': () => <div className="tool-placeholder">Metric Toggles (Coming Soon)</div>,
    'comparison-tools': () => <div className="tool-placeholder">Comparison Tools (Coming Soon)</div>,

    // Process mode tools
    'processor-selector': () => <div className="tool-placeholder">Processor Selector (Coming Soon)</div>,
    'chain-builder': () => <div className="tool-placeholder">Chain Builder (Coming Soon)</div>,
    'optimization-tools': () => <div className="tool-placeholder">Optimization Tools (Coming Soon)</div>,

    // Schedule mode tools
    'calendar-tools': () => <div className="tool-placeholder">Calendar Tools (Coming Soon)</div>,
    'task-manager': () => <div className="tool-placeholder">Task Manager (Coming Soon)</div>,
    'time-controls': () => <div className="tool-placeholder">Time Controls (Coming Soon)</div>,
}

// Individual tool component wrapper
export function ToolComponent({
    toolId,
    mode,
    className,
    ...props
}: {
    toolId: string
    mode: GardenMode
    className?: string
    [key: string]: any
}) {
    const Component = TOOL_COMPONENTS[toolId]

    if (!Component) {
        console.warn(`Tool component not found: ${toolId}`)
        return (
            <div className={cn("tool-not-found p-4 text-sm text-muted-foreground border border-dashed border-border rounded-lg", className)}>
                Tool "{toolId}" not found
            </div>
        )
    }

    return (
        <div className={cn("tool-component", className)} data-tool={toolId}>
            <Component mode={mode} {...props} />
        </div>
    )
}

// Main tool router component
export function ToolRouter({
    tools,
    mode,
    layout = 'vertical',
    className,
}: {
    tools: string[]
    mode: GardenMode
    layout?: 'vertical' | 'horizontal' | 'grid'
    className?: string
}) {
    const layoutClasses = {
        vertical: 'flex flex-col gap-4',
        horizontal: 'flex flex-row gap-4 flex-wrap',
        grid: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
    }

    if (tools.length === 0) {
        return (
            <div className={cn("tool-router-empty p-4 text-sm text-muted-foreground text-center", className)}>
                No tools configured for this mode
            </div>
        )
    }

    return (
        <div
            className={cn(
                "tool-router",
                layoutClasses[layout],
                className
            )}
            data-mode={mode}
            data-layout={layout}
        >
            {tools.map((toolId) => (
                <ToolComponent
                    key={toolId}
                    toolId={toolId}
                    mode={mode}
                />
            ))}
        </div>
    )
}

// Mode-specific tool containers
export function ModeTools({
    mode,
    layout = 'vertical',
    className,
}: {
    mode: GardenMode
    layout?: 'vertical' | 'horizontal' | 'grid'
    className?: string
}) {
    const tools = useMemo(() => {
        // Get tools from mode configuration
        return getToolsForMode(mode)
    }, [mode])

    return (
        <ToolRouter
            tools={tools}
            mode={mode}
            layout={layout}
            className={className}
        />
    )
}

// Hook for getting available tools for a mode
export function useToolsForMode(mode: GardenMode) {
    return useMemo(() => {
        return getToolsForMode(mode)
    }, [mode])
}

// Hook for checking if a tool is available
export function useIsToolAvailable(toolId: string) {
    return useMemo(() => {
        return toolId in TOOL_COMPONENTS
    }, [toolId])
} 