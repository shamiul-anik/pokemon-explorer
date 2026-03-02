# Pokemon Explorer

A full-stack TypeScript monorepo for browsing the original 151 Pokemon, with a modern MUI UI, route-based pages, and an Express API. Deployable to Vercel.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![MUI](https://img.shields.io/badge/MUI-7-007FFF?logo=mui)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- Home page with Pokemon catalog (`/`)
- Login page with client-side Zod validation (`/login`)
- Dashboard demo page (`/dashboard`)
- Name prefix search with debounce
- Category filter (18 Pokemon types)
- Server-side pagination with client-side page size control
- Skeleton loading, empty state, and retry on errors
- Dark/light theming with Zustand + `localStorage` persistence
- Theme adapts to system preference when set to `system`
- React Query caching and background state management
- Express API with query validation via Zod
- Express rate limiting and health endpoint

## Tech Stack

### Client

- React 19 + Vite 8
- TypeScript 5.9
- Material UI (`@mui/material`, `@mui/icons-material`, `@mui/joy`)
- TanStack Router
- TanStack Query
- Zustand
- Axios
- Zod 4

### Server

- Node.js + Express 5
- TypeScript 5.9
- Zod 3
- express-rate-limit
- cors
- tsx (dev runner)

### Workspace / Tooling

- pnpm 10 workspaces
- concurrently (run client and server together)
- ESLint 9 (flat config) with TypeScript, React Hooks, and React Refresh plugins
- Vercel deployment (`vercel.json`)

## Project Structure

```text
pokemon-explorer/
|- client/
|  |- backup/
|  |  `- backupconfig.js
|  |- public/
|  |- src/
|  |  |- app/
|  |  |  `- router.tsx
|  |  |- assets/
|  |  |- routes/
|  |  |  |- home/
|  |  |  |  |- components/
|  |  |  |  |- hooks/
|  |  |  |  `- store/
|  |  |  |- login/
|  |  |  |  `- components/
|  |  |  `- dashboard/
|  |  |     `- components/
|  |  `- shared/
|  |     |- api/
|  |     |- components/
|  |     |- store/
|  |     |- theme/
|  |     `- types/
|  |- eslint.config.js
|  |- package.json
|  `- vite.config.ts
|- server/
|  |- src/
|  |  |- data/
|  |  |- middleware/
|  |  |  |- rateLimiter.ts
|  |  |  `- validate.ts
|  |  |- routes/
|  |  |- schemas/
|  |  `- index.ts
|  |- fetch-pokemons.ts
|  `- package.json
|- documentation/
|  |- step_by_step_explanation.md
|  |- vercel_deployment.md
|  `- walkthrough.md
|- package.json
|- pnpm-workspace.yaml
`- vercel.json
```

## Routing

The client uses TanStack Router with the following routes:

- `/` -> Home (filters + Pokemon grid)
- `/login` -> Login UI
- `/dashboard` -> Order dashboard UI

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm 10+

### Install

```bash
pnpm install
```

### Run in development

```bash
pnpm dev
```

This starts both apps:

- Client: `http://localhost:5173`
- Server: `http://localhost:3000`

Vite proxies `/api/*` from client to server.

## Scripts

### Root

- `pnpm dev` - run server and client concurrently
- `pnpm build` - build server then client
- `pnpm install:all` - install workspace dependencies

### Client (`client/package.json`)

- `pnpm --dir client dev`
- `pnpm --dir client build`
- `pnpm --dir client lint`
- `pnpm --dir client preview`

### Server (`server/package.json`)

- `pnpm --dir server dev`
- `pnpm --dir server build`
- `pnpm --dir server start`

## API

### `GET /api/pokemons`

Returns paginated Pokemon data from the local dataset (151 records).

#### Query parameters

- `nameStartedWith` (optional, string, 1-50 chars)
- `category` (optional, one of the supported categories)
- `page` (optional, number, default `1`)
- `limit` (optional, number, default `12`, max `100`)

#### Example

```http
GET /api/pokemons?page=1&limit=8&nameStartedWith=pi&category=Electric
```

#### Success response

```json
{
  "success": true,
  "data": [],
  "total": 1,
  "page": 1,
  "limit": 8,
  "nextPage": null
}
```

### `GET /api/health`

Returns API health status.

## Deployment

The project includes a `vercel.json` configuration for deploying to [Vercel](https://vercel.com):

- **Server** is built with `@vercel/node`
- **Client** is built as a static site with `@vercel/static-build`
- API routes (`/api/*`) are rewritten to the server entry point
- All other routes are served from the client build

See [`documentation/vercel_deployment.md`](./documentation/vercel_deployment.md) for detailed deployment instructions.

## Supported Categories

Fire, Water, Grass, Electric, Psychic, Ice, Dragon, Dark, Fairy, Normal, Fighting, Poison, Ground, Flying, Bug, Rock, Ghost, Steel

## Notes

- Theme preference is stored under `theme-mode` in `localStorage`.
- The server exports the Express app for deployment targets that need a handler export.
- Rate limiter is enabled globally with a 15-minute window.
- The `client/backup/` directory contains an alternate ESLint config with Prettier integration.

## Documentation

Additional docs are available in the `documentation/` folder:

- [`step_by_step_explanation.md`](./documentation/step_by_step_explanation.md) - Detailed implementation walkthrough
- [`vercel_deployment.md`](./documentation/vercel_deployment.md) - Vercel deployment guide
- [`walkthrough.md`](./documentation/walkthrough.md) - Project walkthrough

## License

Licensed under the [MIT License](./LICENSE).
