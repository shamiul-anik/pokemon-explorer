# Pokemon Explorer

A full-stack TypeScript monorepo for browsing the original 151 Pokemon, with a modern MUI UI, route-based pages, and an Express API.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
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

- React 19 + Vite
- TypeScript
- Material UI (`@mui/material`, `@mui/icons-material`, `@mui/joy`)
- TanStack Router
- TanStack Query
- Zustand
- Axios
- Zod

### Server

- Node.js + Express 5
- TypeScript
- Zod
- express-rate-limit
- cors

### Workspace / Tooling

- pnpm workspaces
- concurrently (run client and server together)

## Project Structure

```text
pokemon-explorer/
|- client/
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
|  |- package.json
|  `- vite.config.ts
|- server/
|  |- src/
|  |  |- data/
|  |  |- middleware/
|  |  |- routes/
|  |  |- schemas/
|  |  `- index.ts
|  `- package.json
|- package.json
`- pnpm-workspace.yaml
```

## Routing

The client uses TanStack Router with the following routes:

- `/` -> Home (filters + Pokemon grid)
- `/login` -> Login UI
- `/dashboard` -> Order dashboard UI

## Getting Started

### Prerequisites

- Node.js 18+
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

## Supported Categories

Fire, Water, Grass, Electric, Psychic, Ice, Dragon, Dark, Fairy, Normal, Fighting, Poison, Ground, Flying, Bug, Rock, Ghost, Steel

## Notes

- Theme preference is stored under `theme-mode` in `localStorage`.
- The server exports the Express app for deployment targets that need a handler export.
- Rate limiter is enabled globally with a 15-minute window.

## License

Licensed under the [MIT License](./LICENSE).
