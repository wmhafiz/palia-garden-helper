import { create } from 'zustand'
import { Crop, Fertiliser } from '@/lib/garden-planner'

type SelectedItemType = 'crop' | 'fertiliser' | 'erase' | 'eraseCrop' | 'eraseFertiliser' | 'erasePlot' | 'erasePlotCrop' | 'erasePlotFertiliser' | null

interface SelectedItemState {
    selectedItem: Crop | Fertiliser | null
    selectedItemType: SelectedItemType
    isEraseMode: boolean
    isEraseCropMode: boolean
    isEraseFertiliserMode: boolean
    isErasePlotMode: boolean
    isErasePlotCropMode: boolean
    isErasePlotFertiliserMode: boolean

    // Actions
    selectCrop: (crop: Crop) => void
    selectFertiliser: (fertiliser: Fertiliser) => void
    setEraseMode: () => void
    setEraseCropMode: () => void
    setEraseFertiliserMode: () => void
    setErasePlotMode: () => void
    setErasePlotCropMode: () => void
    setErasePlotFertiliserMode: () => void
    clearSelection: () => void
}

export const useSelectedItem = create<SelectedItemState>((set) => ({
    selectedItem: null,
    selectedItemType: null,
    isEraseMode: false,
    isEraseCropMode: false,
    isEraseFertiliserMode: false,
    isErasePlotMode: false,
    isErasePlotCropMode: false,
    isErasePlotFertiliserMode: false,

    selectCrop: (crop) => set({
        selectedItem: crop,
        selectedItemType: 'crop',
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
        isErasePlotCropMode: false,
        isErasePlotFertiliserMode: false,
    }),

    selectFertiliser: (fertiliser) => set({
        selectedItem: fertiliser,
        selectedItemType: 'fertiliser',
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
        isErasePlotCropMode: false,
        isErasePlotFertiliserMode: false,
    }),

    setEraseMode: () => set({
        selectedItem: null,
        selectedItemType: 'erase',
        isEraseMode: true,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
        isErasePlotCropMode: false,
        isErasePlotFertiliserMode: false,
    }),

    setEraseCropMode: () => set({
        selectedItem: null,
        selectedItemType: 'eraseCrop',
        isEraseMode: false,
        isEraseCropMode: true,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
        isErasePlotCropMode: false,
        isErasePlotFertiliserMode: false,
    }),

    setEraseFertiliserMode: () => set({
        selectedItem: null,
        selectedItemType: 'eraseFertiliser',
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: true,
        isErasePlotMode: false,
        isErasePlotCropMode: false,
        isErasePlotFertiliserMode: false,
    }),

    setErasePlotMode: () => set({
        selectedItem: null,
        selectedItemType: 'erasePlot',
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: true,
        isErasePlotCropMode: false,
        isErasePlotFertiliserMode: false,
    }),

    setErasePlotCropMode: () => set({
        selectedItem: null,
        selectedItemType: 'erasePlotCrop',
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
        isErasePlotCropMode: true,
        isErasePlotFertiliserMode: false,
    }),

    setErasePlotFertiliserMode: () => set({
        selectedItem: null,
        selectedItemType: 'erasePlotFertiliser',
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
        isErasePlotCropMode: false,
        isErasePlotFertiliserMode: true,
    }),

    clearSelection: () => set({
        selectedItem: null,
        selectedItemType: null,
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
        isErasePlotCropMode: false,
        isErasePlotFertiliserMode: false,
    }),
})) 