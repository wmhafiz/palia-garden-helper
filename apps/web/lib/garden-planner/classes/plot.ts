import uniqid from 'uniqid'
import Direction from '../enums/direction'
import Tile from './tile'
import type Crop from './crop'
import type Fertiliser from './fertiliser'
import CropType from '../enums/crops'
import Bonus from '../enums/bonus'

// Grid sizes for a plot
const TILE_ROWS = 3
const TILE_COLS = 3

class Plot {
    private _isActive: boolean = false
    private _tiles: Tile[][] = []
    private _id: string = uniqid()

    // Tracks the plot's neighbours for bonus calculations and cross-plot crop/fert placement
    private _adjacentPlots: {
        north: Plot | null
        south: Plot | null
        east: Plot | null
        west: Plot | null
    }

    constructor(isActive: boolean = false) {
        this._tiles = [
            [new Tile(null), new Tile(null), new Tile(null)],
            [new Tile(null), new Tile(null), new Tile(null)],
            [new Tile(null), new Tile(null), new Tile(null)],
        ]

        this._adjacentPlots = {
            north: null,
            south: null,
            east: null,
            west: null,
        }
        this._isActive = isActive
    }

    get id(): string {
        return this._id
    }

    get tiles(): Tile[][] {
        // prevents plot from being interacted with for calculations when inactive
        if (!this._isActive) {
            return [
                [new Tile(null), new Tile(null), new Tile(null)],
                [new Tile(null), new Tile(null), new Tile(null)],
                [new Tile(null), new Tile(null), new Tile(null)],
            ]
        }

        return this._tiles
    }

    set tiles(tiles: Tile[][]) {
        this._tiles = tiles
    }

    getTile(x: number, y: number): Tile {
        // prevents tile from being interacted with for calculations when inactive
        if (!this._isActive) {
            return new Tile(null)
        }

        if (x >= 0 && x < TILE_ROWS && y >= 0 && y < TILE_COLS && this._tiles[x] && this._tiles[x][y]) {
            return this._tiles[x][y]
        }

        return new Tile(null) // Return empty tile for out of bounds
    }

    setTile(row: number, column: number, crop: Crop | null): void {
        if (!this._isActive) return

        if (row >= 0 && row < TILE_ROWS && column >= 0 && column < TILE_COLS && this._tiles[row] && this._tiles[row][column]) {
            this._tiles[row][column].crop = crop
        }
    }

    addFertiliserToTile(row: number, column: number, fertiliser: Fertiliser | null, options: { removeSameId?: boolean; fertiliserForcedId?: string } = {}): void {
        if (!this._isActive) return

        // Bounds checking
        if (row < 0 || row >= TILE_ROWS || column < 0 || column >= TILE_COLS || !this._tiles[row] || !this._tiles[row][column]) {
            return
        }

        const { removeSameId = true, fertiliserForcedId = '' } = options

        if (fertiliser === null) {
            this.removeFertiliserFromTile(row, column, removeSameId)
            return
        }

        // Prevents fertilisers with the same id from being added to the same tile
        // This check is needed because the code for adding fertilisers to adjacent tiles is recursive
        if (this._tiles[row][column]!.fertiliser !== null && this._tiles[row][column]!.fertiliser?.id === fertiliser.id)
            return

        // forced id is used when adding fertilisers to bushes and trees
        const fertiliserId = (fertiliserForcedId === '') ? uniqid() : fertiliserForcedId

        fertiliser.id = fertiliserId
        this._tiles[row][column]!.fertiliser = fertiliser

        if (this._tiles[row][column]!.crop?.size === 'tree' || this._tiles[row][column]!.crop?.size === 'bush') {
            const tileId = this._tiles[row][column]!.id

            // look for adjacent tiles with the same id and recursively add fertiliser to them
            const matchingTiles: Tile[] = this._tiles.flat().filter((tile: Tile) => tile.id === tileId)
            matchingTiles.forEach((tile: Tile) => {
                const tileX: number = this._tiles.findIndex((row: Tile[]) => row.includes(tile))
                const tileRow = this._tiles[tileX]
                if (tileX >= 0 && tileRow) {
                    const tileY: number = tileRow.findIndex((t: Tile) => t === tile)
                    if (tileY >= 0 && tileRow[tileY]) {
                        tileRow[tileY]!.fertiliser = fertiliser
                    }
                }
            })

            // look for adjacent tiles with the same id in adjacent plots and recursively add fertiliser to them
            for (const adjacentPlot of Object.values(this._adjacentPlots)) {
                if (adjacentPlot === null)
                    continue
                const matchingTiles: Tile[] = adjacentPlot.tiles.flat().filter((tile: Tile) => tile.id === tileId)
                matchingTiles.forEach((tile: Tile) => {
                    const tileX: number = adjacentPlot.tiles.findIndex((row: Tile[]) => row.includes(tile))
                    const tileRow = adjacentPlot.tiles[tileX]
                    if (tileX >= 0 && tileRow) {
                        const tileY: number = tileRow.findIndex((t: Tile) => t === tile)
                        if (tileY >= 0) {
                            adjacentPlot.addFertiliserToTile(tileX, tileY, fertiliser, {
                                removeSameId,
                                fertiliserForcedId: fertiliserId,
                            })
                        }
                    }
                })
            }
        }
    }

