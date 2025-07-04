import { useMemo, useCallback, useRef, useEffect, useState } from 'react'
import { useGarden, useCurrentMode } from '@/stores'
import { GardenMode } from '@/types/mode'

// Hook for optimized calculations with memoization
export const useOptimizedCalculations = () => {
    const { garden, version } = useGarden()
    const currentMode = useCurrentMode()

    // Memoize garden statistics calculation
    const gardenStats = useMemo(() => {
        if (!garden) return null

        // Basic garden statistics
        const stats = {
            totalPlots: garden.rows * garden.columns,
            activePlots: 0,
            totalCrops: 0,
            totalFertilizers: 0,
            lastCalculated: Date.now()
        }

        for (let i = 0; i < garden.rows; i++) {
            for (let j = 0; j < garden.columns; j++) {
                const plot = garden.getPlot(i, j)
                if (plot && plot.isActive) {
                    stats.activePlots++
                    for (let ti = 0; ti < 3; ti++) {
                        for (let tj = 0; tj < 3; tj++) {
                            const tile = plot.getTile(ti, tj)
                            if (tile) {
                                if (tile.crop) stats.totalCrops++
                                if (tile.fertiliser) stats.totalFertilizers++
                            }
                        }
                    }
                }
            }
        }

        return stats
    }, [garden, version])

    // Memoize bonus calculations (only for optimize mode)
    const bonusData = useMemo(() => {
        if (!garden || currentMode !== GardenMode.OPTIMIZE) return null

        // Calculate bonus coverage data
        const bonuses = {
            coverage: 0,
            efficiency: 0,
            lastCalculated: Date.now()
        }

        // Basic bonus calculation logic would go here
        return bonuses
    }, [garden, version, currentMode])

    // Memoize processing calculations (only for process mode)
    const processingData = useMemo(() => {
        if (!garden || currentMode !== GardenMode.PROCESS) return null

        // Calculate processing data
        const processing = {
            totalOutput: 0,
            efficiency: 0,
            lastCalculated: Date.now()
        }

        return processing
    }, [garden, version, currentMode])

    // Memoize schedule calculations (only for schedule mode)
    const scheduleData = useMemo(() => {
        if (!garden || currentMode !== GardenMode.SCHEDULE) return null

        // Calculate schedule data
        const schedule = {
            upcomingTasks: [],
            completedTasks: [],
            lastCalculated: Date.now()
        }

        return schedule
    }, [garden, version, currentMode])

    return {
        gardenStats,
        bonusData,
        processingData,
        scheduleData,
    }
}

// Hook for debounced updates
export const useDebouncedCallback = <T extends (...args: any[]) => void>(
    callback: T,
    delay: number
): T => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const debouncedCallback = useCallback(
        (...args: Parameters<T>) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            timeoutRef.current = setTimeout(() => {
                callback(...args)
            }, delay)
        },
        [callback, delay]
    ) as T

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return debouncedCallback
}

// Hook for performance monitoring
export const usePerformanceMonitoring = () => {
    const metricsRef = useRef({
        modeTransitionTime: 0,
        renderTime: 0,
        calculationTime: 0,
        lastUpdate: Date.now()
    })

    const measureModeTransition = useCallback(async (transitionFn: () => Promise<void>) => {
        const start = performance.now()
        await transitionFn()
        const end = performance.now()

        metricsRef.current.modeTransitionTime = end - start
        metricsRef.current.lastUpdate = Date.now()
    }, [])

    const measureRenderTime = useCallback((componentName: string) => {
        const start = performance.now()

        return () => {
            const end = performance.now()
            const renderTime = end - start

            if (renderTime > 16) { // More than one frame (16ms at 60fps)
                console.warn(`${componentName} render time: ${renderTime.toFixed(2)}ms`)
            }

            metricsRef.current.renderTime = renderTime
            metricsRef.current.lastUpdate = Date.now()
        }
    }, [])

    const measureCalculation = useCallback((calculationFn: () => void, name: string) => {
        const start = performance.now()
        calculationFn()
        const end = performance.now()

        const calculationTime = end - start
        if (calculationTime > 10) { // More than 10ms
            console.warn(`${name} calculation time: ${calculationTime.toFixed(2)}ms`)
        }

        metricsRef.current.calculationTime = calculationTime
        metricsRef.current.lastUpdate = Date.now()
    }, [])

    const getMetrics = useCallback(() => {
        return { ...metricsRef.current }
    }, [])

    return {
        measureModeTransition,
        measureRenderTime,
        measureCalculation,
        getMetrics,
    }
}

// Hook for lazy component loading
export const useLazyLoading = (shouldLoad: boolean) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (shouldLoad && !isLoaded && !isLoading) {
            setIsLoading(true)

            // Simulate async loading
            const timer = setTimeout(() => {
                setIsLoaded(true)
                setIsLoading(false)
            }, 100)

            return () => clearTimeout(timer)
        }
    }, [shouldLoad, isLoaded, isLoading])

    return { isLoaded, isLoading }
}

// Hook for memory management
export const useMemoryManagement = () => {
    const cleanupFunctions = useRef<Array<() => void>>([])

    const addCleanup = useCallback((cleanup: () => void) => {
        cleanupFunctions.current.push(cleanup)
    }, [])

    const cleanup = useCallback(() => {
        cleanupFunctions.current.forEach(fn => {
            try {
                fn()
            } catch (error) {
                console.error('Cleanup error:', error)
            }
        })
        cleanupFunctions.current = []
    }, [])

    useEffect(() => {
        return cleanup
    }, [cleanup])

    return { addCleanup, cleanup }
}

// Hook for efficient re-rendering
export const useEfficientRerender = <T>(
    value: T,
    compareFn?: (prev: T, next: T) => boolean
) => {
    const prevValueRef = useRef<T>(value)

    const shouldUpdate = useMemo(() => {
        const prev = prevValueRef.current
        const shouldRerender = compareFn ? !compareFn(prev, value) : prev !== value

        if (shouldRerender) {
            prevValueRef.current = value
        }

        return shouldRerender
    }, [value, compareFn])

    return { shouldUpdate }
} 