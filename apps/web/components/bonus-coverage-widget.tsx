'use client'

import { Star, Zap, Wheat, Droplets, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Bonus } from '@/lib/garden-planner'
import { useGardenStats } from '@/hooks/useGardenStats'
import { RadialChart } from './radial-chart'

export function BonusCoverageWidget() {
    const { totalCrops, bonusCoverage } = useGardenStats()

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Bonus Coverage
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
                    <RadialChart
                        totalCrops={totalCrops}
                        covered={bonusCoverage[Bonus.SpeedIncrease] || 0}
                        className="text-green-600"
                        icon={<Zap className="w-4 h-4" />}
                        title="Growth Boost"
                    />
                    <RadialChart
                        totalCrops={totalCrops}
                        covered={bonusCoverage[Bonus.HarvestIncrease] || 0}
                        className="text-yellow-600"
                        icon={<Wheat className="w-4 h-4" />}
                        title="Harvest Boost"
                    />
                    <RadialChart
                        totalCrops={totalCrops}
                        covered={bonusCoverage[Bonus.QualityIncrease] || 0}
                        className="text-purple-600"
                        icon={<Star className="w-4 h-4" />}
                        title="Quality Increase"
                    />
                    <RadialChart
                        totalCrops={totalCrops}
                        covered={bonusCoverage[Bonus.WaterRetain] || 0}
                        className="text-blue-600"
                        icon={<Droplets className="w-4 h-4" />}
                        title="Water Retain"
                    />
                    <RadialChart
                        totalCrops={totalCrops}
                        covered={bonusCoverage[Bonus.WeedPrevention] || 0}
                        className="text-orange-600"
                        icon={<Shield className="w-4 h-4" />}
                        title="Weed Prevention"
                    />
                </div>
            </CardContent>
        </Card>
    )
} 