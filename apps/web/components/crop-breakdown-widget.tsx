'use client'

import { TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import { useOutputData } from '@/hooks/useOutputData'

export function CropBreakdownWidget() {
    const { harvestData } = useOutputData()

    if (harvestData.cropHarvests.length === 0) {
        return null
    }

    return (
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
                                <Badge variant="outline">{harvest.count}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
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
    )
} 