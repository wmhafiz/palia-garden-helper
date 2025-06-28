import { create } from 'zustand'
import { Garden } from '@/lib/garden-planner'
import { subscribeWithSelector } from 'zustand/middleware'

// Define action types for better tracking
export type ActionType = 
    | 'place_crop'
    | 'remove_crop'
    | 'place_fertilizer'
    | 'remove_fertilizer'
    | 'clear_tile'
    | 'clear_plot'
    | 'clear_plot_crops'
    | 'clear_plot_fertilizers'
    | 'clear_all_crops'
    | 'clear_all_fertilizers'
    | 'clear_garden'
    | 'initialize_garden'
    | 'load_layout'
    | 'import_save_code'
    | 'load_saved_garden'

// Snapshot of garden state for undo/redo
interface GardenSnapshot {
    saveCode: string
    timestamp: number
    actionType: ActionType
    description: string
}

interface UndoRedoState {
    history: GardenSnapshot[]
    currentIndex: number
    maxHistorySize: number
    isUndoing: boolean
    isRedoing: boolean

    // Actions
    saveSnapshot: (garden: Garden, actionType: ActionType, description: string) => void
    undo: () => GardenSnapshot | null
    redo: () => GardenSnapshot | null
    canUndo: () => boolean
    canRedo: () => boolean
    clearHistory: () => void
    getUndoDescription: () => string | null
    getRedoDescription: () => string | null
    setUndoing: (isUndoing: boolean) => void
    setRedoing: (isRedoing: boolean) => void
}

export const useUndoRedo = create<UndoRedoState>()(
    subscribeWithSelector((set, get) => ({
        history: [],
        currentIndex: -1,
        maxHistorySize: 50, // Limit history to prevent memory issues
        isUndoing: false,
        isRedoing: false,

        saveSnapshot: (garden: Garden, actionType: ActionType, description: string) => {
            const { history, currentIndex, maxHistorySize, isUndoing, isRedoing } = get()
            
            // Don't save snapshot if we're currently undoing or redoing
            if (isUndoing || isRedoing) return

            try {
                const saveCode = garden.saveLayout()
                const snapshot: GardenSnapshot = {
                    saveCode,
                    timestamp: Date.now(),
                    actionType,
                    description
                }

                // Remove any history after the current index (when user made changes after undo)
                const newHistory = history.slice(0, currentIndex + 1)
                
                // Add new snapshot
                newHistory.push(snapshot)

                // Limit history size
                if (newHistory.length > maxHistorySize) {
                    newHistory.shift() // Remove oldest entry
                } else {
                    // Only increment index if we didn't remove the oldest entry
                    set({ currentIndex: currentIndex + 1 })
                }

                const newIndex = Math.min(currentIndex + 1, maxHistorySize - 1)
                set({ 
                    history: newHistory,
                    currentIndex: newIndex
                })
            } catch (error) {
                console.error('Failed to save garden snapshot:', error)
            }
        },

        undo: () => {
            const { history, currentIndex } = get()
            
            if (currentIndex > 0) {
                const newIndex = currentIndex - 1
                const snapshot = history[newIndex]
                
                if (snapshot) {
                    set({ 
                        currentIndex: newIndex,
                        isUndoing: true 
                    })
                    
                    return snapshot
                }
            }
            
            return null
        },

        redo: () => {
            const { history, currentIndex } = get()
            
            if (currentIndex < history.length - 1) {
                const newIndex = currentIndex + 1
                const snapshot = history[newIndex]
                
                if (snapshot) {
                    set({ 
                        currentIndex: newIndex,
                        isRedoing: true 
                    })
                    
                    return snapshot
                }
            }
            
            return null
        },

        canUndo: () => {
            const { currentIndex } = get()
            return currentIndex > 0
        },

        canRedo: () => {
            const { history, currentIndex } = get()
            return currentIndex < history.length - 1
        },

        clearHistory: () => {
            set({ 
                history: [], 
                currentIndex: -1 
            })
        },

        getUndoDescription: () => {
            const { history, currentIndex } = get()
            if (currentIndex > 0) {
                return history[currentIndex]?.description || null
            }
            return null
        },

        getRedoDescription: () => {
            const { history, currentIndex } = get()
            if (currentIndex < history.length - 1) {
                return history[currentIndex + 1]?.description || null
            }
            return null
        },

        setUndoing: (isUndoing: boolean) => set({ isUndoing }),
        setRedoing: (isRedoing: boolean) => set({ isRedoing })
    }))
) 