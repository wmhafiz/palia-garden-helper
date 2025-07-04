'use client'

import React, { ReactNode } from 'react'
import { GardenMode, ModeComponentProps } from '@/types/mode'
import { cn } from '@workspace/ui/lib/utils'

interface BaseModeProps extends ModeComponentProps {
    children: ReactNode
    className?: string
}

// Base mode container component
export function ModeContainer({
    mode,
    isActive,
    isTransitioning,
    transitionProgress,
    onModeChange,
    children,
    className,
}: BaseModeProps) {
    return (
        <div
            className={cn(
                "mode-container w-full h-full transition-all duration-300",
                isActive ? "opacity-100 visible" : "opacity-0 invisible",
                isTransitioning && "pointer-events-none",
                className
            )}
            style={{
                transform: `translateX(${isTransitioning ? (100 - transitionProgress) : (isActive ? 0 : 100)}px)`,
            }}
            data-mode={mode}
            data-active={isActive}
        >
            {children}
        </div>
    )
}

// Mode layout component with standard sections
export function ModeLayout({
    mode,
    isActive,
    isTransitioning,
    transitionProgress,
    onModeChange,
    primaryInterface,
    contextualTools,
    widgets,
    className,
}: ModeComponentProps & {
    primaryInterface: ReactNode
    contextualTools?: ReactNode
    widgets?: ReactNode
    className?: string
}) {
    return (
        <ModeContainer
            mode={mode}
            isActive={isActive}
            isTransitioning={isTransitioning}
            transitionProgress={transitionProgress}
            onModeChange={onModeChange}
            className={className}
        >
            <div className="flex flex-col h-full overflow-hidden">
                {/* Contextual Tools Bar */}
                {contextualTools && (
                    <div className="mode-tools-bar bg-background/50 backdrop-blur-sm border-b border-border p-4 flex-shrink-0">
                        {contextualTools}
                    </div>
                )}

                {/* Main Content Area */}
                <div className="flex overflow-hidden min-h-0">
                    {/* Primary Interface */}
                    <div className="flex-1 mode-primary-interface overflow-hidden">
                        {primaryInterface}
                    </div>

                    {/* Widgets Sidebar */}
                    {widgets && (
                        <div className="flex-1 p-4 mode-widgets-sidebar bg-background/30 backdrop-blur-sm border-l border-border overflow-hidden flex-shrink-0">
                            {widgets}
                        </div>
                    )}
                </div>
            </div>
        </ModeContainer>
    )
}

// Abstract base class for mode components (for TypeScript inheritance)
export abstract class BaseModeComponent {
    abstract mode: GardenMode

    abstract renderPrimaryInterface(): ReactNode
    abstract renderContextualTools(): ReactNode
    abstract renderWidgets(): ReactNode

    // Optional methods that modes can override
    onModeActivated?(): void
    onModeDeactivated?(): void
    onModeTransitionStart?(): void
    onModeTransitionEnd?(): void

    // Render method using the ModeLayout
    render(props: ModeComponentProps): ReactNode {
        return (
            <ModeLayout
                {...props}
                primaryInterface={this.renderPrimaryInterface()}
                contextualTools={this.renderContextualTools()}
                widgets={this.renderWidgets()}
            />
        )
    }
}

// Hook for mode lifecycle events
export function useModeLifecycle(
    mode: GardenMode,
    isActive: boolean,
    isTransitioning: boolean,
    callbacks: {
        onActivated?: () => void
        onDeactivated?: () => void
        onTransitionStart?: () => void
        onTransitionEnd?: () => void
    }
) {
    const { onActivated, onDeactivated, onTransitionStart, onTransitionEnd } = callbacks

    // Handle mode activation
    React.useEffect(() => {
        if (isActive && !isTransitioning) {
            onActivated?.()
        } else if (!isActive && !isTransitioning) {
            onDeactivated?.()
        }
    }, [isActive, isTransitioning, onActivated, onDeactivated])

    // Handle transitions
    React.useEffect(() => {
        if (isTransitioning) {
            onTransitionStart?.()
        } else {
            onTransitionEnd?.()
        }
    }, [isTransitioning, onTransitionStart, onTransitionEnd])
}

// Tool group component for organizing contextual tools
export function ToolGroup({
    title,
    children,
    className,
}: {
    title: string
    children: ReactNode
    className?: string
}) {
    return (
        <div className={cn("tool-group", className)}>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
            <div className="flex items-center gap-2 flex-wrap">
                {children}
            </div>
        </div>
    )
}


// Mode transition wrapper for smooth animations
export function ModeTransition({
    children,
    isActive,
    isTransitioning,
    transitionProgress,
    direction = 'horizontal',
}: {
    children: ReactNode
    isActive: boolean
    isTransitioning: boolean
    transitionProgress: number
    direction?: 'horizontal' | 'vertical' | 'fade'
}) {
    const getTransform = () => {
        if (!isTransitioning) return isActive ? 'none' : 'translateX(100%)'

        const progress = transitionProgress / 100

        switch (direction) {
            case 'horizontal':
                return `translateX(${(1 - progress) * 100}%)`
            case 'vertical':
                return `translateY(${(1 - progress) * 100}%)`
            case 'fade':
                return 'none'
            default:
                return 'none'
        }
    }

    const getOpacity = () => {
        if (direction === 'fade') {
            return isTransitioning ? transitionProgress / 100 : (isActive ? 1 : 0)
        }
        return isActive ? 1 : 0
    }

    return (
        <div
            className="mode-transition-wrapper transition-all duration-300 ease-out"
            style={{
                transform: getTransform(),
                opacity: getOpacity(),
            }}
        >
            {children}
        </div>
    )
} 