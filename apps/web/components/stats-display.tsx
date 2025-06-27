'use client'

import { useMemo, useState } from 'react'
import { BarChart3, TrendingUp, Coins, Clock, Zap, Wheat, Star, Droplets, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Progress } from '@workspace/ui/components/progress'
import { Badge } from '@workspace/ui/components/badge'
import { Separator } from '@workspace/ui/components/separator'
import { useGarden } from '@/stores'
import { CropType, FertiliserType, Bonus, getCropFromType } from '@/lib/garden-planner'
import { OutputDisplay } from './output-display'
import { RadialChart } from './radial-chart'

export function StatsDisplay() {
    const { garden, version } = useGarden()
    const [starredCrops, setStarredCrops] = useState<Set<CropType>>(new Set())

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
                tileUtilization: 0,
                bonusCoverage: {
                    [Bonus.SpeedIncrease]: 0,
                    [Bonus.HarvestIncrease]: 0,
                    [Bonus.QualityIncrease]: 0,
                    [Bonus.WaterRetain]: 0,
                    [Bonus.WeedPrevention]: 0,
                }
            }
        }

        // Calculate bonuses first
        garden.calculateBonuses()

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
        const bonusCoverage = garden.getBonusCoverage()

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
            tileUtilization,
            bonusCoverage
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
        <div className="space-y-4">
            {/* Bonus Coverage Statistics */}
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
                            totalCrops={stats.totalCrops}
                            covered={stats.bonusCoverage[Bonus.SpeedIncrease]}
                            className="text-green-600"
                            icon={<Zap className="w-4 h-4" />}
                            title="Growth Boost"
                        />
                        <RadialChart
                            totalCrops={stats.totalCrops}
                            covered={stats.bonusCoverage[Bonus.HarvestIncrease]}
                            className="text-yellow-600"
                            icon={<Wheat className="w-4 h-4" />}
                            title="Harvest Boost"
                        />
                        <RadialChart
                            totalCrops={stats.totalCrops}
                            covered={stats.bonusCoverage[Bonus.QualityIncrease]}
                            className="text-purple-600"
                            icon={<Star className="w-4 h-4" />}
                            title="Quality Increase"
                        />
                        <RadialChart
                            totalCrops={stats.totalCrops}
                            covered={stats.bonusCoverage[Bonus.WaterRetain]}
                            className="text-blue-600"
                            icon={<Droplets className="w-4 h-4" />}
                            title="Water Retain"
                        />
                        <RadialChart
                            totalCrops={stats.totalCrops}
                            covered={stats.bonusCoverage[Bonus.WeedPrevention]}
                            className="text-orange-600"
                            icon={<Shield className="w-4 h-4" />}
                            title="Weed Prevention"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Output Display - Harvest Calculations */}
            <OutputDisplay />

            {/* Overall Stats */}
            {/* <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5" />
                        Garden Overview
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
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
            </Card> */}

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
                                .map(([cropType, count]) => {
                                    const starred = starredCrops.has(cropType as CropType)
                                    const crop = getCropFromType(cropType as any)
                                    const cropValue = crop?.calculateGoldValue(count, 'crop', starred)
                                    const preserveValue = crop?.calculateGoldValue(count, 'preserve', starred)
                                    const preserveCount = crop?.convertCropToSeed(count).count
                                    const seedValue = crop?.calculateGoldValue(count, 'seed', starred)
                                    const seedCount = crop?.convertCropToSeed(count).count

                                    const toggleStarred = () => {
                                        setStarredCrops(prev => {
                                            const newSet = new Set(prev)
                                            if (newSet.has(cropType as CropType)) {
                                                newSet.delete(cropType as CropType)
                                            } else {
                                                newSet.add(cropType as CropType)
                                            }
                                            return newSet
                                        })
                                    }

                                    return (
                                        <div key={cropType} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                                            <div className="flex items-center gap-2 min-w-0 flex-1">
                                                <button
                                                    onClick={toggleStarred}
                                                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                                                    title={starred ? "Remove from starred" : "Add to starred"}
                                                >
                                                    <Star
                                                        className={`w-4 h-4 ${starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}
                                                    />
                                                </button>
                                                <span className="text-sm font-medium">{cropType}</span>
                                                <Badge variant="secondary">{count}</Badge>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 min-w-0">
                                                <div className="flex items-center gap-1 min-w-[60px] justify-start sm:justify-end">
                                                    <img src={crop?.cropImage} alt={cropType} className="w-4 h-4 flex-shrink-0" title='Crop' />
                                                    <span className="text-sm tabular-nums">{cropValue?.toLocaleString()}</span>
                                                </div>
                                                <div className="flex items-center gap-1 min-w-[60px] justify-start sm:justify-end">
                                                    {preserveValue !== 0 && (
                                                        <>
                                                            <img src={crop?.preserveImage} alt="preserve" className="w-4 h-4 flex-shrink-0" title={`Preserve`} />
                                                            <span className="text-sm tabular-nums">{preserveValue?.toLocaleString()}</span>
                                                            <Badge variant="secondary" className="ml-1">x{preserveCount}</Badge>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-1 min-w-[60px] justify-start sm:justify-end">
                                                    {seedValue && (
                                                        <>
                                                            <img src={crop?.seedImage} alt="seed" className="w-4 h-4 flex-shrink-0" title={`Seed`} />
                                                            <span className="text-sm tabular-nums">{seedValue.toLocaleString()}</span>
                                                            <Badge variant="secondary" className="ml-1">x{preserveCount}</Badge>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
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


        </div>
    )
} 