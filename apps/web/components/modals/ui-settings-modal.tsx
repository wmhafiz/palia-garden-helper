'use client'

import { Settings, Star } from 'lucide-react'
import { useTheme } from 'next-themes'
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
import { Slider } from '@workspace/ui/components/slider'
import { Input } from '@workspace/ui/components/input'
import { Button } from '@workspace/ui/components/button'
import { useUISettings, useProcessor } from '@/stores'
import { ScrollArea } from '@workspace/ui/components/scroll-area'

interface UISettingsModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function UISettingsModal({ open, onOpenChange }: UISettingsModalProps) {
    const { theme, setTheme } = useTheme()
    const {
        showBonusIndicators,
        showGridLines,
        showTooltips,
        isCompactMode,
        autoSave,
        enableNotifications,
        enableSoundNotifications,
        showToolbar,
        toggleBonusIndicators,
        toggleGridLines,
        toggleTooltips,
        toggleCompactMode,
        toggleAutoSave,
        toggleNotifications,
        toggleSoundNotifications,
        toggleToolbar
    } = useUISettings()

    const { settings, harvesterOptions, updateSettings, updateHarvesterOptions } = useProcessor()

    // Calculate star base chance based on gardening level
    const starBaseChance = 0.25 + (harvesterOptions.useStarSeeds ? 0.25 : 0) + (harvesterOptions.level * 0.02)
    const finalStarChance = Math.min(1, starBaseChance)

    // Determine if dark mode is active based on next-themes
    const isDarkMode = theme === 'dark'

    const handleDarkModeToggle = (checked: boolean) => {
        setTheme(checked ? 'dark' : 'light')
    }

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

                <ScrollArea className="max-h-[70vh] overflow-auto pr-4 lg:pr-8">
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
                                    <Label htmlFor="toolbar">Toolbar</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Show the crop and tool selection toolbar
                                    </p>
                                </div>
                                <Switch
                                    id="toolbar"
                                    checked={showToolbar}
                                    onCheckedChange={toggleToolbar}
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
                                    onCheckedChange={handleDarkModeToggle}
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

                        {/* Processor Settings */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-foreground">Processor Settings</h3>

                            {/* Gardening Level Setting */}
                            <div className="space-y-3">
                                <div className="space-y-0.5">
                                    <Label htmlFor="gardening-level">Gardening Level</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Your current gardening level (affects star crop chance)
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4">
                                        <Slider
                                            value={[harvesterOptions.level]}
                                            onValueChange={(value) => updateHarvesterOptions({ level: value[0] })}
                                            max={50}
                                            min={0}
                                            step={1}
                                            className="flex-1"
                                        />
                                        <div className="w-16">
                                            <Input
                                                type="number"
                                                min="0"
                                                max="50"
                                                value={harvesterOptions.level}
                                                onChange={(e) => updateHarvesterOptions({ level: Math.max(0, Math.min(50, parseInt(e.target.value) || 0)) })}
                                                className="h-8 text-center"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <span>Star Chance: {Math.round(finalStarChance * 100)}%</span>
                                        <span>Level {harvesterOptions.level}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Star Seeds Toggle */}
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="star-seeds">Star Seeds</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Use star seeds for +25% star crop chance
                                    </p>
                                </div>
                                <Switch
                                    id="star-seeds"
                                    checked={harvesterOptions.useStarSeeds}
                                    onCheckedChange={(checked) => updateHarvesterOptions({ useStarSeeds: checked })}
                                />
                            </div>

                            {/* Gold Average Method */}
                            <div className="space-y-3">
                                <div className="space-y-0.5">
                                    <Label>Gold Average Method</Label>
                                    <p className="text-sm text-muted-foreground">
                                        How to calculate gold per time unit
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant={settings.goldAverageSetting === 'crafterTime' ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => updateSettings({ goldAverageSetting: 'crafterTime' })}
                                        className="flex-1"
                                    >
                                        Crafter Time
                                    </Button>
                                    <Button
                                        variant={settings.goldAverageSetting === 'growthTick' ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => updateSettings({ goldAverageSetting: 'growthTick' })}
                                        className="flex-1"
                                    >
                                        Growth Ticks
                                    </Button>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {settings.goldAverageSetting === 'crafterTime'
                                        ? 'Gold / Overall Process Time (hours)'
                                        : 'Gold / Growth Ticks (days)'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
} 