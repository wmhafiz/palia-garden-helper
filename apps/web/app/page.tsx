'use client'

import { useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ModeBasedGardenPlanner } from '@/components/mode-based-garden-planner'
import { useGarden, useToasts } from '@/stores'

function HomeContent() {
  const searchParams = useSearchParams()
  const { garden, importFromVueSaveCode, initializeGarden, hasInitialized, restoreFromDevSession } = useGarden()
  const { addToast } = useToasts()

  useEffect(() => {
    // Prevent re-initialization if already done
    if (hasInitialized) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Garden already initialized, skipping re-initialization during hot reload')
      }
      return
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('Initializing garden...')

      // Try to restore from sessionStorage first (development only)
      if (restoreFromDevSession()) {
        return
      }
    }

    const layoutParam = searchParams.get('layout')

    if (layoutParam) {
      // Try to load the layout from the URL parameter
      const success = importFromVueSaveCode(layoutParam)

      if (success) {
        addToast({
          type: 'success',
          message: 'Garden layout loaded from URL successfully!'
        })
      } else {
        addToast({
          type: 'error',
          message: 'Failed to load garden layout from URL. Invalid layout parameter.'
        })
        // Fall back to default initialization
        initializeGarden(3, 3)
      }
    } else {
      // No layout parameter, initialize with default if no garden exists
      initializeGarden(3, 3)
    }
  }, [searchParams, importFromVueSaveCode, initializeGarden, addToast, hasInitialized, restoreFromDevSession])

  return <ModeBasedGardenPlanner />
}

export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      <Suspense fallback={
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-palia-blue mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading Garden Helper...</p>
          </div>
        </div>
      }>
        <HomeContent />
      </Suspense>
    </div>
  )
}
