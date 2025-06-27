import { create } from 'zustand'
import { getCropFromType } from '@/lib/garden-planner'

export interface ProcessorSetting {
    cropType: string
    isStar: boolean
    processAs: 'crop' | 'seed' | 'preserve'
    crafters: number
    targetTime: number
    isActive: boolean
    hasPreserve: boolean
    count: number
}

export interface ProcessorSettings {
    cropSettings: Map<string, ProcessorSetting>
    goldAverageSetting: 'crafterTime' | 'growthTick'
    crafterSetting: number
}

export interface ProcessorOutput {
    crops: Map<string, ProcessOutputInfo>
    seeds: Map<string, ProcessOutputInfo>
    preserves: Map<string, ProcessOutputInfo>
    totalGoldValue: number
    averageGoldPerHour: number
    seedCollectorsCount: number
    preserveJarsCount: number
    seedCollectorImage: string
    preserveJarImage: string
}

export interface ProcessOutputInfo {
    count: number
    minutesProcessedTotal: number
    minutesProcessedEffective: number
    crafterCount: number
    cropType: string
    itemType: 'crop' | 'seed' | 'preserve'
    goldValue: number
}

interface ProcessorState {
    settings: ProcessorSettings
    output: ProcessorOutput
    updateSettings: (newSettings: Partial<ProcessorSettings>) => void
    updateCropSetting: (cropId: string, setting: Partial<ProcessorSetting>) => void
    simulateProcessing: (harvestData: any) => void
    reset: () => void
}

const initialSettings: ProcessorSettings = {
    cropSettings: new Map(),
    goldAverageSetting: 'crafterTime',
    crafterSetting: 0
}

const initialOutput: ProcessorOutput = {
    crops: new Map(),
    seeds: new Map(),
    preserves: new Map(),
    totalGoldValue: 0,
    averageGoldPerHour: 0,
    seedCollectorsCount: 0,
    preserveJarsCount: 0,
    seedCollectorImage: '/crafters/seeder.webp',
    preserveJarImage: '/crafters/preserve-jar.webp'
}

export const useProcessor = create<ProcessorState>((set, get) => ({
    settings: initialSettings,
    output: initialOutput,

    updateSettings: (newSettings) => {
        set((state) => ({
            settings: { ...state.settings, ...newSettings }
        }))
    },

    updateCropSetting: (cropId, setting) => {
        set((state) => {
            const newCropSettings = new Map(state.settings.cropSettings)
            const currentSetting = newCropSettings.get(cropId)
            
            if (currentSetting) {
                newCropSettings.set(cropId, { ...currentSetting, ...setting })
            } else {
                // Create new setting with defaults
                const crop = getCropFromType(cropId as any)
                newCropSettings.set(cropId, {
                    cropType: cropId,
                    isStar: false,
                    processAs: 'crop',
                    crafters: 1,
                    targetTime: 0,
                    isActive: true,
                    hasPreserve: crop?.conversionInfo?.preserveProcessMinutes ? true : false,
                    count: 0,
                    ...setting
                })
            }

            return {
                settings: {
                    ...state.settings,
                    cropSettings: newCropSettings
                }
            }
        })
    },

    simulateProcessing: (harvestData) => {
        const { settings } = get()
        
        // Basic processing simulation - this would be more complex in the real implementation
        let totalGoldValue = 0
        let totalProcessTime = 0
        let seedCollectorsCount = 0
        let preserveJarsCount = 0
        
        const crops = new Map<string, ProcessOutputInfo>()
        const seeds = new Map<string, ProcessOutputInfo>()
        const preserves = new Map<string, ProcessOutputInfo>()

        if (harvestData?.cropHarvests) {
            for (const harvest of harvestData.cropHarvests) {
                const cropSetting = settings.cropSettings.get(harvest.cropType)
                
                if (!cropSetting || !cropSetting.isActive) {
                    // Process as crop (no processing)
                    crops.set(harvest.cropType, {
                        count: harvest.totalYield,
                        minutesProcessedTotal: 0,
                        minutesProcessedEffective: 0,
                        crafterCount: 0,
                        cropType: harvest.cropType,
                        itemType: 'crop',
                        goldValue: harvest.totalValue
                    })
                    totalGoldValue += harvest.totalValue
                } else {
                    // Process according to settings
                    const crop = getCropFromType(harvest.cropType as any)
                    
                    if (cropSetting.processAs === 'seed' && crop?.conversionInfo) {
                        const seedCount = Math.floor(harvest.totalYield / crop.conversionInfo.cropsPerSeed)
                        const processTime = seedCount * crop.conversionInfo.seedProcessMinutes
                        const goldValue = seedCount * (crop.goldValues?.seed || crop.goldValues?.crop || 0)
                        
                        seeds.set(harvest.cropType, {
                            count: seedCount,
                            minutesProcessedTotal: processTime,
                            minutesProcessedEffective: Math.ceil(processTime / cropSetting.crafters),
                            crafterCount: cropSetting.crafters,
                            cropType: harvest.cropType,
                            itemType: 'seed',
                            goldValue
                        })
                        
                        totalGoldValue += goldValue
                        totalProcessTime = Math.max(totalProcessTime, processTime / cropSetting.crafters)
                        seedCollectorsCount += cropSetting.crafters
                        
                    } else if (cropSetting.processAs === 'preserve' && crop?.conversionInfo && crop.conversionInfo.cropsPerPreserve > 0) {
                        const preserveCount = Math.floor(harvest.totalYield / crop.conversionInfo.cropsPerPreserve)
                        const processTime = preserveCount * crop.conversionInfo.preserveProcessMinutes
                        const goldValue = preserveCount * (crop.goldValues?.preserve || crop.goldValues?.crop || 0)
                        
                        preserves.set(harvest.cropType, {
                            count: preserveCount,
                            minutesProcessedTotal: processTime,
                            minutesProcessedEffective: Math.ceil(processTime / cropSetting.crafters),
                            crafterCount: cropSetting.crafters,
                            cropType: harvest.cropType,
                            itemType: 'preserve',
                            goldValue
                        })
                        
                        totalGoldValue += goldValue
                        totalProcessTime = Math.max(totalProcessTime, processTime / cropSetting.crafters)
                        preserveJarsCount += cropSetting.crafters
                    } else {
                        // Default to crop processing
                        crops.set(harvest.cropType, {
                            count: harvest.totalYield,
                            minutesProcessedTotal: 0,
                            minutesProcessedEffective: 0,
                            crafterCount: 0,
                            cropType: harvest.cropType,
                            itemType: 'crop',
                            goldValue: harvest.totalValue
                        })
                        totalGoldValue += harvest.totalValue
                    }
                }
            }
        }

        const averageGoldPerHour = totalProcessTime > 0 ? (totalGoldValue / (totalProcessTime / 60)) : 0

        set({
            output: {
                crops,
                seeds,
                preserves,
                totalGoldValue,
                averageGoldPerHour,
                seedCollectorsCount,
                preserveJarsCount,
                seedCollectorImage: '/crafters/seeder.webp',
                preserveJarImage: '/crafters/preserve-jar.webp'
            }
        })
    },

    reset: () => {
        set({
            settings: initialSettings,
            output: initialOutput
        })
    }
})) 