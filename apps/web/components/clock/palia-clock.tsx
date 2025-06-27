'use client'

import { useMemo } from 'react'

interface PaliaClockProps {
    paliaTime: {
        hour: number
        minute: number
        meridiem: string
        formatted: string
        isHarvestTime: boolean
    }
    className?: string
}

export function PaliaClock({ paliaTime, className = '' }: PaliaClockProps) {
    const timeData = useMemo(() => {
        const { hour, minute, meridiem } = paliaTime

        // Convert to 24-hour format for calculations
        let hour24 = hour
        if (meridiem === 'PM' && hour !== 12) {
            hour24 = hour + 12
        } else if (meridiem === 'AM' && hour === 12) {
            hour24 = 0
        }

        // Determine part of day
        let partOfDay = ''
        if (hour24 >= 3 && hour24 < 6) {
            partOfDay = 'Morning'
        } else if (hour24 >= 6 && hour24 < 18) {
            partOfDay = 'Day'
        } else if (hour24 >= 18 && hour24 < 21) {
            partOfDay = 'Evening'
        } else {
            partOfDay = 'Night'
        }

        // Calculate dial rotation (360 degrees / 24 hours)
        const totalMinutes = hour24 * 60 + minute
        const dialRotation = (totalMinutes / (24 * 60)) * 360

        return {
            partOfDay,
            clockTime: paliaTime.formatted,
            dayText: `Palian Time`,
            dialRotation
        }
    }, [paliaTime])

    return (
        <div className={`max-w-md ${className}`}>
            <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                aria-label="Palia Clock"
            >
                {/* Define gradients and effects */}
                <defs>
                    <radialGradient id="dayGradient" cx="50%" cy="30%">
                        <stop offset="0%" stopColor="#E6F3FF" />
                        <stop offset="40%" stopColor="#87CEEB" />
                        <stop offset="100%" stopColor="#4A90E2" />
                    </radialGradient>
                    <radialGradient id="morningGradient" cx="20%" cy="80%">
                        <stop offset="0%" stopColor="#FFF8DC" />
                        <stop offset="50%" stopColor="#FFE55C" />
                        <stop offset="100%" stopColor="#DAA520" />
                    </radialGradient>
                    <radialGradient id="eveningGradient" cx="80%" cy="80%">
                        <stop offset="0%" stopColor="#FFE4B5" />
                        <stop offset="50%" stopColor="#FFB347" />
                        <stop offset="100%" stopColor="#FF8C00" />
                    </radialGradient>
                    <radialGradient id="nightGradient" cx="50%" cy="90%">
                        <stop offset="0%" stopColor="#483D8B" />
                        <stop offset="50%" stopColor="#2F2F4F" />
                        <stop offset="100%" stopColor="#191970" />
                    </radialGradient>
                    <radialGradient id="centerGradient" cx="50%" cy="40%">
                        <stop offset="0%" stopColor="#B8B8B8" />
                        <stop offset="70%" stopColor="#808080" />
                        <stop offset="100%" stopColor="#606060" />
                    </radialGradient>
                    <linearGradient id="metalBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E0E0E0" />
                        <stop offset="30%" stopColor="#C0C0C0" />
                        <stop offset="70%" stopColor="#808080" />
                        <stop offset="100%" stopColor="#404040" />
                    </linearGradient>
                    <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
                    </filter>
                </defs>

                {/* Outer Ring - Metallic Border */}
                <circle
                    cx="100"
                    cy="100"
                    r="95"
                    fill="none"
                    stroke="url(#metalBorder)"
                    strokeWidth="3"
                />

                {/* Time Period Segments with Gradients */}
                {/* Day: 06:00-18:00 - Top half with sky gradient */}
                <path
                    d="M 100 100 L 10 100 A 90 90 0 1 1 190 100 Z"
                    fill="url(#dayGradient)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.5"
                />

                {/* Morning: 03:00-06:00 - Bottom left with sunrise gradient */}
                <path
                    d="M 100 100 L 36.36 163.64 A 90 90 0 0 1 10 100 Z"
                    fill="url(#morningGradient)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.5"
                />

                {/* Evening: 18:00-21:00 - Bottom right with sunset gradient */}
                <path
                    d="M 100 100 L 190 100 A 90 90 0 0 1 163.64 163.64 Z"
                    fill="url(#eveningGradient)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.5"
                />

                {/* Night: 21:00-03:00 - Bottom center with night gradient */}
                <path
                    d="M 100 100 L 163.64 163.64 A 90 90 0 0 1 36.36 163.64 Z"
                    fill="url(#nightGradient)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.5"
                />

                {/* Sun Icon - Day period */}
                <g transform="translate(100, 40)" filter="url(#dropShadow)">
                    <circle cx="0" cy="0" r="8" fill="#FFF8DC" stroke="#FFD700" strokeWidth="1" />
                    <circle cx="0" cy="0" r="6" fill="#FFE55C" />
                    {/* Sun rays */}
                    {Array.from({ length: 8 }, (_, i) => {
                        const angle = (i * 45) * Math.PI / 180;
                        const x1 = Math.cos(angle) * 12;
                        const y1 = Math.sin(angle) * 12;
                        const x2 = Math.cos(angle) * 16;
                        const y2 = Math.sin(angle) * 16;
                        return (
                            <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#FFD700"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        );
                    })}
                </g>

                {/* Moon Icon - Night period */}
                <g transform="translate(100, 160)" filter="url(#dropShadow)">
                    <circle cx="0" cy="0" r="8" fill="#F0F8FF" stroke="#D3D3D3" strokeWidth="1" />
                    <circle cx="3" cy="-2" r="6" fill="#2F2F4F" opacity="0.8" />
                    {/* Stars around moon */}
                    <g fill="#FFE55C" fontSize="4">
                        <text x="-15" y="-8" textAnchor="middle">✦</text>
                        <text x="12" y="-5" textAnchor="middle">✦</text>
                        <text x="-8" y="12" textAnchor="middle">✦</text>
                    </g>
                </g>

                {/* Inner Circle with Gradient and Shadow */}
                <circle
                    cx="100"
                    cy="100"
                    r="45"
                    fill="url(#centerGradient)"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1"
                    filter="url(#dropShadow)"
                />

                {/* Clock Pointer - Enhanced triangle with glow */}
                <polygon
                    points="100,15 95,5 105,5"
                    fill="#2C2C2C"
                    stroke="#FFD700"
                    strokeWidth="1.5"
                    transform={`rotate(${timeData.dialRotation} 100 100)`}
                    className="transition-transform duration-200 ease-out"
                    filter="url(#dropShadow)"
                />

                {/* Center Text with better styling */}
                <text
                    x="100"
                    y="85"
                    textAnchor="middle"
                    className="fill-white font-bold text-xs"
                    style={{
                        fontSize: '10px',
                        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.7))'
                    }}
                >
                    {timeData.partOfDay}
                </text>
                <text
                    x="100"
                    y="100"
                    textAnchor="middle"
                    className={`font-bold text-lg transition-colors duration-300 ${paliaTime.isHarvestTime ? 'fill-green-400' : 'fill-white'
                        }`}
                    style={{
                        fontSize: '16px',
                        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.7))'
                    }}
                >
                    {timeData.clockTime}
                </text>
                <text
                    x="100"
                    y="115"
                    textAnchor="middle"
                    className="fill-white font-medium text-xs"
                    style={{
                        fontSize: '8px',
                        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.7))'
                    }}
                >
                    {timeData.dayText}
                </text>
            </svg>
        </div>
    )
} 