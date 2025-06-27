'use client'

import { Coins } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import { useGardenStats } from '@/hooks/useGardenStats'

export function FertiliserStatisticsWidget() {
    const { totalFertilisers, fertiliserCounts } = useGardenStats()

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    Fertilisers ({totalFertilisers})
                </CardTitle>
            </CardHeader>
            <CardContent>
                {totalFertilisers === 0 ? (
                    <p className="text-gray-500 text-center py-4">No fertilisers used</p>
                ) : (
                    <div className="space-y-2">
                        {Object.entries(fertiliserCounts)
                            .sort(([, a], [, b]) => (b || 0) - (a || 0))
                            .map(([fertiliserType, count]) => (
                                <div key={fertiliserType} className="flex items-center justify-between">
                                    <span className="text-sm">{fertiliserType}</span>
                                    <Badge variant="secondary">{count}</Badge>
                                </div>
                            ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
} 