import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Garden } from '@/lib/garden-planner'
import { useToasts } from './useToasts'

interface SavedGarden {
    id: string
    name: string
    saveCode: string
    createdAt: Date
    updatedAt: Date
}

interface SaveLoadState {
    savedGardens: SavedGarden[]
    isLoading: boolean
    error: string | null

    // Actions
    saveGarden: (garden: Garden, name: string) => Promise<void>
    loadGarden: (id: string) => Promise<Garden | null>
    deleteGarden: (id: string) => void
    renameSavedGarden: (id: string, newName: string) => void
    clearError: () => void
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
                    const saveCode = garden.saveLayout()
                    const now = new Date()

                    const savedGarden: SavedGarden = {
                        id: `garden_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
                        name: name.trim() || `Garden ${get().savedGardens.length + 1}`,
                        saveCode,
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

                    // Create new garden and load from save code
                    const garden = new Garden()
                    const success = garden.loadLayout(savedGarden.saveCode)

                    if (!success) {
                        throw new Error('Failed to load garden from save code')
                    }

                    set({ isLoading: false })

                    useToasts.getState().addToast({
                        type: 'success',
                        message: `Garden "${savedGarden.name}" loaded successfully!`
                    })

                    return garden
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

            clearError: () => set({ error: null })
        }),
        {
            name: 'palia-garden-save-load',
            partialize: (state) => ({ savedGardens: state.savedGardens })
        }
    )
) 