# Palia Time System Documentation

## Overview

Palia uses an accelerated time system where in-game time passes 24 times faster than real-world time. This document explains how the time system works and how it's implemented in our TimeDisplay component.

## Time Conversion

### Basic Rules

- **1 in-game day = 1 real-world hour**
- **1 in-game hour = 2.5 real-world minutes (150 seconds)**
- **Time runs 24x faster than real time**

### Official Time Conversion Table

Based on the [official Palia Wiki](https://palia.wiki.gg/wiki/Guide:Time_Passage_in_Palia):

| Palia Time | Real Time (minutes past the hour) |
| ---------- | --------------------------------- |
| 12:00 AM   | :00 (top of hour)                 |
| 6:00 AM    | :15 (15 minutes past)             |
| 12:00 PM   | :30 (30 minutes past)             |
| 6:00 PM    | :45 (45 minutes past)             |

## Day/Night Cycle

Palia's day is divided into four periods:

| Period  | Time Range        | Duration | Notes                                      |
| ------- | ----------------- | -------- | ------------------------------------------ |
| Morning | 3:00 AM - 6:00 AM | 3 hours  | Rooster crow audio                         |
| Day     | 6:00 AM - 6:00 PM | 12 hours | Bell ringing audio, **Harvest Boost Time** |
| Evening | 6:00 PM - 9:00 PM | 3 hours  | Bell ringing audio                         |
| Night   | 9:00 PM - 3:00 AM | 6 hours  | Owl hooting audio                          |

### Important Times

- **6:00 AM**: Harvest Boost Time - crops grow, mail delivered, shipping bin sold
- **6:00 PM**: Evening mail delivery and shipping bin collection

## Implementation Details

### Time Calculation Logic

The TimeDisplay component uses UTC time to ensure consistency across timezones:

```typescript
const calculatePaliaTime = () => {
  const now = new Date();

  // Use UTC time for consistency
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();
  const totalSeconds = utcMinutes * 60 + utcSeconds;

  // 150 seconds per in-game hour (3600 seconds ÷ 24 hours)
  const SECONDS_PER_HOUR = 150;

  // Calculate Palia time
  const hour = Math.floor(totalSeconds / SECONDS_PER_HOUR);
  const minute = Math.floor(
    ((totalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_HOUR) * 60
  );

  // Convert to 12-hour format
  const hourFormatted = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const meridiem = hour >= 12 ? "PM" : "AM";

  return { hourFormatted, minute, meridiem };
};
```

### Key Implementation Points

1. **UTC Time Usage**: Uses `getUTCMinutes()` and `getUTCSeconds()` to avoid timezone issues
2. **Hourly Reset**: Time calculation resets every real-world hour, creating a 24-hour Palia day cycle
3. **150-Second Intervals**: Each Palia hour equals exactly 150 real-world seconds
4. **12-Hour Format**: Displays time in familiar AM/PM format

### Harvest Boost Highlighting

The component highlights 6:00 AM Palia time in green, as this is when:

- Crops advance their growth stage
- Mail is delivered
- Shipping bin contents are sold

```typescript
const isHarvestTime = hourFormatted === 6 && minute === 0 && meridiem === "AM";
```

## Component Features

### Dual Time Display

The TimeDisplay component shows both:

1. **Local Earth Time**: Your real-world local time and date
2. **Palia Time**: Current in-game time with harvest boost highlighting

### Visual Design

- Clock icon for easy recognition
- Separated sections for Earth and Palia time
- Green highlighting during harvest boost (6:00 AM Palia time)
- Responsive layout with proper spacing

### Real-time Updates

- Updates every second for accurate time display
- Smooth transitions between time changes
- Immediate initialization on component mount

## Troubleshooting

### Common Issues

**"Time seems off by a few hours"**

- Palia time resets every real-world hour
- Check against the official conversion table above
- Ensure you're comparing at the correct real-world time

**"Harvest time not highlighting"**

- Harvest boost occurs at exactly 6:00 AM Palia time
- This corresponds to :15 minutes past each real-world hour
- Highlighting only shows at the exact minute (6:00, not 6:01)

**"Time doesn't match the game"**

- The calculation matches the official Palia Wiki specifications
- In-game time continues even when offline (unlike crops)
- Server time might have slight variations

### Testing the Implementation

To verify correct implementation:

1. **At :00 real time** → Should show 12:00 AM Palia time
2. **At :15 real time** → Should show 6:00 AM Palia time (green highlight)
3. **At :30 real time** → Should show 12:00 PM Palia time
4. **At :45 real time** → Should show 6:00 PM Palia time

## References

- [Official Palia Wiki - Time Passage](https://palia.wiki.gg/wiki/Guide:Time_Passage_in_Palia)
- [Palia Wiki - Time](https://palia.fandom.com/wiki/Time)
- Vue.js implementation reference from the original garden planner

## Technical Notes

### Why UTC Time?

Using UTC ensures the Palia time calculation is consistent regardless of:

- User's local timezone
- Daylight saving time changes
- Server location differences

### Performance Considerations

- Updates every 1000ms (1 second) for smooth display
- Lightweight calculations with minimal CPU impact
- Proper cleanup of intervals to prevent memory leaks

### Future Enhancements

Potential improvements could include:

- Notification system for harvest time
- Day/night cycle visual indicators
- Time-based activity reminders
- Historical time tracking for planning
