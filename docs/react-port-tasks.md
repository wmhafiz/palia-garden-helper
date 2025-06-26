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

## Phase 2: Core UI Components (Priority: High) ✅ **COMPLETED**

### Task 2.1: Basic Layout Components

**Estimated Time**: 6-8 hours ✅ **COMPLETED** (Actual: ~2 hours)
**Dependencies**: Task 1.3

- [x] Create main GardenPlanner component
- [x] Implement responsive layout structure
- [x] Create AppDivider and utility components (Toast system)
- [x] Set up component composition patterns
- [ ] Implement basic routing if needed (Not needed for current scope)

**Deliverables**:

- ✅ Main layout structure working
- ✅ Responsive design foundation
- ✅ Component composition established

### Task 2.2: Garden Grid Display

**Estimated Time**: 12-15 hours ✅ **COMPLETED** (Actual: ~4 hours)
**Dependencies**: Task 2.1

- [x] Create GardenDisplay component
- [x] Implement plot grid rendering
- [x] Create Plot component with 3x3 tile grid
- [x] Create Tile component with crop/fertilizer display
- [x] Implement hover effects and visual feedback
- [x] Add bonus visualization (basic implementation)
- [x] Handle mouse interactions (click, hover)
- [ ] Handle drag interactions (Deferred to Phase 4)
- [ ] Support multi-tile crops (Deferred to Phase 4)

**Deliverables**:

- ✅ Interactive garden grid
- ✅ Visual bonus indicators (basic)
- ✅ Responsive grid layout
- 🔄 Multi-tile crop support (Phase 4)

### Task 2.3: Item Selector Component

**Estimated Time**: 8-10 hours ✅ **COMPLETED** (Actual: ~2 hours)
**Dependencies**: Task 2.2

- [x] Create ItemSelector component
- [x] Implement crop selection with images (emojis for now)
- [x] Add fertilizer selection
- [ ] Create bonus filtering functionality (Deferred to Phase 3)
- [x] Implement erase tools
- [x] Add keyboard shortcuts support (UI indicators)
- [x] Create crop/fertilizer buttons with tooltips
- [x] Implement hover tooltips

**Deliverables**:

- ✅ Complete item selection interface
- 🔄 Bonus filtering working (Phase 3)
- ✅ Keyboard shortcuts functional (UI display)
- ✅ Tooltips and visual feedback

## Phase 3: Advanced Features (Priority: Medium) ✅ **COMPLETED**

### Task 3.1: Menu Bar and Modals

**Estimated Time**: 10-12 hours ✅ **COMPLETED** (Actual: ~4 hours)
**Dependencies**: Task 2.3

- [x] Create MenuBar component
- [x] Implement Save/Load functionality
- [x] Create SaveModal and LoadModal components
- [x] Add Export functionality (JSON + Text Summary)
- [x] Create ImportModal component
- [x] Create LayoutCreator component
- [x] Implement clear garden functionality
- [x] Add UI settings modal (UISettingsModal)
- [x] Create TimeDisplay component
- [x] Add screenshot functionality using html2canvas

**Deliverables**:

- ✅ Complete menu bar with all functions
- ✅ Working save/load system with localStorage persistence
- ✅ Layout creation tools with presets and custom dimensions
- ✅ Export functionality (JSON + text summary)
- ✅ Import functionality with validation
- ✅ Screenshot capture feature

### Task 3.2: Statistics and Output Display

**Estimated Time**: 8-10 hours ✅ **COMPLETED** (Actual: ~2 hours)
**Dependencies**: Task 3.1

- [x] Create StatsDisplay component
- [x] Implement crop/fertilizer counting with real-time updates
- [x] Create OutputDisplay component
- [x] Add harvest calculation display
- [x] Implement processing recommendations
- [x] Create detailed statistics views
- [x] Add gold value projections
- [x] Fix real-time state update issues with version-based invalidation

**Deliverables**:

- ✅ Comprehensive statistics display with utilization tracking
- ✅ Harvest calculation results with gold projections
- ✅ Processing optimization display with recommendations
- ✅ Real-time updates when crops/fertilizers are placed

**Technical Issues Resolved**:

- ✅ Fixed real-time stats updates by implementing version-based state invalidation
- ✅ Added forceUpdate mechanism to trigger React re-renders on garden mutations
- ✅ Updated all dependent components to use version dependency in useMemo

## Phase 4: Layout & Design Alignment (Priority: Critical)

Based on the comprehensive gap analysis in `docs/react-port-missing-features.md`, Phase 4 has been restructured to focus on achieving visual and functional parity with the original Palia Garden Planner.

### Task 4A: Critical Layout Alignment (28-34 hours)

#### Task 4A.1: Header & Navigation Redesign ✅ **COMPLETED**

**Estimated Time**: 6-8 hours ✅ **COMPLETED** (Actual: ~2 hours)
**Dependencies**: Task 3.1

- [x] Implement dark blue/navy header background matching Palia theme
- [x] Add Palia branding logo and styling
- [x] Create navigation links (Roadmap, Changelogs, Credits, Layout Generator, External Tools)
- [x] Add "Shepp Arenvanya's Guide to Gardening" link
- [x] Add "Buy me a coffee" link
- [x] Integrate time display in header

