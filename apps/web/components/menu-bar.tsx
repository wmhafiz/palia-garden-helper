'use client'

import { useState } from 'react'
import {
    Save,
    FolderOpen,
    Download,
    Upload,
    Settings,
    Trash2,
    Grid3x3,
    Camera,
    Clock
} from 'lucide-react'
import { Button } from '@workspace/ui/components/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@workspace/ui/components/dropdown-menu'
import { useGarden, useSaveLoad } from '@/stores'
import { SaveModal } from './save-modal'
import { LoadModal } from './load-modal'
import { ExportModal } from './export-modal'
import { ImportModal } from './import-modal'
import { UISettingsModal } from './ui-settings-modal'
import { LayoutCreatorModal } from './layout-creator-modal'
// import { TimeDisplay } from './time-display'

export function MenuBar() {
    const { garden, clearGarden } = useGarden()
    const [saveModalOpen, setSaveModalOpen] = useState(false)
    const [loadModalOpen, setLoadModalOpen] = useState(false)
    const [exportModalOpen, setExportModalOpen] = useState(false)
    const [importModalOpen, setImportModalOpen] = useState(false)
    const [settingsModalOpen, setSettingsModalOpen] = useState(false)
    const [layoutModalOpen, setLayoutModalOpen] = useState(false)

    const handleClearGarden = () => {
        if (garden && window.confirm('Are you sure you want to clear the entire garden? This action cannot be undone.')) {
            clearGarden()
        }
    }

    const handleScreenshot = async () => {
        try {
            const { default: html2canvas } = await import('html2canvas')
            const gardenElement = document.querySelector('[data-garden-display]')

            if (gardenElement) {
                const canvas = await html2canvas(gardenElement as HTMLElement, {
                    backgroundColor: '#ffffff',
                    scale: 2,
                    useCORS: true
                })

                // Create download link
                const link = document.createElement('a')
                link.download = `palia-garden-${new Date().toISOString().split('T')[0]}.png`
                link.href = canvas.toDataURL()
                link.click()
            }
        } catch (error) {
            console.error('Failed to take screenshot:', error)
        }
    }

    return (
        <div className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
            <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-gray-900">
                    Palia Garden Planner
                </h1>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    React Port v0.1
                </span>
            </div>

            <div className="flex items-center space-x-2">
                {/* File Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                            <FolderOpen className="w-4 h-4 mr-2" />
                            File
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSaveModalOpen(true)}>
                            <Save className="w-4 h-4 mr-2" />
                            Save Garden
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLoadModalOpen(true)}>
                            <FolderOpen className="w-4 h-4 mr-2" />
                            Load Garden
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setExportModalOpen(true)}>
                            <Download className="w-4 h-4 mr-2" />
                            Export Garden
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setImportModalOpen(true)}>
                            <Upload className="w-4 h-4 mr-2" />
                            Import Garden
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Tools Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                            <Grid3x3 className="w-4 h-4 mr-2" />
                            Tools
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setLayoutModalOpen(true)}>
                            <Grid3x3 className="w-4 h-4 mr-2" />
                            Layout Creator
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleScreenshot}>
                            <Camera className="w-4 h-4 mr-2" />
                            Take Screenshot
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={handleClearGarden}
                            className="text-red-600 focus:text-red-600"
                        >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Clear Garden
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Settings Button */}
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSettingsModalOpen(true)}
                >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                </Button>
            </div>

            {/* Modals */}
            <SaveModal
                open={saveModalOpen}
                onOpenChange={setSaveModalOpen}
            />

            <LoadModal
                open={loadModalOpen}
                onOpenChange={setLoadModalOpen}
            />

            <ExportModal
                open={exportModalOpen}
                onOpenChange={setExportModalOpen}
            />

            <ImportModal
                open={importModalOpen}
                onOpenChange={setImportModalOpen}
            />

            <UISettingsModal
                open={settingsModalOpen}
                onOpenChange={setSettingsModalOpen}
            />

            <LayoutCreatorModal
                open={layoutModalOpen}
                onOpenChange={setLayoutModalOpen}
            />
        </div>
    )
} 