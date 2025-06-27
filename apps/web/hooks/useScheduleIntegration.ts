import { useEffect } from 'react'
import { useGarden, useWateringSchedule } from '@/stores'

/**
 * Hook that integrates the watering schedule with garden changes
 * Automatically regenerates the schedule when the garden state changes
 */
export function useScheduleIntegration() {
  const { garden, version } = useGarden()
  const { isActive, regenerateSchedule } = useWateringSchedule()

  // Regenerate schedule when garden changes (if schedule is active)
  useEffect(() => {
    if (isActive && garden) {
      // Small delay to ensure garden state is fully updated
      const timeoutId = setTimeout(() => {
        regenerateSchedule()
      }, 100)

      return () => clearTimeout(timeoutId)
    }
  }, [garden, version, isActive, regenerateSchedule])

  // Note: We don't need to return anything as this is just an integration hook
} 