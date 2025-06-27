import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { persist } from 'zustand/middleware'
import { useGarden } from './useGarden'
import { getCropFromType, Bonus } from '@/lib/garden-planner'
import { calculateEarthTimeForPaliaDay } from '@/lib/utils/palia-time'

// Data structure interfaces as defined in the feature spec
export interface PlotLocation {
  plotRow: number
  plotCol: number
  tileRow: number
  tileCol: number
}

export interface CropScheduleInfo {
  cropType: string              // e.g., 'Tomato', 'Carrot'
  count: number                 // How many of this crop
  locations: PlotLocation[]     // Where these crops are located
  image?: string                // Crop image for display
  isReharvestable: boolean      // Whether this crop can be reharvested
  reharvestCount?: number       // Which reharvest cycle (1, 2, 3)
  replantedOnDay?: number       // Day when this crop was replanted (if applicable)
}

export interface ReplantInfo {
  cropType: string
  count: number
  replantDay: number            // Palia day when replanted
  replantTime: Date            // Real-world time when replanted
  locations: PlotLocation[]   // Where the crops were replanted
}

export interface ScheduleAction {
  type: 'water' | 'harvest' | 'replant' 
  crops: CropScheduleInfo[]     // Which crops need this action
  priority: 'high' | 'medium' | 'low'
}

export interface ScheduleEntry {
  day: number                    // Palia day number (1, 2, 3, etc.)
  earthTime: Date               // Real-world time when action is needed
  actions: ScheduleAction[]     // List of actions needed on this day
  isCompleted: boolean          // Whether user has marked this day as done
}

interface WateringScheduleState {
  // State
  schedule: ScheduleEntry[]
  isActive: boolean
  isPaused: boolean
  startTime: Date | null
  pausedTime: Date | null        // When the schedule was paused
  offlineGrowthTime: Date | null // When crops last grew while offline
  currentDay: number
  replantedCrops: ReplantInfo[]  // Track crops that have been replanted
  
  // Actions
  startSchedule: () => void
  stopSchedule: () => void
  pauseSchedule: () => void
  resumeSchedule: () => void
  markDayCompleted: (day: number) => void
  markDayIncomplete: (day: number) => void
  regenerateSchedule: () => void
  replantCrops: (cropType: string, harvestDay: number, locations: PlotLocation[]) => void
  getNextActionTime: () => Date | null
  
  // Computed
  getUpcomingActions: (days: number) => ScheduleEntry[]
  getTodaysActions: () => ScheduleEntry | null
}

// Time conversion constants based on existing Palia time system
const PALIA_HOUR_TO_REAL_MINUTES = 2.5 // 1 Palia hour = 2.5 real minutes
const PALIA_DAY_TO_REAL_HOURS = 1 // 1 Palia day = 1 real hour
const HARVEST_BOOST_PALIA_HOUR = 6 // 6:00 AM Palia time

