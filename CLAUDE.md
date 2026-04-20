# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start Vite dev server with HMR
pnpm build        # Build production bundle to /dist
pnpm lint         # Run ESLint
pnpm preview      # Preview production build locally
```

## Architecture

React + Vite SPA for CompTIA A+ exam study. Two exam modes — **Core 1** and **Core 2** — are toggled globally via `ExamContext` (`src/context/ExamContext.jsx`). All pages consume this context via `useExam()` to load the appropriate data set.

**Routing** is handled by React Router in `App.jsx`. Each route maps to a page in `src/pages/`.

**Data files** in `src/data/` are strictly separated by exam: Core 1 files have no suffix (e.g., `questions.js`, `portsCore1.js`), Core 2 files are suffixed with `Core2` (e.g., `questionsCore2.js`, `portsCore2.js`). Core 1 acronyms are embedded directly in `AcronymsPage.jsx` as a local constant rather than a separate data file.

**Question/flashcard objects** follow this shape:
```js
{ id, category, topic, question, answer, explanation }
```

**Acronym objects:**
```js
{ acronym, definition, category, subcategory }
```

**Port objects:**
```js
{ id, port, protocol, name, fullName }
```

**Styling** uses Tailwind CSS with HSL CSS variables for theme switching (light/dark via class on `<html>`). Theme preference is persisted to `localStorage`. Radix UI primitives are used for Dialog and Progress. The card flip animation is a CSS 3D transform defined in `index.css`.

**Build config:** `vite.config.js` sets `base: "/comptia_reviewer_flashcard/"` for GitHub Pages deployment and aliases `@` → `./src`.
