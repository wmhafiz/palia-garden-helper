'use client'

import { Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import { useGarden } from '@/stores'
import { getCropFromType } from '@/lib/garden-planner'
import { useMemo } from 'react'

interface CropHarvest {
    cropType: string
    count: number
    isStar?: boolean
    image?: string
}

interface DayHarvest {
    day: number
    crops: CropHarvest[]
}

export function HarvestScheduleWidget() {
    const { garden } = useGarden()

    const harvestSchedule = useMemo((): DayHarvest[] => {
        if (!garden) {
            return []
        }

        // Collect all crops and their growth times
        const cropsByGrowthTime: Record<number, Array<{ cropType: string; count: number; image?: string }>> = {}

        for (let i = 0; i < garden.rows; i++) {
            for (let j = 0; j < garden.columns; j++) {
                const plot = garden.getPlot(i, j)
                if (plot && plot.isActive) {
                    for (let ti = 0; ti < 3; ti++) {
                        for (let tj = 0; tj < 3; tj++) {
                            const tile = plot.getTile(ti, tj)
                            if (tile?.crop) {
                                const crop = getCropFromType(tile.crop.type as any)
                                if (crop) {
                                    const growthTime = crop.produceInfo.growthTime

                                    if (!cropsByGrowthTime[growthTime]) {
                                        cropsByGrowthTime[growthTime] = []
                                    }

                                    // Find existing crop entry or create new one
                                    const existingCrop = cropsByGrowthTime[growthTime].find(
                                        c => c.cropType === tile.crop!.type
                                    )

                                    if (existingCrop) {
                                        existingCrop.count++
                                    } else {
                                        cropsByGrowthTime[growthTime].push({
                                            cropType: tile.crop.type,
                                            count: 1,
                                            image: crop.cropImage
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        // Convert to day harvest format and sort by day
        return Object.entries(cropsByGrowthTime)
            .map(([day, crops]) => ({
                day: parseInt(day),
                crops: crops.map(crop => ({
                    cropType: crop.cropType,
                    count: crop.count,
                    image: crop.image,
                    isStar: false // For now, we'll assume base crops
                }))
            }))
            .sort((a, b) => a.day - b.day)
            .slice(0, 8) // Limit to first 8 harvest days for display

    }, [garden])

    if (harvestSchedule.length === 0) {
        return null
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Harvest Schedule
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {harvestSchedule.map((dayHarvest: DayHarvest) => (
                        <div key={dayHarvest.day} className="border rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-3">
                                <Badge variant="outline" className="font-medium">
                                    Day {dayHarvest.day}
                                </Badge>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {dayHarvest.crops.map((crop: CropHarvest, index: number) => (
                                    <div key={`${crop.cropType}-${index}`} className="flex flex-col items-center">
                                        <div className="relative">
                                            {crop.image ? (
                                                <img
                                                    src={crop.image}
                                                    alt={crop.cropType}
                                                    className="w-12 h-12 rounded border bg-gray-50"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded border bg-gray-100 flex items-center justify-center text-xs font-medium">
                                                    {crop.cropType.slice(0, 2).toUpperCase()}
                                                </div>
                                            )}

                                            {crop.isStar && (
                                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                                                    <span className="text-xs text-white">★</span>
                                                </div>
                                            )}

                                            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                                                {crop.count}
                                            </div>
                                        </div>

                                        <span className="text-xs text-center mt-1 text-muted-foreground max-w-16 truncate">
                                            {crop.cropType}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
} 