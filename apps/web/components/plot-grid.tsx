'use client'

import { Plot as PlotClass } from '@/lib/garden-planner/classes'
import { PlotComponent } from './plot-component'

interface PlotGridProps {
    plots: PlotClass[][]
    showBonusIndicators: boolean
    showGridLines: boolean
}

export function PlotGrid({ plots, showBonusIndicators, showGridLines }: PlotGridProps) {
    return (
        <div className="plot-grid">
            {plots.map((plotRow, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {plotRow.map((plot, colIndex) => (
                        <PlotComponent
                            key={`${rowIndex}-${colIndex}`}
                            plot={plot}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            showBonusIndicators={showBonusIndicators}
                            showGridLines={showGridLines}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
} 