'use client'

import { Button } from '@workspace/ui/components/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@workspace/ui/components/tooltip'
import { Undo, Redo } from 'lucide-react'
import { useUndoRedo, useGarden } from '@/stores'

export function UndoRedoToolbar() {
    const {
        undo,
        redo,
        canUndo,
        canRedo,
        getUndoDescription,
        getRedoDescription,
        setUndoing,
        setRedoing
    } = useUndoRedo()
    const { loadFromSnapshot } = useGarden()

    // Undo function
    const performUndo = () => {
        if (!canUndo()) return false

        const snapshot = undo()
        if (snapshot) {
            loadFromSnapshot(snapshot.saveCode)
            // Reset the undoing flag after a short delay to allow the state to update
            setTimeout(() => setUndoing(false), 100)
            return true
        }

        setUndoing(false)
        return false
    }

    // Redo function
    const performRedo = () => {
        if (!canRedo()) return false

        const snapshot = redo()
        if (snapshot) {
            loadFromSnapshot(snapshot.saveCode)
            // Reset the redoing flag after a short delay to allow the state to update
            setTimeout(() => setRedoing(false), 100)
            return true
        }

        setRedoing(false)
        return false
    }

    const undoDescription = getUndoDescription()
    const redoDescription = getRedoDescription()

    const handleUndo = () => {
        performUndo()
    }

    const handleRedo = () => {
        performRedo()
    }

    return (
        <div className="flex items-center gap-1">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={!canUndo()}
                        onClick={handleUndo}
                        className="h-8 w-8 p-0 bg-white dark:bg-card text-palia-blue-dark dark:text-foreground border-white dark:border-border hover:bg-gray-100 dark:hover:bg-accent"
                    >
                        <Undo className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <div className="text-center">
                        <div className="font-medium">
                            {canUndo() ? `Undo: ${undoDescription}` : 'Nothing to undo'}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                            Ctrl+Z (⌘+Z on Mac)
                        </div>
                    </div>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={!canRedo()}
                        onClick={handleRedo}
                        className="h-8 w-8 p-0 bg-white dark:bg-card text-palia-blue-dark dark:text-foreground border-white dark:border-border hover:bg-gray-100 dark:hover:bg-accent"
                    >
                        <Redo className="h-4 w-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <div className="text-center">
                        <div className="font-medium">
                            {canRedo() ? `Redo: ${redoDescription}` : 'Nothing to redo'}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                            Ctrl+Y or Ctrl+Shift+Z (⌘+Y or ⌘+Shift+Z on Mac)
                        </div>
                    </div>
                </TooltipContent>
            </Tooltip>
        </div>
    )
} 