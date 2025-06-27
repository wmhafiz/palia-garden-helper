# Multi-tile Crop Bonus Fix - Complete Solution

## Problem
Trees and bushes imported from Vue.js save codes were not receiving bonuses from nearby crops. The issue was twofold:
1. Multi-tile crops were not being properly grouped with the same ID when loading save codes
2. Cross-plot multi-tile crops (bushes/trees spanning across plot boundaries) were not being handled correctly

## Root Cause
In the React implementation:
1. The `loadLayout` method was setting crops on individual tiles without assigning the same ID to tiles that belong to the same multi-tile crop
2. The React implementation lacked the adjacent plot connections that the Vue.js version uses for cross-plot crop handling
3. The bonus calculation logic couldn't properly group multi-tile crops that span across plot boundaries

The bonus calculation logic requires:
- **Trees (3x3)**: Need at least 3 sources of the same bonus type across all 9 tiles
- **Bushes (2x2)**: Need at least 2 sources of the same bonus type across all 4 tiles

## Solution
Added comprehensive cross-plot multi-tile crop support:

### 1. Adjacent Plot Connections
- Updated `loadLayout` method to set up proper adjacent plot relationships
- Each plot now knows its north, south, east, and west neighbors
- Matches the Vue.js implementation's plot connection system

### 2. Cross-Plot Multi-tile Grouping
- **New Method: `groupMultiTileCrops()`**: Enhanced to handle crops spanning across plot boundaries
- **New Method: `findConnectedTreeTiles()`**: Uses global coordinate system to identify 3x3 tree patterns across plots
- **New Method: `findConnectedBushTiles()`**: Uses global coordinate system to identify 2x2 bush patterns across plots

### 3. Global Coordinate System
- Converts plot-relative coordinates to global coordinates: `globalRow = plotRow * 3 + tileRow`
- Identifies multi-tile patterns regardless of plot boundaries
- Handles bushes that can span up to 4 plots (when placed at plot corners)

### 4. Enhanced Bonus Calculation
- With properly grouped tiles and cross-plot connections, multi-tile crops now receive correct bonuses
- Fixes the 90% vs 100% bonus coverage discrepancy

## Code Changes

### apps/web/lib/garden-planner/classes/garden.ts

1. **Added import**: `import uniqid from 'uniqid'`

2. **Enhanced loadLayout method**: 
   - Added adjacent plot connection setup
   - Added call to enhanced `groupMultiTileCrops()` method

3. **New cross-plot grouping methods**:
   - `groupMultiTileCrops()`: Global tile processing with cross-plot support
   - `findConnectedTreeTiles()`: Cross-plot 3x3 tree pattern detection
   - `findConnectedBushTiles()`: Cross-plot 2x2 bush pattern detection

4. **Adjacent plot setup**: Proper north/south/east/west plot connections

## Technical Details
- **Global Positioning**: Uses `plotRow * 3 + tileRow` to convert to global coordinates
- **Pattern Detection**: Finds top-left corner of multi-tile crops in global space
- **Cross-Plot Validation**: Checks if target plots exist and are active
- **ID Assignment**: All tiles in a multi-tile crop get the same unique ID

## Testing Results
- Cross-plot bush grouping logic verified with test scenarios
- Bushes at plot boundaries correctly span multiple plots
- Global coordinate system properly identifies connected tiles

## Expected Result
After this fix, the React implementation should achieve 100% bonus coverage for Harvest Boost, Water Retain, and Weed Prevention, matching the Vue.js implementation. Multi-tile crops that span across plot boundaries will now properly receive bonuses from adjacent crops. 