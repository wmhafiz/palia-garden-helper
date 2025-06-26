# Palia Garden Planner - Backward Compatibility Implementation

## Overview

This document describes the implementation of backward compatibility for save layout codes between the original Vue.js garden planner and the new React implementation. The system supports all save code versions from 0.1 to 0.4, ensuring that users can seamlessly migrate their garden layouts.

## Save Code Format Evolution

### Version 0.1 (Original)

- **Format**: `v0.1_DIM-{dimensions}_CROPS-{crops}`
- **Crop Codes**: Two-character codes (e.g., `Na`, `To`, `Po`)
- **Example**: `v0.1_DIM-111-111-111_CROPS-NaNaToNaToCoToCoCo-NaNaNaToNaToCoToCo`

### Version 0.2

- **Format**: `v0.2_D-{dimensions}_CROPS-{crops}`
- **Crop Codes**: Shortened to single/double character codes (e.g., `N`, `T`, `P`)
- **Fertilizers**: Added support with dot notation (e.g., `T.Hp`)
- **Example**: `v0.2_D-111-111-111_CROPS-NNTNCTCCC-NNNTNCTCC`

### Version 0.3

- **Format**: `v0.3_D-{dimensions}_CR-{crops}_{settings}`
- **Changes**:
  - Crop prefix changed from `CROPS-` to `CR-`
  - Added settings section
  - Updated fertilizer codes (e.g., `Hp` → `Y`)
- **Example**: `v0.3_D-111-111-111_CR-BbBbBbBbBbBbBbBbBb-BbNBbBbNBbBbBbBb_D30NrNssL50Cr0.Bb.S7-BbS6`

### Version 0.4 (Current)

- **Format**: `v0.4_D-{dimensions}_CR-{crops}_{settings}`
- **Changes**:
  - Butterfly Bean code changed from `Bb` to `Bt`
  - Enhanced settings format
- **Example**: `v0.4_D-111-111-111_CR-PBkRTCTRBkP-BkPBkCTCBkRBk_L50Cr0.A.P-SP-BkS`

## Technical Implementation

### Core Components

#### 1. Save Handler (`apps/web/lib/garden-planner/save-handler.ts`)

The save handler provides the core backward compatibility functionality:

```typescript
// Main parsing function
export function parseSave(save: string): ParseSaveResult;

// Individual conversion functions
export function convertV0_1CodestoV0_2(save: string): string;
export function convertV_0_2Codesto_V_0_3(save: string): string;
export function convertV_0_3Codesto_V_0_4(save: string): string;
export function convertV_0_3SettingsToV_0_4Settings(settings: string): string;
```

**Key Features:**

- Iterative conversion from any version to v0.4
- Validation of dimension matrices
- Error handling for malformed codes
- Support for settings migration

#### 2. Garden Class Integration (`apps/web/lib/garden-planner/classes/garden.ts`)

The Garden class now includes methods to load and save layouts:

```typescript
class Garden {
  // Load from any version save code
  loadLayout(saveCode: string): boolean;

  // Save to v0.4 format
  saveLayout(settingsCode?: string): string;

  // Alias for Vue.js compatibility
  loadFromVueSave(saveCode: string): boolean;
}
```

#### 3. Store Integration (`apps/web/stores/useGarden.ts`)

The garden store provides import functionality:

```typescript
interface GardenState {
  importFromVueSaveCode: (saveCode: string) => boolean;
}
```

#### 4. UI Components

**Import Modal** (`apps/web/components/import-modal.tsx`):

- Detects Vue.js save codes automatically
- Shows format validation
- Supports both JSON and save code formats

**Load Modal** (`apps/web/components/load-modal.tsx`):

- Manages saved gardens
- Supports loading from browser storage

## Crop Code Mappings

### Version Evolution

