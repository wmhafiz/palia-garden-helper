import uniqid from 'uniqid'
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

    /**
     * Clears all crops and fertilizers from a specific plot
     * @param row Plot row index
     * @param col Plot column index
     */
    clearPlot(row: number, col: number): void {
        const plot = this.getPlot(row, col)
        if (plot && plot.isActive) {
            plot.tiles = [
                [new Tile(null), new Tile(null), new Tile(null)],
                [new Tile(null), new Tile(null), new Tile(null)],
                [new Tile(null), new Tile(null), new Tile(null)],
            ]
        }
    }

    /**
     * Clears only crops from a specific plot, leaving fertilizers intact
     * @param row Plot row index
     * @param col Plot column index
     */
    clearCropsFromPlot(row: number, col: number): void {
        const plot = this.getPlot(row, col)
        if (plot && plot.isActive) {
            for (let tileRow = 0; tileRow < 3; tileRow++) {
                for (let tileCol = 0; tileCol < 3; tileCol++) {
                    plot.removeCropFromTile(tileRow, tileCol)
                }
            }
        }
    }

    /**
     * Clears only fertilizers from a specific plot, leaving crops intact
     * @param row Plot row index
     * @param col Plot column index
     */
    clearFertilizersFromPlot(row: number, col: number): void {
        const plot = this.getPlot(row, col)
        if (plot && plot.isActive) {
            for (let tileRow = 0; tileRow < 3; tileRow++) {
                for (let tileCol = 0; tileCol < 3; tileCol++) {
                    plot.removeFertiliserFromTile(tileRow, tileCol)
                }
            }
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

            // Set plot active states and adjacent connections
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    if (dimensions[i] && dimensions[i]![j]) {
                        this.setPlotActive(i, j, dimensions[i]![j] === '1')
                    }
                }
            }

            // Set up adjacent plot connections
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    const plot = this.getPlot(i, j)
                    if (plot) {
                        // Set adjacent plots
                        if (i > 0) {
                            plot.setPlotAdjacent(Direction.North, this.getPlot(i - 1, j))
                        }
                        if (i < rows - 1) {
                            plot.setPlotAdjacent(Direction.South, this.getPlot(i + 1, j))
                        }
                        if (j > 0) {
                            plot.setPlotAdjacent(Direction.West, this.getPlot(i, j - 1))
                        }
                        if (j < columns - 1) {
                            plot.setPlotAdjacent(Direction.East, this.getPlot(i, j + 1))
                        }
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
                                    if (crop) {
                                        tile.crop = crop
                                    }
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

            // Group multi-tile crops after loading
            console.log('🔧 Garden.loadLayout: Calling groupMultiTileCrops()')
            this.groupMultiTileCrops()

            // Calculate bonuses after loading layout
            console.log('🔧 Garden.loadLayout: Calling calculateBonuses()')
            this.calculateBonuses()

            console.log('🔧 Garden.loadLayout: Load completed successfully')
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
     * Groups multi-tile crops (trees and bushes) by assigning the same ID to connected tiles of the same crop type
     * This method should be called after loading a layout to ensure proper bonus calculations
     */
    private groupMultiTileCrops(): void {
        console.log('🔧 groupMultiTileCrops: Starting multi-tile crop grouping')
        // Track processed tiles globally to avoid duplicate processing across plots
        const processedTiles = new Set<string>()

        for (let plotRow = 0; plotRow < this.rows; plotRow++) {
            for (let plotCol = 0; plotCol < this.columns; plotCol++) {
                const plot = this.getPlot(plotRow, plotCol)
                if (!plot || !plot.isActive) continue

                for (let tileRow = 0; tileRow < 3; tileRow++) {
                    for (let tileCol = 0; tileCol < 3; tileCol++) {
                        const tile = plot.getTile(tileRow, tileCol)
                        const globalTileKey = `${plotRow}-${plotCol}-${tileRow}-${tileCol}`

                        if (!tile || !tile.crop || processedTiles.has(globalTileKey)) continue

                        if (tile.crop.size === CropSize.Tree) {
                            // Find all connected tree tiles (3x3 groups) - can span across plots
                            const treeGroup = this.findConnectedTreeTiles(plotRow, plotCol, tileRow, tileCol, tile.crop.type)
                            if (treeGroup.length === 9) {
                                const groupId = uniqid()
                                treeGroup.forEach(({ plotRow: pRow, plotCol: pCol, tileRow: tRow, tileCol: tCol }) => {
                                    const targetPlot = this.getPlot(pRow, pCol)
                                    const groupTile = targetPlot?.getTile(tRow, tCol)
                                    if (groupTile) {
                                        groupTile.id = groupId
                                        processedTiles.add(`${pRow}-${pCol}-${tRow}-${tCol}`)
                                    }
                                })
                            }
                        } else if (tile.crop.size === CropSize.Bush) {
                            // Find all connected bush tiles (2x2 groups) - can span across plots
                            const bushGroup = this.findConnectedBushTiles(plotRow, plotCol, tileRow, tileCol, tile.crop.type)
                            if (bushGroup.length === 4) {
                                const groupId = uniqid()
                                console.log(`🌿 Creating bush group with ID: ${groupId} (4 tiles)`)
                                bushGroup.forEach(({ plotRow: pRow, plotCol: pCol, tileRow: tRow, tileCol: tCol }) => {
                                    const targetPlot = this.getPlot(pRow, pCol)
                                    const groupTile = targetPlot?.getTile(tRow, tCol)
                                    if (groupTile) {
                                        groupTile.id = groupId
                                        processedTiles.add(`${pRow}-${pCol}-${tRow}-${tCol}`)
                                    }
                                })
                            }
                        }
                    }
                }
            }
        }
        console.log('🔧 groupMultiTileCrops: Multi-tile crop grouping completed')
    }

    /**
     * Finds connected tree tiles (3x3) that can span across plots
     * @param plotRow Starting plot row
     * @param plotCol Starting plot column
     * @param tileRow Starting tile row within plot
     * @param tileCol Starting tile column within plot
     * @param cropType The crop type to match
     * @returns Array of connected tree tile positions
     */
    private findConnectedTreeTiles(plotRow: number, plotCol: number, tileRow: number, tileCol: number, cropType: CropType): Array<{plotRow: number, plotCol: number, tileRow: number, tileCol: number}> {
        const result: Array<{plotRow: number, plotCol: number, tileRow: number, tileCol: number}> = []

        // Calculate the global position of the tile
        const globalRow = plotRow * 3 + tileRow
        const globalCol = plotCol * 3 + tileCol

        // Find the top-left corner of the 3x3 tree
        const topLeftGlobalRow = Math.floor(globalRow / 3) * 3
        const topLeftGlobalCol = Math.floor(globalCol / 3) * 3

        // Check all 9 tiles in the 3x3 pattern
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                const checkGlobalRow = topLeftGlobalRow + r
                const checkGlobalCol = topLeftGlobalCol + c

                // Convert back to plot and tile coordinates
                const checkPlotRow = Math.floor(checkGlobalRow / 3)
                const checkPlotCol = Math.floor(checkGlobalCol / 3)
                const checkTileRow = checkGlobalRow % 3
                const checkTileCol = checkGlobalCol % 3

                const plot = this.getPlot(checkPlotRow, checkPlotCol)
                if (plot && plot.isActive) {
                    const tile = plot.getTile(checkTileRow, checkTileCol)
                    if (tile && tile.crop && tile.crop.type === cropType) {
                        result.push({ plotRow: checkPlotRow, plotCol: checkPlotCol, tileRow: checkTileRow, tileCol: checkTileCol })
                    }
                }
            }
        }

        return result
    }

    /**
     * Finds connected bush tiles (2x2) that can span across plots
     * @param plotRow Starting plot row
     * @param plotCol Starting plot column
     * @param tileRow Starting tile row within plot
     * @param tileCol Starting tile column within plot
     * @param cropType The crop type to match
     * @returns Array of connected bush tile positions
     */
    private findConnectedBushTiles(plotRow: number, plotCol: number, tileRow: number, tileCol: number, cropType: CropType): Array<{plotRow: number, plotCol: number, tileRow: number, tileCol: number}> {
        const result: Array<{plotRow: number, plotCol: number, tileRow: number, tileCol: number}> = []

        // For bushes, we need to check all possible 2x2 patterns that include this tile
        // A tile can be part of up to 4 different 2x2 patterns (top-left, top-right, bottom-left, bottom-right)
        
        const possiblePatterns = [
            // Current tile is top-left of 2x2
            { offsetRow: 0, offsetCol: 0 },
            // Current tile is top-right of 2x2  
            { offsetRow: 0, offsetCol: -1 },
            // Current tile is bottom-left of 2x2
            { offsetRow: -1, offsetCol: 0 },
            // Current tile is bottom-right of 2x2
            { offsetRow: -1, offsetCol: -1 }
        ]

        console.log(`    🔍 findConnectedBushTiles: Starting from plot[${plotRow},${plotCol}] tile[${tileRow},${tileCol}]`)

        for (const pattern of possiblePatterns) {
            const patternTiles: Array<{plotRow: number, plotCol: number, tileRow: number, tileCol: number}> = []
            let validPattern = true

            // Check if this 2x2 pattern is complete
            for (let r = 0; r < 2; r++) {
                for (let c = 0; c < 2; c++) {
                    const checkTileRow = tileRow + pattern.offsetRow + r
                    const checkTileCol = tileCol + pattern.offsetCol + c
                    
                    // Handle cross-plot boundaries
                    let checkPlotRow = plotRow
                    let checkPlotCol = plotCol
                    let adjustedTileRow = checkTileRow
                    let adjustedTileCol = checkTileCol

                    // Adjust for row overflow/underflow
                    if (adjustedTileRow < 0) {
                        checkPlotRow--
                        adjustedTileRow += 3
                    } else if (adjustedTileRow >= 3) {
                        checkPlotRow++
                        adjustedTileRow -= 3
                    }

                    // Adjust for column overflow/underflow
                    if (adjustedTileCol < 0) {
                        checkPlotCol--
                        adjustedTileCol += 3
                    } else if (adjustedTileCol >= 3) {
                        checkPlotCol++
                        adjustedTileCol -= 3
                    }

                    const plot = this.getPlot(checkPlotRow, checkPlotCol)
                    if (plot && plot.isActive) {
                        const tile = plot.getTile(adjustedTileRow, adjustedTileCol)
                        if (tile && tile.crop && tile.crop.type === cropType) {
                            patternTiles.push({ plotRow: checkPlotRow, plotCol: checkPlotCol, tileRow: adjustedTileRow, tileCol: adjustedTileCol })
                        } else {
                            validPattern = false
                            break
                        }
                    } else {
                        validPattern = false
                        break
                    }
                }
                if (!validPattern) break
            }

            // If we found a complete 2x2 pattern, return it
            if (validPattern && patternTiles.length === 4) {
                console.log(`    🔍 findConnectedBushTiles: Found complete 2x2 pattern with ${patternTiles.length} tiles`)
                return patternTiles
            }
        }

        console.log(`    🔍 findConnectedBushTiles: No complete 2x2 pattern found, returning single tile`)
        // If no complete pattern found, return just this tile
        return [{ plotRow, plotCol, tileRow, tileCol }]
    }

    /**
     * Calculates and assigns bonuses to crops based on adjacent tiles and multi-tile crop requirements
     */
    calculateBonuses(): void {
        console.log('🎯 calculateBonuses: Starting bonus calculation')
        const treeTiles: { [key: string]: Tile[] } = {}
        const bushTiles: { [key: string]: Tile[] } = {}
        const processedTiles = new Set<Tile>()

        const layoutFlat = this._layout.flat()

        // First, calculate bonuses received for all tiles
        for (const plot of layoutFlat) {
            if (!plot.isActive) continue
            plot.calculateBonusesReceived()
        }

        // Clear all bonuses first
        for (const plot of layoutFlat) {
            if (!plot.isActive) continue
            for (const tile of plot.tiles.flat()) {
                tile.bonuses = []
            }
        }

        // Collect all multi-tile crops into groups
        for (const plot of layoutFlat) {
            if (!plot.isActive) continue

            for (const tile of plot.tiles.flat()) {
                if (!tile.crop || tile.crop.type === CropType.None) continue

                if (tile.crop.size === CropSize.Tree) {
                    if (!treeTiles[tile.id]) {
                        treeTiles[tile.id] = []
                    }
                    treeTiles[tile.id]!.push(tile)
                } else if (tile.crop.size === CropSize.Bush) {
                    if (!bushTiles[tile.id]) {
                        bushTiles[tile.id] = []
                    }
                    bushTiles[tile.id]!.push(tile)
                }
            }
        }

        // Process complete tree groups (3x3, need 9 tiles)
        for (const [tileId, tileGroup] of Object.entries(treeTiles)) {
            if (tileGroup.length === 9) {
                // For trees, collect all unique bonus types received by any tile in the group
                const allBonusTypes = new Set<string>()
                
                // Collect all unique bonus types received by any tile in the group
                for (const tile of tileGroup) {
                    for (const bonus of tile.bonusesReceived) {
                        allBonusTypes.add(bonus)
                    }
                }
                
                // Apply all collected bonus types to every tile in the group
                for (const bonus of allBonusTypes) {
                    for (const treeTile of tileGroup) {
                        treeTile.bonuses.push(bonus as Bonus)
                        processedTiles.add(treeTile)
                    }
                }
            }
        }

        // Process complete bush groups (2x2, need 4 tiles)
        console.log(`🌿 calculateBonuses: Processing ${Object.keys(bushTiles).length} bush groups`)
        for (const [tileId, tileGroup] of Object.entries(bushTiles)) {
            console.log(`🌿 Bush group ${tileId}: ${tileGroup.length} tiles`)
            if (tileGroup.length === 4) {
                // For bushes, each tile gets bonuses from its own adjacent tiles
                // But if multiple tiles in the group receive the same bonus type,
                // all tiles in the group get that bonus
                const allBonusTypes = new Set<string>()
                
                // Collect all unique bonus types received by any tile in the group
                for (const tile of tileGroup) {
                    console.log(`  Tile bonusesReceived: [${tile.bonusesReceived.join(', ')}]`)
                    for (const bonus of tile.bonusesReceived) {
                        allBonusTypes.add(bonus)
                    }
                }
                
                console.log(`  All bonus types for group: [${Array.from(allBonusTypes).join(', ')}]`)
                
                // Apply all collected bonus types to every tile in the group
                for (const bonus of allBonusTypes) {
                    for (const bushTile of tileGroup) {
                        bushTile.bonuses.push(bonus as Bonus)
                        processedTiles.add(bushTile)
                    }
                }
                
                console.log(`  Applied bonuses to all ${tileGroup.length} tiles in group`)
            }
        }

        // Process all remaining tiles (singles and incomplete multi-tile groups)
        for (const plot of layoutFlat) {
            if (!plot.isActive) continue

            for (const tile of plot.tiles.flat()) {
                if (!tile.crop || tile.crop.type === CropType.None) continue
                
                // Skip tiles that were already processed as part of complete multi-tile groups
                if (processedTiles.has(tile)) continue

                // Single tiles and incomplete multi-tile groups get all bonuses they receive
                tile.bonuses = [...tile.bonusesReceived]
            }
        }

        // Debug: Log final bonus coverage
        const coverage = this.getBonusCoverage()
        const totalCrops = this.getTotalCropCount()
        console.log('🎯 calculateBonuses: Final bonus coverage:')
        Object.entries(coverage).forEach(([bonus, count]) => {
            const percentage = totalCrops > 0 ? Math.round((count / totalCrops) * 100) : 0
            console.log(`  ${bonus}: ${count}/${totalCrops} = ${percentage}%`)
        })
        console.log('🎯 calculateBonuses: Bonus calculation completed')
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