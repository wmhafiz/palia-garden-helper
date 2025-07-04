import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { GardenMode, ModeState, ModeActions } from '@/types/mode'
import { getDefaultModeData } from '@/lib/mode-config'

interface ModeStateStore extends ModeState, ModeActions { }

// Animation helper for mode transitions
const animateTransition = async (
    fromMode: GardenMode,
    toMode: GardenMode,
    onProgress: (progress: number) => void
): Promise<void> => {
    return new Promise((resolve) => {
        const duration = 300; // 300ms transition
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth transition
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            onProgress(easeProgress * 100);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                resolve();
            }
        };

        requestAnimationFrame(animate);
    });
};

// Initialize mode context for a specific mode
const initializeModeContext = (mode: GardenMode) => {
    // Mode-specific initialization logic can be added here
    // For example, loading mode-specific data or setting up event listeners
    console.log(`Initializing context for ${mode} mode`);
};

export const useModeState = create<ModeStateStore>()(
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
    }))
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