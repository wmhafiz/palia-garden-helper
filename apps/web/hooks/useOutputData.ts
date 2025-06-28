import { useMemo, useState } from 'react'
import { useGarden, useToasts, useProcessor } from '@/stores'
import { getCropFromType, Bonus, FertiliserType, getFertiliserFromType } from '@/lib/garden-planner'

export interface CropHarvestInfo {
    cropType: string
    count: number
    baseYield: number
    totalYield: number
    growthTime: number
    baseValue: number
    totalValue: number
    qualityBonus: number
    harvestBonus: number
}

export interface TileAnalysis {
    plotRow: number
    plotCol: number
    tileRow: number
    tileCol: number
    cropType?: string
    currentFertilizer?: string
    missingBonuses: Bonus[]
    recommendedFertilizer?: FertiliserType
}

export interface FertilizerAnalysis {
    tiles: TileAnalysis[]
    summary: {
        waterRetain: number
        weedPrevention: number
        harvestIncrease: number
        qualityIncrease: number
        speedIncrease: number
        total: number
    }
}

export interface ProcessingRecommendation {
    cropType: string
    cropCount: number
    isStar: boolean
    recommendations: {
        processAs: 'crop' | 'seed' | 'preserve'
        profitability: number
        goldPerHour: number
        inputItems: number
        outputItems: number
        goldValue: number
        processingTime: number
        requiredLevel: number
        canProcess: boolean
        inputImage: string
        outputImage: string
        reason: string
    }[]
    bestOption: 'crop' | 'seed' | 'preserve'
    levelWarning?: string
}

export interface HarvestData {
    totalCrops: number
    totalValue: number
    averageGrowthTime: number
    cropHarvests: CropHarvestInfo[]
    totalYield: number
    processingRecommendations: ProcessingRecommendation[]
}

export type PlayMode = 'afk' | 'speed' | 'profit'

