/**
 * Palia Time Utilities
 * 
 * This module provides utilities for converting between Palia time and real-world time,
 * building on the existing time system used in the TimeDisplay component.
 */

// Constants from the existing time system
export const SECONDS_PER_PALIA_HOUR = 150 // 150 seconds per in-game hour
export const PALIA_HOURS_PER_DAY = 24
export const REAL_MINUTES_PER_PALIA_HOUR = 2.5 // 150 seconds = 2.5 minutes
export const REAL_HOURS_PER_PALIA_DAY = 1 // 1 Palia day = 1 real hour

// Key Palia times
export const HARVEST_BOOST_HOUR = 6 // 6:00 AM Palia time
export const HARVEST_BOOST_REAL_MINUTE = 15 // :15 past each real hour

export interface PaliaTime {
  hour: number
  minute: number
  meridiem: 'AM' | 'PM'
  formatted: string
  isHarvestTime: boolean
}

/**
 * Calculate current Palia time from real-world time
 * Uses the same logic as the TimeDisplay component
 */
export function calculateCurrentPaliaTime(): PaliaTime {
  const now = new Date()
  
  // Use UTC time for consistency
  const utcMinutes = now.getUTCMinutes()
  const utcSeconds = now.getUTCSeconds()
  const totalSeconds = (utcMinutes * 60) + utcSeconds

  // Calculate Palia time
  const hour = Math.floor(totalSeconds / SECONDS_PER_PALIA_HOUR)
  const minute = Math.floor(((totalSeconds % SECONDS_PER_PALIA_HOUR) / SECONDS_PER_PALIA_HOUR) * 60)

  // Format to 12-hour time
  const hourFormatted = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour)
  const minuteFormatted = minute < 10 ? `0${minute}` : minute.toString()
  const meridiem = hour >= 12 ? 'PM' : 'AM'
  const timeFormatted = `${hourFormatted}:${minuteFormatted} ${meridiem}`

  return {
    hour: hourFormatted,
    minute: minute,
    meridiem,
    formatted: timeFormatted,
    isHarvestTime: hourFormatted === 6 && minuteFormatted === '00' && meridiem === 'AM'
  }
}

/**
 * Calculate the next harvest boost time in real-world time
 */
export function calculateNextHarvestTime(): Date {
  const now = new Date()
  const currentMinutes = now.getMinutes()

  let nextHarvestTime = new Date(now)

  if (currentMinutes < HARVEST_BOOST_REAL_MINUTE) {
    // Next harvest is in the current hour
    nextHarvestTime.setMinutes(HARVEST_BOOST_REAL_MINUTE, 0, 0)
  } else {
    // Next harvest is in the next hour
    nextHarvestTime.setHours(now.getHours() + 1, HARVEST_BOOST_REAL_MINUTE, 0, 0)
  }

  return nextHarvestTime
}

/**
 * Calculate real-world time for a specific Palia day and hour
 * @param paliaDay The Palia day number (1, 2, 3, etc.)
 * @param paliaHour The Palia hour (0-23, 24-hour format)
 * @param startTime The real-world time when the schedule started
 */
export function calculateEarthTimeForPaliaDateTime(
  paliaDay: number, 
  paliaHour: number, 
  startTime: Date
): Date {
  // Calculate total Palia hours from start
  const totalPaliaHours = (paliaDay - 1) * PALIA_HOURS_PER_DAY + paliaHour
  
  // Convert to real-world time (each Palia hour = 2.5 real minutes)
  const realMinutesFromStart = totalPaliaHours * REAL_MINUTES_PER_PALIA_HOUR
  
  return new Date(startTime.getTime() + (realMinutesFromStart * 60 * 1000))
}

/**
 * Calculate real-world time for a Palia day at harvest boost time (6:00 AM)
 * This aligns with the existing harvest time system
 */
export function calculateEarthTimeForPaliaDay(paliaDay: number, startTime: Date): Date {
  // Each Palia day is 1 real hour
  const hoursFromStart = paliaDay - 1
  const earthTime = new Date(startTime.getTime() + (hoursFromStart * 60 * 60 * 1000))
  
  // Adjust to the next harvest boost time (6:00 AM Palia = :15 minutes past real hour)
  const currentMinutes = earthTime.getMinutes()
  
  if (currentMinutes <= HARVEST_BOOST_REAL_MINUTE) {
    earthTime.setMinutes(HARVEST_BOOST_REAL_MINUTE, 0, 0)
  } else {
    earthTime.setHours(earthTime.getHours() + 1, HARVEST_BOOST_REAL_MINUTE, 0, 0)
  }
  
  return earthTime
}

/**
 * Calculate how many minutes until the next harvest boost time
 */
export function calculateMinutesUntilNextHarvest(): number {
  const now = new Date()
  const nextHarvest = calculateNextHarvestTime()
  const diffMs = nextHarvest.getTime() - now.getTime()
  return Math.ceil(diffMs / (1000 * 60))
}

/**
 * Check if the current time is harvest boost time (6:00 AM Palia)
 */
export function isCurrentlyHarvestTime(): boolean {
  const paliaTime = calculateCurrentPaliaTime()
  return paliaTime.isHarvestTime
}

/**
 * Convert Palia days to real-world duration
 * @param paliaDays Number of Palia days
 * @returns Duration in real-world milliseconds
 */
export function paliaDaysToRealMs(paliaDays: number): number {
  return paliaDays * REAL_HOURS_PER_PALIA_DAY * 60 * 60 * 1000
}

/**
 * Convert real-world duration to Palia days
 * @param realMs Duration in real-world milliseconds
 * @returns Number of Palia days
 */
export function realMsToPaliaDays(realMs: number): number {
  return realMs / (REAL_HOURS_PER_PALIA_DAY * 60 * 60 * 1000)
}

/**
 * Format a duration in minutes to a human-readable string
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}m`
  }
  
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  
  if (hours < 24) {
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`
  }
  
  const days = Math.floor(hours / 24)
  const remainingHours = hours % 24
  
  let result = `${days}d`
  if (remainingHours > 0) result += ` ${remainingHours}h`
  if (remainingMinutes > 0) result += ` ${remainingMinutes}m`
  
  return result
} 