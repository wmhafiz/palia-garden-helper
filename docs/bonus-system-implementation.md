# Bonus System Implementation

## Overview

The bonus system implementation provides real-time calculation and visualization of crop bonuses based on adjacent tile placement, similar to the Vue.js implementation. This system calculates bonuses that crops receive from neighboring crops and fertilizers, with special handling for multi-tile crops.

## Key Features

### 1. Real-time Bonus Calculation

- **Adjacent Tile Analysis**: Each tile analyzes its neighboring tiles to determine available bonuses
- **Multi-tile Crop Support**: Trees (3x3) and bushes (2x2) have special requirements for bonus activation
- **Fertilizer Integration**: Fertilizers provide direct bonuses to the tile they're applied to

### 2. Visual Indicators

- **Bonus Icons**: Small icons displayed at the top of tiles showing active bonuses
- **Background Colors**: Tile background colors indicate the type of bonus the crop provides
- **Radial Charts**: Overall garden statistics displayed as radial progress charts

### 3. Bonus Coverage Statistics

- **Real-time Updates**: Statistics update automatically when crops are placed or removed
- **Coverage Percentage**: Shows percentage of crops receiving each bonus type
- **Visual Dashboard**: Radial charts for each bonus type with appropriate icons and colors

## Technical Implementation

### Core Classes

#### 1. Plot Class (`apps/web/lib/garden-planner/classes/plot.ts`)

**New Methods:**

- `getAdjacentTiles(row: number, col: number): Tile[]`
  - Returns tiles adjacent to a specific position
  - Includes tiles from neighboring plots for cross-plot bonus calculation
