# Water Retention Coverage Feature

## Overview

The crop watering schedule now intelligently handles **100% Water Retention coverage**, eliminating unnecessary watering actions when your entire garden is covered by Water Retention bonuses.

## How It Works

### Water Retention in Palia

In Palia, the **Water Retention** bonus prevents crops from needing water for one day. This bonus can come from:

1. **Crop Sources**: Tomato, Potato, Napa Cabbage (provide Water Retention to adjacent crops)
2. **Fertilizer Sources**: Hydrate Pro fertilizer (provides Water Retention to the fertilized crop)
3. **Adjacency Bonuses**: Crops placed next to Water Retention sources receive the bonus

### Individual Crop Water Retention Logic

The schedule system checks each crop individually for Water Retention bonuses:

- **Crops WITH Water Retention**: Only need watering on **Day 1** (initial planting)
- **Crops WITHOUT Water Retention**: Need **daily watering** (except harvest days)
- **Keeps harvest actions** - All crops still need to be harvested on time
- **Keeps replant actions** - All crops still need replanting after their final harvest
- **Shows coverage status** - Displays individual crop watering needs

## Implementation Details

### Schedule Generation

The system calculates Water Retention coverage during schedule generation:

```typescript
// Calculate Water Retention coverage percentage
garden.calculateBonuses()
const bonusCoverage = garden.getBonusCoverage()
const totalCrops = garden.getTotalCropCount()
const waterRetentionPercentage = totalCrops > 0 ? (bonusCoverage[Bonus.WaterRetain] / totalCrops) * 100 : 0
```

### Watering Logic

The `needsWatering()` function now checks each individual crop's Water Retention status:

```typescript
function needsWatering(crop: any, day: number, cropInfo: CropScheduleInfo, waterRetentionPercentage: number = 0): boolean {
  // Check if ANY of this crop's locations have Water Retention bonus
  let hasWaterRetentionBonus = false
  for (const location of cropInfo.locations) {
    const plot = garden.getPlot(location.plotRow, location.plotCol)
    if (plot && plot.isActive) {
      const tile = plot.getTile(location.tileRow, location.tileCol)
      if (tile && tile.bonuses && tile.bonuses.includes(Bonus.WaterRetain)) {
        hasWaterRetentionBonus = true
        break
      }
    }
  }
  
  // Crops with Water Retention bonus only need watering on day 1 (initial planting)
  if (hasWaterRetentionBonus) {
    return day === 1
  }
  
  // Crops without Water Retention need daily watering
  return true
}
```

### User Interface

The **Schedule Control Panel** displays Water Retention status:

- **Coverage Percentage**: Shows current Water Retention coverage (e.g., "85% of crops covered")
- **Optimization Badge**: Displays "Minimal Watering" when at high coverage
- **Explanation**: Shows individual crop watering requirements based on their bonuses

## Benefits

### For Players

1. **Accurate Scheduling**: No false watering reminders when crops don't need water
2. **AFK-Friendly**: Perfect for AFK farming setups with full Water Retention coverage
3. **Clear Feedback**: Visual indication of when 100% coverage is achieved
4. **Simplified Actions**: Schedule only shows necessary harvest/replant actions

### For Optimization

1. **Efficient Gardens**: Encourages players to optimize for 100% Water Retention coverage
2. **Strategic Planning**: Helps players understand the value of Water Retention sources
3. **Resource Management**: Reduces unnecessary trips to the garden for watering

## Example Scenarios

### Scenario 1: Mixed Coverage (75%)
- **Result**: Some crops need watering, some don't
- **Schedule**: Shows both watering and harvest actions
- **Display**: "75% of crops covered"

### Scenario 2: Full Coverage (100%)
- **Result**: Crops with Water Retention only need watering on Day 1
- **Schedule**: Shows minimal watering (Day 1 only), harvest and replant actions
- **Display**: "100% of crops covered" + "Minimal Watering" badge

### Scenario 3: No Coverage (0%)
- **Result**: All crops need daily watering
- **Schedule**: Shows daily watering + harvest actions
- **Display**: "0% of crops covered"

## Technical Files Modified

### Core Logic
- `apps/web/stores/useWateringSchedule.ts`: Added Water Retention percentage calculation and watering logic

### User Interface
- `apps/web/components/widgets/schedule-control-panel.tsx`: Added Water Retention status display

### Integration
- Uses existing `useGardenStats()` hook for bonus coverage data
- Leverages existing garden bonus calculation system
- Maintains compatibility with existing schedule features

## Future Enhancements

### Potential Improvements

1. **Partial Coverage Optimization**: Smart watering schedules for gardens with 50-99% coverage
2. **Fertilizer Recommendations**: Suggest Hydrate Pro placement for remaining crops
3. **Coverage Visualization**: Highlight uncovered crops in the garden view
4. **Efficiency Metrics**: Track water savings from Water Retention coverage

### Phase 2 Features

1. **Fertilizer Integration**: Account for Hydrate Pro fertilizer effects
2. **Adjacency Planning**: Suggest optimal crop placement for maximum coverage
3. **Coverage Alerts**: Notify when coverage drops below 100%
4. **Historical Tracking**: Track coverage percentage over time

## Usage Guide

### Achieving 100% Coverage

1. **Plant Water Retention Crops**: Use Tomato, Potato, or Napa Cabbage as bonus sources
2. **Strategic Placement**: Place other crops adjacent to Water Retention sources
3. **Use Fertilizers**: Apply Hydrate Pro to crops that can't receive adjacency bonuses
4. **Verify Coverage**: Check the Schedule Control Panel for coverage percentage

### Monitoring Status

1. **Start Schedule**: Begin crop scheduling to see coverage status
2. **Check Control Panel**: Look for Water Retention Coverage section
3. **Watch for Badge**: "No Watering Needed!" appears at 100% coverage
4. **Review Schedule**: Only harvest/replant actions will be scheduled

This feature significantly improves the accuracy and usefulness of the crop scheduling system for optimized Palia gardens with full Water Retention coverage. 