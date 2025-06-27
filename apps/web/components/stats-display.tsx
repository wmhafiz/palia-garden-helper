'use client'

import { BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { useGardenStats } from '@/hooks/useGardenStats'
import { BonusCoverageWidget } from './widgets/bonus-coverage-widget'
import { FertilizerTipsWidget } from './widgets/fertilizer-tips-widget'
import { HarvestSummaryWidget } from './widgets/harvest-summary-widget'
import { CropBreakdownWidget } from './widgets/crop-breakdown-widget'
import { ProcessingTipsWidget } from './widgets/processing-tips-widget'
import { ProcessorSettingsWidget } from './widgets/processor-settings-widget'
import { ProcessorOutputWidget } from './widgets/processor-output-widget'
import { HarvestScheduleWidget } from './widgets/harvest-schedule-widget'
import { ScheduleControlPanel } from './widgets/schedule-control-panel'
import { DailyScheduleWidget } from './widgets/daily-schedule-widget'
import { ScheduleCalendarWidget } from './widgets/schedule-calendar-widget'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@workspace/ui/components/accordion'

export function StatsDisplay() {
    const stats = useGardenStats()



    // If no garden data, show empty state
    if (stats.totalPlots === 0) {
        return (
            <div className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" />
                            Garden Statistics
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500 text-center py-8">
                            No garden data available
                        </p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="space-y-4">


            <Accordion type="multiple" defaultValue={['item-1']}>
                {stats.totalCrops > 0 && (
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Outputs</AccordionTrigger>
                        <AccordionContent>
                            <ProcessorOutputWidget />
                        </AccordionContent>
                    </AccordionItem>
                )}


                {/* Crop Watering Schedule - Always visible when crops are present */}
                {stats.totalCrops > 0 && (
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Schedule</AccordionTrigger>
                        <AccordionContent>
                            <ScheduleControlPanel />
                        </AccordionContent>
                    </AccordionItem>

                )}

                {stats.totalCrops > 0 && (
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Processors</AccordionTrigger>
                        <AccordionContent>
                            <ProcessorSettingsWidget />
                        </AccordionContent>
                    </AccordionItem>
                )}

                {stats.totalCrops > 0 && (
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Tips</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-row gap-4">
                                <div className="flex-1">
                                    {/* Harvest Summary */}
                                    <FertilizerTipsWidget />
                                </div>
                                {/* Bonus Coverage Statistics */}
                                <ProcessingTipsWidget />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                )}


            </Accordion>
        </div >
    )
} 