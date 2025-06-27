'use client'

import { BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { useGardenStats } from '@/hooks/useGardenStats'
import { BonusCoverageWidget } from './bonus-coverage-widget'
import { CropStatisticsWidget } from './crop-statistics-widget'
import { FertiliserStatisticsWidget } from './fertiliser-statistics-widget'
import { QuickInfoWidget } from './quick-info-widget'
import { FertilizerTipsWidget } from './fertilizer-tips-widget'
import { HarvestSummaryWidget } from './harvest-summary-widget'
import { CropBreakdownWidget } from './crop-breakdown-widget'
import { ProcessingTipsWidget } from './processing-tips-widget'
import { HarvestScheduleWidget } from './harvest-schedule-widget'

export function StatsDisplay() {
    const stats = useGardenStats()

    // If no garden data, show empty state
    if (stats.totalPlots === 0) {
        return (
            <div className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" />
                            Garden Statistics
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500 text-center py-8">
                            No garden data available
                        </p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-row gap-4">
                {/* Bonus Coverage Statistics */}
                <BonusCoverageWidget />
                <div className="flex-1">
                    {/* Harvest Summary */}
                    <HarvestSummaryWidget />

                </div>
            </div>

            <div className="flex flex-row gap-4">
                <div className="flex-1">
                    {/* Harvest Summary */}
                    <FertilizerTipsWidget />
                </div>

                {/* Bonus Coverage Statistics */}
                <ProcessingTipsWidget />
            </div>

            <div className="flex flex-row gap-4">
                <div className="flex-1">
                    {/* Crop Breakdown */}
                    <CropBreakdownWidget />
                </div>

                {/* Harvest Schedule */}
                <HarvestScheduleWidget />
            </div>

            {/* Crop Statistics */}
            <CropStatisticsWidget />

            {/* Fertiliser Statistics */}
            <FertiliserStatisticsWidget />

            {/* Quick Info */}
            <QuickInfoWidget />
        </div>
    )
} 