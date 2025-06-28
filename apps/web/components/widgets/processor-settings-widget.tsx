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
            <div className="flex items-center gap-2 ml-auto">
                {/* Process As Compact Buttons */}
                <div className="flex gap-1">
                    {/* Crop Button */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant={currentSetting.processAs === 'crop' ? 'default' : 'outline'}
                                size="sm"
                                className="h-7 w-7 p-0"
                                onClick={() => updateCropSetting(cropId, { processAs: 'crop' })}
                            >
                                <img
                                    src={`/crops/${cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                    alt={`${cropType} crop`}
                                    className="w-4 h-4 object-contain"
                                />
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
                                    className="h-7 w-7 p-0"
                                    onClick={() => updateCropSetting(cropId, { processAs: 'seed' })}
                                    disabled={harvesterOptions.level < 5}
                                >
                                    <img
                                        src={`/seeds/${cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                        alt={`${cropType} seed`}
                                        className="w-4 h-4 object-contain"
                                    />
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
                                    className="h-7 w-7 p-0"
                                    onClick={() => updateCropSetting(cropId, { processAs: 'preserve' })}
                                    disabled={harvesterOptions.level < 8}
                                >
                                    <img
                                        src={`/jars/${cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                        alt={`${cropType} preserve`}
                                        className="w-4 h-4 object-contain"
                                    />
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

                {/* Crafters Input - Only show when not processing as crop */}
                {currentSetting.processAs !== 'crop' && (
                    <div className="flex items-center gap-1">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-6 w-6 p-0 text-xs"
                            onClick={() => updateCropSetting(cropId, {
                                crafters: Math.max(1, currentSetting.crafters - 1)
                            })}
                            disabled={currentSetting.crafters <= 1}
                        >
                            -
                        </Button>
                        <span className="text-xs min-w-0 text-center w-6">{currentSetting.crafters}</span>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-6 w-6 p-0 text-xs"
                            onClick={() => updateCropSetting(cropId, {
                                crafters: Math.min(30, currentSetting.crafters + 1)
                            })}
                            disabled={currentSetting.crafters >= 30}
                        >
                            +
                        </Button>
                    </div>
                )}

                {/* Production Info as Tooltip */}
                {currentSetting.isActive && currentSetting.processAs !== 'crop' && crop?.conversionInfo && (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="text-xs text-muted-foreground cursor-help">
                                {currentSetting.processAs === 'seed' && (
                                    <span>~{Math.floor(cropYield / crop.conversionInfo.cropsPerSeed)} seeds ({crop.conversionInfo.seedProcessMinutes} min each)</span>
                                )}
                                {currentSetting.processAs === 'preserve' && (
                                    <span>~{Math.floor(cropYield / crop.conversionInfo.cropsPerPreserve)} preserves ({crop.conversionInfo.preserveProcessMinutes} min each)</span>
                                )}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Production estimate with {currentSetting.crafters} crafter{currentSetting.crafters > 1 ? 's' : ''}</p>
                        </TooltipContent>
                    </Tooltip>
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
            <Card>
                <CardContent>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Settings className="w-5 h-5" />
                            Processor Settings
                        </CardTitle>
                    </CardHeader>
                    <div className="space-y-3 p-4">
                        <ScrollArea className="space-y-4 max-h-160 overflow-y-auto">
                            {availableCrops.map((harvest) => {
                                const crop = getCropFromType(harvest.cropType as any)

                                // Calculate star and base yields
                                const starYield = Math.round(harvest.totalYield * finalStarChance)
                                const baseYield = harvest.totalYield - starYield

                                const canMakeSeeds = crop?.conversionInfo?.seedProcessMinutes && crop.conversionInfo.seedProcessMinutes > 0
                                const canMakePreserves = crop?.conversionInfo?.preserveProcessMinutes && crop.conversionInfo.preserveProcessMinutes > 0 && crop.conversionInfo.cropsPerPreserve > 0

                                return (
                                    <div key={harvest.cropType} className="space-y-2">
                                        {/* Crop Header */}
                                        <div className="flex items-center gap-2 pb-1 border-b">
                                            <img
                                                src={`/crops/${harvest.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                                alt={harvest.cropType}
                                                className="w-6 h-6 object-contain"
                                            />
                                            <h4 className="font-medium text-sm capitalize">{harvest.cropType}</h4>
                                            <span className="text-xs text-muted-foreground ml-auto">
                                                {harvest.totalYield} total ({starYield} ⭐ + {baseYield} base)
                                            </span>
                                        </div>

                                        {/* Star Crop Settings */}
                                        {starYield > 0 && (
                                            <div className="flex items-center gap-2 py-1">
                                                <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                                <span className="text-xs font-medium min-w-0 flex-shrink-0">Star {harvest.cropType} ({starYield})</span>
                                                {renderCropProcessingOptions(`${harvest.cropType}-star`, harvest.cropType, starYield, true, !!canMakeSeeds, !!canMakePreserves, crop)}
                                            </div>
                                        )}

                                        {/* Base Crop Settings */}
                                        {baseYield > 0 && (
                                            <div className="flex items-center gap-2 py-1">
                                                <div className="w-3 h-3 flex-shrink-0" /> {/* Spacer to align with star */}
                                                <span className="text-xs font-medium min-w-0 flex-shrink-0">Base {harvest.cropType} ({baseYield})</span>
                                                {renderCropProcessingOptions(`${harvest.cropType}-base`, harvest.cropType, baseYield, false, !!canMakeSeeds, !!canMakePreserves, crop)}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </ScrollArea>
                    </div>
                </CardContent>
            </Card>
        </TooltipProvider>
    )
} 