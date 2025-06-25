'use client'

import { useState } from 'react'
import { Grid3x3, Plus, Minus } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@workspace/ui/components/dialog'
import { Button } from '@workspace/ui/components/button'
import { Label } from '@workspace/ui/components/label'
import { Input } from '@workspace/ui/components/input'
import { Separator } from '@workspace/ui/components/separator'
import { useGarden } from '@/stores'

interface LayoutCreatorModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function LayoutCreatorModal({ open, onOpenChange }: LayoutCreatorModalProps) {
    const { garden, initializeGarden } = useGarden()
    const [rows, setRows] = useState(garden?.rows || 3)
    const [columns, setColumns] = useState(garden?.columns || 3)

    const handleCreateLayout = () => {
        if (rows >= 1 && columns >= 1 && rows <= 10 && columns <= 10) {
            initializeGarden(rows, columns)
            onOpenChange(false)
        }
    }

    const handleClose = () => {
        // Reset to current garden size
        setRows(garden?.rows || 3)
        setColumns(garden?.columns || 3)
        onOpenChange(false)
    }

    const presetLayouts = [
        { name: 'Small (3×3)', rows: 3, columns: 3, description: 'Perfect for beginners' },
        { name: 'Medium (5×5)', rows: 5, columns: 5, description: 'Balanced layout' },
        { name: 'Large (7×7)', rows: 7, columns: 7, description: 'Advanced planning' },
        { name: 'Wide (3×8)', rows: 3, columns: 8, description: 'Horizontal layout' },
        { name: 'Tall (8×3)', rows: 8, columns: 3, description: 'Vertical layout' },
    ]

    const adjustValue = (value: number, delta: number, min: number, max: number) => {
        return Math.max(min, Math.min(max, value + delta))
    }

    const totalPlots = rows * columns
    const isValidSize = rows >= 1 && columns >= 1 && rows <= 10 && columns <= 10
    const isCurrentSize = garden && rows === garden.rows && columns === garden.columns

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Grid3x3 className="w-5 h-5" />
                        Layout Creator
                    </DialogTitle>
                    <DialogDescription>
                        Create a custom garden layout with your preferred dimensions.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Current Layout Info */}
                    {garden && (
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <h4 className="text-sm font-medium text-blue-900 mb-1">Current Layout</h4>
                            <p className="text-sm text-blue-700">
                                {garden.rows} × {garden.columns} plots ({garden.rows * garden.columns} total)
                            </p>
                        </div>
                    )}

                    {/* Preset Layouts */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium text-gray-900">Quick Presets</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {presetLayouts.map((preset) => (
                                <button
                                    key={preset.name}
                                    onClick={() => {
                                        setRows(preset.rows)
                                        setColumns(preset.columns)
                                    }}
                                    className="flex items-center justify-between p-3 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div>
                                        <div className="font-medium text-sm">{preset.name}</div>
                                        <div className="text-xs text-gray-500">{preset.description}</div>
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {preset.rows * preset.columns} plots
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <Separator />

                    {/* Custom Dimensions */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-900">Custom Dimensions</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Rows */}
                            <div className="space-y-2">
                                <Label htmlFor="rows">Rows</Label>
                                <div className="flex items-center space-x-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setRows(adjustValue(rows, -1, 1, 10))}
                                        disabled={rows <= 1}
                                    >
                                        <Minus className="w-3 h-3" />
                                    </Button>
                                    <Input
                                        id="rows"
                                        type="number"
                                        min="1"
                                        max="10"
                                        value={rows}
                                        onChange={(e) => {
                                            const value = parseInt(e.target.value) || 1
                                            setRows(adjustValue(value, 0, 1, 10))
                                        }}
                                        className="text-center"
                                    />
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setRows(adjustValue(rows, 1, 1, 10))}
                                        disabled={rows >= 10}
                                    >
                                        <Plus className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>

                            {/* Columns */}
                            <div className="space-y-2">
                                <Label htmlFor="columns">Columns</Label>
                                <div className="flex items-center space-x-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setColumns(adjustValue(columns, -1, 1, 10))}
                                        disabled={columns <= 1}
                                    >
                                        <Minus className="w-3 h-3" />
                                    </Button>
                                    <Input
                                        id="columns"
                                        type="number"
                                        min="1"
                                        max="10"
                                        value={columns}
                                        onChange={(e) => {
                                            const value = parseInt(e.target.value) || 1
                                            setColumns(adjustValue(value, 0, 1, 10))
                                        }}
                                        className="text-center"
                                    />
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setColumns(adjustValue(columns, 1, 1, 10))}
                                        disabled={columns >= 10}
                                    >
                                        <Plus className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Layout Preview */}
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Preview</h4>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div>Size: {rows} × {columns} plots</div>
                                <div>Total Plots: {totalPlots}</div>
                                <div>Total Tiles: {totalPlots * 9} (3×3 per plot)</div>
                            </div>
                        </div>

                        {!isValidSize && (
                            <div className="text-sm text-red-600">
                                Please enter valid dimensions (1-10 for both rows and columns).
                            </div>
                        )}
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleCreateLayout}
                        disabled={!isValidSize || (isCurrentSize ?? false)}
                    >
                        {isCurrentSize ? 'Current Layout' : 'Create Layout'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
} 