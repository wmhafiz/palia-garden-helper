'use client'

import { Settings, Wrench } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Input } from '@workspace/ui/components/input'
import { Label } from '@workspace/ui/components/label'
import { Badge } from '@workspace/ui/components/badge'
import { Button } from '@workspace/ui/components/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@workspace/ui/components/tooltip'
import { useOutputData } from '@/hooks/useOutputData'
import { useProcessor } from '@/stores'
import { getCropFromType } from '@/lib/garden-planner'

export function ProcessorSettingsWidget() {
    const { harvestData } = useOutputData()
    const { settings, updateCropSetting, updateSettings } = useProcessor()

    // Get crops that have harvest data
    const availableCrops = harvestData.cropHarvests.filter(harvest => harvest.totalYield > 0)

    if (availableCrops.length === 0) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        Processor Settings
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        No crops available for processing. Plant some crops in your garden first.
                    </p>
                </CardContent>
            </Card>
        )
    }

    const totalCrafters = Array.from(settings.cropSettings.values())
        .filter(setting => setting.isActive && setting.processAs !== 'crop')
        .reduce((sum, setting) => sum + setting.crafters, 0)

    return (
        <TooltipProvider>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        Processor Settings
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Wrench className="w-4 h-4" />
                            <span>Total Crafters: {totalCrafters}/30</span>
                            {totalCrafters > 30 && (
                                <Badge variant="destructive" className="text-xs">
                                    Over Limit
                                </Badge>
                            )}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Gold Average Setting */}
                    <div className="space-y-2">
                        <Label>Gold Average Method</Label>
                        <div className="flex gap-2">
                            <Button
                                variant={settings.goldAverageSetting === 'crafterTime' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => updateSettings({ goldAverageSetting: 'crafterTime' })}
                            >
                                Crafter Time
                            </Button>
                            <Button
                                variant={settings.goldAverageSetting === 'growthTick' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => updateSettings({ goldAverageSetting: 'growthTick' })}
                            >
                                Growth Ticks
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {settings.goldAverageSetting === 'crafterTime'
                                ? 'Gold / Overall Process Time'
                                : 'Gold / Growth Ticks (Day of Last Harvest)'
                            }
                        </p>
                    </div>

                    {/* Crop Processing Settings */}
                    <div className="space-y-3">
                        <Label>Crop Processing Settings</Label>
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                            {availableCrops.map((harvest) => {
                                const crop = getCropFromType(harvest.cropType as any)
                                const currentSetting = settings.cropSettings.get(harvest.cropType) || {
                                    cropType: harvest.cropType,
                                    isStar: false,
                                    processAs: 'crop' as const,
                                    crafters: 1,
                                    targetTime: 0,
                                    isActive: true,
                                    hasPreserve: crop?.conversionInfo?.preserveProcessMinutes && crop.conversionInfo.preserveProcessMinutes > 0,
                                    count: harvest.totalYield
                                }

                                const canMakeSeeds = crop?.conversionInfo?.seedProcessMinutes && crop.conversionInfo.seedProcessMinutes > 0
                                const canMakePreserves = crop?.conversionInfo?.preserveProcessMinutes && crop.conversionInfo.preserveProcessMinutes > 0 && crop.conversionInfo.cropsPerPreserve > 0

                                return (
                                    <div key={harvest.cropType} className="border rounded-lg p-4 space-y-4">
                                        {/* Header with crop info */}
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={`/crops/${harvest.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                                alt={harvest.cropType}
                                                className="w-10 h-10 object-contain"
                                            />
                                            <div>
                                                <h4 className="font-medium capitalize">{harvest.cropType}</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {harvest.totalYield} available
                                                </p>
                                            </div>
                                        </div>

                                        {/* Process As Visual Buttons */}
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label className="text-sm">Process As</Label>
                                                <div className="flex gap-2">
                                                    {/* Crop Button */}
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Button
                                                                variant={currentSetting.processAs === 'crop' ? 'default' : 'outline'}
                                                                size="sm"
                                                                className="flex items-center gap-2 h-auto p-3"
                                                                onClick={() => updateCropSetting(harvest.cropType, { processAs: 'crop' })}
                                                            >
                                                                <img
                                                                    src={`/crops/${harvest.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                                                    alt={`${harvest.cropType} crop`}
                                                                    className="w-6 h-6 object-contain"
                                                                />
                                                                <span className="text-xs">Crop</span>
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Keep as raw crop</p>
                                                        </TooltipContent>
                                                    </Tooltip>

                                                    {/* Seed Button */}
                                                    {canMakeSeeds && (
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <Button
                                                                    variant={currentSetting.processAs === 'seed' ? 'default' : 'outline'}
                                                                    size="sm"
                                                                    className="flex items-center gap-2 h-auto p-3"
                                                                    onClick={() => updateCropSetting(harvest.cropType, { processAs: 'seed' })}
                                                                >
                                                                    <img
                                                                        src={`/seeds/${harvest.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                                                        alt={`${harvest.cropType} seed`}
                                                                        className="w-6 h-6 object-contain"
                                                                    />
                                                                    <span className="text-xs">Seed</span>
                                                                </Button>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>Process into seeds</p>
                                                                {crop?.conversionInfo && (
                                                                    <p className="text-xs opacity-75">
                                                                        {crop.conversionInfo.cropsPerSeed} crops → 1 seed
                                                                    </p>
                                                                )}
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    )}

                                                    {/* Preserve Button */}
                                                    {canMakePreserves !== 0 && (
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <Button
                                                                    variant={currentSetting.processAs === 'preserve' ? 'default' : 'outline'}
                                                                    size="sm"
                                                                    className="flex items-center gap-2 h-auto p-3"
                                                                    onClick={() => updateCropSetting(harvest.cropType, { processAs: 'preserve' })}
                                                                >
                                                                    <img
                                                                        src={`/jars/${harvest.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                                                        alt={`${harvest.cropType} preserve`}
                                                                        className="w-6 h-6 object-contain"
                                                                    />
                                                                    <span className="text-xs">Preserve</span>
                                                                </Button>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>Process into preserves</p>
                                                                {crop?.conversionInfo && (
                                                                    <p className="text-xs opacity-75">
                                                                        {crop.conversionInfo.cropsPerPreserve} crops → 1 preserve
                                                                    </p>
                                                                )}
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Crafters Input */}
                                            {currentSetting.processAs !== 'crop' && (
                                                <div className="flex items-center gap-3">
                                                    <Label className="text-sm min-w-0">Crafters:</Label>
                                                    <div className="flex items-center gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="h-8 w-8 p-0"
                                                            onClick={() => updateCropSetting(harvest.cropType, {
                                                                crafters: Math.max(1, currentSetting.crafters - 1)
                                                            })}
                                                            disabled={currentSetting.crafters <= 1}
                                                        >
                                                            -
                                                        </Button>
                                                        <Input
                                                            type="number"
                                                            min="1"
                                                            max="30"
                                                            value={currentSetting.crafters}
                                                            onChange={(e) =>
                                                                updateCropSetting(harvest.cropType, {
                                                                    crafters: Math.max(1, Math.min(30, parseInt(e.target.value) || 1))
                                                                })
                                                            }
                                                            className="h-8 w-16 text-center"
                                                        />
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="h-8 w-8 p-0"
                                                            onClick={() => updateCropSetting(harvest.cropType, {
                                                                crafters: Math.min(30, currentSetting.crafters + 1)
                                                            })}
                                                            disabled={currentSetting.crafters >= 30}
                                                        >
                                                            +
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Production Info */}
                                            {currentSetting.isActive && currentSetting.processAs !== 'crop' && crop?.conversionInfo && (
                                                <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">
                                                    {currentSetting.processAs === 'seed' && (
                                                        <p>
                                                            Will produce ~{Math.floor(harvest.totalYield / crop.conversionInfo.cropsPerSeed)} seeds
                                                            ({crop.conversionInfo.seedProcessMinutes} min each)
                                                        </p>
                                                    )}
                                                    {currentSetting.processAs === 'preserve' && (
                                                        <p>
                                                            Will produce ~{Math.floor(harvest.totalYield / crop.conversionInfo.cropsPerPreserve)} preserves
                                                            ({crop.conversionInfo.preserveProcessMinutes} min each)
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TooltipProvider>
    )
} 