'use client'

import { cn } from '@workspace/ui/lib/utils'

interface RadialChartProps {
    totalCrops: number
    covered: number
    className?: string
    size?: string
    children?: React.ReactNode
    title?: React.ReactNode
    icon?: React.ReactNode
}

export function RadialChart({
    totalCrops,
    covered,
    className,
    size = 'clamp(32px, 3.7rem, 17vw)',
    children,
    title,
    icon
}: RadialChartProps) {
    const percentage = totalCrops === 0 ? 0 : Math.round((covered / totalCrops) * 100)

    return (
        <div className="flex flex-col items-center gap-1 group relative">
            <div
                className={cn(
                    "radial-progress bg-secondary hover:bg-accent relative flex items-center justify-center rounded-full border-1 border-gray-200",
                    className
                )}
                style={{
                    background: `conic-gradient(currentColor ${percentage * 3.6}deg, transparent 0)`,
                    width: size,
                    height: size,
                } as React.CSSProperties}
            >
                <div className="absolute inset-1 bg-white rounded-full flex flex-col items-center justify-center gap-0 pt-1">
                    <div className="flex flex-col items-center justify-center text">
                        {icon}
                    </div>
                    <div className="flex flex-col items-center justify-center text-sm font-bold text-center">
                        <p className="flex items-center gap-[1px]">
                            {percentage}%
                        </p>
                    </div>
                </div>
            </div>

            {title && (
                <div className="capitalize font-semibold max-w-[8ch] text-palia-blue text-xs h-fit text-center break-words align-top flex items-start pt-[2px]">
                    {title}
                </div>
            )}
        </div>
    )
} 