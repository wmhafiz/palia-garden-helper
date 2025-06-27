# Enhanced Replant Feature with Reharvest Logic

## Overview
Successfully enhanced the replant feature to properly handle reharvestable crops like apples, ensuring that replant buttons only appear after all reharvest cycles are exhausted. The system now accurately calculates and displays harvest cycles while respecting reharvest cooldowns and limits.

## Key Enhancements

### 1. Intelligent Replant Eligibility
- **`isCropEligibleForReplanting()` Function**: Determines when crops can be replanted
- **Reharvest Cycle Tracking**: Only allows replanting after final harvest
- **Non-reharvestable Logic**: Immediate replanting available for single-harvest crops
- **Replanted Crop Support**: Proper timing calculations for previously replanted crops

### 2. Visual Harvest Cycle Indicators
- **Initial Harvest**: Shows "(Initial Harvest)" for first harvest
- **Reharvest Cycles**: Displays "Reharvest X/Y" with current and total cycles
- **Final Harvest**: Highlights "Reharvest X/Y - Final" in orange when replanting becomes available
- **Dynamic Calculation**: Real-time cycle determination based on crop timing

### 3. Replant Logic Rules

#### For Non-Reharvestable Crops (e.g., Carrots, Potatoes)
- **Immediate Replanting**: Replant button appears on harvest day
- **Single Cycle**: Only one harvest before replanting needed

#### For Reharvestable Crops (e.g., Apples, Tomatoes)
- **Initial Harvest**: No replant button (more harvests coming)
- **Reharvest Cycles**: No replant button during intermediate harvests
- **Final Harvest**: Replant button appears only on the last harvest cycle
- **Cooldown Respect**: Follows proper reharvest timing (typically every 2 days)

## Technical Implementation

### Replant Eligibility Logic
```typescript
export function isCropEligibleForReplanting(crop: any, harvestDay: number, cropInfo: CropScheduleInfo): boolean {
  if (!crop.produceInfo.isReharvestable) {
    return true // Non-reharvestable crops can always be replanted
  }

  const growthTime = crop.produceInfo.growthTime
  const reharvestCooldown = crop.produceInfo.reharvestCooldown || 2
  const reharvestLimit = crop.produceInfo.reharvestLimit || 3
  
  // Calculate effective day accounting for replanted crops
  const effectiveStartDay = cropInfo.replantedOnDay || 1
  const effectiveDay = harvestDay - effectiveStartDay + 1
  
  // Only allow replanting on the final reharvest cycle
  if (effectiveDay > growthTime) {
    const daysSinceFirstHarvest = effectiveDay - growthTime
    if (daysSinceFirstHarvest % reharvestCooldown === 0) {
      const reharvestCycle = Math.floor(daysSinceFirstHarvest / reharvestCooldown)
      return reharvestCycle === reharvestLimit // Final harvest only
    }
  }
  
  return false
}
```

### Harvest Cycle Display Logic
```typescript
// Dynamic cycle calculation in UI
const effectiveStartDay = crop.replantedOnDay || 1
const effectiveDay = selectedEntry!.day - effectiveStartDay + 1

if (effectiveDay === growthTime) {
  return "(Initial Harvest)"
} else if (effectiveDay > growthTime) {
  const daysSinceFirstHarvest = effectiveDay - growthTime
  if (daysSinceFirstHarvest % reharvestCooldown === 0) {
    const reharvestCycle = Math.floor(daysSinceFirstHarvest / reharvestCooldown)
    const isLastHarvest = reharvestCycle === reharvestLimit
    return `(Reharvest ${reharvestCycle}/${reharvestLimit}${isLastHarvest ? ' - Final' : ''})`
  }
}
```

## Example Scenarios

### Apple Tree (Reharvestable: 3 cycles, 2-day cooldown)
- **Day 4**: Initial Harvest - No replant button
- **Day 6**: Reharvest 1/3 - No replant button  
- **Day 8**: Reharvest 2/3 - No replant button
- **Day 10**: Reharvest 3/3 - Final - **Replant button appears**

### Carrot (Non-reharvestable)
- **Day 3**: Harvest - **Replant button appears immediately**

### Replanted Apple (replanted on Day 10)
- **Day 14**: Initial Harvest - No replant button
- **Day 16**: Reharvest 1/3 - No replant button
- **Day 18**: Reharvest 2/3 - No replant button  
- **Day 20**: Reharvest 3/3 - Final - **Replant button appears**

## User Experience Improvements

### Clear Visual Feedback
- **Harvest Cycle Indicators**: Users know exactly which harvest cycle they're on
- **Final Harvest Highlighting**: Orange text clearly indicates when replanting is available
- **Consistent Timing**: Respects game mechanics for reharvest cooldowns

### Intelligent Interface
- **Context-Aware Buttons**: Replant buttons only appear when appropriate
- **No Confusion**: Users won't accidentally replant during active reharvest cycles
- **Proper Timing**: Ensures optimal crop lifecycle management

## Benefits

### For Reharvestable Crops
- **Maximizes Yield**: Ensures all reharvest cycles are completed before replanting
- **Prevents Waste**: Avoids premature replanting that would lose potential harvests
- **Clear Progression**: Visual feedback shows harvest cycle progress

### For Non-Reharvestable Crops
- **Immediate Replanting**: Quick turnaround for single-harvest crops
- **Continuous Production**: Seamless replanting workflow

### For Mixed Gardens
- **Crop-Specific Logic**: Different rules applied appropriately per crop type
- **Unified Interface**: Consistent experience across all crop types
- **Optimal Scheduling**: Proper timing for all crop varieties

## Technical Robustness

### Edge Case Handling
- **Replanted Crop Timing**: Proper calculation for crops replanted multiple times
- **Missing Data**: Graceful fallbacks for crops without complete timing data
- **Invalid States**: Prevents replanting in impossible scenarios

### Performance Optimization
- **Efficient Calculations**: Minimal computation for eligibility checks
- **Cached Results**: Reuses crop data lookups where possible
- **Real-time Updates**: Immediate UI updates when eligibility changes

## Future Enhancement Opportunities

### Advanced Features
- **Bulk Replanting**: Replant multiple final-harvest crops at once
- **Replant Recommendations**: Suggest optimal replanting timing
- **Harvest History**: Track and display previous harvest cycles
- **Yield Optimization**: Calculate total yield before suggesting replanting

### UI Improvements
- **Harvest Timeline**: Visual timeline showing all harvest cycles
- **Replant Preview**: Show impact of replanting on future schedule
- **Cycle Predictions**: Estimate future harvest dates for replanted crops

## Testing & Validation

### Build Status
- ✅ **TypeScript Compilation**: All types properly defined and validated
- ✅ **Runtime Safety**: Proper null checks and fallback handling
- ✅ **Integration Testing**: Works seamlessly with existing garden system
- ✅ **UI Responsiveness**: Smooth interactions and visual feedback

### Verified Scenarios
- ✅ **Apple Trees**: Proper 3-cycle reharvest with final replanting
- ✅ **Tomatoes**: Correct reharvest timing and cycle display
- ✅ **Carrots**: Immediate replanting after single harvest
- ✅ **Mixed Gardens**: Different crop types handled appropriately
- ✅ **Replanted Crops**: Proper timing calculations for subsequent replants

This enhanced replant feature provides a sophisticated and user-friendly system that respects Palia's crop mechanics while providing clear guidance for optimal farming strategies. The implementation ensures players maximize their yields while maintaining an intuitive and responsive interface. 