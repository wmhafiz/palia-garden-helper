import { create } from 'zustand'
import { getCropFromType } from '@/lib/garden-planner'

// Crop code to crop type mapping (v0.4 format)
const cropCodeToType: Record<string, string> = {
    'N': 'none',
    'T': 'tomato',
    'P': 'potato', 
    'R': 'rice',
    'W': 'wheat',
    'C': 'carrot',
    'O': 'onion',
    'Co': 'cotton',
    'B': 'blueberry',
    'A': 'apple',
    'Cr': 'corn',
    'S': 'spicy pepper',
    'Cb': 'napa cabbage',
    'Bk': 'bok choy',
    'Pm': 'rockhopper pumpkin',
    'Bt': 'batterfly bean'
}

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

export interface HarvesterOptions {
    days: number
    includeReplant: boolean
    includeReplantCost: boolean
    level: number
    useGrowthBoost: boolean
    useStarSeeds: boolean
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
    isStar?: boolean
}

interface ProcessorState {
    settings: ProcessorSettings
    harvesterOptions: HarvesterOptions
    output: ProcessorOutput
    updateSettings: (newSettings: Partial<ProcessorSettings>) => void
    updateHarvesterOptions: (newOptions: Partial<HarvesterOptions>) => void
    updateCropSetting: (cropId: string, setting: Partial<ProcessorSetting>) => void
    simulateProcessing: (harvestData: any) => void
    loadSettingsFromSaveCode: (settingsInfo: string) => void
    reset: () => void
}

// Helper function to decode processor settings from save code
function decodeSettings(settingsInfo: string): { harvesterOptions: HarvesterOptions, processorSettings: ProcessorSettings } {
    const harvesterOptions: HarvesterOptions = {
        days: -1,
        includeReplant: true,
        includeReplantCost: true,
        level: 0,
        useGrowthBoost: false,
        useStarSeeds: true,
    }

    const processorSettings: ProcessorSettings = {
        cropSettings: new Map(),
        crafterSetting: 0,
        goldAverageSetting: 'crafterTime'
    }

    if (!settingsInfo) return { harvesterOptions, processorSettings }

    const settings = settingsInfo.split('Cr0')

    for (let setting of settings) {
        if (setting.startsWith('.')) {
            setting = setting.slice(1)

            const cropSettings = setting.split('-')
            for (const cropSetting of cropSettings) {
                if (cropSetting.length === 0) continue

                const codeMatch = cropSetting.match(/^([A-Z][a-z]?)(\.?)(~?)([PS]?)(\d*)/);

                if (!codeMatch) {
                    console.warn(`Invalid crop setting format: ${cropSetting}`)
                    continue
                }

                const code = codeMatch[1] as string
                const isStar = codeMatch[2] !== '.'
                const hasGrowthBoost = codeMatch[3] === '~'
                const processAs = codeMatch[4] === 'P' ? 'preserve' : codeMatch[4] === 'S' ? 'seed' : 'crop'
                const crafters = codeMatch[5] ? parseInt(codeMatch[5], 10) : 1

                // Convert crop code to crop type using the mapping
                const cropType = cropCodeToType[code]
                if (!cropType || cropType === 'none') continue

                const cropId = `${cropType}${isStar ? '-star' : '-base'}${hasGrowthBoost ? '-growth' : ''}`

                const setting: ProcessorSetting = {
                    cropType,
                    isStar,
                    processAs: processAs as 'crop' | 'seed' | 'preserve',
                    crafters,
                    targetTime: 0,
                    isActive: true,
                    hasPreserve: processAs === 'preserve',
                    count: 0,
                }

                processorSettings.cropSettings.set(cropId, setting)
            }
        } else {
            // Parse harvester settings
            const harvesterSettings = (setting.match(/[A-Z][a-z0-9]*/g) as string[]) || []
            const exactHandlers: Record<string, () => void> = {
                'Nr': () => { harvesterOptions.includeReplant = false },
                'Nrc': () => { harvesterOptions.includeReplantCost = false },
                'Nss': () => { harvesterOptions.useStarSeeds = false },
                'Gb': () => { harvesterOptions.useGrowthBoost = true },
                'Gt': () => { processorSettings.goldAverageSetting = 'growthTick' }
            }

            for (const harvesterSetting of harvesterSettings) {
                if (exactHandlers[harvesterSetting]) {
                    exactHandlers[harvesterSetting]()
                    continue
                }

                const match = harvesterSetting.match(/^([A-Z])(\d+)$/)
                if (match) {
                    const [, prefix, value] = match
                    const number = parseInt(value || '0')

                    switch (prefix) {
                        case 'D':
                            harvesterOptions.days = number
                            break
                        case 'L':
                            harvesterOptions.level = number
                            break
                    }
                }
            }
        }
    }

    return { harvesterOptions, processorSettings }
}

