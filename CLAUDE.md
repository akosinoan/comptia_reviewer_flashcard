# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start Vite dev server with HMR
pnpm build        # Build production bundle to /dist
pnpm lint         # Run ESLint
pnpm preview      # Preview production build locally

# One-time / re-seed (requires SUPABASE_URL + SUPABASE_SERVICE_KEY in .env.local)
node --env-file=.env.local scripts/seed.mjs
```

## Architecture

React + Vite SPA for CompTIA exam study. Three exam modes — **Core 1** (`core1`), **Core 2** (`core2`), and **Network+** (`netplus`) — toggled globally via `ExamContext` (`src/context/ExamContext.jsx`). All pages consume this context via `useExam()` to load the appropriate data set.

**Routing** is handled by React Router in `App.jsx`. Each route maps to a page in `src/pages/`.

**Data source.** All study content (questions, acronyms, ports, commands, PBQs, RAID/PC-builder scenarios) lives in **Supabase** and is fetched on demand. Static files in `src/data/` are limited to a couple of legacy datasets (`raidCore1.js`, `subnetData.js`) — most reads happen via service modules in `src/services/` (e.g., `acronymsService.js`) which call the Supabase JS client (`src/services/supabaseClient.js`). The browser uses the publishable anon key from `.env.local`; server-side seed scripts use the `service_role` key.

**Styling** uses Tailwind CSS with HSL CSS variables for theme switching (light/dark via class on `<html>`). Theme preference is persisted to `localStorage`. Radix UI primitives are used for Dialog and Progress. The card flip animation is a CSS 3D transform defined in `index.css`.

**Build config:** `vite.config.js` sets `base: "/comptia_reviewer_flashcard/"` for GitHub Pages deployment and aliases `@` → `./src`.

## Supabase schema

All content tables include an `exam` column (`'core1' | 'core2' | 'netplus'`) so a single table covers all three exams. Service modules filter by `exam` per request.

### `questions` — flashcard / multiple-choice items
| column | type | notes |
| --- | --- | --- |
| `id` | int | natural id within an exam |
| `exam` | text | `core1` / `core2` / `netplus` |
| `category` | text | exam-objective domain |
| `topic` | text | sub-topic / objective number |
| `question` | text | |
| `answer` | text | |
| `explanation` | text | |

```json
{ "id": 1, "exam": "core1", "category": "1.0 Mobile Devices",
  "topic": "1.1 Laptop Hardware",
  "question": "What type of battery chemistry is most common in modern laptops and why?",
  "answer": "Lithium-Ion (Li-ion) and Lithium-Ion Polymer (LiPo)…",
  "explanation": "Laptop batteries are commonly Li-ion or LiPo…" }
```

### `acronyms` — acronym list (with optional rich-text fields)
| column | type | notes |
| --- | --- | --- |
| `id` | int | PK |
| `exam` | text | |
| `acronym` | text | short label, e.g. `WAN` |
| `definition` | text | full name |
| `category` | text | top-level pill on the Acronyms page |
| `subcategory` | text | collapsible group |
| `what_it_does`, `why_invented`, `problem_solved`, `analogy`, `exam_use_case` | text (nullable) | rich-detail panel content |

```json
{ "id": 4, "exam": "core1", "acronym": "WAN", "definition": "Wide Area Network",
  "category": "Networking", "subcategory": "Area Networks",
  "what_it_does": "Network across regions or countries.",
  "why_invented": "Connect distant offices and the internet.",
  "problem_solved": "Geographic distance.",
  "analogy": "Interstate highway.",
  "exam_use_case": "HQ to branch link." }
```

### `acronym_traps` — Network+ confusion-trap cards
2- or 3-way comparisons rendered as side-by-side mini panels with an "Exam trap:" callout. `compare` is a JSONB array.

| column | type | notes |
| --- | --- | --- |
| `id` | bigserial | PK |
| `exam` | text | currently `netplus` only |
| `name` | text | e.g. `NAT vs PAT` |
| `category` / `subcategory` | text | grouping (e.g. `Confusion Traps`) |
| `exam_trap` | text | callout text |
| `compare` | jsonb | `[{ term, fullName, keyIdea, useCases, analogy }, …]` |
| `sort_order` | int | render order |

```json
{ "id": 1, "exam": "netplus", "name": "NAT vs PAT",
  "category": "Confusion Traps", "subcategory": "NAT vs PAT",
  "exam_trap": "NAT = general concept. PAT = NAT + ports…",
  "compare": [
    { "term": "NAT", "fullName": "Network Address Translation",
      "keyIdea": "Maps private IPs to public IPs.",
      "useCases": "Home router internet access.",
      "analogy": "Office building sharing one street address." },
    { "term": "PAT", "fullName": "Port Address Translation",
      "keyIdea": "A type of NAT using port numbers.",
      "useCases": "Home Wi-Fi with many devices browsing.",
      "analogy": "Apartment number + building address." }
  ], "sort_order": 0 }
