'use client'

import React, { Suspense, useMemo } from 'react'
import { GardenMode } from '@/types/mode'
import { useCurrentMode } from '@/stores'
import { isWidgetVisibleInMode } from '@/lib/mode-config'
import { cn } from '@workspace/ui/lib/utils'
import { getWidgetsForMode } from '@/lib/mode-config'

// Widget loading skeleton
function WidgetSkeleton({ className }: { className?: string }) {
    return (
        <div className={cn("animate-pulse", className)}>
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-1/2 mb-2"></div>
            <div className="h-20 bg-muted rounded"></div>
        </div>
    )
}

// Widget error fallback
function WidgetErrorFallback({
    widgetId,
    error,
    className
}: {
    widgetId: string
    error: Error
    className?: string
}) {
    return (
        <div className={cn("p-4 border border-red-200 rounded-lg bg-red-50", className)}>
            <div className="text-sm font-medium text-red-800">
                Widget Error: {widgetId}
            </div>
            <div className="text-xs text-red-600 mt-1">
                {error.message}
            </div>
        </div>
    )
}

// Lazy widget loader
const LazyWidget = React.memo(({
    widgetId,
    mode,
    isVisible,
    className
}: {
    widgetId: string
    mode: GardenMode
    isVisible: boolean
    className?: string
}) => {
    const WidgetComponent = useMemo(() => {
        switch (widgetId) {
            case 'crop-statistics':
                return React.lazy(() => import('./widgets/crop-statistics-widget').then(m => ({ default: m.CropStatisticsWidget })))
            case 'quick-info':
                return React.lazy(() => import('./widgets/quick-info-widget').then(m => ({ default: m.QuickInfoWidget })))
            case 'fertilizer-tips':
                return React.lazy(() => import('./widgets/fertilizer-tips-widget').then(m => ({ default: m.FertilizerTipsWidget })))
            case 'bonus-coverage':
                return React.lazy(() => import('./widgets/bonus-coverage-widget').then(m => ({ default: m.BonusCoverageWidget })))
            case 'fertilizer-statistics':
                return React.lazy(() => import('./widgets/fertiliser-statistics-widget').then(m => ({ default: m.FertiliserStatisticsWidget })))
            case 'harvest-summary':
                return React.lazy(() => import('./widgets/harvest-summary-widget').then(m => ({ default: m.HarvestSummaryWidget })))
            case 'crop-breakdown':
                return React.lazy(() => import('./widgets/crop-breakdown-widget').then(m => ({ default: m.CropBreakdownWidget })))
            case 'processing-tips':
                return React.lazy(() => import('./widgets/processing-tips-widget').then(m => ({ default: m.ProcessingTipsWidget })))
            case 'processor-settings':
                return React.lazy(() => import('./widgets/processor-settings-widget').then(m => ({ default: m.ProcessorSettingsWidget })))
            case 'processor-output':
                return React.lazy(() => import('./widgets/processor-output-widget').then(m => ({ default: m.ProcessorOutputWidget })))
            case 'daily-schedule':
                return React.lazy(() => import('./widgets/daily-schedule-widget').then(m => ({ default: m.DailyScheduleWidget })))
            case 'schedule-calendar':
                return React.lazy(() => import('./widgets/schedule-calendar-widget').then(m => ({ default: m.ScheduleCalendarWidget })))
            case 'harvest-schedule':
                return React.lazy(() => import('./widgets/harvest-schedule-widget').then(m => ({ default: m.HarvestScheduleWidget })))
            case 'schedule-control-panel':
                return React.lazy(() => import('./widgets/schedule-control-panel').then(m => ({ default: m.ScheduleControlPanel })))
            default:
                return null
        }
    }, [widgetId])

    if (!WidgetComponent) {
        return (
            <div className={cn("p-4 border border-yellow-200 rounded-lg bg-yellow-50", className)}>
                <div className="text-sm font-medium text-yellow-800">
                    Unknown Widget: {widgetId}
                </div>
            </div>
        )
    }

    if (!isVisible) {
        return null
    }

    return (
        <div className={cn("widget-wrapper", className)} data-widget-id={widgetId}>
            <Suspense fallback={<WidgetSkeleton />}>
                <WidgetComponent />
            </Suspense>
        </div>
    )
})

LazyWidget.displayName = 'LazyWidget'

// Widget router component
export function WidgetRouter({
    widgets,
    mode,
    layout = 'vertical',
    className,
}: {
    widgets: string[]
    mode?: GardenMode
    layout?: 'vertical' | 'horizontal' | 'grid'
    className?: string
}) {
    const currentMode = useCurrentMode()
    const activeMode = mode || currentMode

    // Filter widgets based on current mode
    const visibleWidgets = useMemo(() => {
        return widgets.filter(widgetId => isWidgetVisibleInMode(widgetId, activeMode))
    }, [widgets, activeMode])

    if (visibleWidgets.length === 0) {
        return null
    }

    return (
        <div className={cn(
            "widget-router",
            layout === 'vertical' && "space-y-4",
            layout === 'horizontal' && "flex space-x-4",
            layout === 'grid' && "grid grid-cols-2 gap-4",
            className
        )}>
            {visibleWidgets.map(widgetId => (
                <LazyWidget
                    key={widgetId}
                    widgetId={widgetId}
                    mode={activeMode}
                    isVisible={true}
                />
            ))}
        </div>
    )
}

// Mode-specific widget containers
export function ModeWidgets({
    mode,
    layout = 'vertical',
    className,
}: {
    mode: GardenMode
    layout?: 'vertical' | 'horizontal' | 'grid'
    className?: string
}) {
    const widgets = useMemo(() => {
        // Get widgets from mode configuration instead of hardcoded arrays
        return getWidgetsForMode(mode)
    }, [mode])

    return (
        <WidgetRouter
            widgets={widgets}
            mode={mode}
            layout={layout}
            className={className}
        />
    )
}


// Widget visibility hook
export function useWidgetVisibility(widgetId: string, mode?: GardenMode) {
    const currentMode = useCurrentMode()
    const activeMode = mode || currentMode

    return useMemo(() => {
        return isWidgetVisibleInMode(widgetId, activeMode)
    }, [widgetId, activeMode])
}

// Widget loading hook with intersection observer
export function useWidgetLoading(widgetId: string) {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(false)
    const elementRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry && entry.isIntersecting) {
                    setIsVisible(true)
                    setIsLoaded(true)
                } else {
                    setIsVisible(false)
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return {
        isLoaded,
        isVisible,
        elementRef,
    }
}

// Error boundary for widgets
export class WidgetErrorBoundary extends React.Component<
    { children: React.ReactNode; widgetId: string; className?: string },
    { hasError: boolean; error: Error | null }
> {
    constructor(props: { children: React.ReactNode; widgetId: string; className?: string }) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Widget error:', error, errorInfo)
    }

    render() {
        if (this.state.hasError && this.state.error) {
            return (
                <WidgetErrorFallback
                    widgetId={this.props.widgetId}
                    error={this.state.error}
                    className={this.props.className}
                />
            )
        }

        return this.props.children
    }
} 