export const useWateringSchedule = create<WateringScheduleState>()(
  persist(
    subscribeWithSelector((set, get) => ({
    // Initial state
    schedule: [],
    isActive: false,
    isPaused: false,
    startTime: null,
    pausedTime: null,
    offlineGrowthTime: null,
    currentDay: 0,
    replantedCrops: [],

    startSchedule: () => {
      const startTime = new Date()
      set({ 
        isActive: true, 
        isPaused: false,
        startTime, 
        pausedTime: null,
        offlineGrowthTime: null,
        currentDay: 0 
      })
      
      // Generate initial schedule
      get().regenerateSchedule()
      
      // Auto-mark Day 0 as completed (crops are planted with initial watering)
      get().markDayCompleted(0)
    },

    stopSchedule: () => {
      set({ 
        isActive: false,
        isPaused: false,
        startTime: null,
        pausedTime: null,
        offlineGrowthTime: null,
        schedule: [], 
        currentDay: 0,
        replantedCrops: []
      })
    },

    pauseSchedule: () => {
      const now = new Date()
      set({ 
        isPaused: true,
        pausedTime: now
      })
    },

    resumeSchedule: () => {
      const { pausedTime, startTime, offlineGrowthTime } = get()
      if (!pausedTime || !startTime) return

      const now = new Date()
      const offlineDuration = now.getTime() - pausedTime.getTime()

      // Check if crops should grow one stage while offline
      let newOfflineGrowthTime = offlineGrowthTime
      if (!offlineGrowthTime) {
        // First time going offline - allow one growth stage
        newOfflineGrowthTime = new Date(pausedTime.getTime() + (1 * 60 * 60 * 1000)) // 1 hour = 1 Palia day
      }

      // Adjust start time to account for offline period (minus the one allowed growth stage)
      const allowedOfflineGrowth = 1 * 60 * 60 * 1000 // 1 hour in milliseconds
      const adjustedOfflineTime = Math.max(0, offlineDuration - allowedOfflineGrowth)
      const newStartTime = new Date(startTime.getTime() + adjustedOfflineTime)

      set({ 
        isPaused: false,
        pausedTime: null,
        offlineGrowthTime: newOfflineGrowthTime,
        startTime: newStartTime
      })

      // Regenerate schedule with adjusted timing
      get().regenerateSchedule()
    },

    markDayCompleted: (day: number) => {
      const { schedule } = get()
      const updatedSchedule = schedule.map(entry => 
        entry.day === day ? { ...entry, isCompleted: true } : entry
      )
      set({ schedule: updatedSchedule })
    },

    markDayIncomplete: (day: number) => {
      const { schedule } = get()
      const updatedSchedule = schedule.map(entry => 
        entry.day === day ? { ...entry, isCompleted: false } : entry
      )
      set({ schedule: updatedSchedule })
    },

    regenerateSchedule: () => {
      const { startTime, isActive, replantedCrops } = get()
      if (!startTime || !isActive) return

      const garden = useGarden.getState().garden
      if (!garden) return

      const schedule = generateScheduleFromGarden(garden, startTime, replantedCrops)
      set({ schedule })
    },

    replantCrops: (cropType: string, harvestDay: number, locations: PlotLocation[]) => {
      const { startTime, replantedCrops } = get()
      if (!startTime) return

      // Calculate the real-world time for the replant
      const replantTime = convertPaliaDayToEarthTime(harvestDay, startTime)
      
      // Create replant info
      const replantInfo: ReplantInfo = {
        cropType,
        count: locations.length,
        replantDay: harvestDay,
        replantTime,
        locations
      }

      // Add to replanted crops list
      const updatedReplantedCrops = [...replantedCrops, replantInfo]
      set({ replantedCrops: updatedReplantedCrops })

      // Regenerate schedule to include the new replanted crops
      get().regenerateSchedule()
    },

    getNextActionTime: () => {
      const { schedule } = get()
      const now = new Date()
      
      const nextEntry = schedule.find(entry => 
        !entry.isCompleted && entry.earthTime > now
      )
      
      return nextEntry ? nextEntry.earthTime : null
    },

    getUpcomingActions: (days: number) => {
      const { schedule } = get()
      const now = new Date()
      const futureTime = new Date(now.getTime() + (days * 24 * 60 * 60 * 1000))
      
      return schedule.filter(entry => 
        entry.earthTime >= now && entry.earthTime <= futureTime
      )
    },

    getTodaysActions: () => {
      const { schedule } = get()
      const now = new Date()
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const todayEnd = new Date(todayStart.getTime() + (24 * 60 * 60 * 1000))
      
      return schedule.find(entry => 
        entry.earthTime >= todayStart && entry.earthTime < todayEnd
      ) || null
    }
    })),
    {
      name: 'watering-schedule-storage',
      // Only persist certain fields, not the entire state
      partialize: (state) => ({
        isActive: state.isActive,
        isPaused: state.isPaused,
        startTime: state.startTime,
        pausedTime: state.pausedTime,
        offlineGrowthTime: state.offlineGrowthTime,
        currentDay: state.currentDay,
        replantedCrops: state.replantedCrops,
        schedule: state.schedule
      }),
      // Custom storage with Date handling
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name)
          if (!str) return null
          
          return JSON.parse(str, (key, value) => {
            if (value && typeof value === 'object' && value.__type === 'Date') {
              return new Date(value.value)
            }
            return value
          })
        },
        setItem: (name, value) => {
          const str = JSON.stringify(value, (key, val) => {
            if (val instanceof Date) {
              return { __type: 'Date', value: val.toISOString() }
            }
            return val
          })
          localStorage.setItem(name, str)
        },
        removeItem: (name) => localStorage.removeItem(name)
      }
    }
  )
)

