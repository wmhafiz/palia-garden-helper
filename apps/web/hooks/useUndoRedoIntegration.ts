import { useEffect, useCallback, useRef } from 'react'
import { useGarden, useUndoRedo, type ActionType } from '@/stores'

/**
 * Hook that integrates undo/redo functionality with the garden store
 * Automatically saves snapshots when garden state changes
 */
export function useUndoRedoIntegration() {
    const { garden, loadFromSnapshot } = useGarden()
    const { 
        saveSnapshot, 
        undo, 
        redo, 
        canUndo, 
        canRedo, 
        getUndoDescription, 
        getRedoDescription,
        setUndoing,
        setRedoing,
        clearHistory
    } = useUndoRedo()

    // Track if initial snapshot has been saved
    const initialSnapshotSaved = useRef(false)

    // Save initial snapshot when garden is first created
    useEffect(() => {
        if (garden && !initialSnapshotSaved.current) {
            // Use a small delay to ensure the garden is fully initialized
            setTimeout(() => {
                saveSnapshot(garden, 'initialize_garden', 'Garden initialized')
                initialSnapshotSaved.current = true
            }, 100)
        }
    }, [garden?.rows, garden?.columns]) // Only trigger on garden dimensions change

    // Undo function
    const performUndo = useCallback(() => {
        if (!canUndo()) return false

        const snapshot = undo()
        if (snapshot && garden) {
            loadFromSnapshot(snapshot.saveCode)
            // Reset the undoing flag after a short delay to allow the state to update
            setTimeout(() => setUndoing(false), 100)
            return true
        }
        
        setUndoing(false)
        return false
    }, [undo, canUndo, garden, loadFromSnapshot, setUndoing])

    // Redo function
    const performRedo = useCallback(() => {
        if (!canRedo()) return false

        const snapshot = redo()
        if (snapshot && garden) {
            loadFromSnapshot(snapshot.saveCode)
            // Reset the redoing flag after a short delay to allow the state to update
            setTimeout(() => setRedoing(false), 100)
            return true
        }
        
        setRedoing(false)
        return false
    }, [redo, canRedo, garden, loadFromSnapshot, setRedoing])

    // Save snapshot function for external use
    const saveSnapshotWithAction = useCallback((actionType: ActionType, description: string) => {
        // Get fresh garden state from the store
        const { garden: currentGarden } = useGarden.getState()
        if (currentGarden) {
            saveSnapshot(currentGarden, actionType, description)
        }
    }, [saveSnapshot])

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Check for Ctrl+Z (Undo) or Cmd+Z on Mac
            if ((event.ctrlKey || event.metaKey) && event.key === 'z' && !event.shiftKey) {
                event.preventDefault()
                performUndo()
            }
            // Check for Ctrl+Y (Redo) or Ctrl+Shift+Z or Cmd+Shift+Z on Mac
            else if (
                ((event.ctrlKey || event.metaKey) && event.key === 'y') ||
                ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'Z')
            ) {
                event.preventDefault()
                performRedo()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [performUndo, performRedo])

    return {
        undo: performUndo,
        redo: performRedo,
        canUndo: canUndo(),
        canRedo: canRedo(),
        undoDescription: getUndoDescription(),
        redoDescription: getRedoDescription(),
        saveSnapshot: saveSnapshotWithAction,
        clearHistory
    }
} 