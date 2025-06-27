# Crop Watering Schedule Feature

## Overview

This feature allows players to track when they need to return to their farm to tend to their crops based on their garden setup. The system will generate a schedule that shows both watering days and harvest days, helping players optimize their real-world time management.

## User Requirements

### User Story
As a player, I want to know what earth time I need to go back to my farm to tend to my crops, based on my garden setup.

### Core Functionality
1. User clicks a "Start Schedule" button to begin tracking
2. System generates a schedule for each day based on current garden configuration
3. For days that require user attention, show a button to mark tasks as done
4. Clearly indicate whether each day is a harvest day or water day and which crops need attention
5. Convert Palia time to real-world earth time for practical scheduling

## Technical Requirements

### Data Structure

#### Schedule Entry Interface
```typescript
interface ScheduleEntry {
  day: number                    // Palia day number (1, 2, 3, etc.)
  earthTime: Date               // Real-world time when action is needed
  actions: ScheduleAction[]     // List of actions needed on this day
  isCompleted: boolean          // Whether user has marked this day as done
}

interface ScheduleAction {
  type: 'water' | 'harvest' | 'replant' 
  crops: CropScheduleInfo[]     // Which crops need this action
  priority: 'high' | 'medium' | 'low'
}

interface CropScheduleInfo {
  cropType: string              // e.g., 'Tomato', 'Carrot'
  count: number                 // How many of this crop
  locations: PlotLocation[]     // Where these crops are located
  image?: string                // Crop image for display
  isReharvestable: boolean      // Whether this crop can be reharvested
  reharvestCount?: number       // Which reharvest cycle (1, 2, 3)
}

interface PlotLocation {
  plotRow: number
  plotCol: number
  tileRow: number
  tileCol: number
}
```

### Store Implementation

#### New Store: `useWateringSchedule`
```typescript
interface WateringScheduleState {
  // State
  schedule: ScheduleEntry[]
  isActive: boolean
  startTime: Date | null
  currentDay: number
  
  // Actions
  startSchedule: () => void
  stopSchedule: () => void
  markDayCompleted: (day: number) => void
  markDayIncomplete: (day: number) => void
  regenerateSchedule: () => void
  getNextActionTime: () => Date | null
  
  // Computed
  getUpcomingActions: (days: number) => ScheduleEntry[]
  getTodaysActions: () => ScheduleEntry | null
}
```

## Implementation Details

### Phase 1: Core Schedule Generation

#### 1.1 Schedule Calculation Logic
- Analyze current garden configuration using existing `useGarden` store
- For each planted crop, calculate:
  - Initial growth time to first harvest
  - Reharvest cycles (if applicable)
  - Watering requirements based on crop type and fertilizers
- Generate earth time timestamps based on Palia time conversion
- Account for Water Retention bonus (extends time between watering)

#### 1.2 Time Conversion System
- Leverage existing Palia time system from `TimeDisplay` component
- Convert Palia days to real-world time intervals
- Use 6:00 AM Palia time (harvest boost time) as the reference point
- Calculate when each action should occur in real-world time

#### 1.3 Crop Analysis Integration
- Extend existing crop analysis from `HarvestScheduleWidget`
- Add watering requirements to crop data
- Consider fertilizer effects on weeds and watering frequency
- Handle special cases for reharvestable crops

### Phase 2: User Interface Components

#### 2.1 Schedule Control Panel
```typescript
// Component: ScheduleControlPanel
interface ScheduleControlPanelProps {
  isActive: boolean
  onStart: () => void
  onStop: () => void
  onRegenerate: () => void
}
```

Features:
- Start/Stop schedule tracking
- Regenerate schedule when garden changes
- Display current schedule status
- Show next upcoming action

#### 2.2 Daily Schedule Widget
```typescript
// Component: DailyScheduleWidget
interface DailyScheduleWidgetProps {
  entries: ScheduleEntry[]
  onMarkCompleted: (day: number) => void
  showDays?: number // Default: 7 days ahead
}
```

Features:
- Show upcoming 7 days by default
- Color-coded actions (water = blue, harvest = green, replant = orange)
- Mark as completed functionality
- Crop thumbnails and counts
- Real-world time display

#### 2.3 Schedule Calendar View
```typescript
// Component: ScheduleCalendarView
interface ScheduleCalendarViewProps {
  schedule: ScheduleEntry[]
  onDayClick: (day: number) => void
  onMarkCompleted: (day: number) => void
}
```

Features:
- Monthly calendar view
- Action indicators on each day
- Click to see day details
- Completion status visualization

### Phase 3: Advanced Features

#### 3.1 Notification System
- Browser notifications for upcoming actions
- Integration with existing notification system
- Configurable reminder timing (30min, 1hr, 2hr before)
- Sound notifications for critical actions

## Integration Points

### Existing Components to Modify
1. **Garden Layout**: Add schedule generation trigger when crops are planted
2. **Harvest Schedule Widget**: Extend to include watering information
3. **Time Display**: Add schedule notifications
4. **UI Settings**: Add schedule preferences

### New Components to Create
1. **ScheduleControlPanel**: Main control interface
2. **DailyScheduleWidget**: Day-by-day schedule view
3. **ScheduleCalendarView**: Calendar overview
4. **ScheduleNotificationManager**: Handle notifications
5. **ScheduleExportDialog**: Export/share functionality

## User Experience Flow

### Initial Setup
1. User sets up their garden with crops
2. User clicks "Start Schedule" button
3. System analyzes garden and generates schedule
4. Schedule is displayed with next actions highlighted

### Daily Usage
1. User receives notification for upcoming action
2. User goes to farm and completes action
3. User marks action as completed in the app
4. System updates schedule and calculates next actions

### Schedule Management
1. User can view upcoming week/month
2. User can regenerate schedule if garden changes
3. User can export schedule to calendar app
4. User can adjust notification preferences

## Technical Considerations

### Performance
- Cache schedule calculations to avoid recalculation
- Use React.memo for schedule components
- Implement virtual scrolling for long schedules
- Debounce garden change events

### Error Handling
- Graceful degradation if time calculation fails
- Fallback to basic schedule if advanced features fail
- Clear error messages for invalid garden states

### Mobile Optimization
- Touch-friendly completion buttons
- Responsive calendar view
- Swipe gestures for navigation
- Offline notification support

## Conclusion

This crop watering schedule feature will significantly enhance the user experience by bridging the gap between in-game time management and real-world scheduling. The phased implementation approach ensures we can deliver core functionality quickly while building toward more advanced features.

The integration with existing systems (garden management, time display, harvest scheduling) provides a cohesive user experience while the modular design allows for future enhancements and optimizations. 