/**
 * Generates a complete watering and harvest schedule from the current garden state
 */
function generateScheduleFromGarden(garden: any, startTime: Date, replantedCrops: ReplantInfo[] = []): ScheduleEntry[] {
  const schedule: ScheduleEntry[] = []
  const cropAnalysis = analyzeCropsInGarden(garden)
  
  // Add replanted crops to the analysis
  const allCrops = [...cropAnalysis, ...convertReplantedCropsToScheduleInfo(replantedCrops)]
  
  // Calculate Water Retention coverage percentage
  garden.calculateBonuses()
  const bonusCoverage = garden.getBonusCoverage()
  const totalCrops = garden.getTotalCropCount()
  const waterRetentionPercentage = totalCrops > 0 ? (bonusCoverage[Bonus.WaterRetain] / totalCrops) * 100 : 0
  
  // Calculate the maximum day needed (when the last crop finishes all reharvests)
  const maxDays = calculateMaxScheduleDays(allCrops)
  
  // Generate schedule for every single day until the last harvest, starting from Day 0
  for (let day = 0; day <= maxDays; day++) {
    const daySchedule = generateDaySchedule(day, allCrops, startTime, waterRetentionPercentage)
    // Include ALL days, even those without actions
    schedule.push(daySchedule)
  }
  
  return schedule.sort((a, b) => a.earthTime.getTime() - b.earthTime.getTime())
}

/**
 * Calculate the maximum number of days needed for the complete schedule
 * This includes the last possible harvest day for all crops including reharvests
 */
function calculateMaxScheduleDays(crops: CropScheduleInfo[]): number {
  let maxDay = 30 // Default minimum
  
  for (const cropInfo of crops) {
    const crop = getCropFromType(cropInfo.cropType as any)
    if (!crop) continue
    
    const growthTime = crop.produceInfo.growthTime
    let cropMaxDay = growthTime // Initial harvest day
    
    // If reharvestable, calculate the last possible harvest day
    if (crop.produceInfo.isReharvestable) {
      const reharvestCooldown = crop.produceInfo.reharvestCooldown || 2
      const reharvestLimit = crop.produceInfo.reharvestLimit || 3
      
      // Last reharvest day = initial harvest + (reharvest cycles * cooldown)
      const lastReharvestDay = growthTime + (reharvestLimit * reharvestCooldown)
      cropMaxDay = Math.max(cropMaxDay, lastReharvestDay)
    }
    
    maxDay = Math.max(maxDay, cropMaxDay)
  }
  
  return maxDay
}

/**
 * Analyzes all crops in the garden and returns their schedule requirements
 */
function analyzeCropsInGarden(garden: any) {
  const cropsByType: Map<string, CropScheduleInfo> = new Map()
  
  for (let plotRow = 0; plotRow < garden.rows; plotRow++) {
    for (let plotCol = 0; plotCol < garden.columns; plotCol++) {
      const plot = garden.getPlot(plotRow, plotCol)
      if (!plot || !plot.isActive) continue
      
      for (let tileRow = 0; tileRow < 3; tileRow++) {
        for (let tileCol = 0; tileCol < 3; tileCol++) {
          const tile = plot.getTile(tileRow, tileCol)
          if (!tile?.crop) continue
          
          const crop = getCropFromType(tile.crop.type as any)
          if (!crop) continue
          
          const location: PlotLocation = { plotRow, plotCol, tileRow, tileCol }
          const cropKey = tile.crop.type
          
          if (cropsByType.has(cropKey)) {
            const existing = cropsByType.get(cropKey)!
            existing.count++
            existing.locations.push(location)
          } else {
            cropsByType.set(cropKey, {
              cropType: tile.crop.type,
              count: 1,
              locations: [location],
              image: crop.image,
              isReharvestable: crop.produceInfo.isReharvestable || false,
              reharvestCount: 1
            })
          }
        }
      }
    }
  }
  
  return Array.from(cropsByType.values())
}

