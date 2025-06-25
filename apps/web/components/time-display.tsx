'use client'

import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'
import { format } from 'date-fns'

export function TimeDisplay() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
            <Clock className="w-4 h-4" />
            <div className="flex flex-col">
                <span className="font-medium">
                    {format(currentTime, 'MMM d, yyyy')}
                </span>
                <span className="text-xs">
                    {format(currentTime, 'h:mm:ss a')}
                </span>
            </div>
        </div>
    )
} 