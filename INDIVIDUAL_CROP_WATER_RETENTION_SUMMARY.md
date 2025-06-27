# Individual Crop Water Retention Logic - Corrected Implementation

## Overview

The crop watering schedule now correctly handles **individual crop Water Retention bonuses**, checking each crop separately to determine its watering needs based on its specific bonuses.

## ✅ **Corrected Logic**

### How It Actually Works Now

**For Each Individual Crop:**

1. **Crops WITH Water Retention Bonus**: Only need watering on **Day 1** (initial planting)
2. **Crops WITHOUT Water Retention Bonus**: Need **daily watering** (except harvest days)

### Individual Crop Checking

The system now checks each crop's actual tile bonuses in the garden:

```typescript
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
```

## ❌ **Previous Incorrect Logic**

The previous implementation incorrectly:
- Only checked for 100% garden coverage
- Applied blanket rules to all crops
- Didn't consider individual crop tile bonuses

## ✅ **Correct Example Scenarios**

### Mixed Garden Example

**Garden Setup:**
- **Plot 1**: Tomatoes (have Water Retention bonus from adjacency)
- **Plot 2**: Carrots (no Water Retention bonus)
- **Plot 3**: Potatoes (have Water Retention bonus from fertilizer)

**Watering Schedule:**
- **Tomatoes**: Water on Day 1 only, then harvest on Day 4, 6, 8, 10
- **Carrots**: Water daily (Days 1, 2, 3), harvest on Day 3
- **Potatoes**: Water on Day 1 only, then harvest on Day 5

### Individual Crop Tracking

The system tracks each crop type separately:
- **Crop locations**: Knows exactly where each crop is planted
- **Tile bonuses**: Checks actual bonuses on each tile
- **Individual schedules**: Creates separate watering needs per crop type

## 🎯 **Benefits**

### Accurate Scheduling
- **No false watering alerts** for crops that have Water Retention
- **Proper watering reminders** for crops that need daily water
- **Mixed garden support** with different crop types and bonus coverage

### Realistic Gameplay
- **Matches Palia mechanics** where Water Retention affects individual crops
- **Encourages strategic planning** for crop placement and fertilizer use
- **Supports partial optimization** where some crops have bonuses and others don't

### User Experience
- **Clear feedback** on which crops need watering when
- **Efficient farming** by only watering crops that actually need it
- **Visual status** showing Water Retention coverage percentage

## 🔧 **Technical Implementation**

### Files Modified
- `apps/web/stores/useWateringSchedule.ts`: Updated `needsWatering()` function
- `apps/web/components/widgets/schedule-control-panel.tsx`: Updated UI messaging
- `WATER_RETENTION_FEATURE_SUMMARY.md`: Updated documentation

### Key Functions
- **`needsWatering()`**: Now checks individual crop tile bonuses
- **Garden integration**: Accesses actual garden state and tile data
- **Location tracking**: Uses crop location data to check specific tiles

### Water Retention Sources Supported
1. **Adjacency bonuses**: Crops next to Water Retention sources
2. **Fertilizer bonuses**: Hydrate Pro fertilizer applied to tiles
3. **Natural bonuses**: Tomato, Potato, Napa Cabbage providing bonuses to neighbors

## 📋 **Usage Examples**

### Example 1: Tomato with Water Retention
```
Day 1: Water tomato (initial planting)
Day 2: No watering needed
Day 3: No watering needed  
Day 4: Harvest tomato (includes watering)
Day 5: No watering needed
Day 6: Harvest tomato (reharvest)
```

### Example 2: Carrot without Water Retention
```
Day 1: Water carrot (initial planting)
Day 2: Water carrot (daily watering)
Day 3: Harvest carrot (includes watering)
```

### Example 3: Mixed Garden
```
Day 1: Water tomatoes + carrots (initial planting)
Day 2: Water carrots only (tomatoes have retention)
Day 3: Harvest carrots (includes watering)
Day 4: Harvest tomatoes (includes watering)
```

## 🚀 **Next Steps**

This corrected implementation provides the foundation for:

1. **Phase 2 Fertilizer Integration**: Full Hydrate Pro fertilizer support
2. **Advanced Adjacency**: Complex multi-crop bonus calculations  
3. **Optimization Suggestions**: Recommendations for achieving better coverage
4. **Visual Indicators**: Highlighting which crops have/need Water Retention

The system now accurately reflects how Water Retention works in Palia, providing players with precise and useful watering schedules for their individual crops! 🌱💧 