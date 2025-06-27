import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
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
  startTime: Date | null
  currentDay: number
  
  // Actions
  startSchedule: () => void
  stopSchedule: () => void
  markDayCompleted: (day: number) => void
  markDayIncomplete: (day: number) => void
  regenerateSchedule: () => void
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
  subscribeWithSelector((set, get) => ({
    // Initial state
    schedule: [],
    isActive: false,
    startTime: null,
    currentDay: 1,

    startSchedule: () => {
      const startTime = new Date()
      set({ 
        isActive: true, 
        startTime, 
        currentDay: 1 
      })
      
      // Generate initial schedule
      get().regenerateSchedule()
    },

    stopSchedule: () => {
      set({ 
        isActive: false, 
        startTime: null, 
        schedule: [], 
        currentDay: 1 
      })
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
      const { startTime, isActive } = get()
      if (!startTime || !isActive) return

      const garden = useGarden.getState().garden
      if (!garden) return

      const schedule = generateScheduleFromGarden(garden, startTime)
      set({ schedule })
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
  }))
)

/**
 * Generates a complete watering and harvest schedule from the current garden state
 */
function generateScheduleFromGarden(garden: any, startTime: Date): ScheduleEntry[] {
  const schedule: ScheduleEntry[] = []
  const cropAnalysis = analyzeCropsInGarden(garden)
  
  // Generate schedule for up to 30 days ahead
  const maxDays = 30
  
  for (let day = 1; day <= maxDays; day++) {
    const daySchedule = generateDaySchedule(day, cropAnalysis, startTime)
    if (daySchedule.actions.length > 0) {
      schedule.push(daySchedule)
    }
  }
  
  return schedule.sort((a, b) => a.earthTime.getTime() - b.earthTime.getTime())
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
function generateDaySchedule(day: number, crops: CropScheduleInfo[], startTime: Date): ScheduleEntry {
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
    if (needsWatering(crop, day, cropInfo)) {
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
  
  // Initial harvest
  if (day === growthTime) {
    return true
  }
  
  // Reharvest cycles
  if (crop.produceInfo.isReharvestable && day > growthTime) {
    const reharvestCooldown = crop.produceInfo.reharvestCooldown || 2
    const daysSinceFirstHarvest = day - growthTime
    
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
 * Takes into account Water Retention bonus effects
 */
function needsWatering(crop: any, day: number, cropInfo: CropScheduleInfo): boolean {
  // In Palia, crops generally need watering every day unless they have water retention
  
  // Check if crop has natural water retention bonus
  const hasWaterRetention = crop.cropBonus === Bonus.WaterRetain
  
  // Enhanced logic for Phase 1:
  // - Crops with Water Retention (Tomato, Potato, Napa Cabbage) need water every other day
  // - All other crops need daily watering
  // - Future phases will add fertilizer and adjacency bonus checks
  
  if (hasWaterRetention) {
    // Water retention prevents needing water for one day
    // So water every other day instead of every day
    return day % 2 === 1
  }
  
  // Most crops need daily watering
  // Skip watering on harvest days for efficiency (harvest includes watering)
  const isHarvestDay = needsHarvesting(crop, day, cropInfo)
  if (isHarvestDay) {
    return false // No separate watering needed on harvest days
  }
  
  return true
} 