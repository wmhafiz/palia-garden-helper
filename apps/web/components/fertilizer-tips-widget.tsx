'use client'

import { Sparkles, Droplets, Shield, Wheat, Star, Zap, Clock, DollarSign, ChevronDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import { Button } from '@workspace/ui/components/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@workspace/ui/components/select'
import { useOutputData, getFertilizerDisplayName, getBonusDisplayName, type PlayMode } from '@/hooks/useOutputData'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@workspace/ui/components/collapsible'

export function FertilizerTipsWidget() {
    const {
        fertilizerAnalysis,
        selectedPlayMode,
        setSelectedPlayMode,
        applyFertilizerRecommendations
    } = useOutputData()

    if (fertilizerAnalysis.summary.total === 0) {
        return null
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Fertilizer Tips
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

                <Collapsible>
                    <CollapsibleTrigger>
                        <div className="flex items-center gap-2">
                            Summary <ChevronDown className="w-4 h-4" />
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        {/* Summary */}
                        <div className="grid grid-cols-3 gap-4 text-sm mt-2">
                            <div>
                                <div className="text-muted-foreground flex items-center gap-1">
                                    <Droplets className="w-3 h-3" />
                                    Missing Water Retain
                                </div>
                                <div className="font-medium text-blue-600">
                                    {fertilizerAnalysis.summary.waterRetain} / {fertilizerAnalysis.summary.total}
                                </div>
                            </div>
                            <div>
                                <div className="text-muted-foreground flex items-center gap-1">
                                    <Shield className="w-3 h-3" />
                                    Missing Weed Prevention
                                </div>
                                <div className="font-medium text-green-600">
                                    {fertilizerAnalysis.summary.weedPrevention} / {fertilizerAnalysis.summary.total}
                                </div>
                            </div>
                            <div>
                                <div className="text-muted-foreground flex items-center gap-1">
                                    <Wheat className="w-3 h-3" />
                                    Missing Harvest Boost
                                </div>
                                <div className="font-medium text-orange-600">
                                    {fertilizerAnalysis.summary.harvestIncrease} / {fertilizerAnalysis.summary.total}
                                </div>
                            </div>
                            <div>
                                <div className="text-muted-foreground flex items-center gap-1">
                                    <Star className="w-3 h-3" />
                                    Missing Quality Boost
                                </div>
                                <div className="font-medium text-yellow-600">
                                    {fertilizerAnalysis.summary.qualityIncrease} / {fertilizerAnalysis.summary.total}
                                </div>
                            </div>
                            <div>
                                <div className="text-muted-foreground flex items-center gap-1">
                                    <Zap className="w-3 h-3" />
                                    Missing Speed Boost
                                </div>
                                <div className="font-medium text-purple-600">
                                    {fertilizerAnalysis.summary.speedIncrease} / {fertilizerAnalysis.summary.total}
                                </div>
                            </div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>

                {/* Play Mode Selection */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Optimization Mode</label>
                    <Select value={selectedPlayMode} onValueChange={(value: PlayMode) => setSelectedPlayMode(value)}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="afk">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    AFK Mode (Water Retain → Weed Block → Harvest)
                                </div>
                            </SelectItem>
                            <SelectItem value="speed">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    Speed Mode (Speed Gro → Harvest/Quality → Water/Weed)
                                </div>
                            </SelectItem>
                            <SelectItem value="profit">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-4 h-4" />
                                    Profit Mode (Quality → Harvest → Water/Weed)
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Apply Recommendations Button */}
                {fertilizerAnalysis.tiles.length > 0 && (
                    <div className="space-y-2">
                        <Button
                            onClick={() => applyFertilizerRecommendations(selectedPlayMode)}
                            variant="default"
                        >
                            Apply {selectedPlayMode.charAt(0).toUpperCase() + selectedPlayMode.slice(1)} Mode Fertilizers
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            This will apply fertilizers to empty tiles based on your selected optimization mode
                        </p>
                    </div>
                )}

                {/* Detailed Recommendations */}
                {fertilizerAnalysis.tiles.length > 0 && (
                    <div className="space-y-2">
                        <h4 className="text-sm font-medium">Recommendations ({fertilizerAnalysis.tiles.length} tiles)</h4>
                        <div className="max-h-32 overflow-y-auto space-y-1">
                            {fertilizerAnalysis.tiles.slice(0, 10).map((tile, index) => (
                                <div key={index} className="text-xs bg-muted p-2 rounded">
                                    <div className="flex justify-between items-center">
                                        <span>Plot {tile.plotRow + 1},{tile.plotCol + 1} - {tile.cropType}</span>
                                        {tile.recommendedFertilizer && (
                                            <Badge variant="outline" className="text-xs">
                                                {getFertilizerDisplayName(tile.recommendedFertilizer)}
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {tile.missingBonuses.map((bonus) => (
                                            <Badge key={bonus} variant="secondary" className="text-xs">
                                                {getBonusDisplayName(bonus)}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {fertilizerAnalysis.tiles.length > 10 && (
                                <div className="text-xs text-muted-foreground text-center">
                                    ... and {fertilizerAnalysis.tiles.length - 10} more tiles
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {fertilizerAnalysis.tiles.length === 0 && (
                    <div className="text-center py-4">
                        <div className="text-green-600 font-medium">✓ All crops have optimal fertilizer coverage!</div>
                        <p className="text-sm text-muted-foreground mt-1">Your garden is well-optimized for the current mode.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
} 