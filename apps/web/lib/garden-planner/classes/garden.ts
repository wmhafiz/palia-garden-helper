import Direction from '../enums/direction'
import Plot from './plot'
import Tile from './tile'
import { parseSave, generateSaveCode, type ParseSaveResult } from '../save-handler'
import CropCode from '../enums/cropCode'
import FertiliserCode from '../enums/fertiliserCode'
import { getCropFromCode, getCodeFromCrop } from '../cropList'
import { getFertiliserFromCode, getCodeFromFertiliser } from '../fertiliserList'
import Bonus from '../enums/bonus'
import CropSize from '../enums/crop-size'
import CropType from '../enums/crops'

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

    /**
     * Loads a garden layout from a save code with backward compatibility for versions 0.1-0.4
     * @param saveCode The save code string to load
     * @returns True if loaded successfully, false otherwise
     */
    loadLayout(saveCode: string): boolean {
        try {
            const { dimensionInfo, cropInfo, settingsInfo } = parseSave(saveCode)

            // Parse dimensions
            const dimensions = dimensionInfo.split('-').slice(1)
            const rows = dimensions.length
            const columns = dimensions[0]?.length || 0

            // Reinitialize layout with new dimensions
            this.initializeLayout(rows, columns)

            // Set plot active states
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    if (dimensions[i] && dimensions[i]![j]) {
                        this.setPlotActive(i, j, dimensions[i]![j] === '1')
                    }
                }
            }

            // Parse crop info
            const crops = cropInfo.split('-').slice(1) // Remove 'CR' prefix
            let cropIndex = 0

            for (let plotRow = 0; plotRow < rows; plotRow++) {
                for (let plotCol = 0; plotCol < columns; plotCol++) {
                    const plot = this.getPlot(plotRow, plotCol)
                    if (plot && plot.isActive && cropIndex < crops.length) {
                        const plotCropData = crops[cropIndex]!

                        // Parse each tile in the plot (3x3 = 9 tiles)
                        let tileIndex = 0
                        const regex = /([A-Z][a-z]?)(?:\.([A-Z][a-z]?))?/g
                        let match: RegExpExecArray | null

                        while ((match = regex.exec(plotCropData)) !== null && tileIndex < 9) {
                            const tileRow = Math.floor(tileIndex / 3)
                            const tileCol = tileIndex % 3
                            const tile = plot.getTile(tileRow, tileCol)

                            if (tile) {
                                // Set crop
                                const cropCode = match[1] as CropCode
                                if (cropCode !== CropCode.None) {
                                    const crop = getCropFromCode(cropCode)
                                    tile.crop = crop
                                }

                                // Set fertilizer if present
                                if (match[2]) {
                                    const fertCode = match[2] as FertiliserCode
                                    if (fertCode !== FertiliserCode.None) {
                                        const fertilizer = getFertiliserFromCode(fertCode)
                                        tile.fertiliser = fertilizer
                                    }
                                }
                            }

                            tileIndex++
                        }

                        cropIndex++
                    }
                }
            }

            // Calculate bonuses after loading layout
            this.calculateBonuses()

            return true
        } catch (error) {
            console.error('Failed to load garden layout:', error)
            return false
        }
    }

    /**
     * Saves the current garden layout to a save code string
     * @param settingsCode Optional settings code to include
     * @returns Save code string in v0.4 format
     */
    saveLayout(settingsCode?: string): string {
        try {
            // Get plot pattern
            const layout = this.getPlotPattern()

            // Get crop and fertilizer data
            const crops: (CropCode | null)[][][] = []
            const fertilizers: (FertiliserCode | null)[][][] = []

            for (let plotRow = 0; plotRow < this.rows; plotRow++) {
                crops[plotRow] = []
                fertilizers[plotRow] = []

                for (let plotCol = 0; plotCol < this.columns; plotCol++) {
                    const plot = this.getPlot(plotRow, plotCol)
                    const plotCrops: (CropCode | null)[] = []
                    const plotFerts: (FertiliserCode | null)[] = []

                    if (plot && plot.isActive) {
                        // Get data for each tile in the plot (3x3 = 9 tiles)
                        for (let tileRow = 0; tileRow < 3; tileRow++) {
                            for (let tileCol = 0; tileCol < 3; tileCol++) {
                                const tile = plot.getTile(tileRow, tileCol)

                                // Get crop code
                                const cropCode = tile.crop ? getCodeFromCrop(tile.crop) : CropCode.None
                                plotCrops.push(cropCode)

                                // Get fertilizer code
                                const fertCode = tile.fertiliser ? getCodeFromFertiliser(tile.fertiliser) : FertiliserCode.None
                                plotFerts.push(fertCode)
                            }
                        }
                    } else {
                        // Inactive plot - fill with None codes
                        for (let i = 0; i < 9; i++) {
                            plotCrops.push(CropCode.None)
                            plotFerts.push(FertiliserCode.None)
                        }
                    }

                    crops[plotRow]![plotCol] = plotCrops
                    fertilizers[plotRow]![plotCol] = plotFerts
                }
            }

            return generateSaveCode(layout, crops, fertilizers, settingsCode)
        } catch (error) {
            console.error('Failed to save garden layout:', error)
            return ''
        }
    }

    /**
     * Loads a garden from Vue.js app compatible save code
     * @param saveCode Save code from the original Vue.js implementation
     * @returns True if loaded successfully, false otherwise
     */
    loadFromVueSave(saveCode: string): boolean {
        return this.loadLayout(saveCode)
    }

    /**
     * Calculates and assigns bonuses to crops based on adjacent tiles and multi-tile crop requirements
     */
    calculateBonuses(): void {
        const treeTiles: { [key: string]: Tile[] } = {}
        const bushTiles: { [key: string]: Tile[] } = {}

        const layoutFlat = this._layout.flat()

        // First, calculate bonuses received for all tiles
        for (const plot of layoutFlat) {
            if (!plot.isActive) continue
            plot.calculateBonusesReceived()
        }

        // Then, calculate final bonuses based on crop size requirements
        for (const plot of layoutFlat) {
            if (!plot.isActive) continue

            for (const tile of plot.tiles.flat()) {
                tile.bonuses = []
                if (!tile.crop || tile.crop.type === CropType.None) continue

                switch (tile.crop.size) {
                    case CropSize.Tree:
                        // Trees (3x3) need at least 3 sources of the same bonus
                        if (!treeTiles[tile.id]) {
                            treeTiles[tile.id] = []
                        }
                        const tileGroup = treeTiles[tile.id]
                        if (tileGroup) {
                            tileGroup.push(tile)

                            if (tileGroup.length === 9) {
                                const bonusesReceived = tileGroup.flatMap(t => t.bonusesReceived)
                                const bonusCounts = bonusesReceived.reduce((acc, bonus) => {
                                    acc[bonus] = (acc[bonus] || 0) + 1
                                    return acc
                                }, {} as Record<string, number>)

                                for (const [bonus, count] of Object.entries(bonusCounts)) {
                                    if (count >= 3) {
                                        for (const treeTile of tileGroup) {
                                            treeTile.bonuses.push(bonus as Bonus)
                                        }
                                    }
                                }
                            }
                        }
                        break

                    case CropSize.Bush:
                        // Bushes (2x2) need at least 2 sources of the same bonus
                        if (!bushTiles[tile.id]) {
                            bushTiles[tile.id] = []
                        }
                        const bushGroup = bushTiles[tile.id]
                        if (bushGroup) {
                            bushGroup.push(tile)

                            if (bushGroup.length === 4) {
                                const bonusesReceived = bushGroup.flatMap(t => t.bonusesReceived)
                                const bonusCounts = bonusesReceived.reduce((acc, bonus) => {
                                    acc[bonus] = (acc[bonus] || 0) + 1
                                    return acc
                                }, {} as Record<string, number>)

                                for (const [bonus, count] of Object.entries(bonusCounts)) {
                                    if (count >= 2) {
                                        for (const bushTile of bushGroup) {
                                            bushTile.bonuses.push(bonus as Bonus)
                                        }
                                    }
                                }
                            }
                        }
                        break

                    default:
                        // Single tiles get all bonuses they receive
                        tile.bonuses = tile.bonusesReceived
                        break
                }
            }
        }
    }

    /**
     * Gets bonus coverage statistics for the garden
     * @returns Object with bonus coverage counts
     */
    getBonusCoverage(): Record<string, number> {
        const bonusCoverage: Record<string, number> = {
            [Bonus.SpeedIncrease]: 0,
            [Bonus.HarvestIncrease]: 0,
            [Bonus.QualityIncrease]: 0,
            [Bonus.WaterRetain]: 0,
            [Bonus.WeedPrevention]: 0,
        }

        for (const plot of this._layout.flat()) {
            if (!plot.isActive) continue

            for (const tile of plot.tiles.flat()) {
                if (!tile.crop || tile.crop.type === CropType.None) continue

                for (const bonus of tile.bonuses) {
                    if (bonus in bonusCoverage && bonusCoverage[bonus] !== undefined) {
                        bonusCoverage[bonus]++
                    }
                }
            }
        }

        return bonusCoverage
    }

    /**
     * Gets total number of crops in the garden
     */
    getTotalCropCount(): number {
        let count = 0
        for (const plot of this._layout.flat()) {
            if (!plot.isActive) continue

            for (const tile of plot.tiles.flat()) {
                if (tile.crop && tile.crop.type !== CropType.None) {
                    count++
                }
            }
        }
        return count
    }
}

export default Garden 