'use client'

import { Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { useOutputData } from '@/hooks/useOutputData'

export function ProcessingTipsWidget() {
    const { harvestData } = useOutputData()

    if (harvestData.processingRecommendations.length === 0) {
        return null
    }

    return (
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
    )
} 