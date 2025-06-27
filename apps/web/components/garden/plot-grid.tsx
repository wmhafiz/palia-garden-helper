'use client'

import { Plot as PlotClass } from '@/lib/garden-planner/classes'
import { PlotComponent } from './plot-component'

interface PlotGridProps {
    plots: PlotClass[][]
    showBonusIndicators: boolean
    showGridLines: boolean
    version?: number
}

export function PlotGrid({ plots, showBonusIndicators, showGridLines, version }: PlotGridProps) {
    return (
        <div className="plot-grid">
            {plots.map((plotRow, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {plotRow.map((plot, colIndex) => (
                        <PlotComponent
                            key={`${rowIndex}-${colIndex}-${version || 0}`}
                            plot={plot}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            showBonusIndicators={showBonusIndicators}
                            showGridLines={showGridLines}
                            version={version}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
} 