import { create } from 'zustand'
import { Crop, Fertiliser } from '@/lib/garden-planner'

type SelectedItemType = 'crop' | 'fertiliser' | 'erase' | null

interface SelectedItemState {
    selectedItem: Crop | Fertiliser | null
    selectedItemType: SelectedItemType
    isEraseMode: boolean

    // Actions
    selectCrop: (crop: Crop) => void
    selectFertiliser: (fertiliser: Fertiliser) => void
    setEraseMode: () => void
    clearSelection: () => void
}

export const useSelectedItem = create<SelectedItemState>((set) => ({
    selectedItem: null,
    selectedItemType: null,
    isEraseMode: false,

    selectCrop: (crop) => set({
        selectedItem: crop,
        selectedItemType: 'crop',
        isEraseMode: false,
    }),

    selectFertiliser: (fertiliser) => set({
        selectedItem: fertiliser,
        selectedItemType: 'fertiliser',
        isEraseMode: false,
    }),

    setEraseMode: () => set({
        selectedItem: null,
        selectedItemType: 'erase',
        isEraseMode: true,
    }),

    clearSelection: () => set({
        selectedItem: null,
        selectedItemType: null,
        isEraseMode: false,
    }),
})) 