'use client'

import { Settings } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from '@workspace/ui/components/dialog'
import { Label } from '@workspace/ui/components/label'
import { Switch } from '@workspace/ui/components/switch'
import { Separator } from '@workspace/ui/components/separator'
import { useUISettings } from '@/stores'

interface UISettingsModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function UISettingsModal({ open, onOpenChange }: UISettingsModalProps) {
    const {
        showBonusIndicators,
        showGridLines,
        showTooltips,
        isDarkMode,
        isCompactMode,
        autoSave,
        enableNotifications,
        enableSoundNotifications,
        toggleBonusIndicators,
        toggleGridLines,
        toggleTooltips,
        toggleDarkMode,
        toggleCompactMode,
        toggleAutoSave,
        toggleNotifications,
        toggleSoundNotifications
    } = useUISettings()

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        UI Settings
                    </DialogTitle>
                    <DialogDescription>
                        Customize the appearance and behavior of the garden planner.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Display Settings */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-foreground">Display Options</h3>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="bonus-indicators">Bonus Indicators</Label>
                                <p className="text-sm text-muted-foreground">
                                    Show visual indicators for crop bonuses
                                </p>
                            </div>
                            <Switch
                                id="bonus-indicators"
                                checked={showBonusIndicators}
                                onCheckedChange={toggleBonusIndicators}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="grid-lines">Grid Lines</Label>
                                <p className="text-sm text-muted-foreground">
                                    Show grid lines between plots and tiles
                                </p>
                            </div>
                            <Switch
                                id="grid-lines"
                                checked={showGridLines}
                                onCheckedChange={toggleGridLines}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="tooltips">Tooltips</Label>
                                <p className="text-sm text-muted-foreground">
                                    Show helpful tooltips on hover
                                </p>
                            </div>
                            <Switch
                                id="tooltips"
                                checked={showTooltips}
                                onCheckedChange={toggleTooltips}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="compact-mode">Compact Mode</Label>
                                <p className="text-sm text-muted-foreground">
                                    Use smaller spacing and elements
                                </p>
                            </div>
                            <Switch
                                id="compact-mode"
                                checked={isCompactMode}
                                onCheckedChange={toggleCompactMode}
                            />
                        </div>
                    </div>

                    <Separator />

                    {/* Theme Settings */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-foreground">Theme</h3>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="dark-mode">Dark Mode</Label>
                                <p className="text-sm text-muted-foreground">
                                    Use dark color scheme
                                </p>
                            </div>
                            <Switch
                                id="dark-mode"
                                checked={isDarkMode}
                                onCheckedChange={toggleDarkMode}
                            />
                        </div>
                    </div>

                    <Separator />

                    {/* Notifications Settings */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-foreground">Notifications</h3>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="notifications">Browser Notifications</Label>
                                <p className="text-sm text-muted-foreground">
                                    Show browser notifications for harvest reminders
                                </p>
                            </div>
                            <Switch
                                id="notifications"
                                checked={enableNotifications}
                                onCheckedChange={toggleNotifications}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="sound-notifications">Sound Notifications</Label>
                                <p className="text-sm text-muted-foreground">
                                    Play sound alerts for harvest reminders
                                </p>
                            </div>
                            <Switch
                                id="sound-notifications"
                                checked={enableSoundNotifications}
                                onCheckedChange={toggleSoundNotifications}
                            />
                        </div>
                    </div>

                    <Separator />

                    {/* Behavior Settings */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-foreground">Behavior</h3>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="auto-save">Auto Save</Label>
                                <p className="text-sm text-muted-foreground">
                                    Automatically save changes as you make them
                                </p>
                            </div>
                            <Switch
                                id="auto-save"
                                checked={autoSave}
                                onCheckedChange={toggleAutoSave}
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
} 