# AGENTS.md

## Purpose

Barberlang is a mobile-first React app. Users adjust sliders for a haircut
(lengths, fade, curl, color, neckline), see a 3D head update live, and get
barber terms (guard numbers, fade height, neckline) to show their barber.

## Commands

- `npm run dev` — dev server at http://localhost:5173
- `npm test` — run Vitest once (`npm run test:watch` to watch)
- `npm run lint` — ESLint
- `npm run format` / `npm run format:check` — Prettier
- `npm run build` — type-check and production build

Before finishing any change, run: `npm run lint && npm run format:check && npm test && npm run build`

## Architecture

- One Zustand store (`src/state/useHaircutStore.ts`) is the single source of truth.
- Controls write to the store; the 3D scene and barber output only read from it.
- `src/state/haircut.ts` holds the `Haircut` type, `HAIRCUT_LIMITS` and `DEFAULT_HAIRCUT`.
- The store clamps all lengths; never bypass `set()`.
- Pure logic goes in `src/lib/` and must have tests.
- 3D uses React Three Fiber in `src/scene/`; models in `public/models/` are never edited.

## Conventions

- TypeScript strict; use string-literal unions, not enums.
- Prettier: no semicolons, single quotes, LF line endings.
- Tests sit next to the code: `foo.ts` → `foo.test.ts`.
- Branches: `<issue#>-<short-name>` off `main`.
- Commits: Conventional Commits (`feat:`, `fix:`, `test:`, `docs:`, `chore:`, `ci:`).
- PRs: include `Closes #N`; CI must pass.

## Don'ts

- Don't push to `main` or merge without review.
- Don't store haircut state in component `useState`; use the store.
- Don't add dependencies without a reason in the PR description.
- Don't edit `.glb` models or commit `node_modules` / `dist`.
- Don't disable lint rules or skip tests to make CI pass.
