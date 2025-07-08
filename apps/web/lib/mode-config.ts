import { GardenMode, ModeConfig, DesignModeData, OptimizeModeData, AnalyzeModeData, ProcessModeData, ScheduleModeData } from '@/types/mode';

// Mode configuration with widget and tool mapping
export const MODE_CONFIGS: Record<GardenMode, ModeConfig> = {
    [GardenMode.DESIGN]: {
        id: GardenMode.DESIGN,
        name: "Design",
        icon: "🌱",
        description: "Plan and place crops in your garden",
        primaryColor: "#22C55E",
        widgets: ["harvest-summary", "crop-statistics"],
        tools: ["crop-selector", "erase-tools", "selection-display", "undo-redo"],
        shortcuts: ["1", "c", "p", "g"],
    },
    [GardenMode.OPTIMIZE]: {
        id: GardenMode.OPTIMIZE,
        name: "Optimize",
        icon: "⚗️",
        description: "Apply fertilizers and optimize bonuses",
        primaryColor: "#8B5CF6",
        widgets: ["fertilizer-tips"],
        tools: ["fertilizer-selector", "erase-tools", "selection-display", "undo-redo"],
        shortcuts: ["2", "f", "b", "o"],
    },
    [GardenMode.ANALYZE]: {
        id: GardenMode.ANALYZE,
        name: "Analyze",
        icon: "📊",
        description: "Review performance and optimization opportunities",
        primaryColor: "#3B82F6",
        widgets: [
            "harvest-summary",
            "crop-breakdown",
            "crop-statistics",
            "processing-tips",
        ],
        tools: ["chart-selector", "metric-toggles", "comparison-tools"],
        shortcuts: ["3", "a", "m", "r"],
    },
    [GardenMode.PROCESS]: {
        id: GardenMode.PROCESS,
        name: "Process",
        icon: "⚙️",
        description: "Configure processing chains and equipment",
        primaryColor: "#F59E0B",
        widgets: ["processor-settings", "processor-output", "processing-tips"],
        tools: ["processor-selector", "chain-builder", "optimization-tools"],
        shortcuts: ["4", "r", "e", "q"],
    },
    [GardenMode.SCHEDULE]: {
        id: GardenMode.SCHEDULE,
        name: "Schedule",
        icon: "⏰",
        description: "Manage daily tasks and schedules",
        primaryColor: "#EF4444",
        widgets: [
            "daily-schedule",
            "schedule-calendar",
            "harvest-schedule",
            "schedule-control-panel",
        ],
        tools: ["calendar-tools", "task-manager", "time-controls"],
        shortcuts: ["5", "s", "t", "h"],
    },
};

// Widget routing system - maps widgets to modes
export const WIDGET_MODES: Record<string, GardenMode[]> = {
    "crop-statistics": [GardenMode.DESIGN, GardenMode.ANALYZE],
    "quick-info": [GardenMode.DESIGN],
    "fertilizer-tips": [GardenMode.OPTIMIZE],
    "bonus-coverage": [GardenMode.OPTIMIZE],
    "fertilizer-statistics": [GardenMode.OPTIMIZE],
    "harvest-summary": [GardenMode.DESIGN, GardenMode.ANALYZE],
    "crop-breakdown": [GardenMode.ANALYZE],
    "processing-tips": [GardenMode.ANALYZE, GardenMode.PROCESS],
    "processor-settings": [GardenMode.PROCESS],
    "processor-output": [GardenMode.PROCESS],
    "daily-schedule": [GardenMode.SCHEDULE],
    "schedule-calendar": [GardenMode.SCHEDULE],
    "harvest-schedule": [GardenMode.SCHEDULE],
    "schedule-control-panel": [GardenMode.SCHEDULE],
};

// Default mode data for each mode
export const getDefaultModeData = (mode: GardenMode): any => {
    switch (mode) {
        case GardenMode.DESIGN:
            return {
                selectedCrop: null,
                previewMode: false,
                gridSize: 3,
                selectedTools: [],
                patternMode: false,
            } as DesignModeData;

        case GardenMode.OPTIMIZE:
            return {
                selectedFertilizer: null,
                showEffectiveness: true,
                batchMode: false,
                bonusVisualization: true,
                selectedBonusType: null,
            } as OptimizeModeData;

        case GardenMode.ANALYZE:
            return {
                selectedMetrics: ["gold", "efficiency", "bonus-coverage"],
                timeHorizon: 30,
                chartType: "bar",
                comparisonMode: false,
            } as AnalyzeModeData;

        case GardenMode.PROCESS:
            return {
                selectedProcessor: null,
                processingChain: [],
                optimizationTarget: "gold",
                showBottlenecks: true,
            } as ProcessModeData;

        case GardenMode.SCHEDULE:
            return {
                selectedDate: new Date(),
                taskFilter: "all",
                viewMode: "calendar",
                reminderSettings: {},
            } as ScheduleModeData;

        default:
            return {};
    }
};

// Helper function to get mode configuration
export const getModeConfig = (mode: GardenMode): ModeConfig => {
    return MODE_CONFIGS[mode];
};

// Helper function to get widgets for a mode
export const getWidgetsForMode = (mode: GardenMode): string[] => {
    return MODE_CONFIGS[mode].widgets;
};

// Helper function to get tools for a mode
export const getToolsForMode = (mode: GardenMode): string[] => {
    return MODE_CONFIGS[mode].tools;
};

// Helper function to check if a widget should be visible in a mode
export const isWidgetVisibleInMode = (widgetId: string, mode: GardenMode): boolean => {
    const modes = WIDGET_MODES[widgetId];
    return modes ? modes.includes(mode) : false;
}; 