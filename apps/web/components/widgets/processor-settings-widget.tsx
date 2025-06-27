'use client'

import { Settings, Wrench, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Input } from '@workspace/ui/components/input'
import { Label } from '@workspace/ui/components/label'
import { Badge } from '@workspace/ui/components/badge'
import { Button } from '@workspace/ui/components/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@workspace/ui/components/tooltip'
import { useOutputData } from '@/hooks/useOutputData'
import { useProcessor } from '@/stores'
import { getCropFromType } from '@/lib/garden-planner'
import { useProcessorSimulation } from '@/hooks/useProcessorSimulation'
import { ScrollArea } from '@workspace/ui/components/scroll-area'

export function ProcessorSettingsWidget() {
    const { harvestData } = useOutputData()
    const { settings, harvesterOptions, updateCropSetting, updateSettings, updateHarvesterOptions } = useProcessor()

    // Automatically trigger processor simulation when data changes
    useProcessorSimulation()

    // Get crops that have harvest data
    const availableCrops = harvestData.cropHarvests.filter(harvest => harvest.totalYield > 0)

    // Calculate star base chance based on gardening level
    const starBaseChance = 0.25 + (harvesterOptions.useStarSeeds ? 0.25 : 0) + (harvesterOptions.level * 0.02)
    const finalStarChance = Math.min(1, starBaseChance)

    // Helper function to render crop processing options
    const renderCropProcessingOptions = (cropId: string, cropType: string, cropYield: number, isStar: boolean, canMakeSeeds: boolean, canMakePreserves: boolean, crop: any) => {
        const currentSetting = settings.cropSettings.get(cropId) || {
            cropType,
            isStar,
            processAs: 'crop' as const,
            crafters: 1,
            targetTime: 0,
            isActive: true,
            hasPreserve: canMakePreserves,
            count: cropYield
        }

        return (
            <div className="space-y-3">
                {/* Process As Visual Buttons */}
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
                                    onClick={() => updateCropSetting(cropId, { processAs: 'crop' })}
                                >
                                    <img
                                        src={`/crops/${cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                        alt={`${cropType} crop`}
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
                                        onClick={() => updateCropSetting(cropId, { processAs: 'seed' })}
                                        disabled={harvesterOptions.level < 5}
                                    >
                                        <img
                                            src={`/seeds/${cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                            alt={`${cropType} seed`}
                                            className="w-6 h-6 object-contain"
                                        />
                                        <span className="text-xs">Seed</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Process into seeds</p>
                                    {harvesterOptions.level < 5 && <p className="text-xs text-red-400">Requires level 5+</p>}
                                    {crop?.conversionInfo && (
                                        <p className="text-xs opacity-75">
                                            {crop.conversionInfo.cropsPerSeed} crops → 1 seed
                                        </p>
                                    )}
                                </TooltipContent>
                            </Tooltip>
                        )}

                        {/* Preserve Button */}
                        {canMakePreserves && (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant={currentSetting.processAs === 'preserve' ? 'default' : 'outline'}
                                        size="sm"
                                        className="flex items-center gap-2 h-auto p-3"
                                        onClick={() => updateCropSetting(cropId, { processAs: 'preserve' })}
                                        disabled={harvesterOptions.level < 8}
                                    >
                                        <img
                                            src={`/jars/${cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                            alt={`${cropType} preserve`}
                                            className="w-6 h-6 object-contain"
                                        />
                                        <span className="text-xs">Preserve</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Process into preserves</p>
                                    {harvesterOptions.level < 8 && <p className="text-xs text-red-400">Requires level 8+</p>}
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
                                onClick={() => updateCropSetting(cropId, {
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
                                    updateCropSetting(cropId, {
                                        crafters: Math.max(1, Math.min(30, parseInt(e.target.value) || 1))
                                    })
                                }
                                className="h-8 w-16 text-center"
                            />
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => updateCropSetting(cropId, {
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
                                Will produce ~{Math.floor(cropYield / crop.conversionInfo.cropsPerSeed)} seeds
                                ({crop.conversionInfo.seedProcessMinutes} min each)
                            </p>
                        )}
                        {currentSetting.processAs === 'preserve' && (
                            <p>
                                Will produce ~{Math.floor(cropYield / crop.conversionInfo.cropsPerPreserve)} preserves
                                ({crop.conversionInfo.preserveProcessMinutes} min each)
                            </p>
                        )}
                    </div>
                )}
            </div>
        )
    }

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

    return (
        <TooltipProvider>
            {/* Crop Processing Settings */}
            <div className="space-y-3">
                <ScrollArea className="space-y-4 max-h-160 overflow-y-auto">
                    {availableCrops.map((harvest) => {
                        const crop = getCropFromType(harvest.cropType as any)

                        // Calculate star and base yields
                        const starYield = Math.round(harvest.totalYield * finalStarChance)
                        const baseYield = harvest.totalYield - starYield

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
                                            {harvest.totalYield} total ({starYield} ⭐ + {baseYield} base)
                                        </p>
                                    </div>
                                </div>

                                {/* Star Crop Settings */}
                                {starYield > 0 && (
                                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <span className="text-sm font-medium">Star {harvest.cropType} ({starYield})</span>
                                        </div>
                                        {renderCropProcessingOptions(`${harvest.cropType}-star`, harvest.cropType, starYield, true, !!canMakeSeeds, !!canMakePreserves, crop)}
                                    </div>
                                )}

                                {/* Base Crop Settings */}
                                {baseYield > 0 && (
                                    <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-medium">Base {harvest.cropType} ({baseYield})</span>
                                        </div>
                                        {renderCropProcessingOptions(`${harvest.cropType}-base`, harvest.cropType, baseYield, false, !!canMakeSeeds, !!canMakePreserves, crop)}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </ScrollArea>
            </div>
        </TooltipProvider>
    )
} 