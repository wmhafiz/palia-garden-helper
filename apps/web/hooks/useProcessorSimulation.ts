'use client'

import { useEffect } from 'react'
import { useOutputData } from './useOutputData'
import { useProcessor } from '@/stores'

/**
 * Hook that automatically triggers processor simulation when harvest data or settings change
 */
export function useProcessorSimulation() {
    const { harvestData } = useOutputData()
    const { settings, harvesterOptions, simulateProcessing } = useProcessor()

    useEffect(() => {
        // Only simulate if we have harvest data
        if (harvestData && harvestData.cropHarvests && harvestData.cropHarvests.length > 0) {
            simulateProcessing(harvestData)
        }
    }, [harvestData, settings, harvesterOptions, simulateProcessing])
} 