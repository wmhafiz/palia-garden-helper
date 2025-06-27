'use client'

import { useState, useEffect, useRef } from 'react'
import { Clock } from 'lucide-react'
import { format } from 'date-fns'
import { useUISettings } from '@/stores'
import { notificationManager } from '@/lib/notifications'
import { useAudioContext } from '@/hooks/useAudioContext'
import { PaliaClock } from './palia-clock'

export function TimeDisplay() {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [paliaTime, setPaliaTime] = useState({
        hour: 0,
        minute: 0,
        meridiem: 'AM',
        formatted: '12:00 AM',
        isHarvestTime: false
    })
    const [nextHarvestTime, setNextHarvestTime] = useState(new Date())
    const [minutesUntilHarvest, setMinutesUntilHarvest] = useState(0)

    // Refs to track notification state
    const hasShownTwoMinuteWarning = useRef(false)
    const hasShownHarvestNotification = useRef(false)
    const lastHarvestHour = useRef(-1)

    const { enableNotifications, enableSoundNotifications } = useUISettings()

    // Initialize audio context on user interaction
    useAudioContext()

    const calculatePaliaTime = () => {
        const now = new Date()

        // Use UTC time like the Vue implementation
        const utcMinutes = now.getUTCMinutes()
        const utcSeconds = now.getUTCSeconds()
        const totalSeconds = (utcMinutes * 60) + utcSeconds

        // Constants from Vue implementation: 150 seconds per in-game hour
        const SECONDS_PER_HOUR = 150

        // Calculate Palia time
        const hour = Math.floor(totalSeconds / SECONDS_PER_HOUR)
        const minute = Math.floor(((totalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_HOUR) * 60)

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

    const calculateNextHarvestTime = () => {
        const now = new Date()
        const currentMinutes = now.getMinutes()

        // Harvest time occurs at :15 minutes past each hour
        const harvestMinute = 15

        let nextHarvestTime = new Date(now)

        if (currentMinutes < harvestMinute) {
            // Next harvest is in the current hour
            nextHarvestTime.setMinutes(harvestMinute, 0, 0)
        } else {
            // Next harvest is in the next hour
            nextHarvestTime.setHours(now.getHours() + 1, harvestMinute, 0, 0)
        }

        return nextHarvestTime
    }

    const calculateMinutesUntilHarvest = (nextHarvest: Date) => {
        const now = new Date()
        const diffMs = nextHarvest.getTime() - now.getTime()
        return Math.ceil(diffMs / (1000 * 60)) // Convert to minutes and round up
    }

    const handleNotifications = async (minutesLeft: number, nextHarvest: Date) => {
        const currentHour = nextHarvest.getHours()

        // Reset notification flags when we move to a new harvest hour
        if (lastHarvestHour.current !== currentHour) {
            hasShownTwoMinuteWarning.current = false
            hasShownHarvestNotification.current = false
            lastHarvestHour.current = currentHour
        }

        // Show 2-minute warning
        if (minutesLeft === 2 && !hasShownTwoMinuteWarning.current) {
            hasShownTwoMinuteWarning.current = true

            if (enableNotifications && notificationManager) {
                await notificationManager.showHarvestReminder(2)
            }

            if (enableSoundNotifications && notificationManager) {
                await notificationManager.playNotificationSound()
            }
        }

        // Show harvest time notification
        if (minutesLeft <= 0 && !hasShownHarvestNotification.current) {
            hasShownHarvestNotification.current = true

            if (enableNotifications && notificationManager) {
                await notificationManager.showHarvestTime()
            }

            if (enableSoundNotifications && notificationManager) {
                await notificationManager.playNotificationSound()
            }
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            const nextHarvest = calculateNextHarvestTime()
            const minutesLeft = calculateMinutesUntilHarvest(nextHarvest)

            setCurrentTime(now)
            setPaliaTime(calculatePaliaTime())
            setNextHarvestTime(nextHarvest)
            setMinutesUntilHarvest(minutesLeft)

            // Handle notifications
            handleNotifications(minutesLeft, nextHarvest)
        }, 1000)

        // Initialize immediately
        const initialNextHarvest = calculateNextHarvestTime()
        const initialMinutesLeft = calculateMinutesUntilHarvest(initialNextHarvest)

        setPaliaTime(calculatePaliaTime())
        setNextHarvestTime(initialNextHarvest)
        setMinutesUntilHarvest(initialMinutesLeft)

        return () => clearInterval(timer)
    }, [enableNotifications, enableSoundNotifications])

    // Request notification permission on first render if notifications are enabled
    useEffect(() => {
        if (enableNotifications && notificationManager) {
            notificationManager.requestPermission()
        }
    }, [enableNotifications])

    return (
        <div className="relative">
            {/* Compact Time Display */}
            <div className="flex items-center gap-4 text-white text-sm md:text-lg px-3 py-2 bg-gray-900/50 rounded-lg shadow-2xl border border-blue-200/20">
                <Clock className="w-4 h-4 text-blue-200" />

                {/* Earth Time */}
                <div className="hidden md:flex flex-col leading-tight">
                    <span className="font-medium text-white">
                        {format(currentTime, 'MMM d, yyyy')}
                    </span>
                    <span className="text-xs text-blue-200">
                        {format(currentTime, 'h:mm a')} Local
                    </span>
                </div>

                {/* Next Harvest Time */}
                <div className="flex flex-col leading-tight border-l border-blue-200/30 pl-4">
                    <span className={`font-medium ${minutesUntilHarvest <= 2 ? 'text-orange-400 animate-pulse' : 'text-orange-300'}`}>
                        {format(nextHarvestTime, 'h:mm a')}
                    </span>
                    <span className="text-xs text-blue-200">
                        Next Harvest ({minutesUntilHarvest}m)
                    </span>
                </div>

                {/* Palia Clock - Fixed to right of menu bar */}
                <div className="relative border-l border-blue-200/30 pl-4">
                    <div
                        className="hidden lg:block fixed top-4 right-4 z-50 w-64 h-64"
                        style={{
                            pointerEvents: 'none',
                        }}
                    >
                        <PaliaClock paliaTime={paliaTime} className="w-full h-full" />
                    </div>

                    {/* Click area for the clock */}
                    <div className="flex flex-col leading-tight cursor-pointer">
                        <span className={`font-medium text-lg ${paliaTime.isHarvestTime ? 'text-green-400' : 'text-white'}`}>
                            {paliaTime.formatted}
                        </span>
                        <span className="text-xs text-blue-200">
                            Palian Time
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
} 