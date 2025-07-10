import { create } from 'zustand'
import { subscribeWithSelector, persist } from 'zustand/middleware'
import { GardenMode, ModeState, ModeActions } from '@/types/mode'
import { getDefaultModeData } from '@/lib/mode-config'

interface ModeStateStore extends ModeState, ModeActions {
    restoreFromDevSession: () => boolean
}

// Animation and transition utilities
const animateTransition = async (
    fromMode: GardenMode,
    toMode: GardenMode,
    onProgress: (progress: number) => void
): Promise<void> => {
    return new Promise((resolve) => {
        const duration = 300 // 300ms transition
        const startTime = Date.now()

        const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Easing function for smooth animation
            const easeProgress = 1 - Math.pow(1 - progress, 3)
            onProgress(easeProgress * 100)

            if (progress < 1) {
                requestAnimationFrame(animate)
            } else {
                resolve()
            }
        }

        requestAnimationFrame(animate)
    })
}

// Mode context initialization
const initializeModeContext = (mode: GardenMode) => {
    // Mode-specific initialization logic
    console.log(`Initializing context for ${mode} mode`)
    
    // In development, save current mode to sessionStorage for hot reload preservation
    if (process.env.NODE_ENV === 'development') {
        try {
            sessionStorage.setItem('dev-current-mode', mode)
        } catch (error) {
            console.warn('Failed to save mode to sessionStorage:', error)
        }
    }
}

export const useModeState = create<ModeStateStore>()(
    persist(
        subscribeWithSelector((set, get) => ({
            // State
            currentMode: GardenMode.DESIGN,
            previousMode: null,
            modeHistory: [GardenMode.DESIGN],
            modeData: {
                [GardenMode.DESIGN]: getDefaultModeData(GardenMode.DESIGN),
                [GardenMode.OPTIMIZE]: getDefaultModeData(GardenMode.OPTIMIZE),
                [GardenMode.ANALYZE]: getDefaultModeData(GardenMode.ANALYZE),
                [GardenMode.PROCESS]: getDefaultModeData(GardenMode.PROCESS),
                [GardenMode.SCHEDULE]: getDefaultModeData(GardenMode.SCHEDULE),
            },
            isTransitioning: false,
            transitionProgress: 0,

            // Actions
            switchMode: async (newMode: GardenMode) => {
                const currentMode = get().currentMode;
                if (currentMode === newMode) return;

                console.log(`Switching from ${currentMode} to ${newMode}`);

                // Start transition
                set({ isTransitioning: true, transitionProgress: 0 });

                try {
                    // Animate transition
                    await animateTransition(currentMode, newMode, (progress) => {
                        set({ transitionProgress: progress });
                    });

                    // Update mode state
                    set({
                        currentMode: newMode,
                        previousMode: currentMode,
                        modeHistory: [...get().modeHistory, newMode],
                        isTransitioning: false,
                        transitionProgress: 100,
                    });

                    // Trigger mode-specific initialization
                    initializeModeContext(newMode);

                    console.log(`Successfully switched to ${newMode} mode`);
                    
                    // In development, save to sessionStorage for hot reload preservation
                    if (process.env.NODE_ENV === 'development') {
                        try {
                            sessionStorage.setItem('dev-current-mode', newMode)
                        } catch (error) {
                            console.warn('Failed to save mode for hot reload preservation:', error)
                        }
                    }
                } catch (error) {
                    console.error('Mode transition failed:', error);
                    // Reset transition state on error
                    set({
                        isTransitioning: false,
                        transitionProgress: 0,
                    });
                }
            },

            updateModeData: (mode: GardenMode, data: Partial<any>) => {
                const currentModeData = get().modeData[mode];
                set({
                    modeData: {
                        ...get().modeData,
                        [mode]: {
                            ...currentModeData,
                            ...data,
                        },
                    },
                });
            },

            resetModeData: (mode: GardenMode) => {
                const defaultData = getDefaultModeData(mode);
                set({
                    modeData: {
                        ...get().modeData,
                        [mode]: defaultData,
                    },
                });
            },

            setTransitioning: (isTransitioning: boolean) => {
                set({ isTransitioning });
            },

            setTransitionProgress: (progress: number) => {
                set({ transitionProgress: progress });
            },

            // Development-only method to restore mode from sessionStorage
            restoreFromDevSession: () => {
                if (process.env.NODE_ENV === 'development') {
                    try {
                        const savedMode = sessionStorage.getItem('dev-current-mode') as GardenMode
                        if (savedMode && Object.values(GardenMode).includes(savedMode)) {
                            const currentMode = get().currentMode
                            if (currentMode !== savedMode) {
                                set({ 
                                    currentMode: savedMode,
                                    previousMode: currentMode,
                                    modeHistory: [...get().modeHistory, savedMode],
                                })
                                console.log(`Restored mode from hot reload session: ${savedMode}`)
                                return true
                            } else {
                                console.log(`Mode already matches saved mode: ${savedMode}`)
                            }
                        } else {
                            console.log('No saved mode found in sessionStorage or invalid mode')
                        }
                    } catch (error) {
                        console.warn('Failed to restore mode from session:', error)
                    }
                }
                return false
            },
        })),
        {
            name: 'palia-garden-planner-mode-state',
            partialize: (state) => ({
                currentMode: state.currentMode,
                previousMode: state.previousMode,
                modeHistory: state.modeHistory,
                // Don't persist modeData as it contains complex objects
                // Don't persist transition state as it's temporary
            }),
        }
    )
);

// Selector hooks for easier access to specific mode data
export const useCurrentMode = () => useModeState((state) => state.currentMode);
export const useIsTransitioning = () => useModeState((state) => state.isTransitioning);
export const useTransitionProgress = () => useModeState((state) => state.transitionProgress);
export const useModeData = <T = any>(mode: GardenMode) =>
    useModeState((state) => state.modeData[mode] as T);
export const useCurrentModeData = <T = any>() => {
    const currentMode = useCurrentMode();
    return useModeState((state) => state.modeData[currentMode] as T);
};

// Hook for mode switching with error handling
export const useModeSwitch = () => {
    const switchMode = useModeState((state) => state.switchMode);

    const switchModeWithErrorHandling = async (newMode: GardenMode) => {
        try {
            await switchMode(newMode);
        } catch (error) {
            console.error('Failed to switch mode:', error);
            // Could add toast notification here
        }
    };

    return switchModeWithErrorHandling;
}; 