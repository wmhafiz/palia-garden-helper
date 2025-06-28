'use client'

import { useState } from 'react'
import { FolderOpen, Edit2, Trash2, Calendar } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from '@workspace/ui/components/dialog'
import { Button } from '@workspace/ui/components/button'
import { Input } from '@workspace/ui/components/input'
import { ScrollArea } from '@workspace/ui/components/scroll-area'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@workspace/ui/components/alert-dialog'
import { useGarden, useSaveLoad } from '@/stores'
import { format } from 'date-fns'

interface LoadModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function LoadModal({ open, onOpenChange }: LoadModalProps) {
    const { setGardenFromLoad } = useGarden()
    const { savedGardens, loadGarden, deleteGarden, renameSavedGarden, isLoading } = useSaveLoad()

    const [editingId, setEditingId] = useState<string | null>(null)
    const [editingName, setEditingName] = useState('')
    const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

    const handleLoad = async (id: string) => {
        const garden = await loadGarden(id)
        const savedGarden = savedGardens.find(g => g.id === id)
        if (garden && savedGarden) {
            setGardenFromLoad(garden, savedGarden.name)
            onOpenChange(false)
        }
    }

    const handleStartEdit = (id: string, currentName: string) => {
        setEditingId(id)
        setEditingName(currentName)
    }

    const handleSaveEdit = () => {
        if (editingId && editingName.trim()) {
            renameSavedGarden(editingId, editingName.trim())
            setEditingId(null)
            setEditingName('')
        }
    }

    const handleCancelEdit = () => {
        setEditingId(null)
        setEditingName('')
    }

    const handleDeleteConfirm = (id: string) => {
        deleteGarden(id)
        setDeleteConfirmId(null)
    }

    return (
        <>
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="sm:max-w-2xl max-h-[80vh]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <FolderOpen className="w-5 h-5" />
                            Load Garden
                        </DialogTitle>
                        <DialogDescription>
                            Select a saved garden to load, or manage your saved gardens.
                        </DialogDescription>
                    </DialogHeader>

                    {savedGardens.length === 0 ? (
                        <div className="text-center py-8">
                            <FolderOpen className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                            <p className="text-muted-foreground">No saved gardens found.</p>
                            <p className="text-sm text-muted-foreground mt-1">Save your current garden to see it here.</p>
                        </div>
                    ) : (
                        <ScrollArea className="max-h-96">
                            <div className="space-y-2">
                                {savedGardens.map((garden) => (
                                    <div
                                        key={garden.id}
                                        className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent"
                                    >
                                        <div className="flex-1">
                                            {editingId === garden.id ? (
                                                <div className="flex items-center gap-2">
                                                    <Input
                                                        value={editingName}
                                                        onChange={(e) => setEditingName(e.target.value)}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') handleSaveEdit()
                                                            if (e.key === 'Escape') handleCancelEdit()
                                                        }}
                                                        className="flex-1"
                                                        autoFocus
                                                    />
                                                    <Button size="sm" onClick={handleSaveEdit}>
                                                        Save
                                                    </Button>
                                                    <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                                                        Cancel
                                                    </Button>
                                                </div>
                                            ) : (
                                                <>
                                                    <h3 className="font-medium text-foreground">{garden.name}</h3>
                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            Created: {format(new Date(garden.createdAt), 'MMM d, yyyy')}
                                                        </span>
                                                        {garden.updatedAt !== garden.createdAt && (
                                                            <span className="flex items-center gap-1">
                                                                <Calendar className="w-3 h-3" />
                                                                Updated: {format(new Date(garden.updatedAt), 'MMM d, yyyy')}
                                                            </span>
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        {editingId !== garden.id && (
                                            <div className="flex items-center gap-1">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => handleLoad(garden.id)}
                                                    disabled={isLoading}
                                                >
                                                    {isLoading ? (
                                                        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-600" />
                                                    ) : (
                                                        <>
                                                            <FolderOpen className="w-3 h-3 mr-1" />
                                                            Load
                                                        </>
                                                    )}
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    onClick={() => handleStartEdit(garden.id, garden.name)}
                                                >
                                                    <Edit2 className="w-3 h-3" />
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    onClick={() => setDeleteConfirmId(garden.id)}
                                                    className="text-destructive hover:text-destructive/90"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <AlertDialog open={!!deleteConfirmId} onOpenChange={() => setDeleteConfirmId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Garden</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete this saved garden? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => deleteConfirmId && handleDeleteConfirm(deleteConfirmId)}
                            className="bg-destructive hover:bg-destructive/90"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
} 