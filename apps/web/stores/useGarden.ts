import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { Garden } from '@/lib/garden-planner'
import { updateUrlWithLayout } from '@/lib/utils/url-helpers'

interface GardenState {
    garden: Garden | null
    isLoading: boolean
    error: string | null
    version: number // Add version counter to force updates
    hasInitialized: boolean // Add initialization flag

    // Actions
    setGarden: (garden: Garden) => void
    setGardenFromLoad: (garden: Garden, gardenName: string) => void // New method for tracking loaded gardens
    clearGarden: () => void
    clearAllFertilizers: () => void
    clearAllCrops: () => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    initializeGarden: (rows: number, cols: number) => void
    initializeGardenWithPattern: (rows: number, cols: number, plotPattern: boolean[][]) => void
    importFromVueSaveCode: (saveCode: string) => boolean
    forceUpdate: () => void // Add method to force updates
    updateUrlWithCurrentLayout: () => void // Add method to update URL with current layout
    setHasInitialized: (initialized: boolean) => void // Add method to set initialization flag
    restoreFromDevSession: () => boolean // Add method to restore from sessionStorage during development
    // Undo/Redo methods
    undo: () => void
    redo: () => void
    loadFromSnapshot: (saveCode: string) => void
}

export const useGarden = create<GardenState>()(
    subscribeWithSelector((set, get) => ({
        garden: null,
        isLoading: false,
        error: null,
        version: 0,
        hasInitialized: false,

        setGarden: (garden) => {
            set((state) => ({ garden, error: null, version: state.version + 1 }))
            
            // In development, save to sessionStorage to persist during hot reloads
            if (process.env.NODE_ENV === 'development' && garden) {
                try {
                    const saveCode = garden.saveLayout()
                    sessionStorage.setItem('dev-garden-state', saveCode)
                } catch (error) {
                    console.warn('Failed to save garden state for hot reload preservation:', error)
                }
            }
        },
        setGardenFromLoad: (garden, gardenName) => {
            set((state) => ({ garden, error: null, version: state.version + 1 }))
            
            // Save snapshot for undo/redo after loading saved garden
            setTimeout(() => {
                const { useUndoRedo } = require('@/stores/useUndoRedo')
                const { saveSnapshot } = useUndoRedo.getState()
                saveSnapshot(garden, 'load_saved_garden', `Loaded garden: ${gardenName}`)
            }, 0)
        },
        clearGarden: () => {
            const { garden } = get()
            if (garden) {
                garden.clearAllPlots()
                set({ garden }) // Trigger re-render with same garden instance
                
                // Save snapshot for undo/redo
                setTimeout(() => {
                    const { useUndoRedo } = require('@/stores/useUndoRedo')
                    const { saveSnapshot } = useUndoRedo.getState()
                    saveSnapshot(garden, 'clear_garden', 'Cleared entire garden')
                }, 0)
            }
        },
        clearAllFertilizers: () => {
            const { garden } = get()
            if (garden) {
                // Loop through all plots and tiles to remove fertilizers
                for (let i = 0; i < garden.rows; i++) {
                    for (let j = 0; j < garden.columns; j++) {
                        const plot = garden.getPlot(i, j)
                        if (plot && plot.isActive) {
                            for (let ti = 0; ti < 3; ti++) {
                                for (let tj = 0; tj < 3; tj++) {
                                    const tile = plot.getTile(ti, tj)
                                    if (tile) {
                                        tile.fertiliser = null
                                    }
                                }
                            }
                        }
                    }
                }
                // Recalculate bonuses after removing fertilizers
                garden.calculateBonuses()
                set((state) => ({ version: state.version + 1 })) // Force update
                
                // Save snapshot for undo/redo
                setTimeout(() => {
                    const { useUndoRedo } = require('@/stores/useUndoRedo')
                    const { saveSnapshot } = useUndoRedo.getState()
                    saveSnapshot(garden, 'clear_all_fertilizers', 'Cleared all fertilizers')
                }, 0)
            }
        },
        clearAllCrops: () => {
            const { garden } = get()
            if (garden) {
                // Loop through all plots and tiles to remove crops only
                for (let i = 0; i < garden.rows; i++) {
                    for (let j = 0; j < garden.columns; j++) {
                        const plot = garden.getPlot(i, j)
                        if (plot && plot.isActive) {
                            for (let ti = 0; ti < 3; ti++) {
                                for (let tj = 0; tj < 3; tj++) {
                                    const tile = plot.getTile(ti, tj)
                                    if (tile) {
                                        tile.crop = null
                                    }
                                }
                            }
                        }
                    }
                }
                // Recalculate bonuses after removing crops
                garden.calculateBonuses()
                set((state) => ({ version: state.version + 1 })) // Force update
                
                // Save snapshot for undo/redo
                setTimeout(() => {
                    const { useUndoRedo } = require('@/stores/useUndoRedo')
                    const { saveSnapshot } = useUndoRedo.getState()
                    saveSnapshot(garden, 'clear_all_crops', 'Cleared all crops')
                }, 0)
            }
        },
        setLoading: (isLoading) => set({ isLoading }),
        setError: (error) => set({ error }),
        initializeGarden: (rows, cols) => {
            try {
                set({ isLoading: true, error: null })
                const newGarden = new Garden(rows, cols)
                set((state) => ({ garden: newGarden, isLoading: false, version: state.version + 1, hasInitialized: true }))
                
                // In development, save to sessionStorage to persist during hot reloads
                if (process.env.NODE_ENV === 'development') {
                    try {
                        const saveCode = newGarden.saveLayout()
                        sessionStorage.setItem('dev-garden-state', saveCode)
                    } catch (error) {
                        console.warn('Failed to save garden state for hot reload preservation:', error)
                    }
                }
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
        forceUpdate: () => {
            set((state) => ({ version: state.version + 1 }))
            
            // In development, save to sessionStorage to persist during hot reloads
            if (process.env.NODE_ENV === 'development') {
                const { garden } = get()
                if (garden) {
                    try {
                        const saveCode = garden.saveLayout()
                        sessionStorage.setItem('dev-garden-state', saveCode)
                    } catch (error) {
                        console.warn('Failed to save garden state for hot reload preservation:', error)
                    }
                }
            }
        },
        importFromVueSaveCode: (saveCode: string) => {
            try {
                set({ isLoading: true, error: null })
                const newGarden = new Garden()
                const success = newGarden.loadLayout(saveCode)
                if (success) {
                    set((state) => ({ garden: newGarden, isLoading: false, version: state.version + 1, hasInitialized: true }))
                    
                    // Also load processor settings if available
                    try {
                        const { parseSave } = require('@/lib/garden-planner/save-handler')
                        const { settingsInfo } = parseSave(saveCode)
                        if (settingsInfo) {
                            // Import processor settings
                            const { useProcessor } = require('@/stores/useProcessor')
                            useProcessor.getState().loadSettingsFromSaveCode(settingsInfo)
                        }
                    } catch (settingsError) {
                        console.warn('Failed to load processor settings:', settingsError)
                        // Don't fail the whole import for settings issues
                    }
                    
                    // Save snapshot for undo/redo after successful import
                    setTimeout(() => {
                        const { useUndoRedo } = require('@/stores/useUndoRedo')
                        const { saveSnapshot } = useUndoRedo.getState()
                        saveSnapshot(newGarden, 'import_save_code', 'Imported garden from save code')
                    }, 0)
                    
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
        updateUrlWithCurrentLayout: () => {
            const { garden } = get()
            if (garden) {
                const saveCode = garden.saveLayout()
                if (saveCode) {
                    updateUrlWithLayout(saveCode)
                }
            }
        },
        setHasInitialized: (initialized) => set({ hasInitialized: initialized }),
        
        // Development-only method to restore state from sessionStorage
        restoreFromDevSession: () => {
            if (process.env.NODE_ENV === 'development') {
                try {
                    const saveCode = sessionStorage.getItem('dev-garden-state')
                    if (saveCode) {
                        const newGarden = new Garden()
                        const success = newGarden.loadLayout(saveCode)
                        if (success) {
                            set((state) => ({ 
                                garden: newGarden, 
                                error: null, 
                                version: state.version + 1, 
                                hasInitialized: true 
                            }))
                            console.log('Restored garden state from hot reload session')
                            return true
                        }
                    }
                } catch (error) {
                    console.warn('Failed to restore garden state from session:', error)
                }
            }
            return false
        },
        
        // Undo/Redo implementations
        undo: () => {
            // This will be called from the undo/redo hook
            // The actual logic is handled in the useUndoRedoIntegration hook
        },
        
        redo: () => {
            // This will be called from the undo/redo hook
            // The actual logic is handled in the useUndoRedoIntegration hook
        },
        
        loadFromSnapshot: (saveCode: string) => {
            try {
                const newGarden = new Garden()
                const success = newGarden.loadLayout(saveCode)
                if (success) {
                    set((state) => ({ garden: newGarden, error: null, version: state.version + 1 }))
                } else {
                    set({ error: 'Failed to load from snapshot' })
                }
            } catch (error) {
                set({
                    error: error instanceof Error ? error.message : 'Failed to load from snapshot'
                })
            }
        },
    }))
) 