```

### `acronym_rules` — Network+ decision-rule cheat-sheet
| column | type | notes |
| --- | --- | --- |
| `id` | bigserial | PK |
| `exam` | text | |
| `category` / `subcategory` | text | e.g. `Decision Rules` / `Cabling Shortcuts` |
| `trigger` | text | the symptom / clue |
| `answer` | text | the recommended call-out |
| `sort_order` | int | |

```json
{ "id": 1, "exam": "netplus", "category": "Decision Rules",
  "subcategory": "Cabling Shortcuts",
  "trigger": "Long distance + fastest + EMI resistant",
  "answer": "Fiber", "sort_order": 0 }
```

### `ports` — TCP/UDP port reference
| column | type | notes |
| --- | --- | --- |
| `id`, `exam`, `port`, `protocol`, `name`, `full_name`, `category` | | client maps `full_name` → `fullName` |

```json
{ "id": 1, "exam": "core1", "port": "20", "protocol": "TCP",
  "name": "FTP (Data)", "full_name": "File Transfer Protocol", "category": null }
```

### `commands` — Windows / Linux command pairs
`windows` and `linux` are JSONB objects with `{ cmd, example, description }`.

```json
{ "id": 1, "exam": "core2", "category": "Network Diagnostics",
  "windows": { "cmd": "ipconfig", "example": "ipconfig /all",
               "description": "Displays IP address, subnet mask…" },
  "linux":   { "cmd": "ip addr  /  ifconfig", "example": "ip addr show",
               "description": "Modern replacement for ifconfig." } }
```

### `pbq_exercises` — performance-based question scenarios
`type` is `'bucket' | 'match' | 'order'`; `payload` JSONB shape varies per type (see `scripts/seed.mjs:60-65` `pbqPayload`). Also stores OSI-layer exercises under `exam='osi'`.

```json
{ "id": "1", "exam": "core1", "type": "bucket", "domain": "Networking",
  "title": "OSI Model Classification",
  "question": "Classify each protocol…",
  "explanation": "Layer 7 (Application) — HTTP, FTP, SMTP, DNS…",
  "payload": { "buckets": [{ "id": 7, "label": "Layer 7", "sublabel": "Application" }, …],
               "items":   [{ "id": "http", "label": "HTTP / HTTPS", "bucket": 7 }, …] } }
```

### `raid_scenarios` — RAID drive-selection scenarios
`drives` is a JSONB array of `{ id, capacity, iface, correct }`.

```json
{ "id": 1, "title": "Video Editing Workstation",
  "requirement": "A video production company needs the fastest possible read/write speeds…",
  "required_capacity": "1 TB", "required_interface": "NVMe",
  "correct_raid": "RAID 0", "storage_efficiency": "100%",
  "total_usable": "2 TB", "fault_tolerance": "None",
  "explanation": "RAID 0 stripes data across both drives…",
  "drives": [
    { "id": 1, "capacity": "1 TB", "iface": "NVMe",     "correct": true  },
    { "id": 2, "capacity": "1 TB", "iface": "NVMe",     "correct": true  },
    { "id": 4, "capacity": "1 TB", "iface": "SATA SSD", "correct": false }
  ] }
```

### `pc_builder_scenarios` — PC-build component scenarios
`requirements` and `categories` are JSONB. `id` is a string slug; PK is `(exam, id)`.

```json
{ "id": "gaming", "exam": "core1", "title": "High-Performance Gaming Workstation",
  "badge": "Gaming", "badge_color": "…", "border_color": "…",
  "requirements": [ /* required-spec items */ ],
  "categories":   [ /* component category sections */ ] }
```

## Re-seeding from this repo

`scripts/seed.mjs` re-creates the bare `acronyms`, `questions`, `ports`, `commands`, `pbq_exercises`, `raid_scenarios`, and `pc_builder_scenarios` rows from static JS files (`src/data/acronymsCore1.js`, etc.) — but **not** the rich `acronyms.what_it_does` / `acronym_traps` / `acronym_rules` content, which currently lives only in Supabase. `scripts/schema_rich.sql` contains the DDL for the rich columns and trap/rule tables; run it once on a fresh project before seeding.
