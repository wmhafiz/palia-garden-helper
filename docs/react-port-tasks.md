# Palia Garden Planner - React Port Task Breakdown

## Phase 1: Foundation Setup (Priority: Critical) ✅ **COMPLETED**

### Task 1.1: Project Structure Setup

**Estimated Time**: 2-3 hours ✅ **COMPLETED** (Actual: ~2 hours)
**Dependencies**: None

- [x] Set up NextJS project structure following existing patterns
- [x] Configure TypeScript with proper types
- [x] Set up Tailwind CSS with Palia theme colors
- [x] Configure path aliases (@/components, @/lib, etc.)
- [x] Set up ESLint and Prettier configurations

**Deliverables**:

- ✅ Working NextJS app with proper TypeScript setup
- ✅ Tailwind configured with Palia color scheme
- ✅ Proper folder structure established

### Task 1.2: Core Data Classes Port

**Estimated Time**: 8-10 hours ✅ **COMPLETED** (Actual: ~3 hours)
**Dependencies**: Task 1.1

- [x] Port all TypeScript classes from `@/scripts/garden-planner/classes/`
  - [x] Garden class
  - [x] Plot class
  - [x] Tile class
  - [x] Crop class
  - [x] Fertiliser class
  - [ ] CropTiles class (Not needed for Phase 1)
  - [ ] Harvester class (Deferred to Phase 3)
  - [ ] Processor class (Deferred to Phase 3)
- [x] Port all enums and types
- [x] Port cropList.ts and fertiliserList.ts
- [x] Port utility functions and helpers
- [x] Write unit tests for core classes

**Deliverables**:

- ✅ All core data classes working in React environment
- ✅ Comprehensive type definitions
- ✅ Unit tests passing

### Task 1.3: State Management Setup

**Estimated Time**: 4-5 hours ✅ **COMPLETED** (Actual: ~1 hour)
**Dependencies**: Task 1.2

- [x] Choose state management solution (Zustand chosen)
- [x] Create equivalent stores for:
  - [x] Garden state (useGarden)
  - [x] Selected item state (useSelectedItem)
  - [ ] Harvester settings (useHarvester) - Deferred to Phase 3
  - [ ] Processor settings (useProcessor) - Deferred to Phase 3
  - [ ] Save/load state (useSaveCode, useSettingsCode) - Deferred to Phase 3
  - [x] UI state (useToasts, useUISettings)
- [x] Implement state persistence where needed

**Deliverables**:

- ✅ All Phase 1 state stores implemented and tested
- ✅ State persistence working (UISettings)
- ✅ Type-safe state management

## Phase 2: Core UI Components (Priority: High)

### Task 2.1: Basic Layout Components

**Estimated Time**: 6-8 hours
**Dependencies**: Task 1.3

- [ ] Create main GardenPlanner component
- [ ] Implement responsive layout structure
- [ ] Create AppDivider and utility components
- [ ] Set up component composition patterns
- [ ] Implement basic routing if needed

**Deliverables**:

- Main layout structure working
- Responsive design foundation
- Component composition established

### Task 2.2: Garden Grid Display

**Estimated Time**: 12-15 hours
**Dependencies**: Task 2.1

- [ ] Create GardenDisplay component
- [ ] Implement plot grid rendering
- [ ] Create Plot component with 3x3 tile grid
- [ ] Create Tile component with crop/fertilizer display
- [ ] Implement hover effects and visual feedback
- [ ] Add bonus visualization
- [ ] Handle mouse interactions (click, drag, hover)
- [ ] Support multi-tile crops (bushes, trees)

**Deliverables**:

- Interactive garden grid
- Visual bonus indicators
- Multi-tile crop support
- Responsive grid layout

### Task 2.3: Item Selector Component

**Estimated Time**: 8-10 hours
**Dependencies**: Task 2.2

- [ ] Create ItemSelector component
- [ ] Implement crop selection with images
- [ ] Add fertilizer selection
- [ ] Create bonus filtering functionality
- [ ] Implement erase tools
- [ ] Add keyboard shortcuts support
- [ ] Create crop/fertilizer buttons with tooltips
- [ ] Implement hover tooltips

**Deliverables**:

- Complete item selection interface
- Bonus filtering working
- Keyboard shortcuts functional
- Tooltips and visual feedback

## Phase 3: Advanced Features (Priority: Medium)

### Task 3.1: Menu Bar and Modals

**Estimated Time**: 10-12 hours
**Dependencies**: Task 2.3

- [ ] Create MenuBar component
- [ ] Implement Save/Load functionality
- [ ] Create SaveModal and LoadModal components
- [ ] Add Export functionality
- [ ] Create LayoutCreator component
- [ ] Implement clear garden functionality
- [ ] Add UI settings modal
- [ ] Create TimeDisplay component

**Deliverables**:

- Complete menu bar with all functions
- Working save/load system
- Layout creation tools
- Export functionality

