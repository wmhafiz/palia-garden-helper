'use client'

import { useState } from 'react'
import { CheckCircle, Circle, Droplets, Scissors, MapPin, Calendar, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { Badge } from '@workspace/ui/components/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@workspace/ui/components/dialog'
import { useWateringSchedule, type ScheduleEntry, type ScheduleAction, isCropEligibleForReplanting } from '@/stores'
import { getCropFromType } from '@/lib/garden-planner'
import { format, isToday, isTomorrow } from 'date-fns'

export interface ScheduleCalendarWidgetProps {
    showDays?: number // Default: 30 days ahead (full schedule)
    className?: string
}

export function ScheduleCalendarWidget({ showDays = 30, className }: ScheduleCalendarWidgetProps) {
    const {
        isActive,
        markDayCompleted,
        markDayIncomplete,
        getUpcomingActions,
        replantCrops
    } = useWateringSchedule()

    const [selectedEntry, setSelectedEntry] = useState<ScheduleEntry | null>(null)
    const [currentWeekStart, setCurrentWeekStart] = useState(0) // Week offset from today

    const upcomingEntries = getUpcomingActions(showDays)

    const getActionIcon = (type: ScheduleAction['type']) => {
        switch (type) {
            case 'water':
                return <Droplets className="w-3 h-3 text-blue-500" />
            case 'harvest':
                return <Scissors className="w-3 h-3 text-green-500" />
            case 'replant':
                return <Circle className="w-3 h-3 text-orange-500" />
            default:
                return <Circle className="w-3 h-3 text-gray-500" />
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

    const getDayType = (entry: ScheduleEntry | undefined) => {
        if (!entry) return 'none'

        const hasHarvest = entry.actions.some(action => action.type === 'harvest')
        const hasWater = entry.actions.some(action => action.type === 'water')
        const hasReplant = entry.actions.some(action => action.type === 'replant')

        if (hasHarvest) return 'harvest'
        if (hasWater) return 'water'
        if (hasReplant) return 'replant'
        return 'none'
    }

    const getDayTypeColor = (dayType: string) => {
        switch (dayType) {
            case 'harvest':
                return 'bg-green-100 border-green-300 text-green-800'
            case 'water':
                return 'bg-blue-100 border-blue-300 text-blue-800'
            case 'replant':
                return 'bg-orange-100 border-orange-300 text-orange-800'
            default:
                return 'bg-gray-50 border-gray-200 text-gray-600'
        }
    }

    const getDayTypeLabel = (dayType: string) => {
        switch (dayType) {
            case 'harvest':
                return 'Harvest'
            case 'water':
                return 'Water'
            case 'replant':
                return 'Replant'
            default:
                return 'None'
        }
    }

    const formatRelativeTime = (date: Date) => {
        if (isToday(date)) {
            return `Today, ${format(date, 'h:mm a')}`
        } else if (isTomorrow(date)) {
            return `Tomorrow, ${format(date, 'h:mm a')}`
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

    // Generate calendar days for current week view - showing consecutive Palia days
    const generateCalendarDays = () => {
        const days = []
        const startPaliaDay = (currentWeekStart * 7) + 0 // Start from Palia day 0 + week offset

        for (let i = 0; i < 7; i++) {
            const paliaDay = startPaliaDay + i
            const entry = upcomingEntries.find(e => e.day === paliaDay)

            days.push({
                paliaDay,
                entry,
                dayType: getDayType(entry),
                isToday: entry ? isToday(entry.earthTime) : false,
                hasActions: !!entry && entry.actions.length > 0
            })
        }

        return days
    }

    const calendarDays = generateCalendarDays()

    const navigateWeek = (direction: 'prev' | 'next') => {
        setCurrentWeekStart(prev => direction === 'next' ? prev + 1 : prev - 1)
    }

    if (!isActive) {
        return (
            <Card className={className}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Schedule Calendar
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-muted-foreground py-8">
                        <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Start your crop schedule to see</p>
                        <p>your farming calendar.</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
                {/* Palia day headers */}
                {calendarDays.map((day, index) => (
                    <div key={index} className="text-center text-sm font-medium text-muted-foreground p-2">
                        Day {day.paliaDay}
                    </div>
                ))}

                {/* Calendar days */}
                {calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`
                                    relative border rounded-lg p-2 cursor-pointer transition-all
                                    ${day.isToday ? 'ring-2 ring-primary' : ''}
                                    ${day.hasActions ? 'ring-2 ring-blue-400' : ''}
                                    ${day.entry ? getDayTypeColor(day.dayType) : 'bg-background hover:bg-muted'}
                                    ${day.entry?.isCompleted ? 'opacity-60' : ''}
                                `}
                        onClick={() => day.entry && setSelectedEntry(day.entry)}
                    >
                        {day.entry ? (
                            <>
                                <div className="text-center mb-2">
                                    <div className="text-xs text-muted-foreground">
                                        {formatRelativeTime(day.entry.earthTime)}
                                    </div>
                                </div>
                                {day.entry.actions.length > 0 ? (
                                    <div className="flex justify-center gap-1 mt-1">
                                        {day.entry.actions.slice(0, 2).map((action, actionIndex) => (
                                            <div key={actionIndex}>
                                                {getActionIcon(action.type)}
                                            </div>
                                        ))}
                                        {day.entry.actions.length > 2 && (
                                            <div className="text-xs text-muted-foreground">+{day.entry.actions.length - 2}</div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-center text-xs text-muted-foreground">
                                        No actions
                                    </div>
                                )}
                                {day.entry.isCompleted && (
                                    <CheckCircle className="w-4 h-4 text-green-500 absolute top-1 right-1" />
                                )}
                            </>
                        ) : (
                            <div className="text-center text-xs text-muted-foreground">
                                No schedule
                            </div>
                        )}

                        {day.hasActions && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                    <span>Harvest Day</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></div>
                    <span>Water Day</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-orange-100 border border-orange-300 rounded"></div>
                    <span>Replant Day</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span>Has Actions</span>
                </div>
            </div>

            {/* Day Detail Dialog */}
            <Dialog open={!!selectedEntry} onOpenChange={() => setSelectedEntry(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Palia Day {selectedEntry?.day} - {selectedEntry && formatRelativeTime(selectedEntry.earthTime)}
                        </DialogTitle>
                    </DialogHeader>

                    {selectedEntry && (
                        <div className="space-y-4">
                            {/* Day Status */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={() =>
                                            selectedEntry.isCompleted
                                                ? markDayIncomplete(selectedEntry.day)
                                                : markDayCompleted(selectedEntry.day)
                                        }
                                        className="p-0 h-auto"
                                    >
                                        {selectedEntry.isCompleted ? (
                                            <CheckCircle className="w-6 h-6 text-green-500" />
                                        ) : (
                                            <Circle className="w-6 h-6 text-muted-foreground" />
                                        )}
                                    </Button>
                                    <div>
                                        <div className="font-medium">
                                            {selectedEntry.isCompleted ? 'Completed' : 'Pending'}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {getTimeUntil(selectedEntry.earthTime)}
                                        </div>
                                    </div>
                                </div>
                                <Badge variant="outline" className={getDayTypeColor(getDayType(selectedEntry))}>
                                    {getDayTypeLabel(getDayType(selectedEntry))} Day
                                </Badge>
                            </div>

                            {/* Actions */}
                            <div className="space-y-3">
                                <h3 className="font-medium">Actions Required</h3>
                                {selectedEntry.actions.map((action, actionIndex) => (
                                    <div
                                        key={actionIndex}
                                        className={`border rounded-md p-4 ${getActionColor(action.type)}`}
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                {getActionIcon(action.type)}
                                                <span className="font-medium capitalize text-lg">
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
                                                    className="flex items-center gap-3 text-sm bg-white/50 p-2 rounded"
                                                >
                                                    {crop.image && (
                                                        <img
                                                            src={crop.image}
                                                            alt={crop.cropType}
                                                            className="w-8 h-8 rounded border bg-white"
                                                        />
                                                    )}

                                                    <div className="flex-1">
                                                        <span className="font-medium">{crop.cropType}</span>
                                                        {crop.isReharvestable && (() => {
                                                            const cropData = getCropFromType(crop.cropType as any)
                                                            if (!cropData) return null

                                                            const growthTime = cropData.produceInfo.growthTime
                                                            const reharvestCooldown = cropData.produceInfo.reharvestCooldown || 2
                                                            const reharvestLimit = cropData.produceInfo.reharvestLimit || 3

                                                            const effectiveStartDay = crop.replantedOnDay || 0
                                                            const effectiveDay = selectedEntry!.day - effectiveStartDay

                                                            if (effectiveDay === growthTime) {
                                                                return (
                                                                    <span className="text-muted-foreground ml-1">
                                                                        (Initial Harvest)
                                                                    </span>
                                                                )
                                                            } else if (effectiveDay > growthTime) {
                                                                const daysSinceFirstHarvest = effectiveDay - growthTime
                                                                if (daysSinceFirstHarvest % reharvestCooldown === 0) {
                                                                    const reharvestCycle = Math.floor(daysSinceFirstHarvest / reharvestCooldown)
                                                                    const isLastHarvest = reharvestCycle === reharvestLimit
                                                                    return (
                                                                        <span className={`ml-1 ${isLastHarvest ? 'text-orange-600 font-medium' : 'text-muted-foreground'}`}>
                                                                            (Reharvest {reharvestCycle}/{reharvestLimit}{isLastHarvest ? ' - Final' : ''})
                                                                        </span>
                                                                    )
                                                                }
                                                            }
                                                            return null
                                                        })()}
                                                    </div>

                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <span>×{crop.count}</span>
                                                        <MapPin className="w-3 h-3" />
                                                        <span>{crop.locations.length} plot{crop.locations.length !== 1 ? 's' : ''}</span>
                                                    </div>

                                                    {/* Replant button for harvest actions - only show when crop is eligible */}
                                                    {action.type === 'harvest' && (() => {
                                                        const cropData = getCropFromType(crop.cropType as any)
                                                        return cropData && isCropEligibleForReplanting(cropData, selectedEntry!.day, crop)
                                                    })() && (
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                onClick={() => {
                                                                    replantCrops(crop.cropType, selectedEntry!.day, crop.locations)
                                                                    // Close dialog after replanting
                                                                    setSelectedEntry(null)
                                                                }}
                                                                className="ml-2 flex items-center gap-1"
                                                            >
                                                                <RotateCcw className="w-3 h-3" />
                                                                Replant
                                                            </Button>
                                                        )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
} 