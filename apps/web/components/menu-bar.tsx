'use client'

import { useState } from 'react'
import {
    Save,
    FolderOpen,
    Download,
    Upload,
    Settings
} from 'lucide-react'
import { Button } from '@workspace/ui/components/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@workspace/ui/components/dropdown-menu'
import { useGarden } from '@/stores'
import { UndoRedoToolbar } from './tools/undo-redo-toolbar'
import { SaveModal } from './modals/save-modal'
import { LoadModal } from './modals/load-modal'
import { ExportModal } from './modals/export-modal'
import { ImportModal } from './modals/import-modal'
import { UISettingsModal } from './modals/ui-settings-modal'
import { ThemeSwitcher } from './theme-switcher'
import { ModeSwitcher } from './mode-switcher'

export function MenuBar() {
    const [saveModalOpen, setSaveModalOpen] = useState(false)
    const [loadModalOpen, setLoadModalOpen] = useState(false)
    const [exportModalOpen, setExportModalOpen] = useState(false)
    const [importModalOpen, setImportModalOpen] = useState(false)
    const [settingsModalOpen, setSettingsModalOpen] = useState(false)

    return (
        <div className="fixed top-0 left-0 right-0 z-40 bg-palia-blue-dark dark:bg-background text-white dark:text-foreground shadow-lg border-b border-border">

            {/* Bottom action bar */}
            <div className="bg-palia-blue dark:bg-muted px-6 py-2 border-t border-blue-400 border-opacity-30 dark:border-border">

                <div className="flex items-center justify-between">
                    {/* File operations */}
                    <div className="flex items-center space-x-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="bg-white dark:bg-card text-palia-blue-dark dark:text-foreground border-white dark:border-border hover:bg-gray-100 dark:hover:bg-accent">
                                    <FolderOpen className="w-4 h-4 mr-2" />
                                    File
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
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



                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSettingsModalOpen(true)}
                            className="bg-white dark:bg-card text-palia-blue-dark dark:text-foreground border-white dark:border-border hover:bg-gray-100 dark:hover:bg-accent"
                        >
                            <Settings className="w-4 h-4 mr-2" />
                            Settings
                        </Button>

                        <ThemeSwitcher />
                        <ModeSwitcher />
                    </div>
                </div>
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
        </div>
    )
} 