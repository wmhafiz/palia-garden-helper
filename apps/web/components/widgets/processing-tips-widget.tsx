'use client'

import { Star, TrendingUp, Clock, Coins, Zap, AlertTriangle, Settings, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import { Button } from '@workspace/ui/components/button'
import { Separator } from '@workspace/ui/components/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@workspace/ui/components/tooltip'
import { useOutputData } from '@/hooks/useOutputData'
import { useProcessor } from '@/stores'
import { cn } from '@workspace/ui/lib/utils'
import { useState } from 'react'

export function ProcessingTipsWidget() {
    const { harvestData } = useOutputData()
    const { updateCropSetting, harvesterOptions } = useProcessor()
    const [isApplying, setIsApplying] = useState(false)

    if (harvestData.processingRecommendations.length === 0) {
        return null
    }

    const formatTime = (minutes: number) => {
        if (minutes === 0) return 'Instant'
        if (minutes < 60) return `${Math.round(minutes)}m`
        const hours = Math.floor(minutes / 60)
        const mins = Math.round(minutes % 60)
        return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
    }

    const formatGold = (value: number) => {
        if (value >= 1000) return `${(value / 1000).toFixed(1)}k`
        return Math.round(value).toString()
    }

    const getProfitabilityColor = (profitability: number) => {
        if (profitability >= 1.5) return 'text-green-600'
        if (profitability >= 1.2) return 'text-blue-600'
        if (profitability >= 1.0) return 'text-yellow-600'
        return 'text-red-600'
    }

    const getProfitabilityBadgeVariant = (profitability: number): "default" | "secondary" | "destructive" | "outline" => {
        if (profitability >= 1.5) return 'default'
        if (profitability >= 1.2) return 'secondary'
        if (profitability >= 1.0) return 'outline'
        return 'destructive'
    }

    const applyAllRecommendations = async () => {
        setIsApplying(true)
        try {
            harvestData.processingRecommendations.forEach(recommendation => {
                const bestOption = recommendation.recommendations.find(opt => opt.processAs === recommendation.bestOption)
                if (bestOption && bestOption.canProcess) {
                    // Apply for both star and base variants
                    const starCropId = `${recommendation.cropType}-star`
                    const baseCropId = `${recommendation.cropType}-base`

                    updateCropSetting(starCropId, {
                        processAs: recommendation.bestOption,
                        isActive: true,
                        crafters: 1
                    })

                    updateCropSetting(baseCropId, {
                        processAs: recommendation.bestOption,
                        isActive: true,
                        crafters: 1
                    })
                }
            })

            // Small delay for visual feedback
            await new Promise(resolve => setTimeout(resolve, 500))
        } finally {
            setIsApplying(false)
        }
    }

    return (
        <TooltipProvider>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-500" />
                            Processing Recommendations
                        </CardTitle>
                        <Button
                            onClick={applyAllRecommendations}
                            disabled={isApplying}
                            size="sm"
                            className="gap-2"
                        >
                            <Settings className="w-4 h-4" />
                            {isApplying ? 'Applying...' : 'Apply All'}
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 ">
                    {harvestData.processingRecommendations.map((recommendation, index) => (
                        <div key={`${recommendation.cropType}-${index}`} className="space-y-4">
                            {/* Crop Header */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={`/crops/${recommendation.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`}
                                    alt={recommendation.cropType}
                                    className="w-8 h-8 object-contain"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg capitalize">{recommendation.cropType}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {recommendation.cropCount} crops available
                                    </p>
                                </div>
                                {recommendation.levelWarning && (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Badge variant="destructive" className="gap-1">
                                                <AlertTriangle className="w-3 h-3" />
                                                Level {harvesterOptions.level}
                                            </Badge>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{recommendation.levelWarning}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                )}
                            </div>

                            {/* Processing Options */}
                            <div className="grid gap-3">
                                {recommendation.recommendations.map((option, optionIndex) => (
                                    <div
                                        key={`${option.processAs}-${optionIndex}`}
                                        className={cn(
                                            "relative p-4 rounded-lg border transition-all",
                                            option.processAs === recommendation.bestOption && option.canProcess
                                                ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
                                                : option.canProcess
                                                    ? "border-border bg-background hover:bg-muted/50"
                                                    : "border-border bg-muted/30 opacity-60"
                                        )}
                                    >
                                        {/* Best Option Badge */}
                                        {option.processAs === recommendation.bestOption && option.canProcess && (
                                            <div className="absolute -top-2 -right-2">
                                                <Badge variant="default" className="gap-1 text-xs">
                                                    <Star className="w-3 h-3" />
                                                    Best
                                                </Badge>
                                            </div>
                                        )}

                                        <div className="flex items-start gap-4">
                                            {/* Input/Output Images with Ratio */}
                                            <div className="flex items-center gap-2">
                                                <div className="flex flex-col items-center">
                                                    <img
                                                        src={option.inputImage}
                                                        alt="Input"
                                                        className="w-8 h-8 object-contain"
                                                    />
                                                    {option.processAs !== 'crop' && (
                                                        <span className="text-xs text-muted-foreground mt-1">
                                                            {option.inputItems}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-muted-foreground">→</span>
                                                <div className="flex flex-col items-center">
                                                    <img
                                                        src={option.outputImage}
                                                        alt="Output"
                                                        className="w-8 h-8 object-contain"
                                                    />
                                                    {option.processAs !== 'crop' && (
                                                        <span className="text-xs text-muted-foreground mt-1">
                                                            {option.outputItems}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Option Details */}
                                            <div className="flex-1 space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-medium capitalize">{option.processAs}</h4>
                                                    <Badge
                                                        variant={getProfitabilityBadgeVariant(option.profitability)}
                                                        className="text-xs"
                                                    >
                                                        {(option.profitability * 100).toFixed(0)}% value
                                                    </Badge>
                                                    {!option.canProcess && (
                                                        <Badge variant="destructive" className="text-xs">
                                                            Level {option.requiredLevel}+ required
                                                        </Badge>
                                                    )}
                                                </div>

                                                {/* Conversion Details */}
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-muted-foreground">Uses:</span>
                                                        <span className="font-medium">{option.inputItems} crops</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-muted-foreground">Makes:</span>
                                                        <span className="font-medium">{option.outputItems} {option.processAs}s</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Coins className="w-3 h-3 text-yellow-500" />
                                                        <span className="font-medium">{formatGold(option.goldValue)}g</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3 text-blue-500" />
                                                        <span className="font-medium">{formatTime(option.processingTime)}</span>
                                                    </div>
                                                </div>

                                                {/* Profitability and Gold per Hour */}
                                                <div className="flex items-center gap-4 text-xs">
                                                    <div className="flex items-center gap-1">
                                                        <TrendingUp className={cn("w-3 h-3", getProfitabilityColor(option.profitability))} />
                                                        <span className={cn("font-medium", getProfitabilityColor(option.profitability))}>
                                                            {(option.profitability * 100).toFixed(0)}% profitability
                                                        </span>
                                                    </div>
                                                    {option.goldPerHour !== Infinity && (
                                                        <div className="flex items-center gap-1">
                                                            <Zap className="w-3 h-3 text-orange-500" />
                                                            <span className="font-medium">{formatGold(option.goldPerHour)}g/h</span>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Reason */}
                                                <p className="text-xs text-muted-foreground italic">{option.reason}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {index < harvestData.processingRecommendations.length - 1 && (
                                <Separator className="my-6" />
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </TooltipProvider>
    )
} 