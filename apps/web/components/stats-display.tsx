'use client'

import { BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { useGardenStats } from '@/hooks/useGardenStats'
import { BonusCoverageWidget } from './bonus-coverage-widget'
import { FertilizerTipsWidget } from './fertilizer-tips-widget'
import { HarvestSummaryWidget } from './harvest-summary-widget'
import { CropBreakdownWidget } from './crop-breakdown-widget'
import { ProcessingTipsWidget } from './processing-tips-widget'
import { ProcessorSettingsWidget } from './processor-settings-widget'
import { ProcessorOutputWidget } from './processor-output-widget'
import { HarvestScheduleWidget } from './harvest-schedule-widget'
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
            <Accordion type="single" >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Overview</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-row gap-4">
                            {/* Bonus Coverage Statistics */}
                            <BonusCoverageWidget />
                            <div className="flex-1">
                                {/* Harvest Summary */}
                                <HarvestSummaryWidget />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
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
                <AccordionItem value="item-3">
                    <AccordionTrigger>Crops</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-row gap-4">
                            <div className="flex-1">
                                {/* Crop Breakdown */}
                                <CropBreakdownWidget />
                            </div>

                            {/* Harvest Schedule */}
                            <HarvestScheduleWidget />
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Processors</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-row gap-4">
                            <div className="flex-2">
                                {/* Harvest Schedule */}
                                <ProcessorOutputWidget />
                            </div>

                            <div className="flex-3">
                                {/* Crop Breakdown */}
                                <ProcessorSettingsWidget />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
} 