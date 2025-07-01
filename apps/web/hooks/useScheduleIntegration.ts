import { useEffect, useRef } from 'react'
import { useGarden, useWateringSchedule } from '@/stores'

/**
 * Hook that integrates the watering schedule with garden changes
 * Silently resets the schedule when the garden state changes
 */
export function useScheduleIntegration() {
  const { garden, version } = useGarden()
  const { isActive, stopSchedule } = useWateringSchedule()
  const previousVersionRef = useRef<number>(version)
  const isInitialLoadRef = useRef<boolean>(true)

  // Handle garden changes by silently resetting the schedule
  useEffect(() => {
    // Skip on initial load
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false
      previousVersionRef.current = version
      return
    }

    // Silently reset schedule if it's active and garden version changed
    if (isActive && garden && version !== previousVersionRef.current) {
      stopSchedule()
      previousVersionRef.current = version
    }
  }, [garden, version, isActive, stopSchedule])
}
