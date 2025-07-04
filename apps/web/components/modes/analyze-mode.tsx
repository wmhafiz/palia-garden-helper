'use client'

import React, { useState, useMemo } from 'react'
import { BarChart3, TrendingUp, PieChart, LineChart, Settings, RefreshCw, Download, Filter, Target, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { Badge } from '@workspace/ui/components/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@workspace/ui/components/select'
import { Toggle } from '@workspace/ui/components/toggle'
import { Separator } from '@workspace/ui/components/separator'
import { ScrollArea } from '@workspace/ui/components/scroll-area'
import { ModeLayout } from './base-mode'
import { ModeWidgets } from '../widget-router'
import { GardenMode, ModeComponentProps, AnalyzeModeData } from '@/types/mode'
import { useCurrentModeData, useModeState } from '@/stores'
import { useGardenStats } from '@/hooks/useGardenStats'
import { useOutputData } from '@/hooks/useOutputData'
import { cn } from '@workspace/ui/lib/utils'

// Chart type options
const CHART_TYPES = [
    { value: 'bar', label: 'Bar Chart', icon: BarChart3 },
    { value: 'line', label: 'Line Chart', icon: LineChart },
    { value: 'pie', label: 'Pie Chart', icon: PieChart },
] as const

// Metric options
const METRICS = [
    { id: 'gold', label: 'Gold Value', color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { id: 'efficiency', label: 'Efficiency', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { id: 'bonus-coverage', label: 'Bonus Coverage', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { id: 'growth-time', label: 'Growth Time', color: 'text-green-600', bgColor: 'bg-green-50' },
    { id: 'yield', label: 'Yield', color: 'text-orange-600', bgColor: 'bg-orange-50' },
] as const

// Time horizon options
const TIME_HORIZONS = [
    { value: 7, label: '7 Days' },
    { value: 14, label: '14 Days' },
    { value: 30, label: '30 Days' },
    { value: 60, label: '60 Days' },
] as const

export function AnalyzeMode(props: ModeComponentProps) {
    const { mode, isActive, isTransitioning, transitionProgress, onModeChange } = props
    const { updateModeData } = useModeState()
    const modeData = useCurrentModeData<AnalyzeModeData>()
    const gardenStats = useGardenStats()
    const { harvestData } = useOutputData()

    // Local state for UI interactions
    const [refreshing, setRefreshing] = useState(false)
    const [showComparison, setShowComparison] = useState(false)

    // Memoized calculations for performance
    const analysisData = useMemo(() => {
        if (!gardenStats || !harvestData) return null

        return {
            efficiency: {
                tileUtilization: gardenStats.tileUtilization,
                bonusEfficiency: Object.values(gardenStats.bonusCoverage).reduce((sum, coverage) => sum + coverage, 0) / (Object.keys(gardenStats.bonusCoverage).length * gardenStats.totalCrops) * 100,
                averageGrowthTime: harvestData.averageGrowthTime,
                goldPerHour: harvestData.totalValue / (harvestData.averageGrowthTime / 60),
            },
            performance: {
                totalValue: harvestData.totalValue,
                totalYield: harvestData.totalYield,
                cropDiversity: harvestData.cropHarvests.length,
                starCropPercentage: harvestData.cropHarvests.reduce((sum, crop) => sum + (crop.qualityBonus > 0 ? crop.count : 0), 0) / harvestData.totalCrops * 100,
            },
            recommendations: [
                {
                    type: 'efficiency',
                    title: 'Improve Tile Utilization',
                    description: `Your garden is ${gardenStats.tileUtilization.toFixed(1)}% utilized. Consider planting more crops.`,
                    priority: gardenStats.tileUtilization < 80 ? 'high' : 'low',
                    impact: 'high',
                },
                {
                    type: 'bonus',
                    title: 'Optimize Bonus Coverage',
                    description: 'Some crops are not receiving optimal bonuses. Review fertilizer placement.',
                    priority: 'medium',
                    impact: 'medium',
                },
                {
                    type: 'processing',
                    title: 'Processing Optimization',
                    description: 'Consider processing some crops for higher value output.',
                    priority: 'medium',
                    impact: 'high',
                },
            ],
        }
    }, [gardenStats, harvestData])

    // Update mode data when selections change
    const updateAnalyzeData = (updates: Partial<AnalyzeModeData>) => {
        updateModeData(GardenMode.ANALYZE, updates)
    }

    // Handle refresh
    const handleRefresh = async () => {
        setRefreshing(true)
        // Simulate data refresh
        await new Promise(resolve => setTimeout(resolve, 1000))
        setRefreshing(false)
    }

    // Handle metric toggle
    const toggleMetric = (metricId: string) => {
        const currentMetrics = modeData.selectedMetrics || []
        const newMetrics = currentMetrics.includes(metricId)
            ? currentMetrics.filter(id => id !== metricId)
            : [...currentMetrics, metricId]
        updateAnalyzeData({ selectedMetrics: newMetrics })
    }

    // Handle chart type change
    const handleChartTypeChange = (chartType: string) => {
        updateAnalyzeData({ chartType })
    }

    // Handle time horizon change
    const handleTimeHorizonChange = (timeHorizon: string) => {
        updateAnalyzeData({ timeHorizon: parseInt(timeHorizon) })
    }

    // Render primary interface
    const renderPrimaryInterface = () => (
        <div className="space-y-6">
            {/* Analytics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Efficiency Metrics */}
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Tile Utilization
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-600">
                            {analysisData?.efficiency.tileUtilization.toFixed(1)}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                            {gardenStats?.occupiedTiles} / {gardenStats?.totalTiles} tiles
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Total Value
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-yellow-600">
                            {analysisData?.performance.totalValue.toLocaleString()}g
                        </div>
                        <div className="text-xs text-muted-foreground">
                            {analysisData?.efficiency.goldPerHour.toFixed(0)}g/hour
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Bonus Efficiency
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-purple-600">
                            {analysisData?.efficiency.bonusEfficiency.toFixed(1)}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Fertilizer coverage
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Crop Diversity
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            {analysisData?.performance.cropDiversity}
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Different crop types
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Section */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" />
                            Performance Analysis
                        </CardTitle>
                        <div className="flex items-center gap-2">
                            <Select value={modeData.chartType} onValueChange={handleChartTypeChange}>
                                <SelectTrigger className="w-32">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {CHART_TYPES.map(type => (
                                        <SelectItem key={type.value} value={type.value}>
                                            <div className="flex items-center gap-2">
                                                <type.icon className="w-4 h-4" />
                                                {type.label}
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                        <div className="text-center text-muted-foreground">
                            <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p>Interactive Chart Visualization</p>
                            <p className="text-sm">Chart type: {modeData.chartType}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Optimization Recommendations */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Optimization Recommendations
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {analysisData?.recommendations.map((rec, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                                <div className={cn(
                                    "w-2 h-2 rounded-full mt-2",
                                    rec.priority === 'high' ? 'bg-red-500' :
                                        rec.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                                )} />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-medium">{rec.title}</h4>
                                        <Badge variant={rec.priority === 'high' ? 'destructive' : rec.priority === 'medium' ? 'default' : 'secondary'}>
                                            {rec.priority}
                                        </Badge>
                                        <Badge variant="outline">{rec.impact} impact</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                                </div>
                                <Button size="sm" variant="outline">
                                    <Zap className="w-4 h-4 mr-1" />
                                    Apply
                                </Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )

    // Render contextual tools
    const renderContextualTools = () => (
        <div className="flex items-center gap-4">
            {/* Metric Toggles */}
            <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Metrics:</span>
                {METRICS.map(metric => (
                    <Toggle
                        key={metric.id}
                        pressed={modeData.selectedMetrics?.includes(metric.id)}
                        onPressedChange={() => toggleMetric(metric.id)}
                        size="sm"
                        className="gap-1"
                    >
                        <div className={cn("w-2 h-2 rounded-full", metric.bgColor)} />
                        {metric.label}
                    </Toggle>
                ))}
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* Time Horizon */}
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Time:</span>
                <Select value={modeData.timeHorizon?.toString()} onValueChange={handleTimeHorizonChange}>
                    <SelectTrigger className="w-24">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {TIME_HORIZONS.map(horizon => (
                            <SelectItem key={horizon.value} value={horizon.value.toString()}>
                                {horizon.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* Actions */}
            <div className="flex items-center gap-2">
                <Button
                    size="sm"
                    variant="outline"
                    onClick={handleRefresh}
                    disabled={refreshing}
                    className="gap-1"
                >
                    <RefreshCw className={cn("w-4 h-4", refreshing && "animate-spin")} />
                    Refresh
                </Button>
                <Button size="sm" variant="outline" className="gap-1">
                    <Download className="w-4 h-4" />
                    Export
                </Button>
                <Button size="sm" variant="outline" className="gap-1">
                    <Settings className="w-4 h-4" />
                    Settings
                </Button>
            </div>
        </div>
    )

    // Render widgets
    const renderWidgets = () => (
        <ScrollArea className="h-full">
            <ModeWidgets mode={GardenMode.ANALYZE} layout="vertical" />
        </ScrollArea>
    )

    return (
        <ModeLayout
            mode={mode}
            isActive={isActive}
            isTransitioning={isTransitioning}
            transitionProgress={transitionProgress}
            onModeChange={onModeChange}
            primaryInterface={renderPrimaryInterface()}
            contextualTools={renderContextualTools()}
            widgets={renderWidgets()}
        />
    )
} 