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

interface PresetLayout {
    name: string
    rows: number
    columns: number
    description: string
    defaultPattern?: boolean[][]
}

interface PlotToggleGridProps {
    rows: number
    columns: number
    pattern: boolean[][]
    onPatternChange: (pattern: boolean[][]) => void
}

function PlotToggleGrid({ rows, columns, pattern, onPatternChange }: PlotToggleGridProps) {
    const togglePlot = (row: number, col: number) => {
        const newPattern = pattern.map((r, rowIndex) =>
            r.map((plot, colIndex) =>
                rowIndex === row && colIndex === col ? !plot : plot
            )
        )
        onPatternChange(newPattern)
    }

    const activePlots = pattern.flat().filter(Boolean).length
    const totalPlots = rows * columns

    return (
        <div className="space-y-2">
            <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">
                    Click to toggle plots • {activePlots} of {totalPlots} active
                </div>
                <div
                    className="inline-grid gap-1 p-2 bg-gray-50 rounded border"
                    style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
                >
                    {pattern.map((row, rowIndex) =>
                        row.map((isActive, colIndex) => (
                            <button
                                key={`${rowIndex}-${colIndex}`}
                                onClick={() => togglePlot(rowIndex, colIndex)}
                                className={`
                                    w-8 h-8 border-2 rounded transition-colors
                                    ${isActive
                                        ? 'bg-green-200 border-green-400 hover:bg-green-300'
                                        : 'bg-gray-200 border-gray-400 hover:bg-gray-300'
                                    }
                                `}
                                title={`Plot ${rowIndex + 1},${colIndex + 1}: ${isActive ? 'Active' : 'Inactive'}`}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export function LayoutCreatorModal({ open, onOpenChange }: LayoutCreatorModalProps) {
    const { garden, initializeGarden, initializeGardenWithPattern } = useGarden()
    const [rows, setRows] = useState(garden?.rows || 3)
    const [columns, setColumns] = useState(garden?.columns || 3)
    const [selectedPreset, setSelectedPreset] = useState<string | null>(null)
    const [presetPatterns, setPresetPatterns] = useState<{ [key: string]: boolean[][] }>({})

    const createDefaultPattern = (rows: number, columns: number): boolean[][] => {
        return Array(rows).fill(null).map(() => Array(columns).fill(true))
    }

    const handleCreateLayout = () => {
        if (rows >= 1 && columns >= 1 && rows <= 10 && columns <= 10) {
            const pattern = selectedPreset ? presetPatterns[selectedPreset] : undefined
            if (pattern) {
                // Create garden with custom pattern
                initializeGardenWithPattern(rows, columns, pattern)
            } else {
                // Create garden with all plots active
                initializeGarden(rows, columns)
            }
            onOpenChange(false)
        }
    }

    const handleClose = () => {
        // Reset to current garden size
        setRows(garden?.rows || 3)
        setColumns(garden?.columns || 3)
        setSelectedPreset(null)
        setPresetPatterns({})
        onOpenChange(false)
    }

    const presetLayouts: PresetLayout[] = [
        { name: '1x2', rows: 1, columns: 2, description: 'Perfect for beginners' },
        { name: '2x1', rows: 2, columns: 1, description: 'Perfect for beginners' },
        { name: '2x2', rows: 2, columns: 2, description: 'Balanced layout' },
        { name: '3x2', rows: 3, columns: 2, description: 'Horizontal layout' },
        { name: '2x3', rows: 2, columns: 3, description: 'Vertical layout' },
        { name: '3x3', rows: 3, columns: 3, description: 'Standard layout' },
    ]

    const handlePresetSelect = (preset: PresetLayout) => {
        setRows(preset.rows)
        setColumns(preset.columns)
        setSelectedPreset(preset.name)

        // Initialize pattern if not exists
        if (!presetPatterns[preset.name]) {
            const defaultPattern = preset.defaultPattern || createDefaultPattern(preset.rows, preset.columns)
            setPresetPatterns(prev => ({
                ...prev,
                [preset.name]: defaultPattern
            }))
        }
    }

    const handlePatternChange = (presetName: string, newPattern: boolean[][]) => {
        setPresetPatterns(prev => ({
            ...prev,
            [presetName]: newPattern
        }))
    }

    const adjustValue = (value: number, delta: number, min: number, max: number) => {
        return Math.max(min, Math.min(max, value + delta))
    }

    const totalPlots = rows * columns
    const isValidSize = rows >= 1 && columns >= 1 && rows <= 10 && columns <= 10
    const isCurrentSize = garden && rows === garden.rows && columns === garden.columns

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Grid3x3 className="w-5 h-5" />
                        Layout Creator
                    </DialogTitle>
                    <DialogDescription>
                        Create a custom garden layout with your preferred dimensions and plot configuration.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Current Layout Info */}
                    {garden && (
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <h4 className="text-sm font-medium text-blue-900 mb-1">Current Layout</h4>
                            <p className="text-sm text-blue-700">
                                {garden.rows} × {garden.columns} plots ({garden.activePlotCount} active of {garden.rows * garden.columns} total)
                            </p>
                        </div>
                    )}

                    {/* Preset Layouts */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium text-gray-900">Quick Presets</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {presetLayouts.map((preset) => (
                                <div
                                    key={preset.name}
                                    className={`border rounded-lg p-3 transition-colors ${selectedPreset === preset.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                                        }`}
                                >
                                    <button
                                        onClick={() => handlePresetSelect(preset)}
                                        className="flex items-center justify-between w-full text-left mb-2"
                                    >
                                        <div>
                                            <div className="font-medium text-sm">{preset.name}</div>
                                            <div className="text-xs text-gray-500">{preset.description}</div>
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            {preset.rows * preset.columns} plots
                                        </div>
                                    </button>

                                    {selectedPreset === preset.name && presetPatterns[preset.name] && (
                                        <PlotToggleGrid
                                            rows={preset.rows}
                                            columns={preset.columns}
                                            pattern={presetPatterns[preset.name]!}
                                            onPatternChange={(newPattern) => handlePatternChange(preset.name, newPattern)}
                                        />
                                    )}
                                </div>
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
                                {selectedPreset && presetPatterns[selectedPreset] && (
                                    <div>Active Plots: {presetPatterns[selectedPreset]!.flat().filter(Boolean).length}</div>
                                )}
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