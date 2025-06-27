'use client'

import { useState } from 'react'
import { Download, Copy, Check, Share } from 'lucide-react'
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
import { useGarden } from '@/stores'
import { generateShareableUrl } from '@/lib/utils/url-helpers'

interface ExportModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ExportModal({ open, onOpenChange }: ExportModalProps) {
    const { garden } = useGarden()
    const [copied, setCopied] = useState(false)
    const [urlCopied, setUrlCopied] = useState(false)

    const saveCode = garden ? garden.saveLayout() : ''
    const shareableUrl = saveCode ? generateShareableUrl(saveCode) : ''

    const handleCopyToClipboard = async () => {
        if (saveCode) {
            try {
                await navigator.clipboard.writeText(saveCode)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            } catch (error) {
                console.error('Failed to copy to clipboard:', error)
            }
        }
    }

    const handleCopyUrl = async () => {
        if (shareableUrl) {
            try {
                await navigator.clipboard.writeText(shareableUrl)
                setUrlCopied(true)
                setTimeout(() => setUrlCopied(false), 2000)
            } catch (error) {
                console.error('Failed to copy URL to clipboard:', error)
            }
        }
    }

    const handleDownloadSaveCode = () => {
        if (saveCode) {
            const blob = new Blob([saveCode], { type: 'text/plain' })
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = `palia-garden-save-${new Date().toISOString().split('T')[0]}.txt`
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

            // Add save code
            textContent += `Save Code:\n`
            textContent += `----------\n`
            textContent += `${saveCode}\n\n`

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
            link.download = `palia-garden-summary-${new Date().toISOString().split('T')[0]}.txt`
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
                        Export your garden layout as a Palia Garden Planner save code or text summary.
                    </DialogDescription>
                </DialogHeader>

                {!garden ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No garden to export.</p>
                    </div>
                ) : (
                    <Tabs defaultValue="save-code" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="save-code">Save Code</TabsTrigger>
                            <TabsTrigger value="share-url">Share URL</TabsTrigger>
                            <TabsTrigger value="text">Text Summary</TabsTrigger>
                        </TabsList>

                        <TabsContent value="save-code" className="space-y-4">
                            <div className="space-y-2">
                                <Label>Palia Garden Planner Save Code</Label>
                                <Textarea
                                    value={saveCode}
                                    readOnly
                                    className="min-h-[200px] font-mono text-sm"
                                    placeholder="Save code will appear here..."
                                />
                                <p className="text-sm text-gray-500">
                                    This save code can be imported back into any Palia Garden Planner (Vue.js or React version).
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
                                <Button onClick={handleDownloadSaveCode}>
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Save Code
                                </Button>
                            </div>
                        </TabsContent>

                        <TabsContent value="share-url" className="space-y-4">
                            <div className="space-y-2">
                                <Label>Shareable URL</Label>
                                <Textarea
                                    value={shareableUrl}
                                    readOnly
                                    className="min-h-[100px] font-mono text-sm"
                                    placeholder="Shareable URL will appear here..."
                                />
                                <p className="text-sm text-gray-500">
                                    Share this URL with others to let them view your garden layout. They can copy it and open it in any browser to see your garden.
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <Button onClick={handleCopyUrl} variant="outline">
                                    {urlCopied ? (
                                        <>
                                            <Check className="w-4 h-4 mr-2" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Share className="w-4 h-4 mr-2" />
                                            Copy URL
                                        </>
                                    )}
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
                                    This text format provides a readable summary of your garden layout including the save code.
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