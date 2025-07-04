'use client'

import React, { useState, useMemo } from 'react'
import { Calendar, Clock, CheckCircle, Circle, Filter, Play, Pause, RotateCcw, Settings, Bell } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { Badge } from '@workspace/ui/components/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@workspace/ui/components/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs'
import { Separator } from '@workspace/ui/components/separator'
import { ScrollArea } from '@workspace/ui/components/scroll-area'
import { Switch } from '@workspace/ui/components/switch'
import { Toggle } from '@workspace/ui/components/toggle'
import { ModeLayout } from './base-mode'
import { ModeWidgets } from '../widget-router'
import { GardenMode, ModeComponentProps, ScheduleModeData } from '@/types/mode'
import { useCurrentModeData, useModeState } from '@/stores'
import { useWateringSchedule } from '@/stores'
import { cn } from '@workspace/ui/lib/utils'
import { format, isToday, isTomorrow, addDays } from 'date-fns'

// Task filter options
const TASK_FILTERS = [
    { value: 'all', label: 'All Tasks' },
    { value: 'today', label: 'Today' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'overdue', label: 'Overdue' },
    { value: 'water', label: 'Watering' },
    { value: 'harvest', label: 'Harvesting' },
    { value: 'replant', label: 'Replanting' },
] as const

// View mode options
const VIEW_MODES = [
    { value: 'calendar', label: 'Calendar View', icon: Calendar },
    { value: 'list', label: 'List View', icon: Clock },
    { value: 'timeline', label: 'Timeline View', icon: RotateCcw },
] as const

