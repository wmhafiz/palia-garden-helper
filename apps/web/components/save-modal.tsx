'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@workspace/ui/components/dialog'
import { Button } from '@workspace/ui/components/button'
import { Input } from '@workspace/ui/components/input'
import { Label } from '@workspace/ui/components/label'
import { useGarden, useSaveLoad } from '@/stores'

interface SaveModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function SaveModal({ open, onOpenChange }: SaveModalProps) {
    const { garden } = useGarden()
    const { saveGarden, isLoading } = useSaveLoad()
    const [gardenName, setGardenName] = useState('')

    const handleSave = async () => {
        if (!garden) return

        await saveGarden(garden, gardenName)
        setGardenName('')
        onOpenChange(false)
    }

    const handleClose = () => {
        setGardenName('')
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Save className="w-5 h-5" />
                        Save Garden
                    </DialogTitle>
                    <DialogDescription>
                        Save your current garden layout with a custom name for easy access later.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="garden-name">Garden Name</Label>
                        <Input
                            id="garden-name"
                            placeholder="My Awesome Garden"
                            value={gardenName}
                            onChange={(e) => setGardenName(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !isLoading) {
                                    handleSave()
                                }
                            }}
                        />
                        <p className="text-sm text-muted-foreground">
                            {gardenName.trim() ? `Will be saved as: "${gardenName.trim()}"` : 'Leave empty for auto-generated name'}
                        </p>
                    </div>

                    {garden && (
                        <div className="bg-muted p-3 rounded-lg">
                            <h4 className="text-sm font-medium text-foreground mb-2">Garden Info:</h4>
                            <div className="text-sm text-muted-foreground space-y-1">
                                <div>Size: {garden.rows} × {garden.columns} plots</div>
                                <div>Active Plots: {garden.activePlotCount}</div>
                                <div>Version: {garden.version}</div>
                            </div>
                        </div>
                    )}
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={handleClose}
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        disabled={isLoading || !garden}
                    >
                        {isLoading ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Save className="w-4 h-4 mr-2" />
                                Save Garden
                            </>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
} 