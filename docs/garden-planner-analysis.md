# Palia Garden Planner - React Port Analysis

## Overview

The Palia Garden Planner is a Vue.js/Nuxt.js application that allows users to plan their in-game gardens by placing crops and fertilizers on a grid-based layout. The application calculates bonuses, harvest yields, and provides comprehensive statistics.

## Core Architecture

### Data Layer (TypeScript Classes)

Located in `@/scripts/garden-planner/classes/`:

1. **Garden** - Main container class

   - Manages 2D array of Plot objects
   - Handles save/load functionality with encoded strings
   - Calculates bonuses across all plots
   - Simulates yield and calculates values

2. **Plot** - Individual 3x3 garden plot

   - Contains 3x3 grid of Tile objects
   - Manages adjacency relationships with other plots
   - Handles crop/fertilizer placement logic
   - Calculates bonuses for tiles within the plot

3. **Tile** - Individual tile within a plot

   - Holds a single Crop and/or Fertilizer
   - Tracks bonuses received from adjacent tiles
   - Has unique ID for multi-tile crop management

4. **Crop** - Crop data and behavior

   - Contains growth info, gold values, processing data
   - Handles harvest calculations and timing
   - Supports different sizes (single, bush, tree)

5. **Fertiliser** - Fertilizer data and effects

   - Provides bonuses to adjacent tiles
   - Different types with different effects

6. **Supporting Classes**:
   - **CropTiles** - Manages multi-tile crop placement
   - **Harvester** - Simulates harvest yields over time
   - **Processor** - Calculates seed/preserve processing

### Enums and Types

Located in `@/scripts/garden-planner/enums/` and `@/scripts/garden-planner/types/`:

- **Bonus** - Types of bonuses (water retain, harvest increase, etc.)
- **CropType** - All available crops
- **CropSize** - Single, Bush, Tree
- **FertiliserType** - All available fertilizers
- **Direction** - North, South, East, West for adjacency

### Data Files

- **cropList.ts** - All crop definitions with stats
- **fertiliserList.ts** - All fertilizer definitions

## UI Components Structure

### Main Components

1. **GardenPlanner.vue** - Root component

   - Orchestrates all child components
   - Manages state synchronization
   - Handles save/load operations

2. **NewGardenDisplay.vue** - Garden grid visualization

   - Renders the garden plots as interactive grid
   - Handles mouse interactions for placing crops/fertilizers
   - Shows visual bonuses and hover effects

3. **ItemSelector** - Tool palette

   - Crop selection with bonus filtering
   - Fertilizer selection
   - Erase tools
   - Keyboard shortcuts support

4. **MenuBar.vue** - Top toolbar

   - Save/Load/Export functions
   - Layout creation
   - Clear garden
   - UI settings

5. **StatsDisplay** - Statistics panel

   - Crop counts
   - Fertilizer usage
   - Bonus coverage statistics

6. **OutputDisplay** - Results panel
   - Harvest calculations
   - Gold value projections
   - Processing recommendations

### Supporting Components

- **SaveModal/LoadModal** - Save/load dialogs
- **ExportModal** - Export to image functionality
- **UISettingsModal** - Display preferences
- **LayoutCreator** - Custom garden layout builder
- **Toast** - Notification system

## Key Features

### Core Functionality

1. **Grid-based Garden Planning**

   - Variable garden sizes (3x3 to larger layouts)
   - Drag and drop crop/fertilizer placement
   - Multi-tile crop support (bushes, trees)

2. **Bonus System**

   - Adjacent tile bonus calculations
   - Cross-plot bonus effects
   - Visual bonus indicators

3. **Save/Load System**

   - Encoded string format for sharing
   - URL parameter loading
   - Settings persistence

4. **Harvest Simulation**
   - Multi-day yield calculations
   - Star seed probability
   - Replanting strategies
   - Processing optimization

### Advanced Features

1. **Export Functionality**

   - Screenshot generation
   - Watermarked images
   - Shareable layouts

2. **Statistics & Analytics**

   - Comprehensive crop/fertilizer counting
   - Gold value projections
   - Efficiency metrics

3. **User Experience**
   - Keyboard shortcuts
   - Responsive design
   - Accessibility features
   - Multiple display modes

## State Management (Pinia Stores)

The application uses several Pinia stores for state management:

- **useGarden** - Main garden state
- **useSelectedItem** - Currently selected tool/item
- **useHarvester** - Harvest simulation settings
- **useProcessor** - Processing settings
- **useSaveCode** - Save string management
- **useSettingsCode** - Settings persistence
- **useDragAndDrop** - Drag and drop state
- **useToasts** - Notification system

## Assets and Resources

### Images

- Crop images (`/crops/`)
- Fertilizer images (`/fertilisers/`)
- Seed images (`/seeds/`)
- Preserve jar images (`/jars/`)
- UI icons and logos

### Styling

- Tailwind CSS with custom Palia-themed colors
- Container queries for responsive layouts
- Custom bonus-specific color schemes

## Technical Dependencies

### Vue.js Ecosystem

- Vue 3 with Composition API
- Nuxt.js framework
- Pinia for state management
- VueUse utilities

### UI Libraries

- Tailwind CSS
- FontAwesome icons
- Konva.js for canvas rendering

### Utilities

- dom-to-image for screenshot generation
- uniqid for unique identifiers
- Vitest for testing