export function ScheduleMode(props: ModeComponentProps) {
    const { mode, isActive, isTransitioning, transitionProgress, onModeChange } = props
    const { updateModeData } = useModeState()
    const modeData = useCurrentModeData<ScheduleModeData>()
    const {
        isActive: scheduleActive,
        schedule,
        markDayCompleted,
        markDayIncomplete,
        getUpcomingActions,
        startSchedule,
        stopSchedule,
        resetSchedule
    } = useWateringSchedule()

    // Local state
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [taskFilter, setTaskFilter] = useState('all')
    const [viewMode, setViewMode] = useState('calendar')
    const [reminderSettings, setReminderSettings] = useState({
        enabled: true,
        beforeMinutes: 30,
        sound: true,
    })

    // Get upcoming schedule entries
    const upcomingEntries = getUpcomingActions(30) // Next 30 days

    // Memoized schedule analysis
    const scheduleAnalysis = useMemo(() => {
        if (!scheduleActive || upcomingEntries.length === 0) return null

        const now = new Date()
        const todayEntries = upcomingEntries.filter(entry => isToday(entry.earthTime))
        const tomorrowEntries = upcomingEntries.filter(entry => isTomorrow(entry.earthTime))
        const overdueEntries = upcomingEntries.filter(entry => entry.earthTime < now && !entry.isCompleted)
        const completedEntries = upcomingEntries.filter(entry => entry.isCompleted)

        // Calculate task counts by type
        const taskCounts = upcomingEntries.reduce((counts, entry) => {
            entry.actions.forEach(action => {
                counts[action.type] = (counts[action.type] || 0) + 1
            })
            return counts
        }, {} as Record<string, number>)

        // Calculate completion rate
        const totalTasks = upcomingEntries.length
        const completedTasks = completedEntries.length
        const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

        // Next urgent task
        const nextUrgentTask = upcomingEntries
            .filter(entry => !entry.isCompleted)
            .sort((a, b) => a.earthTime.getTime() - b.earthTime.getTime())[0]

        return {
            todayTasks: todayEntries.length,
            tomorrowTasks: tomorrowEntries.length,
            overdueTasks: overdueEntries.length,
            completionRate,
            taskCounts,
            nextUrgentTask,
            totalTasks,
            completedTasks,
        }
    }, [scheduleActive, upcomingEntries])

    // Update mode data
    const updateScheduleData = (updates: Partial<ScheduleModeData>) => {
        updateModeData(GardenMode.SCHEDULE, updates)
    }

    // Handle date selection
    const handleDateSelect = (date: Date) => {
        setSelectedDate(date)
        updateScheduleData({ selectedDate: date })
    }

    // Handle task filter change
    const handleTaskFilterChange = (filter: string) => {
        setTaskFilter(filter)
        updateScheduleData({ taskFilter: filter })
    }

    // Handle view mode change
    const handleViewModeChange = (view: string) => {
        setViewMode(view)
        updateScheduleData({ viewMode: view })
    }

    // Toggle reminder settings
    const toggleReminders = (enabled: boolean) => {
        setReminderSettings(prev => ({ ...prev, enabled }))
        updateScheduleData({ reminderSettings: { ...reminderSettings, enabled } })
    }

    // Format relative time
    const formatRelativeTime = (date: Date) => {
        if (isToday(date)) {
            return `Today, ${format(date, 'h:mm a')}`
        } else if (isTomorrow(date)) {
            return `Tomorrow, ${format(date, 'h:mm a')}`
        } else {
            return format(date, 'MMM d, h:mm a')
        }
    }

    // Get time until task
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

    // Render primary interface
    const renderPrimaryInterface = () => {
        if (!scheduleActive) {
            return (
                <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                        <Clock className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                        <h3 className="text-lg font-medium mb-2">Schedule Not Active</h3>
                        <p className="text-muted-foreground mb-4">
                            Start your crop schedule to manage daily tasks and reminders.
                        </p>
                        <Button onClick={startSchedule} className="gap-2">
                            <Play className="w-4 h-4" />
                            Start Schedule
                        </Button>
                    </div>
                </div>
            )
        }

        return (
            <div className="space-y-6">
                {/* Schedule Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Today's Tasks
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">
                                {scheduleAnalysis?.todayTasks || 0}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Tasks scheduled for today
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Completion Rate
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">
                                {scheduleAnalysis?.completionRate.toFixed(0)}%
                            </div>
                            <div className="text-xs text-muted-foreground">
                                {scheduleAnalysis?.completedTasks} / {scheduleAnalysis?.totalTasks} completed
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Overdue Tasks
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-600">
                                {scheduleAnalysis?.overdueTasks || 0}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Tasks past due
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Next Task
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm font-bold text-purple-600">
                                {scheduleAnalysis?.nextUrgentTask
                                    ? getTimeUntil(scheduleAnalysis.nextUrgentTask.earthTime)
                                    : 'None'
                                }
                            </div>
                            <div className="text-xs text-muted-foreground">
                                {scheduleAnalysis?.nextUrgentTask
                                    ? formatRelativeTime(scheduleAnalysis.nextUrgentTask.earthTime)
                                    : 'No upcoming tasks'
                                }
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Schedule Content */}
                <Tabs value={viewMode} onValueChange={handleViewModeChange}>
                    <TabsList className="grid w-full grid-cols-3">
                        {VIEW_MODES.map(mode => (
                            <TabsTrigger key={mode.value} value={mode.value} className="gap-2">
                                <mode.icon className="w-4 h-4" />
                                {mode.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value="calendar" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    Schedule Calendar
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center text-muted-foreground py-8">
                                    <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                    <p>Calendar view will be rendered by ScheduleCalendarWidget</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="list" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    Task List
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center text-muted-foreground py-8">
                                    <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                    <p>Task list will be rendered by DailyScheduleWidget</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="timeline" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <RotateCcw className="w-5 h-5" />
                                    Timeline View
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {upcomingEntries.slice(0, 10).map((entry, index) => (
                                        <div key={entry.day} className="flex items-center gap-4 p-3 border rounded-lg">
                                            <div className="flex items-center gap-2">
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
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium">Palia Day {entry.day}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    {formatRelativeTime(entry.earthTime)}
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
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        )
    }

    // Render contextual tools
    const renderContextualTools = () => (
        <div className="flex items-center gap-4">
            {/* Task Filter */}
            <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filter:</span>
                <Select value={taskFilter} onValueChange={handleTaskFilterChange}>
                    <SelectTrigger className="w-32">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {TASK_FILTERS.map(filter => (
                            <SelectItem key={filter.value} value={filter.value}>
                                {filter.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* Reminders Toggle */}
            <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Reminders:</span>
                <Switch
                    checked={reminderSettings.enabled}
                    onCheckedChange={toggleReminders}
                />
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* Schedule Controls */}
            <div className="flex items-center gap-2">
                {scheduleActive ? (
                    <>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={stopSchedule}
                            className="gap-1"
                        >
                            <Pause className="w-4 h-4" />
                            Pause
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={resetSchedule}
                            className="gap-1"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Reset
                        </Button>
                    </>
                ) : (
                    <Button
                        size="sm"
                        onClick={startSchedule}
                        className="gap-1"
                    >
                        <Play className="w-4 h-4" />
                        Start
                    </Button>
                )}
                <Button size="sm" variant="outline" className="gap-1">
                    <Settings className="w-4 h-4" />
                    Settings
                </Button>
            </div>
        </div>
    )

    // Render widgets
    const renderWidgets = () => (
        <ScrollArea className="h-full">
            <ModeWidgets mode={GardenMode.SCHEDULE} layout="vertical" />
        </ScrollArea>
    )

    return (
        <ModeLayout
            mode={mode}
            isActive={isActive}
            isTransitioning={isTransitioning}
            transitionProgress={transitionProgress}
            onModeChange={onModeChange}
            primaryInterface={renderPrimaryInterface()}
            contextualTools={renderContextualTools()}
            widgets={renderWidgets()}
        />
    )
} 