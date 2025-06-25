import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { Garden } from '@/lib/garden-planner/classes'

interface GardenState {
    garden: Garden | null
    isLoading: boolean
    error: string | null

    // Actions
    setGarden: (garden: Garden) => void
    clearGarden: () => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    initializeGarden: (rows: number, cols: number) => void
}

export const useGarden = create<GardenState>()(
    subscribeWithSelector((set, get) => ({
        garden: null,
        isLoading: false,
        error: null,

        setGarden: (garden) => set({ garden, error: null }),
        clearGarden: () => set({ garden: null }),
        setLoading: (isLoading) => set({ isLoading }),
        setError: (error) => set({ error }),
        initializeGarden: (rows, cols) => {
            try {
                set({ isLoading: true, error: null })
                const newGarden = new Garden(rows, cols)
                set({ garden: newGarden, isLoading: false })
            } catch (error) {
                set({
                    error: error instanceof Error ? error.message : 'Failed to initialize garden',
                    isLoading: false
                })
            }
        },
    }))
) 