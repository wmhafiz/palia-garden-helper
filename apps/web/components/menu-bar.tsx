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
    Clock,
    ExternalLink,
    BookOpen,
    Coffee,
    MapPin,
    FileText,
    Users
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
import { UndoRedoToolbar } from './tools/undo-redo-toolbar'
import { SaveModal } from './modals/save-modal'
import { LoadModal } from './modals/load-modal'
import { ExportModal } from './modals/export-modal'
import { ImportModal } from './modals/import-modal'
import { UISettingsModal } from './modals/ui-settings-modal'
import { LayoutCreatorModal } from './modals/layout-creator-modal'
import { TimeDisplay } from './clock/time-display'
import { ThemeSwitcher } from './theme-switcher'

export function MenuBar() {
    const { garden, clearGarden } = useGarden()
    const [saveModalOpen, setSaveModalOpen] = useState(false)
    const [loadModalOpen, setLoadModalOpen] = useState(false)
    const [exportModalOpen, setExportModalOpen] = useState(false)
    const [importModalOpen, setImportModalOpen] = useState(false)
    const [settingsModalOpen, setSettingsModalOpen] = useState(false)
    const [layoutModalOpen, setLayoutModalOpen] = useState(false)

    const handleClearGarden = () => {
        if (garden && window.confirm('Are you sure you want to clear the entire garden? You can undo this action with Ctrl+Z.')) {
            clearGarden()
        }
    }


    const handleExternalLink = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-40 bg-palia-blue-dark dark:bg-background text-white dark:text-foreground shadow-lg border-b border-border">
            {/* Top navigation bar */}
            <div className="flex items-center justify-between px-6 py-3">
                {/* Left side - Branding */}
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-palia-blue-dark font-bold text-lg">🌱</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white">
                            Palia Garden Helper
                        </h1>
                        <p className="text-xs text-blue-200">
                            A player-made tool for planning your garden
                        </p>
                    </div>
                </div>

                {/* Center - Time Display */}
                <div className="flex-1 flex justify-center">
                    <TimeDisplay />
                </div>

                {/* Right side - Empty for now */}
                <div className="w-0">
                    {/* This empty div balances the layout */}
                </div>
            </div>

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

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="bg-white dark:bg-card text-palia-blue-dark dark:text-foreground border-white dark:border-border hover:bg-gray-100 dark:hover:bg-accent">
                                    <Grid3x3 className="w-4 h-4 mr-2" />
                                    Tools
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem onClick={() => setLayoutModalOpen(true)}>
                                    <Grid3x3 className="w-4 h-4 mr-2" />
                                    Layout Creator
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
                        <UndoRedoToolbar />
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

            <LayoutCreatorModal
                open={layoutModalOpen}
                onOpenChange={setLayoutModalOpen}
            />
        </div>
    )
} 