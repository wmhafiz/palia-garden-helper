import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { Garden } from '@/lib/garden-planner/classes'

interface GardenState {
    garden: Garden | null
    isLoading: boolean
    error: string | null
    version: number // Add version counter to force updates

    // Actions
    setGarden: (garden: Garden) => void
    clearGarden: () => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    initializeGarden: (rows: number, cols: number) => void
    initializeGardenWithPattern: (rows: number, cols: number, plotPattern: boolean[][]) => void
    importFromVueSaveCode: (saveCode: string) => boolean
    forceUpdate: () => void // Add method to force updates
}

export const useGarden = create<GardenState>()(
    subscribeWithSelector((set, get) => ({
        garden: null,
        isLoading: false,
        error: null,
        version: 0,

        setGarden: (garden) => set((state) => ({ garden, error: null, version: state.version + 1 })),
        clearGarden: () => {
            const { garden } = get()
            if (garden) {
                garden.clearAllPlots()
                set({ garden }) // Trigger re-render with same garden instance
            }
        },
        setLoading: (isLoading) => set({ isLoading }),
        setError: (error) => set({ error }),
        initializeGarden: (rows, cols) => {
            try {
                set({ isLoading: true, error: null })
                const newGarden = new Garden(rows, cols)
                set((state) => ({ garden: newGarden, isLoading: false, version: state.version + 1 }))
            } catch (error) {
                set({
                    error: error instanceof Error ? error.message : 'Failed to initialize garden',
                    isLoading: false
                })
            }
        },
        initializeGardenWithPattern: (rows, cols, plotPattern) => {
            try {
                set({ isLoading: true, error: null })
                const newGarden = new Garden(rows, cols, plotPattern)
                set((state) => ({ garden: newGarden, isLoading: false, version: state.version + 1 }))
            } catch (error) {
                set({
                    error: error instanceof Error ? error.message : 'Failed to initialize garden with pattern',
                    isLoading: false
                })
            }
        },
        forceUpdate: () => set((state) => ({ version: state.version + 1 })),
        importFromVueSaveCode: (saveCode: string) => {
            try {
                set({ isLoading: true, error: null })
                const newGarden = new Garden()
                const success = newGarden.loadLayout(saveCode)
                if (success) {
                    set((state) => ({ garden: newGarden, isLoading: false, version: state.version + 1 }))
                    return true
                } else {
                    set({ error: 'Failed to import Vue.js save code', isLoading: false })
                    return false
                }
            } catch (error) {
                set({
                    error: error instanceof Error ? error.message : 'Failed to import Vue.js save code',
                    isLoading: false
                })
                return false
            }
        },
    }))
) 