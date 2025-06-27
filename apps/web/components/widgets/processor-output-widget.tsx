'use client'

import { Package, Clock, Star, Coins } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import { Separator } from '@workspace/ui/components/separator'
import { useProcessor } from '@/stores'
import { useProcessorSimulation } from '@/hooks/useProcessorSimulation'

interface ProcessOutputDisplayProps {
    title: string
    icon: React.ReactNode
    items: Map<string, any>
    crafterImage?: string
    crafterCount?: number
}

function ProcessOutputDisplay({ title, icon, items, crafterImage, crafterCount }: ProcessOutputDisplayProps) {
    if (items.size === 0) return null

    // Sort items by star status (star items first) then by crop type
    const sortedItems = Array.from(items.entries()).sort(([aKey, aValue], [bKey, bValue]) => {
        // Star items first
        if (aValue.isStar && !bValue.isStar) return -1
        if (!aValue.isStar && bValue.isStar) return 1

        // Then sort by crop type
        return aValue.cropType.localeCompare(bValue.cropType)
    })

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {icon}
                    <h3 className="font-medium">{title}</h3>
                    <Badge variant="secondary" className="text-xs">
                        {items.size} types
                    </Badge>
                </div>
                {crafterCount && crafterCount > 0 && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {crafterImage && (
                            <img
                                src={crafterImage}
                                alt="Crafter"
                                className="w-5 h-5 object-contain"
                            />
                        )}
                        <span>{crafterCount} crafters</span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sortedItems.map(([itemId, info]) => (
                    <div key={itemId} className={`border rounded-lg p-3 space-y-2 ${info.isStar ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' : 'bg-gray-50 dark:bg-gray-900/20'
                        }`}>
                        <div className="flex items-center gap-2">
                            <img
                                src={info.itemType === 'preserve'
                                    ? `/jars/${info.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`
                                    : `/${info.itemType}s/${info.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`
                                }
                                alt={`${info.cropType} ${info.itemType}`}
                                className="w-8 h-8 object-contain"
                            />
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1">
                                    {info.isStar && <Star className="w-3 h-3 text-yellow-500 fill-current" />}
                                    <span className="text-sm font-medium capitalize truncate">
                                        {info.cropType} {info.itemType}
                                    </span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {info.count} items
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1 text-xs">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Gold Value:</span>
                                <div className="flex items-center gap-1">
                                    <Coins className="w-3 h-3 text-yellow-500" />
                                    <span className="font-medium">{Math.round(info.goldValue).toLocaleString()}</span>
                                </div>
                            </div>

                            {info.minutesProcessedTotal > 0 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Process Time:</span>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{Math.round(info.minutesProcessedEffective)}m</span>
                                        </div>
                                    </div>
                                    {info.crafterCount > 0 && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Crafters:</span>
                                            <span>{info.crafterCount}</span>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function ProcessorOutputWidget() {
    const { output, settings } = useProcessor()

    // Automatically trigger processor simulation when data changes
    useProcessorSimulation()

    const hasAnyOutput = output.crops.size > 0 || output.seeds.size > 0 || output.preserves.size > 0

    if (!hasAnyOutput) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5" />
                        Processor Output
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        No processing output available. Configure processor settings to see results.
                    </p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Processor Output
                </CardTitle>

                {/* Summary Stats */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Coins className="w-4 h-4 text-yellow-500" />
                        <span>Total: {Math.round(output.totalGoldValue).toLocaleString()} gold</span>
                    </div>
                    {output.averageGoldPerHour > 0 && (
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{Math.round(output.averageGoldPerHour).toLocaleString()} gold/{settings.goldAverageSetting === 'crafterTime' ? 'hour' : 'day'}</span>
                        </div>
                    )}
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* Raw Crops */}
                <ProcessOutputDisplay
                    title="Raw Crops"
                    icon={<Package className="w-4 h-4 text-green-600" />}
                    items={output.crops}
                />

                {output.crops.size > 0 && (output.seeds.size > 0 || output.preserves.size > 0) && (
                    <Separator />
                )}

                {/* Seeds */}
                <ProcessOutputDisplay
                    title="Seeds"
                    icon={<img src="/crafters/seeder.webp" alt="Seed Collector" className="w-4 h-4" />}
                    items={output.seeds}
                    crafterImage={output.seedCollectorImage}
                    crafterCount={output.seedCollectorsCount}
                />

                {output.seeds.size > 0 && output.preserves.size > 0 && (
                    <Separator />
                )}

                {/* Preserves */}
                <ProcessOutputDisplay
                    title="Preserves"
                    icon={<img src="/crafters/preserve-jar.webp" alt="Preserve Jar" className="w-4 h-4" />}
                    items={output.preserves}
                    crafterImage={output.preserveJarImage}
                    crafterCount={output.preserveJarsCount}
                />
            </CardContent>
        </Card>
    )
} 