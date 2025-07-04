# Palia Garden Planner Mode System Documentation

## Overview

The Palia Garden Planner uses a sophisticated mode-based architecture that allows users to switch between different garden management contexts (Design, Optimize, Analyze, Process, Schedule). Each mode provides specialized tools and widgets relevant to its specific purpose.

## Architecture Components

### Core Components

1. **`base-mode.tsx`** - Provides the foundational layout and lifecycle management
2. **Mode Components** - Individual mode implementations (Design, Optimize, etc.)
3. **`mode-config.ts`** - Configuration and widget routing system
4. **Widget System** - Reusable UI components that appear in the right sidebar

## System Flow Diagram

```mermaid
graph TD
    A[User Selects Mode] --> B[ModeLayout Component]
    B --> C[Primary Interface]
    B --> D[Contextual Tools]
    B --> E[Widgets Sidebar]

    C --> F[Mode-Specific Content]
    F --> G[Design Mode: Sidebar + Garden]
    F --> H[Optimize Mode: Garden + Fertilizer Tools]
    F --> I[Analyze Mode: Charts + Analytics]
    F --> J[Process Mode: Processing Chains]
    F --> K[Schedule Mode: Calendar + Tasks]

    E --> L[ModeWidgets Component]
    L --> M[mode-config.ts]
    M --> N[Widget Routing Logic]
    N --> O[Rendered Widgets]

    D --> P[Mode-Specific Tools]
    P --> Q[Tool Groups]
```

## Component Hierarchy

```mermaid
graph TD
    A[ModeLayout] --> B[Contextual Tools Bar]
    A --> C[Main Content Area]

    C --> D[Primary Interface - flex-1]
    C --> E[Widgets Sidebar - w-80]

    D --> F[Design Mode: SidebarProvider]
    D --> G[Other Modes: Direct Content]

    F --> H[Left Sidebar: Crop Tools]
    F --> I[Garden Display]

    E --> J[ModeWidgets]
    J --> K[Widget Router]
    K --> L[Individual Widgets]

```

## Mode Configuration System

```mermaid
graph LR
    A[mode-config.ts] --> B[MODE_CONFIGS]
    A --> C[WIDGET_MODES]
    A --> D[getDefaultModeData]

    B --> E[Mode Definitions]
    E --> F[widgets: string]
    E --> G[tools: string]
    E --> H[shortcuts: string]

    C --> I[Widget-to-Mode Mapping]
    I --> J["crop-statistics": DESIGN, ANALYZE]
    I --> K["quick-info": DESIGN]
    I --> L["harvest-summary": ANALYZE]
```

## Widget Duplication Issue Explanation

The "Crops" and "Quick Info" widgets appearing twice is likely due to the **dual layout system** in Design Mode:

### Current Design Mode Layout Structure

```mermaid
graph TD
    A[ModeLayout] --> B[Primary Interface]
    A --> C[Widgets Sidebar]

    B --> D[SidebarProvider]
    D --> E[Left Sidebar: Design Tools]
    D --> F[SidebarInset: Garden Display]

    C --> G[ModeWidgets Component]
    G --> H[Crops Widget]
    G --> I[Quick Info Widget]

    E --> J[Crop Selection Tools]
    J --> K[Plant Mode: Crop Grid]
    J --> L[Remove Mode: Remove Tools]

```

### Why Duplication Occurs

1. **Left Sidebar (Design Tools)**: Contains crop selection interface with crop buttons organized by bonus type
2. **Right Sidebar (Widgets)**: Contains `ModeWidgets` which renders "Crops" and "Quick Info" widgets based on `mode-config.ts`

The duplication happens because:

- The **left sidebar** shows crop selection tools (part of the mode's primary interface)
- The **right sidebar** shows crop statistics widgets (configured in `MODE_CONFIGS[DESIGN].widgets`)

## Mode Implementation Patterns

### Standard Mode Pattern (Optimize, Analyze, Process, Schedule)

```mermaid
graph TD
    A[Mode Component] --> B[renderPrimaryInterface]
    A --> C[renderContextualTools]
    A --> D[renderWidgets]

    B --> E[Mode-specific content]
    C --> F[ToolGroup components]
    D --> G[ModeWidgets with ScrollArea]

    H[ModeLayout] --> B
    H --> C
    H --> D
```

### Design Mode Pattern (Special Case)

```mermaid
graph TD
    A[DesignMode] --> B[renderPrimaryInterface]
    A --> C[renderContextualTools]
    A --> D[renderWidgets]

    B --> E[SidebarProvider]
    E --> F[Left Sidebar: renderDesignSidebar]
    E --> G[SidebarInset: Garden]

    F --> H[Crop Selection Interface]

    D --> I[ModeWidgets: Crops + Quick Info]

    J[ModeLayout] --> B
    J --> C
    J --> D
```

## Data Flow

```mermaid
sequenceDiagram
    participant U as User
    participant ML as ModeLayout
    participant DM as DesignMode
    participant MW as ModeWidgets
    participant MC as mode-config.ts

    U->>ML: Select Design Mode
    ML->>DM: Render Primary Interface
    DM->>DM: renderDesignSidebar() - Crop Tools
    ML->>MW: Render Widgets
    MW->>MC: getWidgetsForMode(DESIGN)
    MC->>MW: ["crop-statistics", "quick-info"]
    MW->>MW: Render Crop Statistics + Quick Info

    Note over DM,MW: Both render crop-related content
```

## Configuration Details

### MODE_CONFIGS Structure

```typescript
[GardenMode.DESIGN]: {
    widgets: ["crop-statistics", "quick-info"],  // Right sidebar widgets
    tools: ["crop-selector", "pattern-tools"],   // Contextual tools
    shortcuts: ["1", "c", "p", "g"]             // Keyboard shortcuts
}
```

### Widget Routing Logic

```typescript
WIDGET_MODES: {
    "crop-statistics": [GardenMode.DESIGN, GardenMode.ANALYZE],
    "quick-info": [GardenMode.DESIGN]
}
```

## Layout Dimensions

```mermaid
graph LR
    A[ModeLayout Container] --> B[Primary Interface - flex-1]
    A --> C[Widgets Sidebar - w-80]

    B --> D[Design: SidebarProvider]
    D --> E[Left Sidebar - ~256px]
    D --> F[Garden Area - remaining]

    C --> G[Widget Content - 320px]
```

## Solution to Duplication

To fix the duplication, you would need to:

1. **Remove widgets** from Design mode config, OR
2. **Customize widget content** to show different information, OR
3. **Modify the layout** to integrate tools and widgets better

The current system works as designed - it's just that Design mode has both integrated tools (left sidebar) and configured widgets (right sidebar) that happen to show similar crop-related information.
