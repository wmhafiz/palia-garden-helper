# Palia Garden Planner (React)

A modern React/Next.js port of the Palia Garden Planner tool for optimizing crop layouts in the game Palia.

## Features

- **Interactive Garden Layout**: Design your garden with a 3x3 plot grid system
- **Crop Selection**: Choose from all available Palia crops with their bonuses
- **Fertilizer Support**: Apply fertilizers to enhance crop growth
- **Bonus Calculation**: Automatic calculation of crop bonuses based on adjacency
- **Save/Load System**: Save and load your garden layouts
- **Export Options**: Export your layouts for sharing
- **Crop Preview on Hover**: Visual preview when placing multi-size crops
  - **Single crops (1x1)**: Standard placement preview
  - **Bush crops (2x2)**: Shows 2x2 preview area when hovering
  - **Tree crops (3x3)**: Shows 3x3 preview area when hovering
- **Statistics Display**: View detailed crop statistics and bonus coverage
- **Responsive Design**: Works on desktop and mobile devices

## Crop Sizes

The planner supports three crop sizes:

- **Single (1x1)**: Most crops like Tomato, Potato, Rice, etc.
- **Bush (2x2)**: Blueberry, Butterfly Bean, Rockhopper Pumpkin
- **Tree (3x3)**: Apple Tree

When placing Bush or Tree crops, the preview system will show you exactly which tiles will be occupied before you place the crop.

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd palia-garden-planner-react

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Usage

1. **Select a Crop**: Click on any crop from the selector to choose it for planting
2. **Preview Placement**: Hover over tiles to see a preview of where the crop will be placed
   - Single crops show a simple preview on the hovered tile
   - Bush crops (2x2) show a preview across 4 tiles
   - Tree crops (3x3) show a preview across 9 tiles
3. **Plant Crops**: Click on a tile to place the selected crop
4. **Apply Fertilizers**: Select fertilizers and click on planted crops to apply them
5. **View Statistics**: Check the stats panel to see bonus coverage and crop counts
6. **Save Your Layout**: Use the save/load system to preserve your garden designs

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **UI Components**: Radix UI, Lucide React
- **Build System**: Turbo (Monorepo)

## Project Structure

```
├── apps/
│   └── web/                 # Main Next.js application
├── packages/
│   ├── ui/                  # Shared UI components
│   └── eslint-config/       # Shared ESLint configuration
└── docs/                    # Documentation files
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on the original Vue.js Palia Garden Planner
- Inspired by the Palia gaming community's optimization needs
