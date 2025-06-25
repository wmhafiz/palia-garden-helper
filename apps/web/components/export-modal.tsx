'use client'

import { useState } from 'react'
import { Download, Copy, Check } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from '@workspace/ui/components/dialog'
import { Button } from '@workspace/ui/components/button'
import { Textarea } from '@workspace/ui/components/textarea'
import { Label } from '@workspace/ui/components/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs'
import { useGarden, useSaveLoad } from '@/stores'

interface ExportModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ExportModal({ open, onOpenChange }: ExportModalProps) {
    const { garden } = useGarden()
    const { exportGarden } = useSaveLoad()
    const [copied, setCopied] = useState(false)

    const gardenData = garden ? exportGarden(garden) : ''

    const handleCopyToClipboard = async () => {
        if (gardenData) {
            try {
                await navigator.clipboard.writeText(gardenData)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            } catch (error) {
                console.error('Failed to copy to clipboard:', error)
            }
        }
    }

    const handleDownloadJSON = () => {
        if (gardenData) {
            const blob = new Blob([gardenData], { type: 'application/json' })
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = `palia-garden-${new Date().toISOString().split('T')[0]}.json`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        }
    }

    const handleDownloadText = () => {
        if (garden) {
            // Create a simple text representation
            let textContent = `Palia Garden Layout\n`
            textContent += `=====================\n\n`
            textContent += `Size: ${garden.rows} × ${garden.columns} plots\n`
            textContent += `Active Plots: ${garden.activePlotCount}\n`
            textContent += `Export Date: ${new Date().toLocaleString()}\n\n`

            // Add plot information
            textContent += `Plot Details:\n`
            textContent += `-------------\n`

            for (let i = 0; i < garden.rows; i++) {
                for (let j = 0; j < garden.columns; j++) {
                    const plot = garden.getPlot(i, j)
                    if (plot && plot.isActive) {
                        textContent += `\nPlot (${i + 1}, ${j + 1}):\n`

                        // Check for crops and fertilizers in tiles
                        let hasContent = false
                        for (let ti = 0; ti < 3; ti++) {
                            for (let tj = 0; tj < 3; tj++) {
                                const tile = plot.getTile(ti, tj)
                                if (tile && (tile.crop || tile.fertiliser)) {
                                    hasContent = true
                                    textContent += `  Tile (${ti + 1}, ${tj + 1}): `
                                    if (tile.crop) textContent += `Crop: ${tile.crop.type}`
                                    if (tile.fertiliser) textContent += ` | Fertiliser: ${tile.fertiliser.type}`
                                    textContent += `\n`
                                }
                            }
                        }

                        if (!hasContent) {
                            textContent += `  (Empty plot)\n`
                        }
                    }
                }
            }

            const blob = new Blob([textContent], { type: 'text/plain' })
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = `palia-garden-${new Date().toISOString().split('T')[0]}.txt`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl max-h-[80vh]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Export Garden
                    </DialogTitle>
                    <DialogDescription>
                        Export your garden layout in different formats for backup or sharing.
                    </DialogDescription>
                </DialogHeader>

                {!garden ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No garden to export.</p>
                    </div>
                ) : (
                    <Tabs defaultValue="json" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="json">JSON Format</TabsTrigger>
                            <TabsTrigger value="text">Text Summary</TabsTrigger>
                        </TabsList>

                        <TabsContent value="json" className="space-y-4">
                            <div className="space-y-2">
                                <Label>Garden Data (JSON)</Label>
                                <Textarea
                                    value={gardenData}
                                    readOnly
                                    className="min-h-[200px] font-mono text-sm"
                                    placeholder="Garden data will appear here..."
                                />
                                <p className="text-sm text-gray-500">
                                    This JSON format can be imported back into the garden planner.
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <Button onClick={handleCopyToClipboard} variant="outline">
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4 mr-2" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copy to Clipboard
                                        </>
                                    )}
                                </Button>
                                <Button onClick={handleDownloadJSON}>
                                    <Download className="w-4 h-4 mr-2" />
                                    Download JSON
                                </Button>
                            </div>
                        </TabsContent>

                        <TabsContent value="text" className="space-y-4">
                            <div className="space-y-2">
                                <Label>Garden Summary</Label>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-sm space-y-1">
                                        <div><strong>Size:</strong> {garden.rows} × {garden.columns} plots</div>
                                        <div><strong>Active Plots:</strong> {garden.activePlotCount}</div>
                                        <div><strong>Version:</strong> {garden.version}</div>
                                        <div><strong>Export Date:</strong> {new Date().toLocaleString()}</div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500">
                                    This text format provides a readable summary of your garden layout.
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <Button onClick={handleDownloadText}>
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Text Summary
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                )}
            </DialogContent>
        </Dialog>
    )
} 