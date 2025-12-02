# CLAUDE.md - AI Assistant Guide for Money Saver

## Project Overview

**Money Saver** is a coupon and deal aggregator web application that helps users discover discounts from various retailers (McDonald's, Burger King, MOS Burger, Costco, Watsons, etc.). Users can search, filter, and copy promo codes instantly.

**Tech Stack:**
- React 19.2.0 with TypeScript
- Vite 6.2.0 (build tool)
- Tailwind CSS 4.1.17 (styling)
- Recharts 3.4.1 (data visualization)

**Deployment:**
- GitHub Pages (automatic deployment via GitHub Actions)
- Production URL: `https://nidgetgod.github.io/money-saver/`

---

## Directory Structure

```
/home/user/money-saver/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── components/
│   ├── DealCard.tsx            # Individual deal card component
│   ├── FilterBar.tsx           # Filter controls (category, store, discount)
│   └── Header.tsx              # Header with search and branding
├── public/
│   ├── deals.json              # Deal data source (auto-updated)
│   └── metadata.json           # App metadata
├── services/
│   └── dataService.ts          # Data fetching service
├── App.tsx                     # Main application component
├── index.tsx                   # React entry point
├── index.html                  # HTML template
├── index.css                   # Global styles and Tailwind imports
├── types.ts                    # TypeScript type definitions
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS/Tailwind configuration
└── package.json                # Dependencies and scripts
```

---

## Key Architecture Patterns

### 1. Component Organization

**Three-tier component structure:**
- **App.tsx**: Main orchestrator (state management, data loading, filtering logic)
- **Feature Components**: Header, FilterBar, DealCard
- **Presentational**: All components are functional with TypeScript

### 2. State Management

**Centralized in App.tsx using React hooks:**
```typescript
- allDeals: DealItem[]              // All loaded deals
- loading: boolean                   // Loading state
- error: string | null               // Error messages
- searchQuery: string                // Search text
- categoryFilter: string             // Selected category
- storeFilter: string                // Selected store
- minDiscountFilter: number          // Minimum discount percentage
```

**Derived state with useMemo:**
- `uniqueCategories`: Extracted from deals
- `uniqueStores`: Extracted from deals
- `filteredDeals`: Computed based on all filters

### 3. Data Flow

```
public/deals.json → fetchDeals() → App.tsx (state) → Filter Logic → DealCard components
```

### 4. Type System

**Core types defined in types.ts:**

```typescript
interface DealItem {
  id: string;
  storeName: string;
  productName: string;
  couponCode: string | null;
  originalPrice: number;
  discountPrice: number;
  condition: string;
  category: DealCategory;
  description: string;
  validPeriod: string;
}

enum DealCategory {
  FOOD = '美食',
  ELECTRONICS = '3C家電',
  FASHION = '服飾',
  TRAVEL = '旅遊',
  BEAUTY = '美妝',
  LIFE = '生活',
  OTHER = '其他'
}
```

---

## Development Workflow

### Local Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run preview      # Preview production build
```

**Dev server configuration:**
- Port: 3000
- Host: 0.0.0.0 (accessible externally)

### Path Aliases

TypeScript and Vite configured with `@/` alias pointing to project root:
```typescript
import { fetchDeals } from '@/services/dataService';
```

---

## Key Conventions

### 1. Styling Conventions

**Tailwind CSS with custom color palette:**
- Primary background: `#f0fcff` (light cyan)
- Accent: `#fff0fc` (light pink)
- Text: Slate color system (slate-700, slate-800, etc.)
- Focus states: Pink-themed (`focus:ring-[#fff0fc]`)

**Design patterns:**
- Rounded corners: `rounded-xl`, `rounded-full`
- Shadows: `shadow-sm`, `shadow-[custom]`
- Hover effects: Always include transitions
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`

### 2. Component Patterns

**All components follow:**
- Functional components with TypeScript
- Props interfaces defined at top
- React.FC type annotations
- Destructured props in parameters

**Example:**
```typescript
interface HeaderProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, isLoading }) => {
  // Component logic
};
```

### 3. State Updates

**Immutable updates:**
- Use setter functions from useState
- Filter operations return new arrays (never mutate)
- Reset functions set defaults explicitly

### 4. Data Fetching

**Pattern in dataService.ts:**
- Async/await syntax
- Relative paths for public assets (`./deals.json`)
- Error handling with try/catch
- Throw errors to be caught by caller

### 5. User Feedback

**Three loading/error states:**
- Loading: Skeleton placeholders (8 animated cards)
- Error: Red alert with reload button
- Empty: "No results" message with reset button

---

## Important Implementation Details

### 1. Search & Filter Logic

**Multi-criteria filtering in App.tsx:60-79:**
1. Text search (case-insensitive, searches productName, storeName, description)
2. Category filter (exact match or 'All')
3. Store filter (exact match or 'All')
4. Discount percentage filter (calculated from prices)

**Search behavior:**
- Real-time as user types (onChange event)
- Auto-resets category and store filters when searching
- Filters combined with AND logic

### 2. Discount Calculation

```typescript
const savings = deal.originalPrice - deal.discountPrice;
const discountPercent = Math.round((savings / deal.originalPrice) * 100);
```

### 3. Coupon Copy Feature

**DealCard.tsx:14-20:**
- Uses Clipboard API: `navigator.clipboard.writeText()`
- Visual feedback: Button changes to green "已複製代碼" for 2 seconds
- Only shown if `couponCode` exists (nullable field)

### 4. Footer with Disclaimer

**Hardcoded in App.tsx:165-175:**
- Legal disclaimer in Chinese about deal accuracy
- Update copyright year manually if needed

---

## Data Structure Notes

### deals.json Format

**Sample entry:**
```json
{
  "id": "MCD2025P01",
  "storeName": "麥當勞 McDonald's",
  "productName": "四盎司牛肉堡x2件",
  "couponCode": "P01",
  "originalPrice": "184",
  "discountPrice": "149",
  "condition": "供應時段為上午10:30後",
  "category": "美食",
  "description": "經典雙享$99起",
  "validPeriod": "2025/11/5 - 2025/12/9 或售完為止"
}
```

**Important:**
- `originalPrice` and `discountPrice` are strings in JSON, parsed as numbers in TypeScript
- `couponCode` can be `null` for no-code deals
- `condition` can be `null`
- Categories must match DealCategory enum values

---

## GitHub Actions Deployment

### Workflow: .github/workflows/deploy.yml

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Steps:**
1. Checkout code
2. Setup Node.js 18 with npm cache
3. Install dependencies (`npm ci`)
4. Build (`npm run build`)
5. Upload `dist` folder as artifact
6. Deploy to GitHub Pages

**Permissions required:**
- `contents: read`
- `pages: write`
- `id-token: write`

**Build output:** `dist/` directory (gitignored)

---

## Common Development Tasks

### Adding a New Deal Source

1. Update `public/deals.json` with new entries
2. Ensure categories match enum in `types.ts`
3. Test filtering by store name

### Modifying Filters

1. Add state in `App.tsx` (e.g., `const [newFilter, setNewFilter] = useState()`)
2. Update `filteredDeals` useMemo logic
3. Pass filter to `FilterBar` component
4. Add UI control in `FilterBar.tsx`
5. Update reset function

### Styling Changes

1. Global styles: Edit `index.css`
2. Component-specific: Use Tailwind classes inline
3. Custom colors: Already defined (`#f0fcff`, `#fff0fc`)
4. Scrollbar customization: In `index.css:4-19`

