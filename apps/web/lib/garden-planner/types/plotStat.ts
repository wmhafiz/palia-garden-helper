import type CropType from '../enums/crops'
import type FertiliserType from '../enums/fertiliser'
import type Bonus from '../enums/bonus'

export interface PlotStat {
    cropCount: number
    cropTypeCount: { [key in CropType]: number }
    cropBonusCoverage: { [key in Bonus]: number }
    fertiliserCount: { [key in FertiliserType]: number }
} 