    removeFertiliserFromTile(row: number, column: number, removeSameId: boolean = true): void {
        if (!this._isActive) return

        // Bounds checking
        if (row < 0 || row >= TILE_ROWS || column < 0 || column >= TILE_COLS || !this._tiles[row] || !this._tiles[row][column]) {
            return
        }

        const tileHadFertiliser = (this._tiles[row][column]!.fertiliser !== null)
        if (!tileHadFertiliser)
            return
        this._tiles[row][column]!.fertiliser = null

        // Code to remove fertilisers added to bushes and trees
        if (this._tiles[row][column]!.crop?.size === 'tree' || this._tiles[row][column]!.crop?.size === 'bush') {
            if (!removeSameId)
                return

            // remove fertilisers with the same id from the same plot
            const fertiliserId = this._tiles[row][column]!.id
            const matchingTiles: Tile[] = this._tiles.flat().filter((tile: Tile) => tile.id === fertiliserId)
            matchingTiles.forEach((tile: Tile) => {
                const tileX: number = this._tiles.findIndex((row: Tile[]) => row.includes(tile))
                const tileRow = this._tiles[tileX]
                if (tileX >= 0 && tileRow) {
                    const tileY: number = tileRow.findIndex((t: Tile) => t === tile)
                    if (tileY >= 0 && tileRow[tileY]) {
                        tileRow[tileY]!.fertiliser = null
                    }
                }
            })

            // look for adjacent tiles with the same id in adjacent plots and recursively remove them
            for (const adjacentPlot of Object.values(this._adjacentPlots)) {
                if (adjacentPlot === null)
                    continue
                const matchingTiles: Tile[] = adjacentPlot.tiles.flat().filter((tile: Tile) => tile.id === fertiliserId)

                matchingTiles.forEach((tile: Tile) => {
                    const tileX: number = adjacentPlot.tiles.findIndex((row: Tile[]) => row.includes(tile))
                    const tileRow = adjacentPlot.tiles[tileX]
                    if (tileX >= 0 && tileRow) {
                        const tileY: number = tileRow.findIndex((t: Tile) => t === tile)
                        if (tileY >= 0) {
                            adjacentPlot.removeFertiliserFromTile(tileX, tileY, removeSameId)
                        }
                    }
                })
            }
        }
    }

    removeCropFromTile(row: number, col: number): void {
        if (!this._isActive) return

        if (row >= 0 && row < TILE_ROWS && col >= 0 && col < TILE_COLS && this._tiles[row] && this._tiles[row][col]) {
            this._tiles[row][col].crop = null
            this._tiles[row][col].id = uniqid()
            this._tiles[row][col].bonuses = []
        }
    }

    set isActive(isActive: boolean) {
        this._isActive = isActive
    }

    get isActive(): boolean {
        return this._isActive
    }

    setPlotAdjacent(side: Direction, plot: Plot | null | undefined): void {
        switch (side) {
            case Direction.North:
                this._adjacentPlots.north = plot || null
                break
            case Direction.South:
                this._adjacentPlots.south = plot || null
                break
            case Direction.East:
                this._adjacentPlots.east = plot || null
                break
            case Direction.West:
                this._adjacentPlots.west = plot || null
                break
        }
    }

    getAdjacentPlot(side: Direction): Plot | null {
        switch (side) {
            case Direction.North:
                return this._adjacentPlots.north
            case Direction.South:
                return this._adjacentPlots.south
            case Direction.East:
                return this._adjacentPlots.east
            case Direction.West:
                return this._adjacentPlots.west
            default:
                return null
        }
    }

    /**
     * Gets tiles adjacent to a specific tile within this plot and from adjacent plots
     * @param row - Row index of the tile
     * @param col - Column index of the tile
     * @returns Array of adjacent tiles
     */
    getAdjacentTiles(row: number, col: number): Tile[] {
        const adjacentTiles: Tile[] = []

        // Check adjacent tiles within the same plot
        if (row > 0) {
            adjacentTiles.push(this._tiles[row - 1]![col]!)
        }
        if (row < 2) {
            adjacentTiles.push(this._tiles[row + 1]![col]!)
        }
        if (col > 0) {
            adjacentTiles.push(this._tiles[row]![col - 1]!)
        }
        if (col < 2) {
            adjacentTiles.push(this._tiles[row]![col + 1]!)
        }

        // Check adjacent tiles from neighboring plots
        if (row === 0 && this._adjacentPlots.north) {
            adjacentTiles.push(this._adjacentPlots.north.getTile(2, col))
        }
        if (row === 2 && this._adjacentPlots.south) {
            adjacentTiles.push(this._adjacentPlots.south.getTile(0, col))
        }
        if (col === 0 && this._adjacentPlots.west) {
            adjacentTiles.push(this._adjacentPlots.west.getTile(row, 2))
        }
        if (col === 2 && this._adjacentPlots.east) {
            adjacentTiles.push(this._adjacentPlots.east.getTile(row, 0))
        }

        return adjacentTiles.filter(tile => tile !== null)
    }

    /**
     * Calculates bonuses received by each tile from adjacent crops and fertilizers
     */
    calculateBonusesReceived(): void {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const tile = this._tiles[i]![j]!
                tile.bonusesReceived = []

                // Only calculate bonuses for tiles with crops
                if (!tile.crop || tile.crop.type === CropType.None) {
                    continue
                }

                const adjacentTiles = this.getAdjacentTiles(i, j)
                const bonuses: Bonus[] = []

                for (const adjacentTile of adjacentTiles) {
                    // Skip tiles without crops
                    if (!adjacentTile.crop || adjacentTile.crop.type === CropType.None) {
                        continue
                    }

                    // Skip tiles with the same crop type (crops don't give bonuses to themselves)
                    if (adjacentTile.crop.type === tile.crop.type) {
                        continue
                    }

                    // Add the bonus from the adjacent crop
                    bonuses.push(adjacentTile.crop.cropBonus as Bonus)
                }

                // Add fertilizer bonus if present
                if (tile.fertiliser !== null) {
                    bonuses.push(tile.fertiliser.effect)
                }

                tile.bonusesReceived = bonuses
            }
        }
    }
}

export default Plot 