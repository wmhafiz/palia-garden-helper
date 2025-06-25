# Vue to React Component Mapping

## Core Components Conversion

### Main Application Components

| Vue Component          | React Component     | Notes                       |
| ---------------------- | ------------------- | --------------------------- |
| `GardenPlanner.vue`    | `GardenPlanner.tsx` | Main orchestrator component |
| `NewGardenDisplay.vue` | `GardenDisplay.tsx` | Garden grid visualization   |
| `MenuBar.vue`          | `MenuBar.tsx`       | Top toolbar with actions    |

### Garden Grid Components

| Vue Component          | React Component     | Notes                                |
| ---------------------- | ------------------- | ------------------------------------ |
| `NewGardenDisplay.vue` | `GardenDisplay.tsx` | Main garden grid container           |
| N/A (inline)           | `PlotGrid.tsx`      | Individual plot component (3x3 grid) |
| N/A (inline)           | `TileComponent.tsx` | Individual tile with crop/fertilizer |

### Item Selection Components

| Vue Component                         | React Component                 | Notes                            |
| ------------------------------------- | ------------------------------- | -------------------------------- |
| `ItemSelector/ItemSelector.vue`       | `ItemSelector/ItemSelector.tsx` | Main item selection interface    |
| `ItemSelector/CropModalButton.vue`    | `ItemSelector/CropButton.tsx`   | Individual crop selection button |
| `ItemSelector/HoveredItemTooltip.vue` | `ItemSelector/ItemTooltip.tsx`  | Hover tooltip for items          |

### Statistics and Output Components

| Vue Component                          | React Component                    | Notes                             |
| -------------------------------------- | ---------------------------------- | --------------------------------- |
| `NewStatsDisplay.vue`                  | `StatsDisplay.tsx`                 | Garden statistics panel           |
| `OutputDisplay.vue`                    | `OutputDisplay.tsx`                | Harvest results and calculations  |
| `OutputDisplay/CropDetailsDisplay.vue` | `OutputDisplay/CropDetails.tsx`    | Detailed crop information         |
| `OutputDisplay/InventoryRow.vue`       | `OutputDisplay/InventoryRow.tsx`   | Individual inventory item display |
| `OutputDisplay/OverallDisplay.vue`     | `OutputDisplay/OverallSummary.tsx` | Overall statistics summary        |

### Modal Components

| Vue Component         | React Component       | Notes                    |
| --------------------- | --------------------- | ------------------------ |
| `SaveModal.vue`       | `SaveModal.tsx`       | Save garden layout modal |
| `LoadModal.vue`       | `LoadModal.tsx`       | Load garden layout modal |
| `ExportModal.vue`     | `ExportModal.tsx`     | Export to image modal    |
| `UISettingsModal.vue` | `UISettingsModal.tsx` | UI preferences modal     |

### Utility Components

| Vue Component       | React Component     | Notes                     |
| ------------------- | ------------------- | ------------------------- |
| `AppDivider.vue`    | `AppDivider.tsx`    | Visual divider component  |
| `AppDividerAlt.vue` | `AppDividerAlt.tsx` | Alternative divider style |
| `Toast.vue`         | `Toast.tsx`         | Notification component    |
| `TimeDisplay.vue`   | `TimeDisplay.tsx`   | Current time display      |

### Harvest Calculator Components

| Vue Component                   | React Component                 | Notes                              |
| ------------------------------- | ------------------------------- | ---------------------------------- |
| `HarvestCalculator.vue`         | `HarvestCalculator.tsx`         | Main harvest calculation interface |
| `HarvestCalculator/HCInfo.vue`  | `HarvestCalculator/HCInfo.tsx`  | Information display                |
| `HarvestCalculator/HCTags.vue`  | `HarvestCalculator/HCTags.tsx`  | Tag display component              |
| `HarvestCalculator/HCTotal.vue` | `HarvestCalculator/HCTotal.tsx` | Total calculations display         |
| `HarvestCalculator/HCDay.vue`   | `HarvestCalculator/HCDay.tsx`   | Daily breakdown display            |

## State Management Conversion

### Pinia Stores to Zustand Stores

| Pinia Store          | Zustand Store             | Purpose                      |
| -------------------- | ------------------------- | ---------------------------- |
| `useGarden.ts`       | `useGardenStore.ts`       | Main garden state management |
| `useSelectedItem.ts` | `useSelectedItemStore.ts` | Currently selected tool/item |
| `useHarvester.ts`    | `useHarvesterStore.ts`    | Harvest simulation settings  |
| `useProcessor.ts`    | `useProcessorStore.ts`    | Processing calculations      |
| `useSaveCode.ts`     | `useSaveCodeStore.ts`     | Save string management       |
| `useSettingsCode.ts` | `useSettingsCodeStore.ts` | Settings persistence         |
| `useDragAndDrop.ts`  | `useDragAndDropStore.ts`  | Drag and drop state          |
| `useToasts.ts`       | `useToastStore.ts`        | Notification system          |

## Vue Composables to React Hooks

### Custom Hooks Conversion