/**
 * Generates the schedule for a specific day
 */
function generateDaySchedule(day: number, crops: CropScheduleInfo[], startTime: Date, waterRetentionPercentage: number = 0): ScheduleEntry {
  const actions: ScheduleAction[] = []
  
  // Calculate earth time for this day (6:00 AM Palia time = harvest boost time)
  const earthTime = calculateEarthTimeForPaliaDay(day, startTime)
  
  // Determine what actions are needed on this day
  const harvestCrops: CropScheduleInfo[] = []
  const waterCrops: CropScheduleInfo[] = []
  
  for (const cropInfo of crops) {
    const crop = getCropFromType(cropInfo.cropType as any)
    if (!crop) continue
    
    // Check if this crop needs harvesting on this day
    if (needsHarvesting(crop, day, cropInfo)) {
      harvestCrops.push(cropInfo)
    }
    
    // Check if this crop needs watering on this day
    if (needsWatering(crop, day, cropInfo, waterRetentionPercentage)) {
      waterCrops.push(cropInfo)
    }
  }
  
  // Add harvest action if needed
  if (harvestCrops.length > 0) {
    actions.push({
      type: 'harvest',
      crops: harvestCrops,
      priority: 'high'
    })
  }
  
  // Add water action if needed
  if (waterCrops.length > 0) {
    actions.push({
      type: 'water',
      crops: waterCrops,
      priority: 'medium'
    })
  }
  
  return {
    day,
    earthTime,
    actions,
    isCompleted: false
  }
}



/**
 * Determines if a crop needs harvesting on a specific day
 */
function needsHarvesting(crop: any, day: number, cropInfo: CropScheduleInfo): boolean {
  const growthTime = crop.produceInfo.growthTime
  
  // For replanted crops, adjust the calculation based on replant day
  const effectiveStartDay = cropInfo.replantedOnDay || 0
  const effectiveDay = day - effectiveStartDay
  
  // Skip if this day is before the crop was planted/replanted or on planting day
  if (effectiveDay <= 0) {
    return false
  }
  
  // Initial harvest (Day 0 = planting, so harvest on growth time day)
  if (effectiveDay === growthTime) {
    return true
  }
  
  // Reharvest cycles
  if (crop.produceInfo.isReharvestable && effectiveDay > growthTime) {
    const reharvestCooldown = crop.produceInfo.reharvestCooldown || 2
    const daysSinceFirstHarvest = effectiveDay - growthTime
    
    // Check if this day aligns with a reharvest cycle
    if (daysSinceFirstHarvest % reharvestCooldown === 0) {
      // Check if we haven't exceeded the reharvest limit
      const reharvestCycle = Math.floor(daysSinceFirstHarvest / reharvestCooldown)
      const reharvestLimit = crop.produceInfo.reharvestLimit || 3
      
      return reharvestCycle <= reharvestLimit
    }
  }
  
  return false
}

/**
 * Determines if a crop needs watering on a specific day
 * Takes into account individual crop Water Retention bonus effects
 */
function needsWatering(crop: any, day: number, cropInfo: CropScheduleInfo, waterRetentionPercentage: number = 0): boolean {
  // For replanted crops, adjust the calculation based on replant day
  const effectiveStartDay = cropInfo.replantedOnDay || 0
  const effectiveDay = day - effectiveStartDay
  
  // Skip if this day is before the crop was planted/replanted
  if (effectiveDay < 0) {
    return false
  }
  
  // Day 0 is planting day - crops are already watered when planted
  if (effectiveDay === 0) {
    return false
  }
  
  // Skip watering on harvest days for efficiency (harvest includes watering)
  const isHarvestDay = needsHarvesting(crop, day, cropInfo)
  if (isHarvestDay) {
    return false // No separate watering needed on harvest days
  }
  
  // Check if this specific crop has Water Retention bonus
  // This needs to check the actual tile bonuses from the garden, not just the crop's natural bonus
  // For now, we'll use a simplified approach and enhance this in Phase 2
  
  // Get the garden to check actual tile bonuses for this crop's locations
  const garden = useGarden.getState().garden
  if (!garden) return true
  
  // Check if ANY of this crop's locations have Water Retention bonus
  let hasWaterRetentionBonus = false
  for (const location of cropInfo.locations) {
    const plot = garden.getPlot(location.plotRow, location.plotCol)
    if (plot && plot.isActive) {
      const tile = plot.getTile(location.tileRow, location.tileCol)
      if (tile && tile.bonuses && tile.bonuses.includes(Bonus.WaterRetain)) {
        hasWaterRetentionBonus = true
        break
      }
    }
  }
  
  // Crops with Water Retention bonus NEVER need watering after initial planting (Day 0)
  // The bonus retains water throughout the entire growth cycle
  if (hasWaterRetentionBonus) {
    return false
  }
  
  // Crops without Water Retention need daily watering (except Day 0 which is already handled above)
  return true
}

