import { useMemo } from 'react'
import { useGarden } from '@/stores'
import { CropType, FertiliserType, Bonus } from '@/lib/garden-planner'

export interface GardenStats {
    totalPlots: number
    activePlots: number
    totalTiles: number
    occupiedTiles: number
    cropCounts: Partial<Record<CropType, number>>
    fertiliserCounts: Partial<Record<FertiliserType, number>>
    totalCrops: number
    totalFertilisers: number
    plotUtilization: number
    tileUtilization: number
    bonusCoverage: Partial<Record<Bonus, number>>
}

export function useGardenStats(): GardenStats {
    const { garden, version } = useGarden()

    return useMemo(() => {
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
                bonusCoverage: {}
            }
        }

        // Calculate bonuses first
        garden.calculateBonuses()

        const cropCounts: Partial<Record<CropType, number>> = {}
        const fertiliserCounts: Partial<Record<FertiliserType, number>> = {}
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
} 