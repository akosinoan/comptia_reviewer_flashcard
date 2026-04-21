# CompTIA Reviewer

A full-stack, interactive study platform for CompTIA certification exams — covering **Core 1 (220-1201)**, **Core 2 (220-1202)**, and **Network+ (N10-009)**. Built with React 19, Vite, and Supabase, and deployed on GitHub Pages.

**Live demo:** https://akosinoan.github.io/comptia_reviewer_flashcard/

---

## Features

The app supports three exam modes toggled globally via a context provider. Every section adapts its content accordingly.

| Section | Description |
|---|---|
| **Flashcards** | Flip-card study mode with category filtering, shuffle, and exam-aware question sets |
| **Port Matching** | Click-to-match and quiz modes with real-time accuracy tracking |
| **Acronyms** | Searchable, categorized acronym list with quiz mode and collapsible subcategories |
| **RAID Simulator** | Drag-and-drop drive placement across RAID scenarios with instant configuration validation |
| **PBQ Exercises** | Three interactive question types — drag-to-bucket, click-to-match, and drag-to-order |
| **PC Builder** | Scenario-based hardware selection with scoring and explanations |
| **CLI Commands** | Searchable Windows/Linux command reference organized by category |
| **Subnetting** | IPv4 practice with 3 difficulty levels, 6 question types, and step-by-step bit-level walkthroughs |
| **OSI Model Drills** | 9 interactive exercises covering protocols, PDUs, devices, security controls, and troubleshooting |

---

## Tech Stack

### Frontend
- **React 19** — functional components throughout, no class components
- **Vite 8** — sub-second HMR, path aliases (`@/`), and optimized production builds
- **React Router v7** — client-side routing with `basename` configured for GitHub Pages
- **Tailwind CSS 3** — utility-first styling with HSL CSS variables for light/dark theming
- **Radix UI** — accessible, unstyled primitives (Dialog, Progress)
- **Lucide React** — consistent icon set
- **CVA + clsx + tailwind-merge** — type-safe, conflict-free component variant system

### Backend & Data
- **Supabase (PostgreSQL)** — cloud database with Row Level Security (public read-only)
- **@supabase/supabase-js v2** — typed query client
- **9 database tables** — questions, ports, acronyms, commands, pbq\_exercises, raid\_scenarios, pc\_builder\_scenarios, and more
- **Idempotent seed script** — `scripts/seed.mjs` migrates all static JS data to Supabase using upsert, safe to re-run

### Tooling & Deployment
- **pnpm** — fast, disk-efficient package manager
- **ESLint 9** — flat config with React hooks and refresh plugins
- **GitHub Pages** — deployed via `git subtree push` from a local production build

---

## Architecture

### Global Exam Context
A single `ExamContext` provider wraps the entire app, exposing the active exam mode (`core1` | `core2` | `netplus`). All data-fetching services, hooks, and page components read from this context — one toggle, the entire app adapts.

### Service Layer
All Supabase calls live in `src/services/`, never in components. Each service returns data in the shape the UI already expects (camelCase, same field names), so the fetch source can change without touching any component.

```
src/services/
  supabaseClient.js       ← singleton Supabase client
  questionsService.js
  acronymsService.js
  portsService.js
  commandsService.js
  pbqService.js           ← handles JSONB payload rehydration for bucket/match/order types
  raidService.js          ← snake_case → camelCase mapping
  pcBuilderService.js
```

### Reusable Fetch Hook
`useSupabaseQuery(fetchFn, deps)` is a single hook that handles loading, error, and data states for every async fetch, with an abort-ref pattern to prevent stale updates when the exam switches mid-flight.

```js
const { data, loading, error } = useSupabaseQuery(() => getQuestions(exam), [exam]);
```

### Component Hierarchy
```
src/
  pages/          ← route-level components; own their data-fetching and page-level state
  components/
    shared/       ← PageHeader, PageNav, SearchInput, CategoryPills, ExplanationPanel, LoadingSpinner
    ui/           ← Button, Badge, Progress (Radix + Tailwind wrappers)
    pbq/          ← BucketPBQ, MatchPBQ, OrderPBQ (shared across PBQ page and OSI drills)
    raid/         ← DriveCard, RAIDDiagram, raidUtils
    subnet/       ← SubnetVisual, SubnetCheatSheet, DifficultySelector
    ports/        ← PortCard, PortQuizTable
```

---

## Highlights

**Drag-and-drop RAID simulator** — native HTML5 drag API with swap-within-bays, drag-back-to-pool, and per-bay visual feedback. Validates the full configuration (correct RAID level + correct drives in all bays) in a single derived boolean.

**Subnetting engine** — 32-bit integer bitwise arithmetic to compute network address, broadcast, host range, and host count for any CIDR. Generates randomized private-range IPv4 questions across three difficulty tiers with binary step-by-step visualizations.

**PBQ component reuse** — `BucketPBQ`, `MatchPBQ`, and `OrderPBQ` are generic enough to power both the PBQ page and the 9-exercise OSI module with zero modification.

**JSONB payload rehydration** — PBQ exercises store type-specific fields (`buckets`+`items`, `left`+`right`, or `items`) as a single JSONB column in Postgres. The service layer spreads the payload back to a flat object so components receive the exact shape they expect.

**CSS 3D flip animation** — flashcards use `transform-style: preserve-3d` and `rotateY(180deg)` with a 0.6 s ease transition, implemented in pure CSS with no animation library.

**Theme system** — light/dark preference is detected from `prefers-color-scheme` on first load and toggled via a class on `<html>`. The active preference persists to `localStorage`. All colors are HSL CSS variables so the entire palette switches in a single class change.

---

## Local Development

```bash
# Install dependencies
pnpm install

# Add environment variables
cp .env.local.example .env.local
# Fill in VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY

# Start dev server
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

### Seeding Supabase (one-time)

```bash
# Requires SUPABASE_URL and SUPABASE_SERVICE_KEY in .env.local
node --env-file=.env.local scripts/seed.mjs
```

---

## Project Structure

```
comptia_reviewer_flashcard/
├── src/
│   ├── components/       # Shared + feature-specific UI components
│   ├── context/          # ExamContext (global exam mode)
│   ├── data/             # Remaining static config (subnetData, raidCore1 options)
│   ├── hooks/            # useSupabaseQuery, useStudyCards, usePortMatching, useAcronyms, useCommandFilter
│   ├── pages/            # One file per route (10 pages)
│   ├── services/         # Supabase service functions
│   └── utils/            # shuffle, subnetGenerator, cn
├── scripts/
│   └── seed.mjs          # One-time data migration to Supabase
└── vite.config.js
```
