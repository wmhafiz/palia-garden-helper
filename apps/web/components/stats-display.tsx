'use client'

import { useMemo } from 'react'
import { BarChart3, TrendingUp, Coins, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Progress } from '@workspace/ui/components/progress'
import { Badge } from '@workspace/ui/components/badge'
import { Separator } from '@workspace/ui/components/separator'
import { useGarden } from '@/stores'
import { CropType, FertiliserType } from '@/lib/garden-planner'
import { OutputDisplay } from './output-display'
import { ScrollArea } from '@workspace/ui/components/scroll-area'

export function StatsDisplay() {
    const { garden, version } = useGarden()

    const stats = useMemo(() => {
        if (!garden) {
            return {
                totalPlots: 0,
                activePlots: 0,
                totalTiles: 0,
                occupiedTiles: 0,
                cropCounts: {},
                fertiliserCounts: {},
                totalCrops: 0,
                totalFertilisers: 0,
                plotUtilization: 0,
                tileUtilization: 0
            }
        }

        const cropCounts: Record<CropType, number> = {} as Record<CropType, number>
        const fertiliserCounts: Record<FertiliserType, number> = {} as Record<FertiliserType, number>
        let totalCrops = 0
        let totalFertilisers = 0
        let occupiedTiles = 0

        // Count crops and fertilisers
        for (let i = 0; i < garden.rows; i++) {
            for (let j = 0; j < garden.columns; j++) {
                const plot = garden.getPlot(i, j)
                if (plot && plot.isActive) {
                    for (let ti = 0; ti < 3; ti++) {
                        for (let tj = 0; tj < 3; tj++) {
                            const tile = plot.getTile(ti, tj)
                            if (tile) {
                                let tileHasContent = false

                                if (tile.crop) {
                                    cropCounts[tile.crop.type] = (cropCounts[tile.crop.type] || 0) + 1
                                    totalCrops++
                                    tileHasContent = true
                                }

                                if (tile.fertiliser) {
                                    fertiliserCounts[tile.fertiliser.type] = (fertiliserCounts[tile.fertiliser.type] || 0) + 1
                                    totalFertilisers++
                                    tileHasContent = true
                                }

                                if (tileHasContent) {
                                    occupiedTiles++
                                }
                            }
                        }
                    }
                }
            }
        }

        const totalPlots = garden.rows * garden.columns
        const activePlots = garden.activePlotCount
        const totalTiles = activePlots * 9
        const plotUtilization = totalPlots > 0 ? (activePlots / totalPlots) * 100 : 0
        const tileUtilization = totalTiles > 0 ? (occupiedTiles / totalTiles) * 100 : 0

        return {
            totalPlots,
            activePlots,
            totalTiles,
            occupiedTiles,
            cropCounts,
            fertiliserCounts,
            totalCrops,
            totalFertilisers,
            plotUtilization,
            tileUtilization
        }
    }, [garden, version])

    if (!garden) {
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
        <ScrollArea className="h-[calc(100vh-10rem)] pr-8">
            <div className="space-y-4">
                {/* Overall Stats */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" />
                            Garden Overview
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <div className="text-gray-500">Garden Size</div>
                                <div className="font-medium">{garden.rows} × {garden.columns}</div>
                            </div>
                            <div>
                                <div className="text-gray-500">Total Plots</div>
                                <div className="font-medium">{stats.totalPlots}</div>
                            </div>
                            <div>
                                <div className="text-gray-500">Active Plots</div>
                                <div className="font-medium">{stats.activePlots}</div>
                            </div>
                            <div>
                                <div className="text-gray-500">Available Tiles</div>
                                <div className="font-medium">{stats.totalTiles}</div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Plot Utilization</span>
                                <span>{stats.plotUtilization.toFixed(1)}%</span>
                            </div>
                            <Progress value={stats.plotUtilization} className="h-2" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Tile Utilization</span>
                                <span>{stats.tileUtilization.toFixed(1)}%</span>
                            </div>
                            <Progress value={stats.tileUtilization} className="h-2" />
                        </div>
                    </CardContent>
                </Card>

                {/* Crop Statistics */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            Crops ({stats.totalCrops})
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {stats.totalCrops === 0 ? (
                            <p className="text-gray-500 text-center py-4">No crops planted</p>
                        ) : (
                            <div className="space-y-2">
                                {Object.entries(stats.cropCounts)
                                    .sort(([, a], [, b]) => b - a)
                                    .map(([cropType, count]) => (
                                        <div key={cropType} className="flex items-center justify-between">
                                            <span className="text-sm">{cropType}</span>
                                            <Badge variant="secondary">{count}</Badge>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Fertiliser Statistics */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Coins className="w-5 h-5" />
                            Fertilisers ({stats.totalFertilisers})
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {stats.totalFertilisers === 0 ? (
                            <p className="text-gray-500 text-center py-4">No fertilisers used</p>
                        ) : (
                            <div className="space-y-2">
                                {Object.entries(stats.fertiliserCounts)
                                    .sort(([, a], [, b]) => b - a)
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

                {/* Quick Actions */}
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
                            <span>{stats.totalTiles - stats.occupiedTiles}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span>Efficiency</span>
                            <span className={stats.tileUtilization > 80 ? 'text-green-600' : stats.tileUtilization > 50 ? 'text-yellow-600' : 'text-red-600'}>
                                {stats.tileUtilization > 80 ? 'Excellent' : stats.tileUtilization > 50 ? 'Good' : 'Needs Work'}
                            </span>
                        </div>
                    </CardContent>
                </Card>

                {/* Output Display - Harvest Calculations */}
                <OutputDisplay />
            </div>
        </ScrollArea>
    )
} 