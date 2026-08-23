# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Tulio Minini's personal portfolio website (2024/current version, "v3"). A single-page React app built with Create React App. Live at https://tuliominini.com/. Prior versions (v1, v2) are linked from the README and listed as portfolio entries in `src/projects.json`.

## Commands

This is a stock Create React App project (`react-scripts`), so all commands go through npm:

- `npm start` — run the dev server at http://localhost:3000 with hot reload
- `npm run build` — produce a production build in `build/`
- `npm test` — run tests in watch mode via `react-scripts test` (Jest + React Testing Library). To run a single test file: `npm test -- Projects.test.js` (append `-- --watchAll=false` for a single non-interactive run)
- `npm run eject` — one-way eject from `react-scripts` (avoid unless truly necessary)

There is no separate lint script; linting comes from the `react-app` / `react-app/jest` ESLint config declared in `package.json` and runs as part of `react-scripts start`/`build`.

## Architecture

- **Single page, section-based composition**: `src/App.js` renders one flat list of section components in order (`Cursor`, `Vertical`, `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `HelperContact`, `Contact`). There is no router — the "pages" are anchor-linked sections on one scrollable page (see `id` attributes like `id="hero"`, `id="projects"` used for in-page nav).
- **Component convention**: each component lives in its own folder under `src/components/<name>/` with a co-located CSS Module (`<Name>.module.css`), imported as `style` and referenced via `style.className`. Components are named exports (e.g. `export function Hero()`), not default exports.
- **Animation**: `framer-motion` is used throughout for scroll-linked and enter animations (`useScroll`, `useTransform`, `motion.div/img/h1`, variants). `@react-spring/parallax` is also a dependency for parallax effects. When touching animated components, check for scroll-progress-driven transforms (e.g. `Hero.jsx`, `Projects.jsx`) rather than assuming plain CSS transitions.
- **Custom cursor**: `Cursor.jsx` implements a custom animated cursor that reacts to any element carrying the plain (non-module) CSS class `"hoverable"`. If you add new interactive elements that should trigger the cursor hover effect, add the literal `hoverable` class alongside any CSS-module classes.
- **Data-driven content**: the Projects section is not hardcoded — `src/projects.json` is an array of portfolio entries (`id`, `img`, `project`, `github`, `website`, `description`) mapped into cards by `Projects.jsx`. To add/edit/reorder a portfolio project, edit this JSON rather than the component. Note the list is rendered reversed (`.toReversed()`) so the last JSON entry appears first. Existing `id` values have some duplicates/gaps (e.g. two `"013"`, ids out of numeric order) — this only cosmetically differentiates React keys and section order, not correctness elsewhere.
- **Static/public assets**: images referenced by `projects.json` and `og:image` live in `public/images/portfolio-imgs/` and are referenced by absolute path (`/images/...`); component-local images (hero photos, icons) live under `src/assets/` and are imported directly into JSX.
- **Favicon theming**: `public/index.html` swaps `favicon1.png`/`favicon2.png` via `prefers-color-scheme` media queries on separate `<link rel="icon">` tags (dark vs. light). This has been a recent source of bugs (see git history) — if changing favicon behavior, test both color-scheme states.