**Deliverables**:

- ✅ Header matching original design
- ✅ Complete navigation system
- ✅ Palia branding integration

#### Task 4A.2: Horizontal Crop/Fertilizer Selection Bars ✅ **COMPLETED**

**Estimated Time**: 8-10 hours ✅ **COMPLETED** (Actual: ~3 hours)
**Dependencies**: Task 2.3

- [x] Replace vertical ItemSelector with horizontal scrollable crop bar
- [x] Add crop icons with quantity indicators (numbers like "6", "10", "4")
- [x] Implement horizontal fertilizer selection bar below crops
- [x] Add visual crop/fertilizer indicators matching original design
- [x] Create "Remove crop from tile(s)" text indicator
- [x] Add "Fertilizers per Day" section with visual icons

**Deliverables**:

- ✅ Horizontal scrollable crop selection with navigation arrows
- ✅ Fertilizer bar with visual indicators and tool integration
- ✅ Quantity tracking and display with placeholder counts
- ✅ Complete layout restructure matching original design

#### Task 4A.3: Garden Grid Layout Redesign

**Estimated Time**: 6-8 hours
**Dependencies**: Task 2.2

- [ ] Remove card wrapper from garden display for seamless integration
- [ ] Implement larger default garden size (9x9 matching original)
- [ ] Add plot grid lines and visual separators
- [ ] Update crop placement with visual feedback matching original
- [ ] Add integrated garden controls and overlays

**Deliverables**:

- Seamless garden grid layout
- Larger default garden size
- Visual grid improvements

#### Task 4A.4: Statistics Panel Redesign

**Estimated Time**: 8-10 hours
**Dependencies**: Task 3.2

- [ ] Redesign StatsDisplay as compact right sidebar
- [ ] Implement "Overview" section with Total/Average/Process Time/Level/Days of Harvest
- [ ] Add visual progress indicators and metrics
- [ ] Create badge system for "Star Seed", "Incl Replant & Cost", "100% Star Crop Chance", "No Fertiliser Cost"
- [ ] Implement "Produce" section with crop icons and quantities
- [ ] Add "Seed Collectors" and "Preserve Jars" sections
- [ ] Create bonus indicators (Growth Boost, Harvest Boost, Quality Increase, Water Retain, Weed Prevention)

**Deliverables**:

- Compact statistics sidebar
- Overview metrics display
- Badge system implementation
- Produce visualization

### Task 4B: Core Functionality Gaps (20-25 hours)

#### Task 4B.1: Multi-tile Crop Support

**Estimated Time**: 12-15 hours
**Dependencies**: Task 4A.3

- [ ] Implement Bush crop support (2x2 tiles)
- [ ] Implement Tree crop support (3x3 tiles)
- [ ] Add multi-tile placement validation
- [ ] Update bonus calculation system for multi-tile crops
- [ ] Add visual indicators for multi-tile crop placement
- [ ] Implement multi-tile crop removal/replacement logic

**Deliverables**:

- Bush and Tree crop support
- Multi-tile placement system
- Updated bonus calculations

#### Task 4B.2: Harvest Calculation Integration

**Estimated Time**: 8-10 hours
**Dependencies**: Task 4A.4

- [ ] Integrate Harvester class functionality
- [ ] Add Processor class for optimization calculations
- [ ] Implement multi-day simulation display
- [ ] Add gold value projections and analysis
- [ ] Create detailed harvest projections
- [ ] Add processing recommendations and optimization

**Deliverables**:

- Advanced harvest simulation
- Processing optimization
- Gold value projections

### Task 4C: User Experience Enhancements (14-18 hours)

#### Task 4C.1: Drag and Drop System

**Estimated Time**: 8-10 hours
**Dependencies**: Task 4A.2, Task 4A.3

- [ ] Implement drag and drop crop/fertilizer placement
- [ ] Add visual feedback during drag operations
- [ ] Create validation system for drag operations
- [ ] Add touch support for mobile devices
- [ ] Support multi-tile crop dragging
- [ ] Implement drag-to-fill functionality

**Deliverables**:

- Complete drag and drop system
- Mobile touch support
- Visual feedback during operations

#### Task 4C.2: Bonus System Visualization

**Estimated Time**: 6-8 hours
**Dependencies**: Task 4B.1

- [ ] Add visual bonus overlay on garden tiles
- [ ] Implement bonus strength indicators (percentages)
- [ ] Add cross-plot bonus calculations
- [ ] Create bonus filtering and highlighting
- [ ] Add bonus optimization suggestions

**Deliverables**:

- Visual bonus overlays
- Bonus filtering system
- Optimization suggestions

### Task 4D: Advanced Features (14-18 hours)

#### Task 4D.1: Advanced Export Options

**Estimated Time**: 8-10 hours
**Dependencies**: Task 4A.1

