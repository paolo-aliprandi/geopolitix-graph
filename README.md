# GeopolitixGraph

Interactive force-directed graph for exploring geopolitical relationships between European countries across four dimensions: **geographic**, **commercial**, **diplomatic**, and **military**.

## Features

- **Multi-layer analysis** — switch between geographic borders, trade relationships, diplomatic alignment, and military cooperation/conflict
- **Country focus mode** — click any node or use the search to isolate a country and its connections
- **Smart node sizing** — nodes scale by area, GDP, or military personnel depending on the active layer
- **Scored relationships** — link color (red → gray → blue) and width encode relationship strength from -1 to +1
- **Animated particles** — directional particles on links for visual feedback
- **URL-driven state** — share any view via URL parameters (`?type=military&country=UKR`)
- **Responsive panels** — animated control panel, stats panel, and legend with glassmorphism design

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Graph engine | react-force-graph-2d + D3.js |
| Animations | Framer Motion |
| Icons | Lucide React |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5 |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to explore the graph.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page (composes all components)
│   └── globals.css         # Global styles
├── components/
│   ├── ControlPanel.tsx    # Relation type & country selector
│   ├── GraphCanvas.tsx     # Force graph rendering
│   ├── Legend.tsx           # Visual legend
│   └── StatsPanel.tsx      # Statistics & country detail
├── data/
│   ├── europe.ts           # European countries & relationships
│   └── g20.ts              # G20 dataset (extensible)
└── lib/
    ├── hooks.ts            # Custom hooks for graph data
    └── types.ts            # Shared TypeScript types
```

## Data Model

**Nodes** (`CountryNode`): ISO-3 country codes with optional metrics (area, GDP, military size).

**Links** (`RelationLink`): Scored edges (-1 to +1) with type classification and optional notes.

## Extending

To add a new dataset (e.g., Asia-Pacific, G20 global):

1. Create a new file in `src/data/` following the `CountryNode[]` and `RelationLink[]` pattern
2. Import it in `page.tsx` and add a dataset switcher

## License

MIT
