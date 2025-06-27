'use client'

import { Calculator } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Progress } from '@workspace/ui/components/progress'
import { useOutputData } from '@/hooks/useOutputData'

export function HarvestSummaryWidget() {
    const { harvestData } = useOutputData()

    return (
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
                        <div className="text-muted-foreground">Total Crops</div>
                        <div className="font-medium">{harvestData.totalCrops}</div>
                    </div>
                    <div>
                        <div className="text-muted-foreground">Expected Yield</div>
                        <div className="font-medium">{harvestData.totalYield}</div>
                    </div>
                    <div>
                        <div className="text-muted-foreground">Estimated Value</div>
                        <div className="font-medium text-green-600">{harvestData.totalValue.toLocaleString()}g</div>
                    </div>
                    <div>
                        <div className="text-muted-foreground">Avg. Growth Time</div>
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
    )
} 