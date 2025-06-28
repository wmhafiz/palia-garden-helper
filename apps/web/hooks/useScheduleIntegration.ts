import { useEffect, useRef, useState } from 'react'
import { useGarden, useWateringSchedule } from '@/stores'

/**
 * Hook that integrates the watering schedule with garden changes
 * Shows confirmation popup and resets the schedule when the garden state changes
 */
export function useScheduleIntegration() {
  const { garden, version } = useGarden()
  const { isActive, stopSchedule } = useWateringSchedule()
  const previousVersionRef = useRef<number>(version)
  const isInitialLoadRef = useRef<boolean>(true)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  // Handle garden changes with confirmation popup
  useEffect(() => {
    // Skip on initial load
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false
      previousVersionRef.current = version
      return
    }

    // Only show popup if schedule is active and garden version changed
    if (isActive && garden && version !== previousVersionRef.current) {
      setShowConfirmDialog(true)
      previousVersionRef.current = version
    }
  }, [garden, version, isActive])

  const handleConfirmReset = () => {
    // Stop the schedule completely (this clears local storage too)
    stopSchedule()
    setShowConfirmDialog(false)
  }

  const handleCancelReset = () => {
    setShowConfirmDialog(false)
  }

  return {
    showConfirmDialog,
    setShowConfirmDialog,
    handleConfirmReset,
    handleCancelReset
  }
} 