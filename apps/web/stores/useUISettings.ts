import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UISettings {
    showBonusIndicators: boolean
    showGridLines: boolean
    showTooltips: boolean
    isCompactMode: boolean
    autoSave: boolean
    enableNotifications: boolean
    enableSoundNotifications: boolean
}

interface UISettingsState extends UISettings {
    // Actions
    updateSetting: <K extends keyof UISettings>(key: K, value: UISettings[K]) => void
    resetSettings: () => void
    toggleBonusIndicators: () => void
    toggleGridLines: () => void
    toggleTooltips: () => void
    toggleCompactMode: () => void
    toggleAutoSave: () => void
    toggleNotifications: () => void
    toggleSoundNotifications: () => void
}

const defaultSettings: UISettings = {
    showBonusIndicators: true,
    showGridLines: true,
    showTooltips: true,
    isCompactMode: false,
    autoSave: true,
    enableNotifications: true,
    enableSoundNotifications: true,
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

            toggleBonusIndicators: () => set((state) => ({
                ...state,
                showBonusIndicators: !state.showBonusIndicators,
            })),

            toggleGridLines: () => set((state) => ({
                ...state,
                showGridLines: !state.showGridLines,
            })),

            toggleTooltips: () => set((state) => ({
                ...state,
                showTooltips: !state.showTooltips,
            })),

            toggleCompactMode: () => set((state) => ({
                ...state,
                isCompactMode: !state.isCompactMode,
            })),

            toggleAutoSave: () => set((state) => ({
                ...state,
                autoSave: !state.autoSave,
            })),

            toggleNotifications: () => set((state) => ({
                ...state,
                enableNotifications: !state.enableNotifications,
            })),

            toggleSoundNotifications: () => set((state) => ({
                ...state,
                enableSoundNotifications: !state.enableSoundNotifications,
            })),
        }),
        {
            name: 'palia-garden-planner-ui-settings',
        }
    )
) 