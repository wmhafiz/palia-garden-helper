// Mode system types for the UI redesign
export enum GardenMode {
    DESIGN = "design",
    OPTIMIZE = "optimize",
    ANALYZE = "analyze",
    PROCESS = "process",
    SCHEDULE = "schedule",
}

export interface ModeConfig {
    id: GardenMode;
    name: string;
    icon: string;
    description: string;
    primaryColor: string;
    widgets: string[];
    tools: string[];
    shortcuts: string[];
}

export interface ModeState {
    currentMode: GardenMode;
    previousMode: GardenMode | null;
    modeHistory: GardenMode[];
    modeData: Record<GardenMode, any>;
    isTransitioning: boolean;
    transitionProgress: number;
}

// Mode-specific data types
export interface DesignModeData {
    selectedCrop: string | null;
    previewMode: boolean;
    gridSize: number;
    selectedTools: string[];
    patternMode: boolean;
}

export interface OptimizeModeData {
    selectedFertilizer: string | null;
    showEffectiveness: boolean;
    batchMode: boolean;
    bonusVisualization: boolean;
    selectedBonusType: string | null;
}

export interface AnalyzeModeData {
    selectedMetrics: string[];
    timeHorizon: number;
    chartType: string;
    comparisonMode: boolean;
}

export interface ProcessModeData {
    selectedProcessor: string | null;
    processingChain: string[];
    optimizationTarget: string;
    showBottlenecks: boolean;
}

export interface ScheduleModeData {
    selectedDate: Date;
    taskFilter: string;
    viewMode: string;
    reminderSettings: Record<string, any>;
}

// Mode actions interface
export interface ModeActions {
    switchMode: (newMode: GardenMode) => Promise<void>;
    updateModeData: (mode: GardenMode, data: Partial<any>) => void;
    resetModeData: (mode: GardenMode) => void;
    setTransitioning: (isTransitioning: boolean) => void;
    setTransitionProgress: (progress: number) => void;
}

// Component prop types
export interface ModeComponentProps {
    mode: GardenMode;
    isActive: boolean;
    isTransitioning: boolean;
    transitionProgress: number;
    onModeChange: (mode: GardenMode) => void;
}

// Widget prop types
export interface WidgetProps {
    mode: GardenMode;
    isVisible: boolean;
    size: 'compact' | 'normal' | 'expanded';
    position: 'primary' | 'secondary' | 'floating';
}

// Information levels for progressive disclosure
export enum InformationLevel {
    CORE = 0, // Always visible
    CONTEXT = 1, // Mode-specific
    ADVANCED = 2, // On-demand
    EXPERT = 3, // Expert features
} 