import { useEffect, useCallback } from 'react'
import { notificationManager } from '@/lib/notifications'

export function useAudioContext() {
    const initializeAudio = useCallback(() => {
        // This will be called on first user interaction
        notificationManager.playNotificationSound().catch(() => {
            // Silently fail - this is just to initialize the audio context
        })
    }, [])

    useEffect(() => {
        // Add event listeners for user interactions to initialize audio context
        const events = ['click', 'touchstart', 'keydown']

        const handleUserInteraction = () => {
            initializeAudio()
            // Remove listeners after first interaction
            events.forEach(event => {
                document.removeEventListener(event, handleUserInteraction)
            })
        }

        events.forEach(event => {
            document.addEventListener(event, handleUserInteraction, { once: true })
        })

        return () => {
            events.forEach(event => {
                document.removeEventListener(event, handleUserInteraction)
            })
        }
    }, [initializeAudio])

    return { initializeAudio }
} 