### Adding New Components

1. Create in `/components` directory
2. Follow naming: PascalCase.tsx
3. Export with `export const ComponentName: React.FC<Props> = ...`
4. Import in App.tsx or parent component

---

## TypeScript Configuration

### Key Settings (tsconfig.json)

- Target: ES2022
- Module: ESNext with bundler resolution
- JSX: react-jsx (new transform)
- Path alias: `@/*` → `./*`
- Strict mode: OFF (useDefineForClassFields: false)
- Allow importing .ts extensions (for Vite)

---

## Vite Configuration

### Key Settings (vite.config.ts)

- Base: `/` (root path)
- Server port: 3000
- Server host: 0.0.0.0
- Alias: `@` resolves to project root
- Plugin: @vitejs/plugin-react

---

## AI Assistant Guidelines

### When Making Changes:

1. **Always read files before editing** - Never propose changes to code you haven't read
2. **Preserve styling consistency** - Use established Tailwind patterns
3. **Maintain TypeScript types** - Update types.ts if data structures change
4. **Test filters** - Ensure filter combinations work correctly
5. **Respect the design system** - Keep pink/cyan theme, rounded corners, shadows
6. **Consider mobile-first** - Use responsive Tailwind classes
7. **Handle null values** - couponCode and condition can be null
8. **Keep Chinese UI text** - App is in Traditional Chinese

### When Adding Features:

1. **State management** - Add to App.tsx if global, component if local
2. **Data flow** - Follow unidirectional flow (props down, events up)
3. **Loading states** - Include skeleton or spinner for async operations
4. **Error handling** - Show user-friendly messages in Chinese
5. **Accessibility** - Add proper ARIA labels, keyboard navigation
6. **Performance** - Use useMemo/useCallback for expensive operations

### When Debugging:

1. **Check data source** - Verify `public/deals.json` format
2. **Inspect filters** - Log filteredDeals to see filter results
3. **Browser console** - Check for fetch errors or TypeScript issues
4. **Build output** - Run `npm run build` to catch production issues

### Git Workflow:

1. **Branch naming** - Feature branches start with `claude/`
2. **Commit messages** - Descriptive, use conventional commits format
3. **Before pushing** - Ensure build succeeds (`npm run build`)
4. **Deployment** - Automatic on merge to `main`

---

## Troubleshooting

### Common Issues:

**Deals not loading:**
- Check network tab for `./deals.json` fetch
- Verify JSON syntax in `public/deals.json`
- Ensure Vite dev server is running

**Filters not working:**
- Verify category/store values match data
- Check filteredDeals useMemo dependencies
- Confirm filter state updates

**Styling broken:**
- Run `npm install` to ensure Tailwind is installed
- Check PostCSS config
- Verify `@import "tailwindcss"` in index.css

**Build fails:**
- Check TypeScript errors (`npx tsc --noEmit`)
- Verify all imports resolve
- Ensure no syntax errors

---

## Recent Changes

**Latest commits:**
- `20bb620` - Auto update deals data
- `7934331` - Auto update deals data
- `d94c4ed` - Added disclaimer to footer
- `9818f05` - Added disclaimer feature

**Current branch:**
- `claude/claude-md-mio55y17mt3gdheh-0193DJp54Y51MBXx7c3pgYyf`

---

## External Resources

- **React Docs**: https://react.dev
- **Vite Docs**: https://vite.dev
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org

---

**Last Updated:** 2025-12-02
**Maintainer:** nidgetgod
**License:** Private
