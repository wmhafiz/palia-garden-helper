import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UISettings {
    showBonusIndicators: boolean
    showGridLines: boolean
    showTooltips: boolean
    darkMode: boolean
    compactMode: boolean
    autoSave: boolean
}

interface UISettingsState extends UISettings {
    // Actions
    updateSetting: <K extends keyof UISettings>(key: K, value: UISettings[K]) => void
    resetSettings: () => void
}

const defaultSettings: UISettings = {
    showBonusIndicators: true,
    showGridLines: true,
    showTooltips: true,
    darkMode: false,
    compactMode: false,
    autoSave: true,
}

export const useUISettings = create<UISettingsState>()(
    persist(
        (set) => ({
            ...defaultSettings,

            updateSetting: (key, value) => set((state) => ({
                ...state,
                [key]: value,
            })),

            resetSettings: () => set(defaultSettings),
        }),
        {
            name: 'palia-garden-planner-ui-settings',
        }
    )
) 