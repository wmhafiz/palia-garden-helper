import uniqid from 'uniqid'
import Direction from '../enums/direction'
import Tile from './tile'
import type Crop from './crop'
import type Fertiliser from './fertiliser'

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

        if (row >= 0 && row < TILE_ROWS && column >= 0 && column < TILE_COLS && this._tiles[row] && this._tiles[row][column]) {
            this._tiles[row][column].fertiliser = fertiliser
        }
    }

    removeFertiliserFromTile(row: number, column: number): void {
        if (!this._isActive) return

        if (row >= 0 && row < TILE_ROWS && column >= 0 && column < TILE_COLS && this._tiles[row] && this._tiles[row][column]) {
            this._tiles[row][column].fertiliser = null
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
}

export default Plot 