/**
 * Converts a Palia day number to the corresponding real-world time
 */
function convertPaliaDayToEarthTime(paliaDay: number, scheduleStartTime: Date): Date {
  // Ensure scheduleStartTime is a proper Date object
  if (!(scheduleStartTime instanceof Date)) {
    scheduleStartTime = new Date(scheduleStartTime)
  }
  
  // Each Palia day = 1 real hour
  const hoursFromStart = (paliaDay - 1) * PALIA_DAY_TO_REAL_HOURS
  
  // Calculate the harvest boost time (6:00 AM Palia = :15 past the hour in real time)
  const baseTime = new Date(scheduleStartTime.getTime() + (hoursFromStart * 60 * 60 * 1000))
  
  // Set to :15 minutes past the hour for harvest boost timing
  baseTime.setMinutes(15)
  baseTime.setSeconds(0)
  baseTime.setMilliseconds(0)
  
  return baseTime
}

/**
 * Determines if a crop is eligible for replanting on a specific harvest day
 * For reharvestable crops, only allow replanting after all reharvest cycles are exhausted
 */
export function isCropEligibleForReplanting(crop: any, harvestDay: number, cropInfo: CropScheduleInfo): boolean {
  if (!crop.produceInfo.isReharvestable) {
    // Non-reharvestable crops can always be replanted after harvest
    return true
  }

  const growthTime = crop.produceInfo.growthTime
  const reharvestCooldown = crop.produceInfo.reharvestCooldown || 2
  const reharvestLimit = crop.produceInfo.reharvestLimit || 3
  
  // For replanted crops, adjust the calculation based on replant day
  const effectiveStartDay = cropInfo.replantedOnDay || 0
  const effectiveDay = harvestDay - effectiveStartDay
  
  // Skip if this day is before the crop was planted/replanted or on planting day
  if (effectiveDay <= 0) {
    return false
  }

  // If this is the initial harvest, don't allow replanting yet
  if (effectiveDay === growthTime) {
    return false
  }

  // For reharvest days, check if this is the final harvest
  if (effectiveDay > growthTime) {
    const daysSinceFirstHarvest = effectiveDay - growthTime
    
    // Check if this day aligns with a reharvest cycle
    if (daysSinceFirstHarvest % reharvestCooldown === 0) {
      const reharvestCycle = Math.floor(daysSinceFirstHarvest / reharvestCooldown)
      
      // Only allow replanting if this is the final reharvest (cycle equals limit)
      return reharvestCycle === reharvestLimit
    }
  }

  return false
}

/**
 * Converts replanted crop info to schedule info format
 */
function convertReplantedCropsToScheduleInfo(replantedCrops: ReplantInfo[]): CropScheduleInfo[] {
  const scheduleInfos: CropScheduleInfo[] = []
  
  for (const replant of replantedCrops) {
    const crop = getCropFromType(replant.cropType as any)
    if (!crop) continue
    
    scheduleInfos.push({
      cropType: replant.cropType,
      count: replant.count,
      locations: replant.locations,
      image: crop.image,
      isReharvestable: crop.produceInfo.isReharvestable || false,
      reharvestCount: 1,
      replantedOnDay: replant.replantDay
    })
  }
  
  return scheduleInfos
}