const initialHarvesterOptions: HarvesterOptions = {
    days: -1,
    includeReplant: true,
    includeReplantCost: true,
    level: 0,
    useGrowthBoost: false,
    useStarSeeds: true,
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
    harvesterOptions: initialHarvesterOptions,
    output: initialOutput,

    updateSettings: (newSettings) => {
        set((state) => ({
            settings: { ...state.settings, ...newSettings }
        }))
    },

    updateHarvesterOptions: (newOptions) => {
        set((state) => ({
            harvesterOptions: { ...state.harvesterOptions, ...newOptions }
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

    loadSettingsFromSaveCode: (settingsInfo: string) => {
        const { harvesterOptions, processorSettings } = decodeSettings(settingsInfo)
        set({
            harvesterOptions,
            settings: processorSettings
        })
    },

    simulateProcessing: (harvestData) => {
        const { settings, harvesterOptions } = get()
        
        // Calculate star base chance based on gardening level
        const starBaseChance = 0.25 + (harvesterOptions.useStarSeeds ? 0.25 : 0) + (harvesterOptions.level * 0.02)
        const finalStarChance = Math.min(1, starBaseChance)
        
        // Basic processing simulation - this would be more complex in the real implementation
        let totalGoldValue = 0
        let totalProcessTime = 0
        let seedCollectorsCount = 0
        let preserveJarsCount = 0
        
        const crops = new Map<string, ProcessOutputInfo>()
        const seeds = new Map<string, ProcessOutputInfo>()
        const preserves = new Map<string, ProcessOutputInfo>()

        // Helper function to process individual crop yields
        const processCropYield = (cropId: string, cropType: string, cropYield: number, isStar: boolean, cropSetting: ProcessorSetting | undefined) => {
            if (!cropSetting || !cropSetting.isActive) {
                // Process as crop (no processing)
                const goldValue = cropYield * (isStar ? 1.5 : 1) * 10 // Simplified gold calculation
                crops.set(cropId, {
                    count: cropYield,
                    minutesProcessedTotal: 0,
                    minutesProcessedEffective: 0,
                    crafterCount: 0,
                    cropType,
                    itemType: 'crop',
                    goldValue,
                    isStar
                })
                totalGoldValue += goldValue
            } else {
                // Process according to settings
                const crop = getCropFromType(cropType as any)
                
                if (cropSetting.processAs === 'seed' && crop?.conversionInfo) {
                    const seedCount = Math.floor(cropYield / crop.conversionInfo.cropsPerSeed)
                    const processTime = seedCount * crop.conversionInfo.seedProcessMinutes
                    const goldValue = seedCount * (crop.goldValues?.seed || crop.goldValues?.crop || 0) * (isStar ? 1.5 : 1)
                    
                    seeds.set(cropId, {
                        count: seedCount,
                        minutesProcessedTotal: processTime,
                        minutesProcessedEffective: Math.ceil(processTime / cropSetting.crafters),
                        crafterCount: cropSetting.crafters,
                        cropType,
                        itemType: 'seed',
                        goldValue,
                        isStar
                    })
                    
                    totalGoldValue += goldValue
                    totalProcessTime = Math.max(totalProcessTime, processTime / cropSetting.crafters)
                    seedCollectorsCount += cropSetting.crafters
                    
                } else if (cropSetting.processAs === 'preserve' && crop?.conversionInfo && crop.conversionInfo.cropsPerPreserve > 0) {
                    const preserveCount = Math.floor(cropYield / crop.conversionInfo.cropsPerPreserve)
                    const processTime = preserveCount * crop.conversionInfo.preserveProcessMinutes
                    const goldValue = preserveCount * (crop.goldValues?.preserve || crop.goldValues?.crop || 0) * (isStar ? 1.5 : 1)
                    
                    preserves.set(cropId, {
                        count: preserveCount,
                        minutesProcessedTotal: processTime,
                        minutesProcessedEffective: Math.ceil(processTime / cropSetting.crafters),
                        crafterCount: cropSetting.crafters,
                        cropType,
                        itemType: 'preserve',
                        goldValue,
                        isStar
                    })
                    
                    totalGoldValue += goldValue
                    totalProcessTime = Math.max(totalProcessTime, processTime / cropSetting.crafters)
                    preserveJarsCount += cropSetting.crafters
                } else {
                    // Default to crop processing
                    const goldValue = cropYield * (isStar ? 1.5 : 1) * 10
                    crops.set(cropId, {
                        count: cropYield,
                        minutesProcessedTotal: 0,
                        minutesProcessedEffective: 0,
                        crafterCount: 0,
                        cropType,
                        itemType: 'crop',
                        goldValue,
                        isStar
                    })
                    totalGoldValue += goldValue
                }
            }
        }

        if (harvestData?.cropHarvests) {
            for (const harvest of harvestData.cropHarvests) {
                // Process both star and base versions of each crop
                const starYield = Math.round(harvest.totalYield * finalStarChance)
                const baseYield = harvest.totalYield - starYield

                // Process star crops
                if (starYield > 0) {
                    const starCropId = `${harvest.cropType}-star`
                    const cropSetting = settings.cropSettings.get(starCropId)
                    processCropYield(starCropId, harvest.cropType, starYield, true, cropSetting)
                }

                // Process base crops
                if (baseYield > 0) {
                    const baseCropId = `${harvest.cropType}-base`
                    const cropSetting = settings.cropSettings.get(baseCropId)
                    processCropYield(baseCropId, harvest.cropType, baseYield, false, cropSetting)
                }
            }
        }

        // Calculate average gold per hour based on selected method
        let averageGoldPerHour = 0
        if (settings.goldAverageSetting === 'crafterTime') {
            // Gold / Overall Process Time (in hours)
            averageGoldPerHour = totalProcessTime > 0 ? (totalGoldValue / (totalProcessTime / 60)) : 0
        } else {
            // Gold / Growth Ticks (Day of Last Harvest)
            // This would need harvest data to calculate properly
            // For now, we'll use a simplified calculation
            const lastHarvestDay = harvestData?.lastHarvestDay || harvestData?.totalDays || 1
            averageGoldPerHour = totalGoldValue / lastHarvestDay
        }

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
            harvesterOptions: initialHarvesterOptions,
            output: initialOutput
        })
    }
})) 