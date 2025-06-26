'use client'

import { useMemo } from 'react'
import { Calculator, Star, DollarSign, Clock, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import { Progress } from '@workspace/ui/components/progress'
import { Separator } from '@workspace/ui/components/separator'
import { useGarden } from '@/stores'
import { cropList, getCropFromType } from '@/lib/garden-planner'

export interface CropHarvestInfo {
    cropType: string
    count: number
    baseYield: number
    totalYield: number
    growthTime: number
    baseValue: number
    totalValue: number
    qualityBonus: number
    harvestBonus: number
}

export function OutputDisplay() {
    const { garden, version } = useGarden()

    const harvestData = useMemo(() => {
        if (!garden) {
            return {
                totalCrops: 0,
                totalValue: 0,
                averageGrowthTime: 0,
                cropHarvests: [],
                totalYield: 0,
                processingRecommendations: []
            }
        }

        const cropCounts: Record<string, number> = {}

        // Count all crops in the garden
        for (let i = 0; i < garden.rows; i++) {
            for (let j = 0; j < garden.columns; j++) {
                const plot = garden.getPlot(i, j)
                if (plot && plot.isActive) {
                    for (let ti = 0; ti < 3; ti++) {
                        for (let tj = 0; tj < 3; tj++) {
                            const tile = plot.getTile(ti, tj)
                            if (tile?.crop) {
                                cropCounts[tile.crop.type] = (cropCounts[tile.crop.type] || 0) + 1
                            }
                        }
                    }
                }
            }
        }

        const cropHarvests: CropHarvestInfo[] = Object.entries(cropCounts).map(([cropType, count]) => {
            const crop = getCropFromType(cropType as any)

            if (!crop) {
                return {
                    cropType,
                    count,
                    baseYield: 1,
                    totalYield: count,
                    growthTime: 60, // Default 1 hour
                    baseValue: 10, // Default value
                    totalValue: count * 10,
                    qualityBonus: 0,
                    harvestBonus: 0
                }
            }

            // Basic calculations (these would be more complex in a real implementation)
            const baseYield = 1 // Most crops yield 1 per plant
            const qualityBonus = 0.1 // 10% quality bonus assumption
            const harvestBonus = 0.05 // 5% harvest bonus assumption
            const effectiveYield = baseYield * (1 + qualityBonus + harvestBonus)
            const totalYield = Math.floor(count * effectiveYield)

            // Estimate crop value (placeholder values)
            const baseValue = getCropBaseValue(cropType)
            const totalValue = totalYield * baseValue

            return {
                cropType,
                count,
                baseYield,
                totalYield,
                growthTime: crop.produceInfo.growthTime || 60,
                baseValue,
                totalValue,
                qualityBonus: qualityBonus * 100,
                harvestBonus: harvestBonus * 100
            }
        }).sort((a, b) => b.totalValue - a.totalValue)

        const totalCrops = Object.values(cropCounts).reduce((sum, count) => sum + count, 0)
        const totalValue = cropHarvests.reduce((sum, harvest) => sum + harvest.totalValue, 0)
        const totalYield = cropHarvests.reduce((sum, harvest) => sum + harvest.totalYield, 0)
        const averageGrowthTime = cropHarvests.length > 0
            ? cropHarvests.reduce((sum, harvest) => sum + (harvest.growthTime * harvest.count), 0) / totalCrops
            : 0

        // Processing recommendations
        const processingRecommendations = generateProcessingRecommendations(cropHarvests)

        return {
            totalCrops,
            totalValue,
            averageGrowthTime,
            cropHarvests,
            totalYield,
            processingRecommendations
        }
    }, [garden, version])

    if (!garden) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calculator className="w-5 h-5" />
                        Harvest Calculator
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-500 text-center py-8">
                        No garden data available
                    </p>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="space-y-4">
            {/* Harvest Summary */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calculator className="w-5 h-5" />
                        Harvest Summary
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <div className="text-gray-500">Total Crops</div>
                            <div className="font-medium">{harvestData.totalCrops}</div>
                        </div>
                        <div>
                            <div className="text-gray-500">Expected Yield</div>
                            <div className="font-medium">{harvestData.totalYield}</div>
                        </div>
                        <div>
                            <div className="text-gray-500">Estimated Value</div>
                            <div className="font-medium text-green-600">{harvestData.totalValue.toLocaleString()}g</div>
                        </div>
                        <div>
                            <div className="text-gray-500">Avg. Growth Time</div>
                            <div className="font-medium">{Math.round(harvestData.averageGrowthTime)}m</div>
                        </div>
                    </div>

                    {harvestData.totalValue > 0 && (
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Profitability</span>
                                <span className={harvestData.totalValue > 1000 ? 'text-green-600' : harvestData.totalValue > 500 ? 'text-yellow-600' : 'text-red-600'}>
                                    {harvestData.totalValue > 1000 ? 'Excellent' : harvestData.totalValue > 500 ? 'Good' : 'Poor'}
                                </span>
                            </div>
                            <Progress
                                value={Math.min(100, (harvestData.totalValue / 1000) * 100)}
                                className="h-2"
                            />
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Crop Breakdown */}
            {harvestData.cropHarvests.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            Crop Breakdown
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {harvestData.cropHarvests.map((harvest) => (
                                <div key={harvest.cropType} className="border rounded-lg p-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-medium">{harvest.cropType}</h4>
                                        <Badge variant="outline">{harvest.count} planted</Badge>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                        <div>Yield: {harvest.totalYield}</div>
                                        <div>Value: {harvest.totalValue.toLocaleString()}g</div>
                                        <div>Growth: {harvest.growthTime}m</div>
                                        <div>Per unit: {harvest.baseValue}g</div>
                                    </div>
                                    {(harvest.qualityBonus > 0 || harvest.harvestBonus > 0) && (
                                        <div className="mt-2 flex gap-2">
                                            {harvest.qualityBonus > 0 && (
                                                <Badge variant="secondary" className="text-xs">
                                                    +{harvest.qualityBonus.toFixed(1)}% Quality
                                                </Badge>
                                            )}
                                            {harvest.harvestBonus > 0 && (
                                                <Badge variant="secondary" className="text-xs">
                                                    +{harvest.harvestBonus.toFixed(1)}% Harvest
                                                </Badge>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Processing Recommendations */}
            {harvestData.processingRecommendations.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Star className="w-5 h-5" />
                            Processing Tips
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {harvestData.processingRecommendations.map((recommendation, index) => (
                                <div key={index} className="flex items-start gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                    <span>{recommendation}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

// Helper functions
function getCropBaseValue(cropType: string): number {
    // Placeholder values - in a real implementation, these would come from game data
    const values: Record<string, number> = {
        'Tomato': 15,
        'Potato': 12,
        'Carrot': 10,
        'Wheat': 8,
        'Cotton': 20,
        'Apple': 25,
        'Orange': 30,
        // Add more crops as needed
    }
    return values[cropType] || 15
}

function generateProcessingRecommendations(harvests: CropHarvestInfo[]): string[] {
    const recommendations: string[] = []

    if (harvests.length === 0) return recommendations

    // Find highest value crops
    const highValueCrops = harvests.filter(h => h.totalValue > 500)
    if (highValueCrops.length > 0 && highValueCrops[0]) {
        recommendations.push(`Focus on ${highValueCrops[0].cropType} - highest value crop in your garden`)
    }

    // Growth time optimization
    const fastGrowingCrops = harvests.filter(h => h.growthTime < 60)
    if (fastGrowingCrops.length > 0 && fastGrowingCrops[0]) {
        recommendations.push(`${fastGrowingCrops[0].cropType} grows quickly - good for frequent harvests`)
    }

    // Diversification
    if (harvests.length === 1) {
        recommendations.push('Consider planting multiple crop types for better risk management')
    }

    // Efficiency
    const totalEfficiency = harvests.reduce((sum, h) => sum + (h.totalValue / h.growthTime), 0)
    if (totalEfficiency < 5) {
        recommendations.push('Consider crops with better gold-per-minute ratios')
    }

    return recommendations
} 