| Crop            | v0.1 | v0.2 | v0.3 | v0.4   |
| --------------- | ---- | ---- | ---- | ------ |
| None            | Na   | N    | N    | N      |
| Tomato          | To   | T    | T    | T      |
| Potato          | Po   | P    | P    | P      |
| Rice            | Ri   | R    | R    | R      |
| Wheat           | Wh   | W    | W    | W      |
| Carrot          | Ca   | C    | C    | C      |
| Onion           | On   | O    | O    | O      |
| Cotton          | Co   | Co   | Co   | Co     |
| Blueberry       | Bl   | B    | B    | B      |
| Apple           | Ap   | A    | A    | A      |
| Corn            | Cr   | Cr   | Cr   | Cr     |
| Spicy Pepper    | Sp   | S    | S    | S      |
| Napa Cabbage    | Nc   | Cb   | Cb   | Cb     |
| Bok Choy        | Bc   | Bk   | Bk   | Bk     |
| Rockhop Pumpkin | Rp   | Pm   | Pm   | Pm     |
| Butterfly Bean  | Bb   | Bb   | Bb   | **Bt** |

### Fertilizer Code Mappings

| Fertilizer    | v0.2   | v0.3  | v0.4 |
| ------------- | ------ | ----- | ---- |
| None          | N      | N     | N    |
| Speedy Gro    | S      | S     | S    |
| Quality Up    | Q      | Q     | Q    |
| Weed Block    | W      | W     | W    |
| Harvest Boost | H      | H     | H    |
| Hydrate Pro   | **Hp** | **Y** | Y    |

## Conversion Process

### Automatic Migration Flow

1. **Version Detection**: Parse version from save code prefix
2. **Iterative Conversion**: Apply conversions sequentially until v0.4
3. **Validation**: Validate dimension matrix and crop codes
4. **Garden Loading**: Create new garden instance with converted data

```typescript
// Example conversion flow
v0.1 → convertV0_1CodestoV0_2() → v0.2
v0.2 → convertV_0_2Codesto_V_0_3() → v0.3
v0.3 → convertV_0_3Codesto_V_0_4() → v0.4
```

### Error Handling

- **Invalid Versions**: Throws error for unsupported versions
- **Malformed Codes**: Graceful handling with detailed error messages
- **Dimension Validation**: Ensures consistent plot matrix format
- **Crop Code Validation**: Validates crop and fertilizer codes

## Usage Examples

### Importing Vue.js Save Code

```typescript
import { useGarden } from "@/stores";

const { importFromVueSaveCode } = useGarden();

// Import any version save code
const success = importFromVueSaveCode("v0.3_D-111-111-111_CR-BbBbBb...");
```

### Manual Conversion

```typescript
import { parseSave } from "@/lib/garden-planner/save-handler";

const oldSave = "v0.1_DIM-111-111-111_CROPS-NaNaTo...";
const { version, dimensionInfo, cropInfo, settingsInfo } = parseSave(oldSave);
// Result: version = '0.4', with converted data
```

### Garden Loading

```typescript
import { Garden } from "@/lib/garden-planner/classes";

const garden = new Garden();
const success = garden.loadLayout("v0.3_D-111-111-111_CR-...");
```

## Testing

### Comprehensive Test Suite (`apps/web/lib/garden-planner/save-handler.test.ts`)

The test suite covers:

- **Full Save Conversion**: End-to-end conversion testing
- **Individual Functions**: Unit tests for each conversion function
- **Settings Migration**: Settings format conversion
- **Error Handling**: Invalid input handling
- **Edge Cases**: Minimal saves, empty sections, malformed data

### Test Examples

```typescript
// Test v0.3 to v0.4 conversion
it("should convert Butterfly Beans from Bb to Bt", () => {
  const v0_3Save = "v0.3_D-111-111-111_CR-BbBbBb...";
  const result = parseSave(v0_3Save);
  expect(result.cropInfo).toContain("BtBtBt");
});

// Test backward compatibility
it("should handle all versions", () => {
  const versions = ["v0.1", "v0.2", "v0.3", "v0.4"];
  versions.forEach((version) => {
    const save = `${version}_D-111_CR-N`;
    const result = parseSave(save);
    expect(result.version).toBe("0.4");
  });
});
```

## Migration Guide

### For Users

1. **Export from Vue.js App**: Copy save code from Vue.js garden planner
2. **Import to React App**: Use Import Modal or paste directly
3. **Automatic Conversion**: System handles version conversion automatically
4. **Verify Layout**: Check that crops and fertilizers are correctly placed

