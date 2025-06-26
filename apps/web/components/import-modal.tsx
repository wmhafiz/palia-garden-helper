'use client'

import { useState } from 'react'
import { Upload, AlertCircle } from 'lucide-react'
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
import { Alert, AlertDescription } from '@workspace/ui/components/alert'
import { useGarden } from '@/stores'

interface ImportModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ImportModal({ open, onOpenChange }: ImportModalProps) {
    const { importFromVueSaveCode } = useGarden()
    const [importData, setImportData] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleImport = async () => {
        if (!importData.trim()) {
            setError('Please provide a Palia Garden Planner save code to import')
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            const success = importFromVueSaveCode(importData.trim())
            if (success) {
                setImportData('')
                onOpenChange(false)
            } else {
                setError('Failed to import Palia Garden Planner save code. Please check the format.')
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to import garden')
        } finally {
            setIsLoading(false)
        }
    }

    const handleClose = () => {
        setImportData('')
        setError(null)
        onOpenChange(false)
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
                        Import a garden layout from a Palia Garden Planner save code. Supports backward compatibility with save codes from versions 0.1-0.4.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="import-data">Palia Garden Planner Save Code</Label>
                        <Textarea
                            id="import-data"
                            value={importData}
                            onChange={(e) => {
                                setImportData(e.target.value)
                                setError(null)
                            }}
                            className="min-h-[200px] font-mono text-sm"
                            placeholder="Paste your Palia Garden Planner save code here (e.g., v0.4_D-111-111-111_CR-...)..."
                        />
                    </div>

                    {vueValidation && (
                        <div className="space-y-2">
                            {vueValidation.isValid ? (
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
                            ) : (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>
                                        Invalid format. Please provide a valid Palia Garden Planner save code.
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>
                    )}
                </div>

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