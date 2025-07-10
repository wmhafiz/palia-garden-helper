'use client'

import React, { useState } from 'react'
import { GardenMode, ModeComponentProps } from '@/types/mode'
import { useGarden } from '@/stores'
import { ModeLayout, ToolGroup, useModeLifecycle } from './base-mode'
import { GardenDisplay } from '../garden/garden-display'
import { LayoutCreatorModal } from '../modals/layout-creator-modal'
import { ModeWidgets } from '../widget-router'
import { ModeTools } from '../tool-router'
import { Button } from '@workspace/ui/components/button'
import { Grid3X3, Trash2 } from 'lucide-react'


export function DesignMode(props: ModeComponentProps) {
    const { mode, isActive, isTransitioning, transitionProgress, onModeChange } = props
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
        <div className="design-mode-primary h-full w-full overflow-hidden">
            <div className="flex h-full flex-col overflow-hidden">
                <div className="flex-1 overflow-hidden p-4">
                    <div className="h-full w-full max-w-none">
                        <GardenDisplay />
                    </div>
                </div>
            </div>
        </div>
    )

    const renderContextualTools = () => (
        <div className="design-tools flex items-center gap-6">
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
                className="flex items-center gap-2 text-destructive hover:text-destructive"
                onClick={handleClearGarden}
            >
                <Trash2 className="w-4 h-4" />
                Clear Garden
            </Button>
        </div>
    )

    const renderTools = () => (
        <div className="h-full overflow-hidden">
            <ModeTools mode={GardenMode.DESIGN} layout="vertical" />
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
                tools={renderTools()}
                widgets={renderWidgets()}
            />

            <LayoutCreatorModal
                open={layoutModalOpen}
                onOpenChange={setLayoutModalOpen}
            />
        </>
    )
}
