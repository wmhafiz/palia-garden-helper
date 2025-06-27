'use client'

import { Play, Square, RefreshCw, Calendar, Clock, Droplets, Pause, PlayCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { Badge } from '@workspace/ui/components/badge'
import { useWateringSchedule } from '@/stores'
import { useGardenStats } from '@/hooks/useGardenStats'
import { formatDuration, calculateMinutesUntilNextHarvest } from '@/lib/utils/palia-time'
import { ScheduleCalendarWidget } from './schedule-calendar-widget'

export interface ScheduleControlPanelProps {
    className?: string
}

export function ScheduleControlPanel({ className }: ScheduleControlPanelProps) {
    const {
        isActive,
        isPaused,
        schedule,
        startSchedule,
        stopSchedule,
        pauseSchedule,
        resumeSchedule,
        regenerateSchedule,
        getNextActionTime,
    } = useWateringSchedule()

    const nextActionTime = getNextActionTime()

    const getStatusBadge = () => {
        if (!isActive) {
            return <Badge variant="secondary">Inactive</Badge>
        }

        if (isPaused) {
            return <Badge variant="destructive">Paused (Offline)</Badge>
        }

        if (nextActionTime) {
            const minutesUntilAction = Math.ceil((nextActionTime.getTime() - Date.now()) / (1000 * 60))
            if (minutesUntilAction <= 30) {
                return <Badge variant="destructive">Action Soon</Badge>
            } else if (minutesUntilAction <= 120) {
                return <Badge variant="default">Action Upcoming</Badge>
            }
        }

        return <Badge variant="outline">Active</Badge>
    }

    return (
        <Card className={className}>
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Crop Schedule
                    {getStatusBadge()}
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Control Buttons */}
                <div className="flex gap-2">
                    {!isActive ? (
                        <Button onClick={startSchedule} className="flex-1">
                            <Play className="w-4 h-4 mr-2" />
                            Start Schedule
                        </Button>
                    ) : isPaused ? (
                        <>
                            <Button onClick={resumeSchedule} className="flex-1">
                                <PlayCircle className="w-4 h-4 mr-2" />
                                Resume (Back Online)
                            </Button>
                            <Button onClick={stopSchedule} variant="destructive">
                                <Square className="w-4 h-4 mr-2" />
                                Stop
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={pauseSchedule} variant="outline" className="flex-1">
                                <Pause className="w-4 h-4 mr-2" />
                                Pause (Going Offline)
                            </Button>
                            <Button onClick={stopSchedule} variant="destructive">
                                <Square className="w-4 h-4 mr-2" />
                                Stop
                            </Button>
                            <Button onClick={regenerateSchedule} variant="outline" size="icon">
                                <RefreshCw className="w-4 h-4" />
                            </Button>
                        </>
                    )}
                </div>

                {/* Schedule Status */}
                {isActive && (
                    <div className="space-y-3 pt-2 border-t">
                        {isPaused && (
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                                <div className="flex items-center gap-2 text-orange-800 mb-2">
                                    <Pause className="w-4 h-4" />
                                    <span className="font-medium">Schedule Paused</span>
                                </div>
                                <p className="text-sm text-orange-700">
                                    Your crops will grow one stage while you're offline, then stop growing until you return online.
                                    Resume the schedule when you're back to continue normal growth timing.
                                </p>
                            </div>
                        )}
                        <ScheduleCalendarWidget />
                    </div>
                )}

                {/* Instructions when inactive */}
                {!isActive && (
                    <div className="text-sm text-muted-foreground text-center py-4">
                        <p>Set up your garden, then start the schedule to track</p>
                        <p>watering and harvest times in real-world time.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
} 