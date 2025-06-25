import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Garden } from '@/lib/garden-planner'
import { useToasts } from './useToasts'

interface SavedGarden {
    id: string
    name: string
    data: string
    createdAt: Date
    updatedAt: Date
}

interface SaveLoadState {
    savedGardens: SavedGarden[]
    isLoading: boolean
    error: string | null

    // Actions
    saveGarden: (garden: Garden, name: string) => Promise<void>
    loadGarden: (id: string) => Promise<string | null>
    deleteGarden: (id: string) => void
    renameSavedGarden: (id: string, newName: string) => void
    exportGarden: (garden: Garden) => string
    importGarden: (data: string) => Garden | null
    clearError: () => void
}

// Helper functions for serialization
const serializeGarden = (garden: Garden): string => {
    try {
        const data = {
            version: garden.version,
            rows: garden.rows,
            columns: garden.columns,
            plots: garden.plots.map(row =>
                row.map(plot => ({
                    id: plot.id,
                    isActive: plot.isActive,
                    tiles: plot.tiles.map(tileRow =>
                        tileRow.map(tile => ({
                            id: tile.id,
                            crop: tile.crop ? {
                                type: tile.crop.type,
                                // Add other crop properties as needed
                            } : null,
                            fertiliser: tile.fertiliser ? {
                                type: tile.fertiliser.type,
                                // Add other fertiliser properties as needed
                            } : null
                        }))
                    )
                }))
            )
        }
        return JSON.stringify(data, null, 2)
    } catch (error) {
        throw new Error(`Failed to serialize garden: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
}

const deserializeGarden = (data: string): Garden => {
    try {
        const parsed = JSON.parse(data)

        // Create new garden with the saved dimensions
        const garden = new Garden(parsed.rows, parsed.columns)

        // Restore plot and tile data
        for (let i = 0; i < parsed.rows; i++) {
            for (let j = 0; j < parsed.columns; j++) {
                const plotData = parsed.plots[i][j]
                const plot = garden.getPlot(i, j)

                if (plot && plotData) {
                    plot.isActive = plotData.isActive

                    // Restore tile data
                    for (let ti = 0; ti < 3; ti++) {
                        for (let tj = 0; tj < 3; tj++) {
                            const tileData = plotData.tiles[ti][tj]
                            const tile = plot.getTile(ti, tj)

                            if (tile && tileData) {
                                // Restore crop if present
                                if (tileData.crop) {
                                    // You'll need to implement crop restoration based on type
                                    // This is a placeholder - you'll need to use your crop creation logic
                                    console.log('Restoring crop:', tileData.crop.type)
                                }

                                // Restore fertiliser if present
                                if (tileData.fertiliser) {
                                    // You'll need to implement fertiliser restoration based on type
                                    // This is a placeholder - you'll need to use your fertiliser creation logic
                                    console.log('Restoring fertiliser:', tileData.fertiliser.type)
                                }
                            }
                        }
                    }
                }
            }
        }

        return garden
    } catch (error) {
        throw new Error(`Failed to deserialize garden: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
}

export const useSaveLoad = create<SaveLoadState>()(
    persist(
        (set, get) => ({
            savedGardens: [],
            isLoading: false,
            error: null,

            saveGarden: async (garden: Garden, name: string) => {
                set({ isLoading: true, error: null })

                try {
                    const data = serializeGarden(garden)
                    const now = new Date()

                    const savedGarden: SavedGarden = {
                        id: `garden_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
                        name: name.trim() || `Garden ${get().savedGardens.length + 1}`,
                        data,
                        createdAt: now,
                        updatedAt: now
                    }

                    set(state => ({
                        savedGardens: [...state.savedGardens, savedGarden],
                        isLoading: false
                    }))

                    useToasts.getState().addToast({
                        type: 'success',
                        message: `Garden "${savedGarden.name}" saved successfully!`
                    })
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Failed to save garden'
                    set({ error: errorMessage, isLoading: false })

                    useToasts.getState().addToast({
                        type: 'error',
                        message: errorMessage
                    })
                }
            },

            loadGarden: async (id: string) => {
                set({ isLoading: true, error: null })

                try {
                    const savedGarden = get().savedGardens.find(g => g.id === id)
                    if (!savedGarden) {
                        throw new Error('Garden not found')
                    }

                    set({ isLoading: false })

                    useToasts.getState().addToast({
                        type: 'success',
                        message: `Garden "${savedGarden.name}" loaded successfully!`
                    })

                    return savedGarden.data
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Failed to load garden'
                    set({ error: errorMessage, isLoading: false })

                    useToasts.getState().addToast({
                        type: 'error',
                        message: errorMessage
                    })

                    return null
                }
            },

            deleteGarden: (id: string) => {
                const garden = get().savedGardens.find(g => g.id === id)
                set(state => ({
                    savedGardens: state.savedGardens.filter(g => g.id !== id)
                }))

                if (garden) {
                    useToasts.getState().addToast({
                        type: 'info',
                        message: `Garden "${garden.name}" deleted`
                    })
                }
            },

            renameSavedGarden: (id: string, newName: string) => {
                set(state => ({
                    savedGardens: state.savedGardens.map(garden =>
                        garden.id === id
                            ? { ...garden, name: newName.trim(), updatedAt: new Date() }
                            : garden
                    )
                }))
            },

            exportGarden: (garden: Garden) => {
                try {
                    return serializeGarden(garden)
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Failed to export garden'
                    set({ error: errorMessage })

                    useToasts.getState().addToast({
                        type: 'error',
                        message: errorMessage
                    })

                    return ''
                }
            },

            importGarden: (data: string) => {
                try {
                    const garden = deserializeGarden(data)

                    useToasts.getState().addToast({
                        type: 'success',
                        message: 'Garden imported successfully!'
                    })

                    return garden
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Failed to import garden'
                    set({ error: errorMessage })

                    useToasts.getState().addToast({
                        type: 'error',
                        message: errorMessage
                    })

                    return null
                }
            },

            clearError: () => set({ error: null })
        }),
        {
            name: 'palia-garden-save-load',
            partialize: (state) => ({ savedGardens: state.savedGardens })
        }
    )
) 