'use client'

import { useState } from 'react'
import { TrendingUp, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import { CropType, getCropFromType } from '@/lib/garden-planner'
import { useGardenStats } from '@/hooks/useGardenStats'
import { ScrollArea } from '@workspace/ui/components/scroll-area'

export function CropStatisticsWidget() {
    const { totalCrops, cropCounts } = useGardenStats()
    const [starredCrops, setStarredCrops] = useState<Set<CropType>>(new Set())

    const toggleStarred = (cropType: CropType) => {
        setStarredCrops(prev => {
            const newSet = new Set(prev)
            if (newSet.has(cropType)) {
                newSet.delete(cropType)
            } else {
                newSet.add(cropType)
            }
            return newSet
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Gold Value by Crop and Processing Settings
                </CardTitle>
            </CardHeader>
            <CardContent>
                {totalCrops === 0 ? (
                    <p className="text-gray-500 text-center py-4">No crops planted</p>
                ) : (
                    <ScrollArea className="space-y-2 h-[500px]">
                        {Object.entries(cropCounts)
                            .sort(([, a], [, b]) => (b || 0) - (a || 0))
                            .map(([cropType, count]) => {
                                const starred = starredCrops.has(cropType as CropType)
                                const crop = getCropFromType(cropType as any)
                                const cropValue = crop?.calculateGoldValue(count, 'crop', starred) || 0

                                // Handle preserve conversion - only for crops that have preserves
                                const hasPreserve = crop?.goldValues?.hasPreserve && (crop?.conversionInfo?.cropsPerPreserve || 0) > 0
                                const preserve = hasPreserve ? crop?.convertCropToPreserve(count) : null
                                const preserveValue = preserve ? (crop?.calculateGoldValue(preserve.count, 'preserve', starred) || 0) : 0
                                const preserveCount = preserve?.count || 0
                                const preserveRemainder = preserve?.remainder || 0

                                // Handle seed conversion - only for crops that have seed conversion
                                const canMakeSeed = (crop?.conversionInfo?.cropsPerSeed || 0) > 0 && (crop?.conversionInfo?.seedsPerConversion || 0) > 0
                                const seed = canMakeSeed ? crop?.convertCropToSeed(count) : null
                                const seedValue = seed ? (crop?.calculateGoldValue(seed.count, 'seed', starred) || 0) : 0
                                const seedCount = seed?.count || 0
                                const seedRemainder = seed?.remainder || 0

                                return (
                                    <div key={cropType} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                                        <div className="flex items-center gap-2 min-w-0 flex-1">
                                            <button
                                                onClick={() => toggleStarred(cropType as CropType)}
                                                className="p-1 hover:bg-gray-200 rounded transition-colors"
                                                title={starred ? "Remove from starred" : "Add to starred"}
                                            >
                                                <Star
                                                    className={`w-4 h-4 ${starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}
                                                />
                                            </button>
                                            <span className="text-sm font-medium">{cropType}</span>
                                            <Badge variant="secondary">{count}</Badge>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 min-w-0">
                                            <div className="flex items-center gap-1 min-w-[60px] justify-start sm:justify-end">
                                                <img src={crop?.cropImage} alt={cropType} className="w-4 h-4 flex-shrink-0" title='Crop' />
                                                <span className="text-sm tabular-nums">{cropValue?.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center gap-1 min-w-[60px] justify-start sm:justify-end">
                                                {hasPreserve && preserveValue > 0 && (
                                                    <>
                                                        <img src={crop?.preserveImage} alt="preserve" className="w-4 h-4 flex-shrink-0" title={`Preserve`} />
                                                        <span className="text-sm tabular-nums">{preserveValue.toLocaleString()}</span>
                                                        <Badge variant="secondary" className="ml-1">{preserveCount}
                                                            {preserveRemainder > 0 && (
                                                                <span className="text-sm tabular-nums">(+{preserveRemainder})</span>
                                                            )}
                                                        </Badge>
                                                    </>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1 min-w-[60px] justify-start sm:justify-end">
                                                {canMakeSeed && seedValue > 0 && (
                                                    <>
                                                        <img src={crop?.seedImage} alt="seed" className="w-4 h-4 flex-shrink-0" title={`Seed`} />
                                                        <span className="text-sm tabular-nums">{seedValue.toLocaleString()}</span>
                                                        <Badge variant="secondary" className="ml-1">{seedCount}
                                                            {seedRemainder > 0 && (
                                                                <span className="text-sm tabular-nums">(+{seedRemainder})</span>
                                                            )}
                                                        </Badge>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </ScrollArea>
                )}
            </CardContent>
        </Card>
    )
} 