### For Developers

1. **Integration**: Import save handler functions
2. **Error Handling**: Implement proper error handling for failed conversions
3. **UI Updates**: Update import/export interfaces to support save codes
4. **Testing**: Add tests for specific use cases

## Performance Considerations

- **Lazy Loading**: Save handler is only loaded when needed
- **Efficient Parsing**: Regex-based parsing for optimal performance
- **Memory Management**: Minimal memory footprint for conversions
- **Error Recovery**: Graceful degradation for partial failures

## Future Enhancements

### Planned Features

1. **Bulk Import**: Support for importing multiple save codes
2. **Format Detection**: Automatic format detection without version prefix
3. **Export Options**: Export to different version formats
4. **Validation Tools**: Enhanced validation with detailed feedback

### Extensibility

The system is designed to be easily extensible:

- **New Versions**: Add new conversion functions for future versions
- **Custom Formats**: Support for custom save formats
- **Plugin System**: Modular conversion plugins
- **API Integration**: REST API for conversion services

## Troubleshooting

### Common Issues

1. **Invalid Save Code**: Check format and version prefix
2. **Conversion Failures**: Verify crop and fertilizer codes
3. **Dimension Errors**: Ensure plot matrix is valid (0s and 1s only)
4. **Settings Migration**: Check settings format for v0.3+ saves

### Debug Tools

```typescript
// Enable debug logging
console.log("Parsing save code...", save);
const result = parseSave(save);
console.log("Conversion result:", result);
```

## API Reference

### ParseSaveResult Interface

```typescript
interface ParseSaveResult {
  version: string; // Converted version (always '0.4')
  dimensionInfo: string; // Plot layout information
  cropInfo: string; // Crop and fertilizer data
  settingsInfo: string; // Garden settings (if present)
}
```

### Conversion Functions

```typescript
// Convert v0.1 to v0.2 format
function convertV0_1CodestoV0_2(save: string): string;

// Convert v0.2 to v0.3 format
function convertV_0_2Codesto_V_0_3(save: string): string;

// Convert v0.3 to v0.4 format
function convertV_0_3Codesto_V_0_4(save: string): string;

// Convert v0.3 settings to v0.4 format
function convertV_0_3SettingsToV_0_4Settings(settings: string): string;

// Main parsing function with automatic conversion
function parseSave(save: string): ParseSaveResult;
```

## Example Save Codes

### Version 0.1 Example

```
v0.1_DIM-111-111-111_CROPS-NaNaToNaToCoToCoCo-NaNaNaToNaToCoToCo-ToNaNaCoToNaCoCoTo-ToBlBlToBlBlNaToCo-ApApApApApApApApAp-BlBlToBlBlToCoToNa-NaNaToWhNaNaRiWhNa-CoCoCoToCoToNaToNa-ToNaNaNaNaPoNaPoOn
```

### Version 0.3 Example

```
v0.3_D-111-111-111_CR-BbBbBbBbBbBbBbBbBb-BbNBbBbNBbBbBbBb-BbBbBbBbBbBbBbBbN-BbBbBbBbBbBbBbBbBb-BbBbBbBbBbBbBbBbBb-BbBbNBbBbNBbBbN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN_D30NrNssL50Cr0.Bb.S7-BbS6
```

### Version 0.4 Example (Current)

```
v0.4_D-111-111-111_CR-PBkRTCTRBkP-BkPBkCTCBkRBk-RBkPTCTPBkR-PBkRTCTRBkP-A.HA.HA.HA.HA.HA.HA.HA.HA.H-RBkPTCTPBkR-PBkRTCTRBkP-BkPBkCTCBkRBk-RBkPTCTPBkR_L50Cr0.A.P-SP-BkS
```

## Conclusion

The backward compatibility implementation ensures seamless migration from the Vue.js garden planner to the React implementation. With support for all versions (0.1-0.4), comprehensive testing, and robust error handling, users can confidently migrate their garden layouts without data loss.

The modular design allows for easy maintenance and future enhancements while maintaining high performance and reliability.
