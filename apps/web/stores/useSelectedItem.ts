import { create } from 'zustand'
import { Crop, Fertiliser } from '@/lib/garden-planner'

type SelectedItemType = 'crop' | 'fertiliser' | 'erase' | 'eraseCrop' | 'eraseFertiliser' | 'erasePlot' | null

interface SelectedItemState {
    selectedItem: Crop | Fertiliser | null
    selectedItemType: SelectedItemType
    isEraseMode: boolean
    isEraseCropMode: boolean
    isEraseFertiliserMode: boolean
    isErasePlotMode: boolean

    // Actions
    selectCrop: (crop: Crop) => void
    selectFertiliser: (fertiliser: Fertiliser) => void
    setEraseMode: () => void
    setEraseCropMode: () => void
    setEraseFertiliserMode: () => void
    setErasePlotMode: () => void
    clearSelection: () => void
}

export const useSelectedItem = create<SelectedItemState>((set) => ({
    selectedItem: null,
    selectedItemType: null,
    isEraseMode: false,
    isEraseCropMode: false,
    isEraseFertiliserMode: false,
    isErasePlotMode: false,

    selectCrop: (crop) => set({
        selectedItem: crop,
        selectedItemType: 'crop',
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
    }),

    selectFertiliser: (fertiliser) => set({
        selectedItem: fertiliser,
        selectedItemType: 'fertiliser',
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
    }),

    setEraseMode: () => set({
        selectedItem: null,
        selectedItemType: 'erase',
        isEraseMode: true,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
    }),

    setEraseCropMode: () => set({
        selectedItem: null,
        selectedItemType: 'eraseCrop',
        isEraseMode: false,
        isEraseCropMode: true,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
    }),

    setEraseFertiliserMode: () => set({
        selectedItem: null,
        selectedItemType: 'eraseFertiliser',
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: true,
        isErasePlotMode: false,
    }),

    setErasePlotMode: () => set({
        selectedItem: null,
        selectedItemType: 'erasePlot',
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: true,
    }),

    clearSelection: () => set({
        selectedItem: null,
        selectedItemType: null,
        isEraseMode: false,
        isEraseCropMode: false,
        isEraseFertiliserMode: false,
        isErasePlotMode: false,
    }),
})) 