export function useOutputData() {
    const { garden, version, forceUpdate } = useGarden()
    const { addToast } = useToasts()
    const { harvesterOptions } = useProcessor()
    const [selectedPlayMode, setSelectedPlayMode] = useState<PlayMode>('afk')

    const harvestData = useMemo((): HarvestData => {
        if (!garden) {
            return {
                totalCrops: 0,
                totalValue: 0,
                averageGrowthTime: 0,
                cropHarvests: [],
                totalYield: 0,
                processingRecommendations: []
            }
        }

        const cropCounts: Record<string, number> = {}

        // Count all crops in the garden
        for (let i = 0; i < garden.rows; i++) {
            for (let j = 0; j < garden.columns; j++) {
                const plot = garden.getPlot(i, j)
                if (plot && plot.isActive) {
                    for (let ti = 0; ti < 3; ti++) {
                        for (let tj = 0; tj < 3; tj++) {
                            const tile = plot.getTile(ti, tj)
                            if (tile?.crop) {
                                cropCounts[tile.crop.type] = (cropCounts[tile.crop.type] || 0) + 1
                            }
                        }
                    }
                }
            }
        }

        const cropHarvests: CropHarvestInfo[] = Object.entries(cropCounts).map(([cropType, count]) => {
            const crop = getCropFromType(cropType as any)

            if (!crop) {
                return {
                    cropType,
                    count,
                    baseYield: 1,
                    totalYield: count,
                    growthTime: 60, // Default 1 hour
                    baseValue: 10, // Default value
                    totalValue: count * 10,
                    qualityBonus: 0,
                    harvestBonus: 0
                }
            }

            // Basic calculations (these would be more complex in a real implementation)
            const baseYield = 1 // Most crops yield 1 per plant
            const qualityBonus = 0.1 // 10% quality bonus assumption
            const harvestBonus = 0.05 // 5% harvest bonus assumption
            const effectiveYield = baseYield * (1 + qualityBonus + harvestBonus)
            const totalYield = Math.floor(count * effectiveYield)

            // Estimate crop value (placeholder values)
            const baseValue = getCropBaseValue(cropType)
            const totalValue = totalYield * baseValue

            return {
                cropType,
                count,
                baseYield,
                totalYield,
                growthTime: crop.produceInfo.growthTime,
                baseValue,
                totalValue,
                qualityBonus: qualityBonus * 100,
                harvestBonus: harvestBonus * 100
            }
        }).sort((a, b) => b.totalValue - a.totalValue)

        const totalCrops = Object.values(cropCounts).reduce((sum, count) => sum + count, 0)
        const totalValue = cropHarvests.reduce((sum, harvest) => sum + harvest.totalValue, 0)
        const totalYield = cropHarvests.reduce((sum, harvest) => sum + harvest.totalYield, 0)
        const averageGrowthTime = cropHarvests.length > 0
            ? cropHarvests.reduce((sum, harvest) => sum + (harvest.growthTime * harvest.count), 0) / totalCrops
            : 0

        // Processing recommendations
        const processingRecommendations = generateProcessingRecommendations(cropHarvests, harvesterOptions.level)

        return {
            totalCrops,
            totalValue,
            averageGrowthTime,
            cropHarvests,
            totalYield,
            processingRecommendations
        }
    }, [garden, version, harvesterOptions.level])

    const fertilizerAnalysis = useMemo((): FertilizerAnalysis => {
        if (!garden) return {
            tiles: [],
            summary: {
                waterRetain: 0,
                weedPrevention: 0,
                harvestIncrease: 0,
                qualityIncrease: 0,
                speedIncrease: 0,
                total: 0
            }
        }

        const tiles: TileAnalysis[] = []
        let missingWaterRetain = 0
        let missingWeedPrevention = 0
        let missingHarvestIncrease = 0
        let missingQualityIncrease = 0
        let missingSpeedIncrease = 0
        let totalCropTiles = 0

        for (let i = 0; i < garden.rows; i++) {
            for (let j = 0; j < garden.columns; j++) {
                const plot = garden.getPlot(i, j)
                if (plot && plot.isActive) {
                    for (let ti = 0; ti < 3; ti++) {
                        for (let tj = 0; tj < 3; tj++) {
                            const tile = plot.getTile(ti, tj)
                            if (tile?.crop) {
                                totalCropTiles++
                                const missingBonuses: Bonus[] = []

                                // Check for missing bonuses
                                const activeBonuses = tile.bonuses || []
                                if (!activeBonuses.includes(Bonus.WaterRetain)) {
                                    missingBonuses.push(Bonus.WaterRetain)
                                    missingWaterRetain++
                                }
                                if (!activeBonuses.includes(Bonus.WeedPrevention)) {
                                    missingBonuses.push(Bonus.WeedPrevention)
                                    missingWeedPrevention++
                                }
                                if (!activeBonuses.includes(Bonus.HarvestIncrease)) {
                                    missingBonuses.push(Bonus.HarvestIncrease)
                                    missingHarvestIncrease++
                                }
                                if (!activeBonuses.includes(Bonus.QualityIncrease)) {
                                    missingBonuses.push(Bonus.QualityIncrease)
                                    missingQualityIncrease++
                                }
                                if (!activeBonuses.includes(Bonus.SpeedIncrease)) {
                                    missingBonuses.push(Bonus.SpeedIncrease)
                                    missingSpeedIncrease++
                                }

                                if (missingBonuses.length > 0) {
                                    tiles.push({
                                        plotRow: i,
                                        plotCol: j,
                                        tileRow: ti,
                                        tileCol: tj,
                                        cropType: tile.crop.type,
                                        currentFertilizer: tile.fertiliser?.type,
                                        missingBonuses,
                                        recommendedFertilizer: getRecommendedFertilizer(missingBonuses, selectedPlayMode || 'afk', activeBonuses)
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }

        return {
            tiles,
            summary: {
                waterRetain: missingWaterRetain,
                weedPrevention: missingWeedPrevention,
                harvestIncrease: missingHarvestIncrease,
                qualityIncrease: missingQualityIncrease,
                speedIncrease: missingSpeedIncrease,
                total: totalCropTiles
            }
        }
    }, [garden, version, selectedPlayMode])

    const applyFertilizerRecommendations = (mode: PlayMode) => {
        if (!garden) return

        let appliedCount = 0
        const relevantTiles = fertilizerAnalysis.tiles.filter(tileAnalysis => {
            const hasRelevantMissing = tileAnalysis.recommendedFertilizer !== undefined

            // Check if the actual tile has no fertilizer
            const plot = garden.getPlot(tileAnalysis.plotRow, tileAnalysis.plotCol)
            const tile = plot?.getTile(tileAnalysis.tileRow, tileAnalysis.tileCol)
            const hasNoFertilizer = !tile?.fertiliser

            return hasRelevantMissing && hasNoFertilizer
        })

        for (const tileAnalysis of relevantTiles) {
            const plot = garden.getPlot(tileAnalysis.plotRow, tileAnalysis.plotCol)
            const tile = plot?.getTile(tileAnalysis.tileRow, tileAnalysis.tileCol)

            if (tile && !tile.fertiliser && tileAnalysis.recommendedFertilizer) {
                const fertilizer = getFertiliserFromType(tileAnalysis.recommendedFertilizer)
                if (fertilizer) {
                    tile.fertiliser = fertilizer
                    appliedCount++
                }
            }
        }

        if (appliedCount > 0) {
            garden.calculateBonuses()
            forceUpdate()
            addToast({
                type: 'success',
                message: `Applied ${appliedCount} fertilizer${appliedCount !== 1 ? 's' : ''} based on ${mode} mode recommendations`
            })
        } else {
            addToast({
                type: 'info',
                message: `No fertilizers could be applied. Found ${relevantTiles.length} relevant tiles out of ${fertilizerAnalysis.tiles.length} total tiles with missing bonuses.`
            })
        }
    }

    return {
        harvestData,
        fertilizerAnalysis,
        selectedPlayMode,
        setSelectedPlayMode,
        applyFertilizerRecommendations,
        hasGarden: !!garden
    }
}

// Helper functions
function getCropBaseValue(cropType: string): number {
    const values: Record<string, number> = {
        'tomato': 25,
        'potato': 15,
        'rice': 35,
        'wheat': 20,
        'corn': 30,
        'onion': 18,
        'carrot': 22,
        'cotton': 40,
        'apple': 50
    }
    return values[cropType.toLowerCase()] ?? 20
}

function generateProcessingRecommendations(harvests: CropHarvestInfo[], userLevel: number = 0): ProcessingRecommendation[] {
    const recommendations: ProcessingRecommendation[] = []
    
    harvests.forEach(harvest => {
        if (harvest.count < 5) return // Skip crops with very low yield
        
        const crop = getCropFromType(harvest.cropType as any)
        if (!crop) return
        
        const isStar = false // For now, assuming base crops - could be enhanced to handle star crops
        const cropCount = harvest.count
        
        const options: ProcessingRecommendation['recommendations'] = []
        
        // Raw crop option
        const rawGoldValue = cropCount * (isStar ? crop.goldValues.cropStar : crop.goldValues.crop)
        options.push({
            processAs: 'crop',
            profitability: 1.0, // Base profitability
            goldPerHour: Infinity, // Instant processing
            inputItems: cropCount,
            outputItems: cropCount,
            goldValue: rawGoldValue,
            processingTime: 0,
            requiredLevel: 0,
            canProcess: true,
            inputImage: crop.image,
            outputImage: crop.image,
            reason: 'Sell immediately - no processing time required'
        })
        
        // Seed option
        if (crop.conversionInfo.seedProcessMinutes > 0) {
            const conversions = Math.floor(cropCount / crop.conversionInfo.cropsPerSeed)
            const seedsProduced = conversions * crop.conversionInfo.seedsPerConversion
            const seedGoldValue = seedsProduced * (isStar ? crop.goldValues.seedStar : crop.goldValues.seed)
            const processingTime = conversions * crop.conversionInfo.seedProcessMinutes
            const goldPerHour = processingTime > 0 ? (seedGoldValue / (processingTime / 60)) : 0
            const profitability = rawGoldValue > 0 ? (seedGoldValue / rawGoldValue) : 0
            
            options.push({
                processAs: 'seed',
                profitability,
                goldPerHour,
                inputItems: conversions * crop.conversionInfo.cropsPerSeed,
                outputItems: seedsProduced,
                goldValue: seedGoldValue,
                processingTime,
                requiredLevel: 5,
                canProcess: userLevel >= 5,
                inputImage: crop.image,
                outputImage: crop.seedImage || `/seeds/${harvest.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`,
                reason: profitability > 1.1 ? 'Highly profitable seed conversion' : 
                       profitability > 1.0 ? 'Moderately profitable seed conversion' : 
                       'Less profitable than raw crops'
            })
        }
        
        // Preserve option
        if (crop.goldValues.hasPreserve && crop.conversionInfo.preserveProcessMinutes > 0) {
            const preservesProduced = Math.floor(cropCount / crop.conversionInfo.cropsPerPreserve)
            const preserveGoldValue = preservesProduced * (isStar ? crop.goldValues.preserveStar : crop.goldValues.preserve)
            const processingTime = preservesProduced * crop.conversionInfo.preserveProcessMinutes
            const goldPerHour = processingTime > 0 ? (preserveGoldValue / (processingTime / 60)) : 0
            const profitability = rawGoldValue > 0 ? (preserveGoldValue / rawGoldValue) : 0
            
            options.push({
                processAs: 'preserve',
                profitability,
                goldPerHour,
                inputItems: preservesProduced * crop.conversionInfo.cropsPerPreserve,
                outputItems: preservesProduced,
                goldValue: preserveGoldValue,
                processingTime,
                requiredLevel: 8,
                canProcess: userLevel >= 8,
                inputImage: crop.image,
                outputImage: crop.preserveImage || `/jars/${harvest.cropType.toLowerCase().replace(/\s+/g, '-')}.webp`,
                reason: profitability > 1.1 ? 'Highly profitable preserve conversion' : 
                       profitability > 1.0 ? 'Moderately profitable preserve conversion' : 
                       'Less profitable than raw crops'
            })
        }
        
        // Find best option (prioritize profitability, then gold per hour)
        const availableOptions = options.filter(opt => opt.canProcess)
        const bestOption = availableOptions.length > 0 ? availableOptions.reduce((best, current) => {
            if (current.profitability > best.profitability) return current
            if (current.profitability === best.profitability && current.goldPerHour > best.goldPerHour) return current
            return best
        }) : options[0]
        
        // Generate level warning if needed
        let levelWarning: string | undefined
        const blockedOptions = options.filter(opt => !opt.canProcess)
        if (blockedOptions.length > 0) {
            const maxRequiredLevel = Math.max(...blockedOptions.map(opt => opt.requiredLevel))
            levelWarning = `Upgrade to level ${maxRequiredLevel} to unlock ${blockedOptions.map(opt => opt.processAs).join(' and ')} processing`
        }
        
        recommendations.push({
            cropType: harvest.cropType,
            cropCount,
            isStar,
            recommendations: options.sort((a, b) => b.profitability - a.profitability),
            bestOption: bestOption?.processAs || 'crop',
            levelWarning
        })
    })
    
    return recommendations.filter(rec => rec.recommendations.length > 1) // Only show crops with multiple options
}

function getRecommendedFertilizer(missingBonuses: Bonus[], mode: PlayMode, activeBonuses: Bonus[]): FertiliserType | undefined {
    const priorities = {
        afk: [Bonus.WaterRetain, Bonus.WeedPrevention, Bonus.HarvestIncrease, Bonus.QualityIncrease, Bonus.SpeedIncrease],
        speed: [Bonus.SpeedIncrease, Bonus.HarvestIncrease, Bonus.QualityIncrease, Bonus.WaterRetain, Bonus.WeedPrevention],
        profit: [Bonus.QualityIncrease, Bonus.HarvestIncrease, Bonus.WaterRetain, Bonus.WeedPrevention, Bonus.SpeedIncrease]
    }

    const orderedPriorities = priorities[mode]
    
    for (const bonus of orderedPriorities) {
        if (missingBonuses.includes(bonus)) {
            switch (bonus) {
                case Bonus.WaterRetain: return FertiliserType.HydratePro
                case Bonus.WeedPrevention: return FertiliserType.WeedBlock
                case Bonus.HarvestIncrease: return FertiliserType.HarvestBoost
                case Bonus.QualityIncrease: return FertiliserType.QualityUp
                case Bonus.SpeedIncrease: return FertiliserType.SpeedyGro
            }
        }
    }
    
    return undefined
}

export function getFertilizerDisplayName(fertilizer: FertiliserType): string {
    const names: Record<FertiliserType, string> = {
        [FertiliserType.None]: 'None',
        [FertiliserType.SpeedyGro]: 'Speedy-Gro',
        [FertiliserType.HarvestBoost]: 'Harvest Boost',
        [FertiliserType.QualityUp]: 'Quality Up',
        [FertiliserType.HydratePro]: 'Hydrate Pro',
        [FertiliserType.WeedBlock]: 'Weed Block'
    }
    return names[fertilizer] || fertilizer
}

export function getBonusDisplayName(bonus: Bonus): string {
    const names: Record<Bonus, string> = {
        [Bonus.None]: 'None',
        [Bonus.SpeedIncrease]: 'Speed Boost',
        [Bonus.HarvestIncrease]: 'Harvest Boost',
        [Bonus.QualityIncrease]: 'Quality Boost',
        [Bonus.WaterRetain]: 'Water Retain',
        [Bonus.WeedPrevention]: 'Weed Prevention'
    }
    return names[bonus] || bonus
} 