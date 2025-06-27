'use client'

import { TrendingUp, Clock, Package, Coins } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import { useOutputData } from '@/hooks/useOutputData'
import { useProcessor } from '@/stores'
import { getCropFromType } from '@/lib/garden-planner'
import { useEffect } from 'react'

export function ProcessorOutputWidget() {
    const { harvestData } = useOutputData()
    const { output, settings, simulateProcessing } = useProcessor()

    // Simulate processing when harvest data or settings change
    useEffect(() => {
        simulateProcessing(harvestData)
    }, [harvestData, settings, simulateProcessing])

    const formatTime = (minutes: number) => {
        if (minutes < 60) return `${Math.round(minutes)}m`
        const hours = Math.floor(minutes / 60)
        const mins = Math.round(minutes % 60)
        return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
    }

    const formatGold = (value: number) => {
        return value.toLocaleString()
    }

    // Calculate total items produced
    const totalItems = {
        crops: Array.from(output.crops.values()).reduce((sum, item) => sum + item.count, 0),
        seeds: Array.from(output.seeds.values()).reduce((sum, item) => sum + item.count, 0),
        preserves: Array.from(output.preserves.values()).reduce((sum, item) => sum + item.count, 0)
    }

    const totalProduced = totalItems.crops + totalItems.seeds + totalItems.preserves

    // Calculate processing efficiency
    const totalProcessingTime = Math.max(
        ...Array.from(output.seeds.values()).map(item => item.minutesProcessedEffective),
        ...Array.from(output.preserves.values()).map(item => item.minutesProcessedEffective),
        0
    )

    const hasProcessingData = output.seedCollectorsCount > 0 || output.preserveJarsCount > 0

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Processor Output
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Summary Stats */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Coins className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">Total Gold</span>
                        </div>
                        <div className="text-2xl font-bold text-yellow-600">
                            {formatGold(output.totalGoldValue)}
                        </div>
                        {hasProcessingData && settings.goldAverageSetting === 'crafterTime' && (
                            <div className="text-xs text-muted-foreground">
                                ~{formatGold(Math.round(output.averageGoldPerHour))}/hour
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">Total Items</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                            {totalProduced.toLocaleString()}
                        </div>
                        {hasProcessingData && (
                            <div className="text-xs text-muted-foreground">
                                {totalItems.crops > 0 && `${totalItems.crops} crops`}
                                {totalItems.seeds > 0 && ` ${totalItems.seeds} seeds`}
                                {totalItems.preserves > 0 && ` ${totalItems.preserves} preserves`}
                            </div>
                        )}
                    </div>

                    {/* Processing Time */}
                    {hasProcessingData && (
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-green-500" />
                                <span className="text-sm font-medium">Processing Time</span>
                            </div>
                            <div className="text-lg font-semibold text-green-600">
                                {formatTime(totalProcessingTime)}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Total time with current crafter allocation
                            </div>
                        </div>
                    )}
                </div>

                {/* Equipment Summary */}
                {hasProcessingData && (
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">Equipment Required</h4>
                        <div className="flex gap-2">
                            {output.seedCollectorsCount > 0 && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <img src={output.seedCollectorImage} alt="Seed Collector" className="w-4 h-4" />
                                    {output.seedCollectorsCount} Seed Collectors
                                </Badge>
                            )}
                            {output.preserveJarsCount > 0 && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <img src={output.preserveJarImage} alt="Preserve Jar" className="w-4 h-4" />
                                    {output.preserveJarsCount} Preserve Jars
                                </Badge>
                            )}
                        </div>
                    </div>
                )}

                {/* Detailed Output */}
                {hasProcessingData && (
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">Processing Details</h4>
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {/* Seeds */}
                            {Array.from(output.seeds.entries()).map(([cropType, info]) => {
                                const crop = getCropFromType(cropType as any)
                                return (
                                    <div key={`seed-${cropType}`} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={crop?.seedImage || '/seeds/placeholder.webp'}
                                                alt={`${cropType} seed`}
                                                className="w-6 h-6 object-contain"
                                            />
                                            <div>
                                                <div className="text-sm font-medium capitalize">{cropType} Seeds</div>
                                                <div className="text-xs text-muted-foreground">
                                                    {info.crafterCount} crafters • {formatTime(info.minutesProcessedEffective)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium">{info.count}</div>
                                            <div className="text-xs text-yellow-600">{formatGold(info.goldValue)} gold</div>
                                        </div>
                                    </div>
                                )
                            })}

                            {/* Preserves */}
                            {Array.from(output.preserves.entries()).map(([cropType, info]) => {
                                const crop = getCropFromType(cropType as any)
                                return (
                                    <div key={`preserve-${cropType}`} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={crop?.preserveImage || '/jars/placeholder.webp'}
                                                alt={`${cropType} preserve`}
                                                className="w-6 h-6 object-contain"
                                            />
                                            <div>
                                                <div className="text-sm font-medium capitalize">{cropType} Preserves</div>
                                                <div className="text-xs text-muted-foreground">
                                                    {info.crafterCount} crafters • {formatTime(info.minutesProcessedEffective)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium">{info.count}</div>
                                            <div className="text-xs text-yellow-600">{formatGold(info.goldValue)} gold</div>
                                        </div>
                                    </div>
                                )
                            })}

                            {/* Unprocessed Crops */}
                            {Array.from(output.crops.entries()).map(([cropType, info]) => {
                                const crop = getCropFromType(cropType as any)
                                return (
                                    <div key={`crop-${cropType}`} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={crop?.image || '/crops/placeholder.webp'}
                                                alt={cropType}
                                                className="w-6 h-6 object-contain"
                                            />
                                            <div>
                                                <div className="text-sm font-medium capitalize">{cropType}</div>
                                                <div className="text-xs text-muted-foreground">Unprocessed</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium">{info.count}</div>
                                            <div className="text-xs text-yellow-600">{formatGold(info.goldValue)} gold</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {!hasProcessingData && (
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">Crop Harvest (No Processing)</h4>
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {harvestData.cropHarvests.map((harvest) => {
                                const crop = getCropFromType(harvest.cropType as any)
                                return (
                                    <div key={`unprocessed-${harvest.cropType}`} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={`/crops/${harvest.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                                alt={harvest.cropType}
                                                className="w-6 h-6 object-contain"
                                            />
                                            <div>
                                                <div className="text-sm font-medium capitalize">{harvest.cropType}</div>
                                                <div className="text-xs text-muted-foreground">Raw crops</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium">{harvest.totalYield}</div>
                                            <div className="text-xs text-yellow-600">{formatGold(harvest.totalValue)} gold</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center py-4 text-muted-foreground border-t">
                            <Package className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p className="text-xs">Configure processor settings to see processing calculations</p>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
} 