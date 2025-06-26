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
import { SaveModal } from './save-modal'
import { LoadModal } from './load-modal'
import { ExportModal } from './export-modal'
import { ImportModal } from './import-modal'
import { UISettingsModal } from './ui-settings-modal'
import { LayoutCreatorModal } from './layout-creator-modal'
import { TimeDisplay } from './time-display'

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

    const handleExternalLink = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="bg-palia-blue-dark text-white shadow-lg">
            {/* Top navigation bar */}
            <div className="flex items-center justify-between px-6 py-3">
                {/* Left side - Branding and main navigation */}
                <div className="flex items-center space-x-6">
                    {/* Logo and title */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-palia-blue-dark font-bold text-lg">🌱</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">
                                Palia Garden Planner
                            </h1>
                            <p className="text-xs text-blue-200">
                                A player-made tool for planning your garden
                            </p>
                        </div>
                    </div>

                    {/* Navigation links */}
                    <nav className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => handleExternalLink('https://github.com/your-repo/roadmap')}
                            className="flex items-center space-x-1 px-3 py-1 rounded-md text-sm text-blue-200 hover:text-white hover:bg-palia-blue transition-colors"
                        >
                            <MapPin className="w-4 h-4" />
                            <span>Roadmap</span>
                        </button>
                        <button
                            onClick={() => handleExternalLink('https://github.com/your-repo/releases')}
                            className="flex items-center space-x-1 px-3 py-1 rounded-md text-sm text-blue-200 hover:text-white hover:bg-palia-blue transition-colors"
                        >
                            <FileText className="w-4 h-4" />
                            <span>Changelogs</span>
                        </button>
                        <button
                            onClick={() => handleExternalLink('https://github.com/your-repo/contributors')}
                            className="flex items-center space-x-1 px-3 py-1 rounded-md text-sm text-blue-200 hover:text-white hover:bg-palia-blue transition-colors"
                        >
                            <Users className="w-4 h-4" />
                            <span>Credits</span>
                        </button>
                        <button
                            onClick={() => setLayoutModalOpen(true)}
                            className="flex items-center space-x-1 px-3 py-1 rounded-md text-sm text-blue-200 hover:text-white hover:bg-palia-blue transition-colors"
                        >
                            <Grid3x3 className="w-4 h-4" />
                            <span>Layout Generator</span>
                        </button>
                        <button
                            onClick={() => handleExternalLink('https://github.com/your-repo')}
                            className="flex items-center space-x-1 px-3 py-1 rounded-md text-sm text-blue-200 hover:text-white hover:bg-palia-blue transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span>External Tools</span>
                        </button>
                    </nav>
                </div>

                {/* Right side - External links and time */}
                <div className="flex items-center space-x-4">
                    {/* External resource links */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <button
                            onClick={() => handleExternalLink('https://palia.wiki.gg/wiki/Gardening')}
                            className="flex items-center space-x-2 px-3 py-2 bg-palia-blue rounded-md text-sm text-white hover:bg-blue-600 transition-colors"
                        >
                            <BookOpen className="w-4 h-4" />
                            <span>Shepp Arenvanya's Guide to Gardening</span>
                            <ExternalLink className="w-3 h-3" />
                        </button>
                        <button
                            onClick={() => handleExternalLink('https://ko-fi.com/your-username')}
                            className="flex items-center space-x-2 px-3 py-2 bg-orange-600 rounded-md text-sm text-white hover:bg-orange-700 transition-colors"
                        >
                            <Coffee className="w-4 h-4" />
                            <span>Buy me a coffee?</span>
                            <ExternalLink className="w-3 h-3" />
                        </button>
                    </div>

                    {/* Time display */}
                    <div className="bg-palia-blue bg-opacity-50 rounded-md">
                        <TimeDisplay />
                    </div>

                    {/* Mobile menu */}
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="bg-palia-blue text-white border-blue-400">
                                    Menu
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuItem onClick={() => handleExternalLink('https://github.com/your-repo/roadmap')}>
                                    <MapPin className="w-4 h-4 mr-2" />
                                    Roadmap
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleExternalLink('https://github.com/your-repo/releases')}>
                                    <FileText className="w-4 h-4 mr-2" />
                                    Changelogs
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleExternalLink('https://github.com/your-repo/contributors')}>
                                    <Users className="w-4 h-4 mr-2" />
                                    Credits
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLayoutModalOpen(true)}>
                                    <Grid3x3 className="w-4 h-4 mr-2" />
                                    Layout Generator
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleExternalLink('https://github.com/your-repo')}>
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    External Tools
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            {/* Bottom action bar */}
            <div className="bg-palia-blue px-6 py-2 border-t border-blue-400 border-opacity-30">
                <div className="flex items-center justify-between">
                    {/* File operations */}
                    <div className="flex items-center space-x-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="bg-white text-palia-blue-dark border-white hover:bg-gray-100">
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
                                <Button variant="outline" size="sm" className="bg-white text-palia-blue-dark border-white hover:bg-gray-100">
                                    <Grid3x3 className="w-4 h-4 mr-2" />
                                    Tools
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
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

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSettingsModalOpen(true)}
                            className="bg-white text-palia-blue-dark border-white hover:bg-gray-100"
                        >
                            <Settings className="w-4 h-4 mr-2" />
                            Settings
                        </Button>
                    </div>

                    {/* Version info */}
                    <div className="text-xs text-blue-200">
                        React Port v0.1
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