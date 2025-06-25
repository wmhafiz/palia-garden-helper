import type Bonus from '../enums/bonus'
import type CropType from '../enums/crops'
import type CropSize from '../enums/crop-size'
import CropCode from '../enums/cropCode'

interface IProduceInfoOptions {
    base: number
    withBonus?: number
    growthTime: number
    isReharvestable?: boolean
    reharvestCooldown?: number
    reharvestLimit?: number
}

interface IProduceInfo extends IProduceInfoOptions {
    // NOTE: withBonus is an override, I'm not sure if all crops follow the (1.5x) rule
    withBonus: number
    isReharvestable: boolean
    reharvestCooldown: number
    reharvestLimit: number // Amount of times the crop can be reharvested
}

interface IGoldValuesOptions {
    crop: number
    cropStar: number
    seed: number
    seedStar: number
    preserve: number
    preserveStar?: number
    hasPreserve: boolean
}

interface IGoldValues extends IGoldValuesOptions {
    preserveStar: number
}

export interface ICropConversions {
    cropsPerSeed: number
    seedsPerConversion: number
    cropsPerPreserve: number
    seedProcessMinutes: number
    preserveProcessMinutes: number
}

interface IProductImages {
    preserve: string
    seed: string
}

interface ICropMetadata {
    cropCode: CropCode
    cropTooltip: string
    cropBackgroundColor: string
}

class Crop {
    private _produceInfo: IProduceInfo
    private _goldValues: IGoldValues
    private _images: {
        preserve: string
        seed: string
    }

    private _metadata: ICropMetadata

    constructor(
        public readonly type: CropType,
        public readonly cropBonus: Bonus,
        public readonly size: CropSize,
        public readonly image: string,
        produceInfoOptions: IProduceInfoOptions,
        goldValuesOptions: IGoldValuesOptions,
        public readonly conversionInfo: ICropConversions, // How much of each crop is required to make a seed/preserve
        images: IProductImages = {
            preserve: '',
            seed: '',
        },
        metadata: ICropMetadata = {
            cropCode: CropCode.None,
            cropTooltip: 'Remove Crop',
            cropBackgroundColor: '',
        },
    ) {
        this._images = images
        this._metadata = metadata

        this._produceInfo = {
            ...produceInfoOptions,
            withBonus: produceInfoOptions.withBonus || produceInfoOptions.base * 1.5,
            isReharvestable: produceInfoOptions.isReharvestable || false,
            reharvestCooldown: produceInfoOptions.reharvestCooldown || 0,
            reharvestLimit: produceInfoOptions.reharvestLimit || 0,
        }

        this._goldValues = {
            ...goldValuesOptions,
            preserveStar: goldValuesOptions.preserveStar || goldValuesOptions.preserve * 1.5, // We want to assume the same 1.5x rule if not proivided
        }
    }

    get produceInfo(): IProduceInfo {
        return this._produceInfo
    }

    get goldValues(): IGoldValues {
        return this._goldValues
    }

    get cropImage(): string {
        return this.image
    }

    get preserveImage(): string {
        return this._images.preserve
    }

    get seedImage(): string {
        return this._images.seed
    }

    get cropCode(): CropCode {
        return this._metadata.cropCode
    }

    get cropTooltip(): string {
        return this._metadata.cropTooltip
    }

    get cropBackgroundColor(): string {
        return this._metadata.cropBackgroundColor
    }

    // Assumes player harvests on the day it is harvestable
    isHarvestableOnDay(day: number, hasGrowthBoost: boolean = false) {
        let { growthTime, reharvestCooldown, reharvestLimit } = this._produceInfo

        let newReharvestCooldown = reharvestCooldown

        let leftover = 0
        if (hasGrowthBoost) {
            leftover = growthTime % 3
            growthTime = Math.ceil((growthTime / 3) * 2)
            newReharvestCooldown = Math.ceil((reharvestCooldown / 3) * 2)
        }

        const totalGrowthTime = this.getTotalGrowTime(hasGrowthBoost)

        const onLastHarvest = (day % totalGrowthTime) === 0
        const doReplant = onLastHarvest

        const harvestableDays: number[] = []
        harvestableDays.push(growthTime)
        let lastHarvestDay = growthTime

        for (let i = 0; i < reharvestLimit; i++) {
            const newDay = Math.max(lastHarvestDay + newReharvestCooldown - leftover, 1)
            harvestableDays.push(newDay)
            lastHarvestDay = newDay
            leftover = newDay - lastHarvestDay
        }

        if (onLastHarvest) {
            return {
                isHarvestable: true,
                doReplant,
            }
        }
        return {
            isHarvestable: harvestableDays.includes(day % totalGrowthTime),
            doReplant,
        }
    }

    getHarvestableDays(hasGrowthBoost: boolean = false): number[] {
        let { growthTime, reharvestCooldown, reharvestLimit } = this._produceInfo

        let newReharvestCooldown = reharvestCooldown

        let leftover = 0
        if (hasGrowthBoost) {
            leftover = growthTime % 3
            growthTime = Math.ceil((growthTime / 3) * 2)
            newReharvestCooldown = Math.ceil((reharvestCooldown / 3) * 2)
        }

        const harvestableDays: number[] = []
        harvestableDays.push(growthTime)
        let lastHarvestDay = growthTime

        for (let i = 0; i < reharvestLimit; i++) {
            const newDay = Math.max(lastHarvestDay + newReharvestCooldown - leftover, 1)
            harvestableDays.push(newDay)
            lastHarvestDay = newDay
            leftover = newDay - lastHarvestDay
        }

        return harvestableDays
    }

    getTotalGrowTime(hasGrowthBoost: boolean = false): number {
        let { growthTime, reharvestCooldown, reharvestLimit } = this._produceInfo

        let newReharvestCooldown = reharvestCooldown

        if (hasGrowthBoost) {
            growthTime = Math.ceil((growthTime / 3) * 2)
            newReharvestCooldown = Math.ceil((reharvestCooldown / 3) * 2)
        }

        let totalTime = growthTime

        for (let i = 0; i < reharvestLimit; i++) {
            totalTime += newReharvestCooldown
        }

        return totalTime
    }

    calculateGoldValue(
        cropsCount: number,
        type: 'crop' | 'seed' | 'preserve',
        isStar: boolean = false,
    ) {
        const { crop, cropStar, seed, seedStar, preserve, preserveStar } = this._goldValues

        switch (type) {
            case 'crop':
                return isStar ? cropsCount * cropStar : cropsCount * crop
            case 'seed':
                return isStar ? cropsCount * seedStar : cropsCount * seed
            case 'preserve':
                return isStar ? cropsCount * preserveStar : cropsCount * preserve
            default:
                return 0
        }
    }

    convertCropToSeed(cropsCount: number): {
        count: number
        remainder: number
    } {
        const { cropsPerSeed, seedsPerConversion } = this.conversionInfo
        const totalCropsNeeded = cropsPerSeed * seedsPerConversion
        const seedsProduced = Math.floor(cropsCount / totalCropsNeeded) * seedsPerConversion
        const remainder = cropsCount % totalCropsNeeded

        return {
            count: seedsProduced,
            remainder,
        }
    }

    convertCropToPreserve(cropsCount: number): {
        count: number
        remainder: number
    } {
        const { cropsPerPreserve } = this.conversionInfo
        const preservesProduced = Math.floor(cropsCount / cropsPerPreserve)
        const remainder = cropsCount % cropsPerPreserve

        return {
            count: preservesProduced,
            remainder,
        }
    }
}

export default Crop 