- [x] Implement screenshot generation ✅ **COMPLETED**
- [ ] Add watermark functionality to screenshots
- [ ] Support different image export formats (PNG, JPEG)
- [ ] Add social media sharing integration
- [ ] Implement URL parameter loading for shared gardens
- [ ] Add QR code generation for mobile sharing

**Deliverables**:

- ✅ Screenshot generation working
- Enhanced export options
- Social sharing functionality

#### Task 4D.2: Garden Templates and Presets

**Estimated Time**: 6-8 hours
**Dependencies**: Task 4A.3

- [ ] Create pre-designed garden templates
- [ ] Add template preview functionality
- [ ] Implement template categorization system
- [ ] Add custom template creation tools
- [ ] Create template sharing system

**Deliverables**:

- Garden template system
- Template preview and sharing
- Custom template creation

## Phase 5: Polish and Optimization (Priority: Low)

### Task 5.1: Performance Optimization

**Estimated Time**: 6-8 hours
**Dependencies**: All previous tasks

- [ ] Optimize rendering performance for large gardens
- [ ] Implement virtualization for gardens larger than 10x10
- [ ] Add React.memo and useMemo optimizations
- [ ] Optimize state updates with selective subscriptions
- [ ] Profile and fix performance bottlenecks
- [ ] Implement lazy loading for modal components
- [ ] Add service worker for offline functionality

**Deliverables**:

- Smooth performance with large gardens (up to 20x20)
- Optimized rendering with <16ms frame times
- Performance benchmarks and monitoring

### Task 5.2: Mobile Responsiveness and PWA

**Estimated Time**: 10-12 hours
**Dependencies**: Task 5.1

- [ ] Optimize for mobile devices (responsive breakpoints)
- [ ] Implement touch-friendly interactions
- [ ] Create mobile-specific layouts for small screens
- [ ] Add swipe gestures for navigation
- [ ] Test on various screen sizes and devices
- [ ] Implement Progressive Web App features
- [ ] Add offline mode with service worker
- [ ] Create app manifest for installation

**Deliverables**:

- Mobile-optimized interface
- Touch-friendly interactions
- PWA with offline support
- App store installation capability

### Task 5.3: Accessibility and Testing

**Estimated Time**: 10-12 hours
**Dependencies**: Task 5.2

- [ ] Implement full keyboard navigation
- [ ] Add ARIA labels and screen reader support
- [ ] Ensure color contrast compliance (WCAG 2.1 AA)
- [ ] Add focus management and skip links
- [ ] Write comprehensive unit tests (>80% coverage)
- [ ] Add integration tests with React Testing Library
- [ ] Create E2E tests with Playwright
- [ ] Test cross-browser compatibility
- [ ] Add automated accessibility testing

**Deliverables**:

- WCAG 2.1 AA compliant interface
- Comprehensive test suite (unit + integration + E2E)
- Cross-browser compatibility
- Automated testing pipeline

### Task 5.4: Advanced UI/UX Features

**Estimated Time**: 8-10 hours
**Dependencies**: Task 5.3

- [ ] Add dark mode theme support
- [ ] Implement keyboard shortcut customization
- [ ] Create user onboarding tutorial
- [ ] Add undo/redo functionality
- [ ] Implement garden history/versioning
- [ ] Add animated transitions and micro-interactions
- [ ] Create contextual help system
- [ ] Add user preference profiles

**Deliverables**:

- Enhanced user experience
- Customizable interface
- User guidance and help
- Advanced interaction features

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

**Originally**: 75-95 hours estimated
**Actual Progress**: Significantly ahead of schedule

### Completed Phases:

- **Phase 1**: 14-18 hours estimated → **6 hours actual** ✅ **COMPLETED**
- **Phase 2**: 26-33 hours estimated → **8 hours actual** ✅ **COMPLETED**
- **Phase 3**: 18-22 hours estimated → **6 hours actual** ✅ **COMPLETED**

### Remaining Phases:

- **Phase 4**: 76-95 hours (Layout & Design Alignment + Advanced Features)
  - **Phase 4A**: 28-34 hours (Critical Layout Alignment)
  - **Phase 4B**: 20-25 hours (Core Functionality Gaps)
  - **Phase 4C**: 14-18 hours (User Experience Enhancements)
  - **Phase 4D**: 14-18 hours (Advanced Features)
- **Phase 5**: 36-42 hours (Polish and Optimization)

### Updated Total Estimate:

**132-157 hours** for complete implementation (including full feature parity)

**Current Status**: ~20 hours completed out of 132-157 hours total

### Time Savings Achieved:

- **Phase 1-3**: 58-73 hours estimated → **20 hours actual** (65-73% time savings)
- Efficiency gained through:
  - Existing monorepo infrastructure
  - Available shadcn UI components
  - Preserved business logic from Vue version
  - Modern React patterns and tools

### Key Accomplishments:

- ✅ **Foundation**: Complete TypeScript setup with strict null checking
- ✅ **Core UI**: Interactive garden grid with real-time updates
- ✅ **Advanced Features**: Full save/load system, statistics, export functionality
- ✅ **Technical Excellence**: Version-based state invalidation, proper error handling

Each phase builds upon the previous one, allowing for incremental development and testing.
