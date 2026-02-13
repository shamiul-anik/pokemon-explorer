# Pokemon Explorer — Walkthrough

## What Was Built

A full-stack **Pokémon Explorer** application with:

- **Express API** (port 3000) serving 20 Pokémon with query filtering
- **React + Vite client** (port 5173) with MUI, TanStack Query, Zustand, and Zod
- **Concurrent dev** via `npm run dev` from the project root

---

## Architecture

```
pokemon-explorer/
├── package.json              ← root: concurrently runs both servers
├── .gitignore
├── client/                   ← React + Vite + MUI frontend
│   ├── src/
│   │   ├── api/              ← Axios instance + fetchPokemons()
│   │   ├── components/       ← Layout, ThemeToggle, FilterBar, PokemonCard, PokemonGrid
│   │   ├── hooks/            ← usePokemons (TanStack Query)
│   │   ├── store/            ← Zustand: themeStore, filterStore
│   │   ├── theme/            ← MUI dark/light themes + category colors
│   │   ├── types/            ← Zod schemas + TypeScript types
│   │   ├── App.tsx           ← ThemeProvider + Layout + Filters + Grid
│   │   └── main.tsx          ← QueryClientProvider entry
│   └── vite.config.ts        ← /api proxy → localhost:3000
├── server/                   ← Express + TypeScript backend
│   └── src/
│       ├── data/pokemons.ts  ← 20 Pokémon entries
│       ├── schemas/          ← Zod query validation
│       ├── middleware/       ← validate.ts + rateLimiter.ts
│       ├── routes/           ← GET /api/pokemons with filtering
│       └── index.ts          ← Express entry
└── .agent/skills/            ← Antigravity skill doc
```

---

## Key Decisions

| Decision                        | Rationale                                                               |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Zustand** for theme + filters | Lightweight, no boilerplate, sessionStorage persistence for theme       |
| **Zod on both sides**           | Server validates query params; client validates API responses           |
| **Express 5**                   | Latest version, but required `res.locals` pattern for validated queries |
| **Vite proxy**                  | `/api/*` → Express, seamless dev experience                             |
| **TanStack Query**              | Auto-caching by filter key, staleTime=5min, retry=2, skeleton loading   |

---

## Bug Fix During Verification

Express 5 makes `req.query` a readonly getter. The initial validation middleware tried `req.query = result.data`, which threw:

```
TypeError: Cannot set property query of #<IncomingMessage> which has only a getter
```

**Fix**: Store validated data on `res.locals.validatedQuery` and read from it in the route handler.

---

## Verification Results

| Test                                                 | Result                                                |
| ---------------------------------------------------- | ----------------------------------------------------- |
| `GET /api/pokemons`                                  | ✅ 20 Pokémon returned                                |
| `GET /api/pokemons?nameStartedWith=Ch&category=Fire` | ✅ 3 results (Charmander, Charmeleon, Charizard)      |
| `GET /api/pokemons?category=Water`                   | ✅ 4 results (Squirtle, Blastoise, Psyduck, Greninja) |
| Vite proxy (port 5173 → 3000)                        | ✅ working                                            |
| Both servers start with `npm run dev`                | ✅ concurrently                                       |

---

## How to Run

```bash
cd pokemon-explorer
npm install           # root (installs concurrently)
npm run install:all   # installs server + client deps
npm run dev           # starts both servers
```

Open **http://localhost:5173** to use the app.
