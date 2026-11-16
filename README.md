# Barberlang

**Get better at communicating the haircut you want.**

Barberlang is a mobile-first web app. Users adjust sliders and toggles (top length, side length, fade, curl, color…) and see a 3D head update live. The app then translates their choices into barber terms — clipper guard numbers, fade height, neckline — so they can show their barber exactly what they want.

**Inspiration:** [Lusion](https://lusion.co/) — immersive, playful, interactive 3D on the web. We aim for that feel: smooth, tactile, delightful to touch. (We get there with simple shapes and good interaction, not complex 3D modeling.)

> Status: early setup. This README covers just enough to get started on Issues #1–#3. It will grow as the project does.

---
## Contributers 
Kyaw Zin Thu 

--- 

## Tech stack

| Purpose | Tool | Why |
|---|---|---|
| UI framework | [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org) | Industry standard; types catch bugs early |
| Build / dev server | [Vite](https://vite.dev) | Fast, minimal config |
| 3D | [@react-three/fiber](https://r3f.docs.pmnd.rs) + [drei](https://drei.docs.pmnd.rs) | Write Three.js as React components |
| State | [Zustand](https://zustand.docs.pmnd.rs) | Tiny global store, no boilerplate |
| Tests | [Vitest](https://vitest.dev) + React Testing Library | Same config as Vite |
| Lint / format | ESLint + Prettier | Consistent code |
| Hosting | Vercel (or Netlify) | Free; preview URL for every PR |

**No 3D modeling required.** The head is a free CC0 `.glb` model we download and never edit. Hair is built in code from simple shapes (capsules, spheres, boxes) grouped by zone.

---

## Prerequisites

- [Node.js](https://nodejs.org) **20 or newer** — check with `node -v`
- [Git](https://git-scm.com) and a GitHub account with access to this repo
- [VS Code](https://code.visualstudio.com) (recommended) with the ESLint and Prettier extensions
- A phone on hand — this app is mobile-first, so test on a real device

---

## Getting started

> These commands become valid once Issue #1 is done.

```bash
git clone <repo-url>
cd barberlang
npm install
npm run dev        # start local dev server
```

| Script | What it does |
|---|---|
| `npm run dev` | Start dev server at http://localhost:5173 |
| `npm run dev -- --host` | Same, but reachable from your phone on the same Wi-Fi |
| `npm test` | Run unit tests |
| `npm run lint` | Check code style |
| `npm run build` | Production build |

---

## How we work

1. **Pick an issue** from GitHub Issues. Assign yourself.
2. **Branch** off `main`: `git checkout -b 2-haircut-store` (issue number + short name).
3. **Commit small and often.** Use [Conventional Commits](https://www.conventionalcommits.org): `feat: add haircut store`, `fix: clamp top length`, `docs: update README`.
4. **Open a PR** early (draft is fine). Link the issue: `Closes #2`.
5. **CI must pass** (lint + tests). Check the preview URL on your phone.
6. **Request review.** No direct pushes to `main`.
7. Keep PRs **under ~1 day of work**. If it's growing, split it.

---

## Architecture (planned)

```
            ┌──────────────────────┐
            │  Haircut state store │  ← single source of truth (Zustand)
            └──────────┬───────────┘
        ┌──────────────┼───────────────┐
        ▼              ▼               ▼
  Controls UI     3D Scene        Barber Output
  (sliders)       (head + hair)   (guard #s, fade…)
  writes state    reads state     reads state
```

Planned folders:

```
src/
  state/       Haircut type + Zustand store
  lib/         Pure logic (e.g. inches → guard number). Must have tests.
  components/  React UI (controls, output panel)
  scene/       3D components (head, hair zones)
public/
  models/      Downloaded .glb files — do not edit
```
---

## Barber terms cheat sheet

Useful context for later issues — this is what the app will output.

| Guard # | Length |
|---|---|
| #0 | ~1/16" (no guard) |
| #1 | 1/8" |
| #2 | 1/4" |
| #3 | 3/8" |
| #4 | 1/2" |
| #5 | 5/8" |
| #6 | 3/4" |
| #7 | 7/8" |
| #8 | 1" |

- **Over 1"** → usually cut with scissors; say the length ("leave 2 inches on top").
- **Fade** → hair gets shorter toward the skin. *Low / mid / high* = where the fade starts.
- **Taper** → gradual shortening, usually just at the sideburns and neckline.
- **Neckline** → *blocked* (squared), *rounded*, or *tapered* (faded into skin).

---

## Future ideas (not now)

Presets, share-by-link, save cuts to an account, AWS backend, beard options.