| Vue Composable            | React Hook         | Purpose                     |
| ------------------------- | ------------------ | --------------------------- |
| `useTakingScreenshot`     | `useScreenshot`    | Screenshot state management |
| `usePlannerDisplayConfig` | `useDisplayConfig` | Display configuration       |
| `useUiSettings`           | `useUISettings`    | UI preferences              |

### VueUse to React Equivalents

| VueUse Composable    | React Alternative                | Notes                      |
| -------------------- | -------------------------------- | -------------------------- |
| `useStorage`         | Custom hook with localStorage    | Persistent storage         |
| `useScroll`          | Custom scroll hook               | Scroll position tracking   |
| `useIntervalFn`      | `useInterval` hook               | Interval management        |
| `useMagicKeys`       | Custom keyboard hook             | Keyboard shortcut handling |
| `useUrlSearchParams` | `useSearchParams` (React Router) | URL parameter handling     |
| `useDebounceFn`      | `useDebouncedCallback`           | Debounced function calls   |

## Component Patterns Conversion

### Vue Patterns to React Patterns

| Vue Pattern      | React Pattern                   | Example                  |
| ---------------- | ------------------------------- | ------------------------ |
| `<script setup>` | Function component with hooks   | Component definition     |
| `ref()`          | `useState()`                    | Reactive state           |
| `computed()`     | `useMemo()`                     | Computed values          |
| `watchEffect()`  | `useEffect()`                   | Side effects             |
| `watch()`        | `useEffect()` with dependencies | Watching specific values |
| `defineProps()`  | Interface/type for props        | Component props          |
| `defineEmits()`  | Callback props                  | Event handling           |
| `v-model`        | Controlled components           | Two-way binding          |
| `v-if/v-show`    | Conditional rendering           | Conditional display      |
| `v-for`          | `.map()`                        | List rendering           |

### Event Handling Conversion

| Vue Event Handling         | React Event Handling     | Notes                      |
| -------------------------- | ------------------------ | -------------------------- |
| `@click="handler"`         | `onClick={handler}`      | Click events               |
| `@mouseenter="handler"`    | `onMouseEnter={handler}` | Mouse events               |
| `@keydown="handler"`       | `onKeyDown={handler}`    | Keyboard events            |
| Custom events with `$emit` | Callback props           | Parent-child communication |

## Styling Conversion

### CSS Classes and Styling

| Vue Styling                        | React Styling                            | Notes                    |
| ---------------------------------- | ---------------------------------------- | ------------------------ |
| `:class="{ active: isActive }"`    | `className={clsx({ active: isActive })}` | Conditional classes      |
| `:style="{ color: dynamicColor }"` | `style={{ color: dynamicColor }}`        | Dynamic styles           |
| Scoped CSS                         | CSS Modules or styled-components         | Component-scoped styling |
| Tailwind classes                   | Same Tailwind classes                    | No change needed         |

## Template Syntax Conversion

### Directives and Template Features

| Vue Template            | React JSX                                     | Notes                  |
| ----------------------- | --------------------------------------------- | ---------------------- |
| `{{ variable }}`        | `{variable}`                                  | Variable interpolation |
| `v-if="condition"`      | `{condition && <Component />}`                | Conditional rendering  |
| `v-for="item in items"` | `{items.map(item => <Item key={item.id} />)}` | List rendering         |
| `v-model="value"`       | `value={value} onChange={setValue}`           | Two-way binding        |
| `<slot />`              | `{children}` or custom props                  | Content projection     |
| `<Teleport to="body">`  | `createPortal(content, document.body)`        | Portal rendering       |

## Special Considerations

### Vue-specific Features to React Alternatives

| Vue Feature      | React Alternative                | Implementation Notes    |
| ---------------- | -------------------------------- | ----------------------- |
| `provide/inject` | React Context                    | Global state sharing    |
| `<Suspense>`     | React Suspense                   | Async component loading |
| `<Transition>`   | Framer Motion or CSS transitions | Animations              |
| Vue Router       | React Router                     | Client-side routing     |
| Nuxt.js features | Next.js equivalents              | SSR/SSG features        |

### Component Lifecycle Conversion

| Vue Lifecycle   | React Hook                           | Purpose           |
| --------------- | ------------------------------------ | ----------------- |
| `onMounted()`   | `useEffect(() => {}, [])`            | Component mount   |
| `onUnmounted()` | `useEffect(() => () => cleanup, [])` | Component unmount |
| `onUpdated()`   | `useEffect()` without empty deps     | After updates     |
| `watchEffect()` | `useEffect()`                        | Reactive effects  |

## File Structure Mapping

### Directory Structure

```
Vue Structure                 React Structure
├── components/              ├── components/
│   ├── GardenPlanner.vue   │   ├── GardenPlanner.tsx
│   └── garden-planner/     │   └── garden-planner/
├── stores/                 ├── stores/
├── assets/scripts/         ├── lib/
├── pages/                  ├── app/ or pages/
└── layouts/               └── layouts/
```

This mapping provides a comprehensive guide for converting each Vue component and pattern to its React equivalent, ensuring that the functionality and structure are preserved during the port.
