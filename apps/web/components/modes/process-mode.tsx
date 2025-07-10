'use client'

import React, { useState, useMemo } from 'react'
import { Settings, Cog, TrendingUp, AlertTriangle, CheckCircle, Package, Clock, Zap, Target, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { Badge } from '@workspace/ui/components/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@workspace/ui/components/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs'
import { Progress } from '@workspace/ui/components/progress'
import { Separator } from '@workspace/ui/components/separator'
import { ScrollArea } from '@workspace/ui/components/scroll-area'
import { Slider } from '@workspace/ui/components/slider'
import { Switch } from '@workspace/ui/components/switch'
import { ModeLayout } from './base-mode'
import { ModeWidgets } from '../widget-router'
import { GardenMode, ModeComponentProps, ProcessModeData } from '@/types/mode'
import { useCurrentModeData, useModeState } from '@/stores'
import { useOutputData } from '@/hooks/useOutputData'
import { useProcessor } from '@/stores'
import { cn } from '@workspace/ui/lib/utils'

// Processing targets
const OPTIMIZATION_TARGETS = [
    { value: 'gold', label: 'Gold Value', icon: '💰' },
    { value: 'efficiency', label: 'Efficiency', icon: '⚡' },
    { value: 'time', label: 'Time', icon: '⏱️' },
    { value: 'balanced', label: 'Balanced', icon: '⚖️' },
] as const

// Processor types
const PROCESSOR_TYPES = [
    { id: 'preserve-jar', name: 'Preserve Jar', icon: '/crafters/preserve-jar.webp', category: 'processing' },
    { id: 'seed-collector', name: 'Seed Collector', icon: '/crafters/seeder.webp', category: 'seeds' },
] as const

export function ProcessMode(props: ModeComponentProps) {
    const { mode, isActive, isTransitioning, transitionProgress, onModeChange } = props
    const { updateModeData } = useModeState()
    const modeData = useCurrentModeData<ProcessModeData>()
    const { harvestData } = useOutputData()
    const { settings, updateSettings, updateCropSetting } = useProcessor()

    // Local state
    const [selectedProcessor, setSelectedProcessor] = useState<string | null>(null)
    const [showBottlenecks, setShowBottlenecks] = useState(true)
    const [optimizationTarget, setOptimizationTarget] = useState('gold')

    // Memoized processing analysis
    const processingAnalysis = useMemo(() => {
        if (!harvestData || !harvestData.processingRecommendations) return null

        // Calculate processing chain efficiency
        const totalCrops = harvestData.totalCrops
        const processableCrops = harvestData.processingRecommendations.reduce((sum, rec) => sum + rec.cropCount, 0)
        const processingEfficiency = totalCrops > 0 ? (processableCrops / totalCrops) * 100 : 0

        // Calculate bottlenecks
        const bottlenecks = harvestData.processingRecommendations
            .filter(rec => rec.recommendations.some(opt => !opt.canProcess))
            .map(rec => ({
                crop: rec.cropType,
                issue: rec.levelWarning || 'Processing unavailable',
                severity: rec.recommendations.every(opt => !opt.canProcess) ? 'high' : 'medium'
            }))

        // Calculate potential value increase
        const currentValue = harvestData.totalValue
        const processedValue = harvestData.processingRecommendations.reduce((sum, rec) => {
            const bestOption = rec.recommendations.find(opt => opt.processAs === rec.bestOption)
            return sum + (bestOption ? bestOption.goldValue : 0)
        }, 0)
        const valueIncrease = processedValue > currentValue ? ((processedValue - currentValue) / currentValue) * 100 : 0

        return {
            efficiency: processingEfficiency,
            bottlenecks,
            valueIncrease,
            totalProcessors: Array.from(settings.cropSettings.keys()).length,
            activeProcessors: Array.from(settings.cropSettings.values()).filter(crop => crop.isActive).length,
            recommendations: harvestData.processingRecommendations.slice(0, 5), // Top 5 recommendations
        }
    }, [harvestData, settings])

    // Update mode data
    const updateProcessData = (updates: Partial<ProcessModeData>) => {
        updateModeData(GardenMode.PROCESS, updates)
    }

    // Handle processor selection
    const handleProcessorSelect = (processorId: string) => {
        setSelectedProcessor(processorId)
        updateProcessData({ selectedProcessor: processorId })
    }

    // Handle optimization target change
    const handleOptimizationTargetChange = (target: string) => {
        setOptimizationTarget(target)
        updateProcessData({ optimizationTarget: target })
    }

    // Apply optimization recommendations
    const applyOptimizations = () => {
        if (!processingAnalysis) return

        processingAnalysis.recommendations.forEach(rec => {
            const bestOption = rec.recommendations.find(opt => opt.processAs === rec.bestOption)
            if (bestOption && bestOption.canProcess) {
                updateCropSetting(`${rec.cropType}-star`, {
                    processAs: rec.bestOption,
                    isActive: true,
                    crafters: 1
                })
                updateCropSetting(`${rec.cropType}-base`, {
                    processAs: rec.bestOption,
                    isActive: true,
                    crafters: 1
                })
            }
        })
    }

    // Render primary interface
    const renderPrimaryInterface = () => (
        <div className="space-y-6">
            {/* Processing Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Processing Efficiency
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-600">
                            {processingAnalysis?.efficiency.toFixed(1)}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Crops being processed
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Value Increase
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            +{processingAnalysis?.valueIncrease.toFixed(1)}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Potential value gain
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Active Processors
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-purple-600">
                            {processingAnalysis?.activeProcessors} / {processingAnalysis?.totalProcessors}
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Processors in use
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Bottlenecks
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">
                            {processingAnalysis?.bottlenecks.length || 0}
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Issues found
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Processing Chain Visualization */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5" />
                        Processing Chain
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {processingAnalysis?.recommendations.map((rec, index) => (
                            <div key={rec.cropType} className="border rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={`/crops/${rec.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                            alt={rec.cropType}
                                            className="w-8 h-8 object-contain"
                                        />
                                        <div>
                                            <h3 className="font-medium">{rec.cropType}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {rec.cropCount} crops available
                                            </p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="capitalize">
                                        {rec.bestOption}
                                    </Badge>
                                </div>

                                {/* Processing Flow */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex-1 grid grid-cols-3 gap-4">
                                        {rec.recommendations.slice(0, 3).map((option, optIndex) => (
                                            <div
                                                key={option.processAs}
                                                className={cn(
                                                    "flex items-center gap-2 p-3 rounded-lg border",
                                                    option.processAs === rec.bestOption
                                                        ? "border-green-200 bg-green-50"
                                                        : "border-border"
                                                )}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={option.inputImage}
                                                        alt="Input"
                                                        className="w-6 h-6 object-contain"
                                                    />
                                                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                                    <img
                                                        src={option.outputImage}
                                                        alt="Output"
                                                        className="w-6 h-6 object-contain"
                                                    />
                                                </div>
                                                <div className="flex-1 text-xs">
                                                    <div className="font-medium capitalize">{option.processAs}</div>
                                                    <div className="text-muted-foreground">
                                                        {(option.profitability * 100).toFixed(0)}% value
                                                    </div>
                                                </div>
                                                {option.processAs === rec.bestOption && (
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Processing Stats */}
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <div className="text-muted-foreground">Processing Time</div>
                                        <div className="font-medium">
                                            {rec.recommendations.find(opt => opt.processAs === rec.bestOption)?.processingTime || 0}m
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-muted-foreground">Value Increase</div>
                                        <div className="font-medium text-green-600">
                                            +{((rec.recommendations.find(opt => opt.processAs === rec.bestOption)?.profitability || 1) * 100 - 100).toFixed(0)}%
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-muted-foreground">Required Level</div>
                                        <div className="font-medium">
                                            {rec.recommendations.find(opt => opt.processAs === rec.bestOption)?.requiredLevel || 1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Bottlenecks */}
            {processingAnalysis?.bottlenecks && processingAnalysis.bottlenecks.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-yellow-500" />
                            Bottlenecks & Issues
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {processingAnalysis.bottlenecks.map((bottleneck, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                                    <div className={cn(
                                        "w-2 h-2 rounded-full mt-2",
                                        bottleneck.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                                    )} />
                                    <div className="flex-1">
                                        <h4 className="font-medium">{bottleneck.crop}</h4>
                                        <p className="text-sm text-muted-foreground">{bottleneck.issue}</p>
                                    </div>
                                    <Badge variant={bottleneck.severity === 'high' ? 'destructive' : 'default'}>
                                        {bottleneck.severity}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )

    // Render contextual tools
    const renderContextualTools = () => (
        <div className="flex items-center gap-4">
            {/* Processor Selection */}
            <div className="flex items-center gap-2">
                <Cog className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Processor:</span>
                <Select value={selectedProcessor || ''} onValueChange={handleProcessorSelect}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select processor" />
                    </SelectTrigger>
                    <SelectContent>
                        {PROCESSOR_TYPES.map(processor => (
                            <SelectItem key={processor.id} value={processor.id}>
                                <div className="flex items-center gap-2">
                                    <img src={processor.icon} alt={processor.name} className="w-4 h-4" />
                                    {processor.name}
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* Optimization Target */}
            <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Optimize for:</span>
                <Select value={optimizationTarget} onValueChange={handleOptimizationTargetChange}>
                    <SelectTrigger className="w-32">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {OPTIMIZATION_TARGETS.map(target => (
                            <SelectItem key={target.value} value={target.value}>
                                <div className="flex items-center gap-2">
                                    <span>{target.icon}</span>
                                    {target.label}
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* Show Bottlenecks Toggle */}
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Show Bottlenecks:</span>
                <Switch
                    checked={showBottlenecks}
                    onCheckedChange={setShowBottlenecks}
                />
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* Actions */}
            <div className="flex items-center gap-2">
                <Button
                    size="sm"
                    onClick={applyOptimizations}
                    className="gap-1"
                >
                    <Zap className="w-4 h-4" />
                    Apply Optimizations
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
            <ModeWidgets mode={GardenMode.PROCESS} layout="vertical" />
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