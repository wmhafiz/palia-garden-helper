'use client'

import { useGarden, useUISettings } from '@/stores'
import { PlotGrid } from './plot-grid'

export function GardenDisplay() {
    const { garden } = useGarden()
    const { showGridLines, showBonusIndicators, showTooltips, updateSetting } = useUISettings()

    if (!garden) {
        return (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                <p className="text-gray-500">No garden initialized</p>
            </div>
        )
    }

    return (
        <div className="garden-display">
            <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                    Garden Size: {garden.rows} × {garden.columns}
                </div>
                <div className="text-sm text-gray-600">
                    Active Plots: {garden.activePlotCount}
                </div>
            </div>

            <div
                className={`
          garden-grid inline-block p-4 bg-green-50 rounded-lg border-2 border-green-200
          ${showGridLines ? 'border-dashed' : ''}
        `}
            >
                <PlotGrid
                    plots={garden.plots}
                    showBonusIndicators={showBonusIndicators}
                    showGridLines={showGridLines}
                />
            </div>

            {/* Garden controls */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={showGridLines}
                        onChange={(e) => updateSetting('showGridLines', e.target.checked)}
                        className="rounded border-gray-300"
                    />
                    <span>Show Grid Lines</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={showBonusIndicators}
                        onChange={(e) => updateSetting('showBonusIndicators', e.target.checked)}
                        className="rounded border-gray-300"
                    />
                    <span>Show Bonus Indicators</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={showTooltips}
                        onChange={(e) => updateSetting('showTooltips', e.target.checked)}
                        className="rounded border-gray-300"
                    />
                    <span>Show Tooltips</span>
                </label>
            </div>
        </div>
    )
} 