### Task 3.2: Statistics and Output Display

**Estimated Time**: 8-10 hours
**Dependencies**: Task 3.1

- [ ] Create StatsDisplay component
- [ ] Implement crop/fertilizer counting
- [ ] Create OutputDisplay component
- [ ] Add harvest calculation display
- [ ] Implement processing recommendations
- [ ] Create detailed statistics views
- [ ] Add gold value projections

**Deliverables**:

- Comprehensive statistics display
- Harvest calculation results
- Processing optimization display

### Task 3.3: Toast Notification System

**Estimated Time**: 3-4 hours
**Dependencies**: Task 3.1

- [ ] Create Toast component
- [ ] Implement toast management system
- [ ] Add different toast types (success, error, info)
- [ ] Create toast positioning and animations
- [ ] Integrate with all user actions

**Deliverables**:

- Complete notification system
- Smooth animations
- Proper toast management

## Phase 4: Advanced Functionality (Priority: Medium-Low)

### Task 4.1: Drag and Drop System

**Estimated Time**: 6-8 hours
**Dependencies**: Task 2.2

- [ ] Implement drag and drop for crop placement
- [ ] Add visual feedback during drag operations
- [ ] Support multi-tile crop dragging
- [ ] Handle drag boundaries and validation
- [ ] Add touch support for mobile devices

**Deliverables**:

- Smooth drag and drop experience
- Mobile touch support
- Visual feedback during operations

### Task 4.2: Export and Screenshot Features

**Estimated Time**: 8-10 hours
**Dependencies**: Task 3.1

- [ ] Implement screenshot generation
- [ ] Add watermark functionality
- [ ] Create export modal with options
- [ ] Support different export formats
- [ ] Add share functionality
- [ ] Implement URL parameter loading

**Deliverables**:

- Screenshot generation working
- Export modal with options
- Share functionality
- URL parameter support

### Task 4.3: Advanced Settings and Preferences

**Estimated Time**: 5-6 hours
**Dependencies**: Task 3.1

- [ ] Create UISettingsModal component
- [ ] Implement display mode preferences
- [ ] Add theme customization options
- [ ] Create keyboard shortcut configuration
- [ ] Add accessibility options

**Deliverables**:

- Complete settings interface
- User preferences persistence
- Accessibility features

## Phase 5: Polish and Optimization (Priority: Low)

### Task 5.1: Performance Optimization

**Estimated Time**: 6-8 hours
**Dependencies**: All previous tasks

- [ ] Optimize rendering performance
- [ ] Implement virtualization for large gardens
- [ ] Add memoization where appropriate
- [ ] Optimize state updates
- [ ] Profile and fix performance bottlenecks

**Deliverables**:

- Smooth performance with large gardens
- Optimized rendering
- Performance benchmarks

### Task 5.2: Mobile Responsiveness

**Estimated Time**: 8-10 hours
**Dependencies**: Task 5.1

- [ ] Optimize for mobile devices
- [ ] Implement touch-friendly interactions
- [ ] Create mobile-specific layouts
- [ ] Add swipe gestures where appropriate
- [ ] Test on various screen sizes

**Deliverables**:

- Mobile-optimized interface
- Touch-friendly interactions
- Responsive design across devices

### Task 5.3: Testing and Documentation

**Estimated Time**: 8-10 hours
**Dependencies**: Task 5.2

- [ ] Write comprehensive unit tests
- [ ] Add integration tests
- [ ] Create component documentation
- [ ] Add user documentation
- [ ] Test cross-browser compatibility

**Deliverables**:

- Comprehensive test suite
- Component documentation
- User guide
- Cross-browser compatibility

## Implementation Strategy

### Recommended Order

1. **Start with Phase 1** - Get the foundation solid
2. **Focus on Phase 2** - Build core functionality
3. **Implement Phase 3** - Add essential features
4. **Phase 4 and 5** - Polish and advanced features

### Technology Recommendations

- **React 18** with hooks and modern patterns
- **TypeScript** for type safety
- **Zustand** for state management (simpler than Redux)
- **Tailwind CSS** for styling
- **React Hook Form** for form handling
- **Framer Motion** for animations
- **html2canvas** or similar for screenshot functionality

### Development Notes

- Keep the existing data classes mostly unchanged to preserve logic
- Focus on creating reusable React components
- Maintain the same save/load format for compatibility
- Use React patterns (hooks, context) instead of Vue patterns
- Implement proper error boundaries
- Follow React best practices for performance

## Total Estimated Time

**75-95 hours** of development time, depending on experience level and complexity of implementation.

This can be broken down into:

- **Phase 1**: 14-18 hours (Foundation)
- **Phase 2**: 26-33 hours (Core UI)
- **Phase 3**: 21-26 hours (Advanced Features)
- **Phase 4**: 19-24 hours (Advanced Functionality)
- **Phase 5**: 22-28 hours (Polish)

Each phase builds upon the previous one, allowing for incremental development and testing.
