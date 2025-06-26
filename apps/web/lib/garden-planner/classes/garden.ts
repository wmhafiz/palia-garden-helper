import Direction from '../enums/direction'
import Plot from './plot'
import Tile from './tile'

class Garden {
    private _layout: Plot[][] = []
    private _version: string = '0.4'

    constructor(rows: number = 3, columns: number = 3, plotPattern?: boolean[][]) {
        this.initializeLayout(rows, columns, plotPattern)
    }

    private initializeLayout(rows: number, columns: number, plotPattern?: boolean[][]): void {
        this._layout = []

        for (let i = 0; i < rows; i++) {
            this._layout[i] = []
            for (let j = 0; j < columns; j++) {
                // Use plot pattern if provided, otherwise default to true (active)
                const isActive = plotPattern ? (plotPattern[i]?.[j] ?? true) : true
                this._layout[i]![j] = new Plot(isActive)
            }
        }

        // Set adjacent plots
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const currentPlot = this._layout[i]![j]!

                if (i > 0) {
                    currentPlot.setPlotAdjacent(Direction.North, this._layout[i - 1]![j]!)
                }
                if (i < rows - 1) {
                    currentPlot.setPlotAdjacent(Direction.South, this._layout[i + 1]![j]!)
                }
                if (j > 0) {
                    currentPlot.setPlotAdjacent(Direction.West, this._layout[i]![j - 1]!)
                }
                if (j < columns - 1) {
                    currentPlot.setPlotAdjacent(Direction.East, this._layout[i]![j + 1]!)
                }
            }
        }
    }

    get plots(): Plot[][] {
        return this._layout
    }

    set plots(layout: Plot[][]) {
        this._layout = layout
    }

    get rows(): number {
        return this._layout.length
    }

    get columns(): number {
        return this._layout[0]?.length || 0
    }

    getPlot(row: number, col: number): Plot | null {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.columns) {
            return this._layout[row]?.[col] || null
        }
        return null
    }

    clearAllPlots(): void {
        for (const plot of this._layout.flat()) {
            plot.tiles = [
                [new Tile(null), new Tile(null), new Tile(null)],
                [new Tile(null), new Tile(null), new Tile(null)],
                [new Tile(null), new Tile(null), new Tile(null)],
            ]
        }
    }

    get activePlotCount(): number {
        return this._layout.flat().filter(plot => plot.isActive).length
    }

    get version(): string {
        return this._version
    }

    setPlotActive(row: number, col: number, isActive: boolean): void {
        const plot = this.getPlot(row, col)
        if (plot) {
            plot.isActive = isActive
        }
    }

    setPlotPattern(pattern: boolean[][]): void {
        for (let i = 0; i < this.rows && i < pattern.length; i++) {
            for (let j = 0; j < this.columns && j < (pattern[i]?.length || 0); j++) {
                this.setPlotActive(i, j, pattern[i]![j]!)
            }
        }
    }

    getPlotPattern(): boolean[][] {
        return this._layout.map(row => row.map(plot => plot.isActive))
    }
}

export default Garden 