'use client'

import { CheckCircle, Circle, Droplets, Scissors, Clock, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { Badge } from '@workspace/ui/components/badge'
import { ScrollArea } from '@workspace/ui/components/scroll-area'
import { useWateringSchedule, type ScheduleEntry, type ScheduleAction } from '@/stores'
import { format, isToday, isTomorrow, isYesterday } from 'date-fns'

export interface DailyScheduleWidgetProps {
    showDays?: number // Default: 7 days ahead
    className?: string
}

export function DailyScheduleWidget({ showDays = 7, className }: DailyScheduleWidgetProps) {
    const {
        isActive,
        schedule,
        markDayCompleted,
        markDayIncomplete,
        getUpcomingActions
    } = useWateringSchedule()

    const upcomingEntries = getUpcomingActions(showDays)

    const getActionIcon = (type: ScheduleAction['type']) => {
        switch (type) {
            case 'water':
                return <Droplets className="w-4 h-4 text-blue-500" />
            case 'harvest':
                return <Scissors className="w-4 h-4 text-green-500" />
            case 'replant':
                return <Circle className="w-4 h-4 text-orange-500" />
            default:
                return <Circle className="w-4 h-4 text-gray-500" />
        }
    }

    const getActionColor = (type: ScheduleAction['type']) => {
        switch (type) {
            case 'water':
                return 'bg-blue-50 border-blue-200'
            case 'harvest':
                return 'bg-green-50 border-green-200'
            case 'replant':
                return 'bg-orange-50 border-orange-200'
            default:
                return 'bg-gray-50 border-gray-200'
        }
    }

    const getPriorityBadge = (priority: ScheduleAction['priority']) => {
        switch (priority) {
            case 'high':
                return <Badge variant="destructive" className="text-xs">High</Badge>
            case 'medium':
                return <Badge variant="default" className="text-xs">Medium</Badge>
            case 'low':
                return <Badge variant="secondary" className="text-xs">Low</Badge>
        }
    }

    const formatRelativeTime = (date: Date) => {
        if (isToday(date)) {
            return `Today, ${format(date, 'h:mm a')}`
        } else if (isTomorrow(date)) {
            return `Tomorrow, ${format(date, 'h:mm a')}`
        } else if (isYesterday(date)) {
            return `Yesterday, ${format(date, 'h:mm a')}`
        } else {
            return format(date, 'MMM d, h:mm a')
        }
    }

    const getTimeUntil = (date: Date) => {
        const now = new Date()
        const diffMs = date.getTime() - now.getTime()
        const diffMinutes = Math.ceil(diffMs / (1000 * 60))

        if (diffMinutes < 0) {
            return 'Overdue'
        } else if (diffMinutes < 60) {
            return `${diffMinutes}m`
        } else if (diffMinutes < 1440) {
            const hours = Math.floor(diffMinutes / 60)
            const minutes = diffMinutes % 60
            return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`
        } else {
            const days = Math.floor(diffMinutes / 1440)
            return `${days}d`
        }
    }

    if (!isActive) {
        return (
            <Card className={className}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Daily Schedule
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-muted-foreground py-8">
                        <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Start your crop schedule to see</p>
                        <p>upcoming watering and harvest times.</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    if (upcomingEntries.length === 0) {
        return (
            <Card className={className}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Daily Schedule
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-muted-foreground py-8">
                        <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                        <p>No upcoming actions in the next {showDays} days.</p>
                        <p>Your garden is all set!</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Daily Schedule
                    <Badge variant="outline" className="ml-auto">
                        {upcomingEntries.length} days
                    </Badge>
                </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
                <ScrollArea className="h-[400px]">
                    <div className="space-y-3 p-4">
                        {upcomingEntries.map((entry: ScheduleEntry) => (
                            <div
                                key={entry.day}
                                className={`border rounded-lg p-4 transition-all ${entry.isCompleted ? 'opacity-60 bg-muted/50' : 'bg-background'
                                    }`}
                            >
                                {/* Day Header */}
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() =>
                                                entry.isCompleted
                                                    ? markDayIncomplete(entry.day)
                                                    : markDayCompleted(entry.day)
                                            }
                                            className="p-0 h-auto"
                                        >
                                            {entry.isCompleted ? (
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <Circle className="w-5 h-5 text-muted-foreground" />
                                            )}
                                        </Button>

                                        <div>
                                            <div className="font-medium">
                                                Palia Day {entry.day}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {formatRelativeTime(entry.earthTime)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <div className="text-sm font-medium">
                                            {getTimeUntil(entry.earthTime)}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {entry.actions.length} action{entry.actions.length !== 1 ? 's' : ''}
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="space-y-2">
                                    {entry.actions.map((action, actionIndex) => (
                                        <div
                                            key={actionIndex}
                                            className={`border rounded-md p-3 ${getActionColor(action.type)}`}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    {getActionIcon(action.type)}
                                                    <span className="font-medium capitalize">
                                                        {action.type}
                                                    </span>
                                                    {getPriorityBadge(action.priority)}
                                                </div>

                                                <div className="text-sm text-muted-foreground">
                                                    {action.crops.reduce((sum, crop) => sum + crop.count, 0)} crops
                                                </div>
                                            </div>

                                            {/* Crop Details */}
                                            <div className="space-y-2">
                                                {action.crops.map((crop, cropIndex) => (
                                                    <div
                                                        key={cropIndex}
                                                        className="flex items-center gap-3 text-sm"
                                                    >
                                                        {crop.image && (
                                                            <img
                                                                src={crop.image}
                                                                alt={crop.cropType}
                                                                className="w-6 h-6 rounded border bg-white"
                                                            />
                                                        )}

                                                        <div className="flex-1">
                                                            <span className="font-medium">{crop.cropType}</span>
                                                            {crop.isReharvestable && crop.reharvestCount && crop.reharvestCount > 1 && (
                                                                <span className="text-muted-foreground ml-1">
                                                                    (Cycle {crop.reharvestCount})
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="flex items-center gap-2 text-muted-foreground">
                                                            <span>×{crop.count}</span>
                                                            <MapPin className="w-3 h-3" />
                                                            <span>{crop.locations.length} plot{crop.locations.length !== 1 ? 's' : ''}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
} 