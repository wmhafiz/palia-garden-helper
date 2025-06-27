# Replant Feature Implementation Summary

## Overview
Successfully implemented the replant feature for the Palia Garden Helper's crop watering schedule system. Users can now replant harvested crops directly from the schedule interface, and the system will automatically recalculate the schedule to include the newly replanted crops.

## Key Features Implemented

### 1. Core Data Structures
- **ReplantInfo Interface**: Tracks replanted crops with timing and location data
- **Extended CropScheduleInfo**: Added `replantedOnDay` field to track when crops were replanted
- **Enhanced ScheduleAction**: Already supported 'replant' action type

### 2. Store Functionality (`useWateringSchedule.ts`)
- **replantedCrops State**: Array to track all replanted crops
- **replantCrops Action**: Method to replant crops on specific harvest days
- **Schedule Regeneration**: Automatically recalculates schedule when crops are replanted
- **Time Conversion**: Converts Palia day numbers to real-world times for replanted crops

### 3. Schedule Logic Enhancements
- **Replanted Crop Integration**: Merges replanted crops with original garden analysis
- **Adjusted Timing Calculations**: Harvest and watering logic accounts for replant timing
- **Extended Schedule Duration**: Calculates maximum days including replanted crop lifecycles

### 4. User Interface (`schedule-calendar-widget.tsx`)
- **Replant Buttons**: Added to harvest actions in the day detail dialog
- **Visual Feedback**: RotateCcw icon for replant actions
- **Automatic Refresh**: Dialog closes and schedule updates after replanting

## Technical Implementation Details

### Schedule Generation Process
1. **Analyze Garden**: Get current crops from garden state
2. **Add Replanted Crops**: Convert ReplantInfo to CropScheduleInfo format
3. **Calculate Timeline**: Determine maximum schedule days including replants
4. **Generate Daily Actions**: Create watering/harvest actions for all days
5. **Apply Timing Logic**: Adjust for replant start dates

### Replant Timing Logic
```typescript
// For replanted crops, adjust calculations based on replant day
const effectiveStartDay = cropInfo.replantedOnDay || 1
const effectiveDay = day - effectiveStartDay + 1

// Skip if this day is before the crop was planted/replanted
if (effectiveDay < 1) return false
```

### Water Retention Handling
- **Individual Crop Logic**: Checks actual tile bonuses for each replanted crop location
- **Day 1 Watering**: Replanted crops with Water Retention only need watering on replant day
- **Daily Watering**: Replanted crops without Water Retention need daily watering

## User Experience Flow

### Replanting Process
1. **View Schedule**: User opens calendar widget and clicks on a harvest day
2. **See Harvest Actions**: Day detail dialog shows crops ready for harvest
3. **Choose to Replant**: User clicks "Replant" button next to specific crop
4. **Automatic Update**: Schedule regenerates with new replanted crop timeline
5. **Continue Farming**: User sees updated schedule with replanted crop actions

### Visual Indicators
- **Harvest Days**: Green background with Scissors icon
- **Replant Buttons**: RotateCcw icon with "Replant" text
- **Real-world Times**: Shows when replanted crops need attention

## Benefits

### For Players
- **Continuous Farming**: Easy replanting extends growing seasons
- **Optimized Timing**: Knows exactly when replanted crops need care
- **Location Tracking**: Remembers where crops were replanted
- **Water Retention Aware**: Respects individual crop bonus effects

### For System
- **Dynamic Scheduling**: Adapts to user decisions in real-time
- **Accurate Calculations**: Proper timing for replanted crop lifecycles
- **Data Persistence**: Tracks replant history throughout schedule
- **Extensible Design**: Foundation for future advanced features

## Future Enhancement Opportunities

### Phase 2 Potential
- **Bulk Replanting**: Replant multiple crop types at once
- **Replant Recommendations**: Suggest optimal replant timing
- **Fertilizer Integration**: Include fertilizer needs for replanted crops
- **Advanced Adjacency**: Consider bonus effects for replanted crops
- **Replant History**: Track and display replanting patterns

### UI Improvements
- **Replant Confirmation**: Optional confirmation dialog
- **Replant Preview**: Show what the new schedule will look like
- **Batch Operations**: Select multiple crops for replanting
- **Visual Timeline**: Show original vs replanted crop lifecycles

## Technical Notes

### Performance Considerations
- **Efficient Regeneration**: Only recalculates schedule when needed
- **Memory Management**: Replanted crops stored separately from garden state
- **Real-time Updates**: Immediate visual feedback on replant actions

### Error Handling
- **Invalid Locations**: Gracefully handles missing or invalid crop locations
- **Timing Conflicts**: Prevents replanting before harvest completion
- **State Consistency**: Maintains schedule integrity during updates

## Testing Status
- **Build Success**: All TypeScript compilation passes
- **No Runtime Errors**: Clean implementation with proper type safety
- **Integration Ready**: Works with existing garden planner system
- **UI Responsive**: Calendar widget handles replant actions smoothly

This replant feature significantly enhances the crop watering schedule system by making it dynamic and responsive to user farming decisions, providing a more realistic and useful tool for Palia players. 