'use client'

import { useState, useRef } from 'react'
import { Upload, FileText, AlertCircle } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@workspace/ui/components/dialog'
import { Button } from '@workspace/ui/components/button'
import { Textarea } from '@workspace/ui/components/textarea'
import { Label } from '@workspace/ui/components/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs'
import { Alert, AlertDescription } from '@workspace/ui/components/alert'
import { useGarden, useSaveLoad } from '@/stores'

interface ImportModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ImportModal({ open, onOpenChange }: ImportModalProps) {
    const { initializeGarden, importFromVueSaveCode } = useGarden()
    const { importGarden } = useSaveLoad()
    const [importData, setImportData] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImport = async () => {
        if (!importData.trim()) {
            setError('Please provide garden data to import')
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            // Check if it's a Palia Garden Planner save code first
            if (vueValidation?.isValid) {
                const success = importFromVueSaveCode(importData.trim())
                if (success) {
                    setImportData('')
                    onOpenChange(false)
                    return
                } else {
                    setError('Failed to import Palia Garden Planner save code. Please check the format.')
                    return
                }
            }

            // Otherwise try JSON import
            const garden = importGarden(importData.trim())
            if (garden) {
                // Replace current garden with imported one
                initializeGarden(garden.rows, garden.columns)
                // Note: We'll need to implement proper garden replacement in the store
                setImportData('')
                onOpenChange(false)
            } else {
                setError('Failed to import garden. Please check the format.')
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to import garden')
        } finally {
            setIsLoading(false)
        }
    }

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = (e) => {
            const content = e.target?.result as string
            if (content) {
                setImportData(content)
                setError(null)
            }
        }
        reader.onerror = () => {
            setError('Failed to read file')
        }
        reader.readAsText(file)
    }

    const handleClose = () => {
        setImportData('')
        setError(null)
        onOpenChange(false)
    }

    const validateJSON = (data: string) => {
        try {
            const parsed = JSON.parse(data)
            return {
                isValid: true,
                hasRequiredFields: !!(parsed.version && parsed.rows && parsed.columns && parsed.plots),
                version: parsed.version,
                size: parsed.rows && parsed.columns ? `${parsed.rows} × ${parsed.columns}` : 'Unknown'
            }
        } catch {
            return { isValid: false, hasRequiredFields: false }
        }
    }

    const validateVueSaveCode = (data: string) => {
        try {
            // Check if it looks like a Palia Garden Planner save code (starts with v0.1, v0.2, v0.3, or v0.4)
            const versionMatch = data.match(/^v(0\.[1-4])_/)
            if (versionMatch) {
                const parts = data.split('_')
                const hasRequiredParts = parts.length >= 3 // version, dimension, crops
                return {
                    isValid: true,
                    hasRequiredFields: hasRequiredParts,
                    version: versionMatch[1],
                    format: 'Palia Garden Planner Save Code'
                }
            }
            return { isValid: false, hasRequiredFields: false }
        } catch {
            return { isValid: false, hasRequiredFields: false }
        }
    }

    const validation = importData ? validateJSON(importData) : null
    const vueValidation = importData ? validateVueSaveCode(importData) : null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl max-h-[80vh]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Upload className="w-5 h-5" />
                        Import Garden
                    </DialogTitle>
                    <DialogDescription>
                        Import a garden layout from JSON data, Palia Garden Planner save code, or file upload. Supports backward compatibility with save codes from versions 0.1-0.4.
                    </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="paste" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="paste">Paste Data</TabsTrigger>
                        <TabsTrigger value="file">Upload File</TabsTrigger>
                    </TabsList>

                    <TabsContent value="paste" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="import-data">Garden Data (JSON or Palia Garden Planner Save Code)</Label>
                            <Textarea
                                id="import-data"
                                value={importData}
                                onChange={(e) => {
                                    setImportData(e.target.value)
                                    setError(null)
                                }}
                                className="min-h-[200px] font-mono text-sm"
                                placeholder="Paste your garden JSON data or Palia Garden Planner save code here..."
                            />
                        </div>

                        {(validation || vueValidation) && (
                            <div className="space-y-2">
                                {vueValidation?.isValid ? (
                                    <Alert>
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>
                                            {vueValidation.hasRequiredFields ? (
                                                <>
                                                    <strong>Valid Palia Garden Planner save code detected!</strong>
                                                    <br />
                                                    Version: v{vueValidation.version} | Format: {vueValidation.format}
                                                    <br />
                                                    <span className="text-sm text-gray-600">
                                                        This save code will be automatically converted to the latest format.
                                                    </span>
                                                </>
                                            ) : (
                                                <span className="text-amber-600">
                                                    Palia Garden Planner save code format detected but appears incomplete
                                                </span>
                                            )}
                                        </AlertDescription>
                                    </Alert>
                                ) : validation?.isValid ? (
                                    <Alert>
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>
                                            {validation.hasRequiredFields ? (
                                                <>
                                                    <strong>Valid garden data detected!</strong>
                                                    <br />
                                                    Version: {validation.version} | Size: {validation.size}
                                                </>
                                            ) : (
                                                <span className="text-amber-600">
                                                    Valid JSON but missing required garden fields
                                                </span>
                                            )}
                                        </AlertDescription>
                                    </Alert>
                                ) : (
                                    <Alert variant="destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>
                                            Invalid format. Please provide valid JSON garden data or Palia Garden Planner save code.
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="file" className="space-y-4">
                        <div className="space-y-2">
                            <Label>Upload Garden File</Label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                                <p className="text-gray-600 mb-2">
                                    Select a JSON file to import
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <Upload className="w-4 h-4 mr-2" />
                                    Choose File
                                </Button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".json"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                            </div>
                        </div>

                        {importData && (
                            <div className="space-y-2">
                                <Label>File Contents Preview</Label>
                                <Textarea
                                    value={importData.slice(0, 500) + (importData.length > 500 ? '...' : '')}
                                    readOnly
                                    className="min-h-[100px] font-mono text-sm bg-gray-50"
                                />
                                {validation && (
                                    <Alert>
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>
                                            {validation.hasRequiredFields ? (
                                                <>
                                                    <strong>Valid garden file!</strong>
                                                    <br />
                                                    Version: {validation.version} | Size: {validation.size}
                                                </>
                                            ) : (
                                                <span className="text-amber-600">
                                                    File loaded but missing required garden fields
                                                </span>
                                            )}
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </div>
                        )}
                    </TabsContent>
                </Tabs>

                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={handleClose}
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleImport}
                        disabled={isLoading || !importData.trim() || (vueValidation ? !vueValidation.isValid : true)}
                    >
                        {isLoading ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                Importing...
                            </>
                        ) : (
                            <>
                                <Upload className="w-4 h-4 mr-2" />
                                Import Garden
                            </>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
} 