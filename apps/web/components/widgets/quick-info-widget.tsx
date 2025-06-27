'use client'

import { Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Separator } from '@workspace/ui/components/separator'
import { useGardenStats } from '@/hooks/useGardenStats'

export function QuickInfoWidget() {
    const { totalTiles, occupiedTiles, tileUtilization } = useGardenStats()

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Quick Info
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span>Empty Tiles</span>
                    <span>{totalTiles - occupiedTiles}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                    <span>Efficiency</span>
                    <span className={tileUtilization > 80 ? 'text-green-600' : tileUtilization > 50 ? 'text-yellow-600' : 'text-red-600'}>
                        {tileUtilization > 80 ? 'Excellent' : tileUtilization > 50 ? 'Good' : 'Needs Work'}
                    </span>
                </div>
            </CardContent>
        </Card>
    )
} 