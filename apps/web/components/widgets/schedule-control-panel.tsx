'use client'

import { Play, Square, RefreshCw, Calendar, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { Badge } from '@workspace/ui/components/badge'
import { useWateringSchedule } from '@/stores'
import { formatDuration, calculateMinutesUntilNextHarvest } from '@/lib/utils/palia-time'
import { format } from 'date-fns'

export interface ScheduleControlPanelProps {
    className?: string
}

export function ScheduleControlPanel({ className }: ScheduleControlPanelProps) {
    const {
        isActive,
        startTime,
        schedule,
        startSchedule,
        stopSchedule,
        regenerateSchedule,
        getNextActionTime,
        getTodaysActions
    } = useWateringSchedule()

    const nextActionTime = getNextActionTime()
    const todaysActions = getTodaysActions()
    const minutesUntilNextHarvest = calculateMinutesUntilNextHarvest()

    const getStatusBadge = () => {
        if (!isActive) {
            return <Badge variant="secondary">Inactive</Badge>
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

    const getNextActionInfo = () => {
        if (!nextActionTime) return null

        const minutesUntilAction = Math.ceil((nextActionTime.getTime() - Date.now()) / (1000 * 60))
        const actionType = schedule.find(entry =>
            entry.earthTime.getTime() === nextActionTime.getTime()
        )?.actions[0]?.type

        return {
            time: nextActionTime,
            duration: formatDuration(minutesUntilAction),
            type: actionType || 'unknown'
        }
    }

    const nextAction = getNextActionInfo()

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
                    ) : (
                        <>
                            <Button onClick={stopSchedule} variant="destructive" className="flex-1">
                                <Square className="w-4 h-4 mr-2" />
                                Stop Schedule
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
                        {/* Schedule Info */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-muted-foreground">Started:</span>
                                <div className="font-medium">
                                    {startTime ? format(startTime, 'MMM d, h:mm a') : 'Unknown'}
                                </div>
                            </div>
                            <div>
                                <span className="text-muted-foreground">Total Days:</span>
                                <div className="font-medium">{schedule.length}</div>
                            </div>
                        </div>

                        {/* Next Action */}
                        {nextAction && (
                            <div className="p-3 bg-muted rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <Clock className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm font-medium">Next Action</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {nextAction.type.charAt(0).toUpperCase() + nextAction.type.slice(1)} in {nextAction.duration}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {format(nextAction.time, 'MMM d, h:mm a')}
                                </div>
                            </div>
                        )}

                        {/* Today's Actions */}
                        {todaysActions && (
                            <div className="p-3 bg-muted rounded-lg">
                                <div className="text-sm font-medium mb-2">Today's Actions</div>
                                <div className="space-y-1">
                                    {todaysActions.actions.map((action, index) => (
                                        <div key={index} className="flex items-center justify-between text-sm">
                                            <span className="capitalize">{action.type}</span>
                                            <span className="text-muted-foreground">
                                                {action.crops.reduce((sum, crop) => sum + crop.count, 0)} crops
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Next Harvest Time */}
                        <div className="text-xs text-muted-foreground text-center pt-2 border-t">
                            Next Palia harvest boost in {formatDuration(minutesUntilNextHarvest)}
                        </div>
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