- `calculateBonusesReceived(): void`
  - Calculates bonuses each tile receives from adjacent crops and fertilizers
  - Excludes same-crop-type bonuses (crops don't benefit from themselves)

#### 2. Garden Class (`apps/web/lib/garden-planner/classes/garden.ts`)

**New Methods:**

- `calculateBonuses(): void`

  - Main bonus calculation method
  - Handles multi-tile crop requirements:
    - Trees (3x3): Need ≥3 sources of same bonus
    - Bushes (2x2): Need ≥2 sources of same bonus
    - Single tiles: Get all received bonuses

- `getBonusCoverage(): Record<string, number>`

  - Returns count of crops receiving each bonus type
  - Used for statistics display

- `getTotalCropCount(): number`
  - Returns total number of crops in the garden
  - Used for percentage calculations

#### 3. Tile Class (`apps/web/lib/garden-planner/classes/tile.ts`)

**Existing Properties Enhanced:**

- `bonuses: Bonus[]` - Final active bonuses on the tile
- `bonusesReceived: Bonus[]` - Raw bonuses received from adjacent sources

### React Components

#### 1. TileComponent (`apps/web/components/tile-component.tsx`)

**Enhanced Features:**

- **Background Colors**: Based on crop's bonus type

  - Speed Increase: Orange background
  - Harvest Increase: Green background
  - Quality Increase: Yellow background
  - Water Retain: Blue background
  - Weed Prevention: Purple background

- **Bonus Indicators**: Icons displayed at top of tiles

  - Zap icon for Speed Increase
  - Wheat icon for Harvest Increase
  - Star icon for Quality Increase
  - Droplets icon for Water Retain
  - Shield icon for Weed Prevention

- **Enhanced Tooltips**: Show crop type, bonus provided, and active bonuses

#### 2. RadialChart (`apps/web/components/radial-chart.tsx`)

**New Component Features:**

- Displays bonus coverage as radial progress charts
- Configurable size, colors, and icons
- Shows percentage and visual progress
- Responsive design with proper styling

#### 3. StatsDisplay (`apps/web/components/stats-display.tsx`)

**Enhanced with Bonus Statistics:**

- Bonus Coverage section with radial charts
- Real-time updates when garden changes
- Color-coded charts matching bonus types

## Bonus Types and Effects

### 1. Speed Increase (Growth Boost)

- **Color**: Orange (`--speed-increase`)
- **Icon**: Zap (⚡)
- **Effect**: Reduces crop growth time
- **Sources**: Fertilizers (Speedy Gro)

### 2. Harvest Increase

- **Color**: Green (`--harvest-boost`)
- **Icon**: Wheat (🌾)
- **Effect**: Increases crop yield by 50%
- **Sources**: Rice, Wheat, Corn, Blueberry, Apple, Butterfly Bean, Fertilizers (Harvest Boost)

### 3. Quality Increase

- **Color**: Yellow (`--quality-increase`)
- **Icon**: Star (⭐)
- **Effect**: Increases star crop chance by 50%
- **Sources**: Cotton, Spicy Pepper, Rockhopper Pumpkin, Fertilizers (Quality Up)

### 4. Water Retain

- **Color**: Blue (`--water-retain`)
- **Icon**: Droplets (💧)
- **Effect**: Prevents crops from needing water for one day
- **Sources**: Tomato, Potato, Napa Cabbage, Fertilizers (Hydrate Pro)

### 5. Weed Prevention

- **Color**: Purple (`--weed-prevention`)
- **Icon**: Shield (🛡️)
- **Effect**: Prevents weeds from appearing
- **Sources**: Carrot, Onion, Bok Choy, Fertilizers (Weed Block)

## Multi-tile Crop Requirements

### Trees (3x3 crops)

- **Size**: 9 tiles
- **Requirement**: Need at least 3 sources of the same bonus type
- **Example**: Apple tree needs 3 adjacent crops providing Harvest Increase to activate the bonus
- **Crops**: Apple

### Bushes (2x2 crops)

- **Size**: 4 tiles
- **Requirement**: Need at least 2 sources of the same bonus type
- **Example**: Blueberry bush needs 2 adjacent crops providing Harvest Increase to activate the bonus
- **Crops**: Blueberry, Spicy Pepper, Butterfly Bean, Rockhopper Pumpkin

### Single Tiles (1x1 crops)

- **Size**: 1 tile
- **Requirement**: Receive all bonuses from adjacent sources
- **Most common crop type**

## CSS Styling

### Custom CSS Variables (in `packages/ui/src/styles/globals.css`)

```css
/* Bonus colors for crops and fertilizers */
--water-retain: #3182ce;
--harvest-boost: #38a169;
--harvest-boost-dark: #2f855a;
--quality-increase: #d69e2e;
--quality-increase-dark: #b7791f;
--weed-prevention: #9f7aea;
--speed-increase: #ed8936;
```

### Tailwind Classes

- Background colors: `bg-blue-100`, `bg-green-100`, etc.
- Text colors: `text-blue-600`, `text-green-600`, etc.
- Custom classes for bonus indicators and radial charts

## Usage Examples

### Basic Bonus Calculation

```typescript
// After placing crops, calculate bonuses
garden.calculateBonuses();

// Get bonus coverage statistics
const coverage = garden.getBonusCoverage();
console.log(`Harvest bonuses active: ${coverage[Bonus.HarvestIncrease]}`);
```

### Checking Tile Bonuses

```typescript
const tile = plot.getTile(1, 1);
console.log(`Active bonuses: ${tile.bonuses}`);
console.log(`Received bonuses: ${tile.bonusesReceived}`);
```

### Component Integration

```tsx
// TileComponent automatically shows bonus indicators
<TileComponent
  tile={tile}
  showBonusIndicators={true}
  // ... other props
/>

// StatsDisplay shows radial charts
<StatsDisplay />
```

## Performance Considerations

### Optimization Strategies

1. **Batch Updates**: Bonus calculation triggered only when crops change
2. **Memoization**: Statistics calculated in useMemo hooks
3. **Selective Updates**: Only affected tiles recalculate bonuses
4. **Version Tracking**: Garden store version counter prevents unnecessary recalculations

### Update Triggers

- Crop placement/removal
- Fertilizer application/removal
- Plot activation/deactivation
- Garden layout changes

## Future Enhancements

### Potential Improvements

1. **Animation Effects**: Smooth transitions for bonus activation
2. **Bonus Stacking**: Multiple sources of same bonus type
3. **Advanced Tooltips**: Detailed bonus calculation explanations
4. **Bonus History**: Track bonus changes over time
5. **Export/Import**: Save bonus configurations with garden layouts

### Performance Optimizations

1. **Spatial Indexing**: Faster adjacent tile lookup
2. **Incremental Updates**: Only recalculate changed areas
3. **Web Workers**: Background bonus calculations for large gardens
4. **Caching**: Store calculated results for repeated patterns

## Testing

### Unit Tests

- Bonus calculation accuracy
- Multi-tile crop requirements
- Adjacent tile detection
- Cross-plot bonus propagation

### Integration Tests

- Component rendering with bonuses
- Real-time statistics updates
- Garden state persistence
- Performance benchmarks

## Migration from Vue.js

### Key Differences

1. **React Hooks**: State management using Zustand instead of Pinia
2. **TypeScript**: Enhanced type safety throughout
3. **Component Structure**: React functional components vs Vue composition API
4. **Styling**: Tailwind CSS with custom variables vs Vue scoped styles

### Compatibility

- Save/load format compatible with Vue.js version
- Bonus calculation logic identical to Vue implementation
- Visual appearance maintains consistency with original design
- All bonus types and effects preserved

## Conclusion

The bonus system implementation provides a comprehensive and performant solution for real-time crop bonus calculation and visualization. The system maintains compatibility with the original Vue.js implementation while leveraging React and TypeScript for enhanced developer experience and type safety.

The modular design allows for easy extension and maintenance, while the visual indicators provide clear feedback to users about their garden optimization strategies.
