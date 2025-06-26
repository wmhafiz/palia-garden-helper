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
        <div className="flex items-center gap-2 text-sm text-white px-3 py-2">
            <Clock className="w-4 h-4 text-blue-200" />
            <div className="flex flex-col leading-tight">
                <span className="font-medium text-white">
                    {format(currentTime, 'MMM d, yyyy')}
                </span>
                <span className="text-xs text-blue-200">
                    {format(currentTime, 'h:mm:ss a')}
                </span>
            </div>
        </div>
    )
} 