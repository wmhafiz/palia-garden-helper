'use client'

import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'
import { format } from 'date-fns'

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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
            setPaliaTime(calculatePaliaTime())
            setNextHarvestTime(calculateNextHarvestTime())
        }, 1000)

        // Initialize immediately
        setPaliaTime(calculatePaliaTime())
        setNextHarvestTime(calculateNextHarvestTime())

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex items-center gap-4 text-sm text-white px-3 py-2">
            <Clock className="w-4 h-4 text-blue-200" />

            {/* Earth Time */}
            <div className="flex flex-col leading-tight">
                <span className="font-medium text-white">
                    {format(currentTime, 'MMM d, yyyy')}
                </span>
                <span className="text-xs text-blue-200">
                    {format(currentTime, 'h:mm a')} Local
                </span>
            </div>

            {/* Next Harvest Time */}
            <div className="flex flex-col leading-tight border-l border-blue-200/30 pl-4">
                <span className="font-medium text-orange-300">
                    {format(nextHarvestTime, 'h:mm a')}
                </span>
                <span className="text-xs text-blue-200">
                    Next Harvest
                </span>
            </div>

            {/* Palia Time */}
            <div className="flex flex-col leading-tight border-l border-blue-200/30 pl-4">
                <span className={`font-medium text-lg ${paliaTime.isHarvestTime ? 'text-green-400' : 'text-white'}`}>
                    {paliaTime.formatted}
                </span>
                <span className="text-xs text-blue-200">
                    Palian Time
                </span>
            </div>
        </div>
    )
} 