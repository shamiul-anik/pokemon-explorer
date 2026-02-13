---
name: pokemon-explorer-fullstack
description: Build a full-stack Pokemon Explorer app with React/Vite/MUI client and Express server, including TanStack Query, Zustand, Zod, dark/light mode, and concurrent dev setup.
---

# Pokemon Explorer Full-Stack Skill

## Overview
This skill builds a full-stack Pokemon Explorer application with a **client** (React + Vite + MUI + TanStack Query) and a **server** (Express + TypeScript), running concurrently via a root `npm run dev` command.

---

## Technology Stack

### Client (`client/`)
| Technology | Purpose |
|---|---|
| **Vite + React 19** | Build tool & UI library |
| **TypeScript** | Type safety |
| **Material UI (MUI) v7** | Component library & theming |
| **@tanstack/react-query** | Data fetching, caching, loading & error states |
| **Axios** | HTTP client |
| **Zustand** | Lightweight state management (theme mode, filters) |
| **Zod** | API response validation |

### Server (`server/`)
| Technology | Purpose |
|---|---|
| **Express** | HTTP server framework |
| **TypeScript** | Type safety |
| **Zod** | Query parameter validation |
| **express-rate-limit** | Rate limiting |
| **cors** | Cross-origin resource sharing |

### Root
| Technology | Purpose |
|---|---|
| **concurrently** | Run client & server simultaneously |

---

## Architecture

```
pokemon-explorer/
├── client/                    # React + Vite frontend
│   ├── src/
│   │   ├── api/               # Axios instance & API functions
│   │   ├── components/        # Reusable UI components
│   │   │   ├── PokemonCard.tsx
│   │   │   ├── PokemonGrid.tsx
│   │   │   ├── FilterBar.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── Layout.tsx
│   │   ├── hooks/             # Custom hooks (usePokemons)
│   │   ├── store/             # Zustand stores (theme, filters)
│   │   ├── types/             # TypeScript types & Zod schemas
│   │   ├── theme/             # MUI theme configuration
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
├── server/                    # Express backend
│   ├── src/
│   │   ├── data/              # Pokemon dummy data (20 entries)
│   │   ├── routes/            # API routes
│   │   ├── middleware/        # Rate limiter, validation
│   │   ├── schemas/           # Zod schemas
│   │   └── index.ts           # Server entry point
│   ├── tsconfig.json
│   └── package.json
├── package.json               # Root package.json with concurrently
└── .gitignore
```

---

## API Design

### Endpoints

| Method | URL | Description |
|---|---|---|
| GET | `/api/pokemons` | All 20 Pokémon |
| GET | `/api/pokemons?nameStartedWith=Pi` | Filter by name prefix |
| GET | `/api/pokemons?category=Fire` | Filter by category |
| GET | `/api/pokemons?nameStartedWith=Ch&category=Fire` | Filter by name + category |

### Response Schema
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Pikachu",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      "category": "Electric"
    }
  ],
  "total": 1
}
```

---

## Key Patterns

### TanStack Query (Client)
- Use `useQuery` with dynamic `queryKey` based on filters for automatic caching & refetching.
- Implement `staleTime` and `gcTime` for optimal caching.
- Use `isLoading`, `isError`, `error` states for UX feedback.

### Zustand + SessionStorage (Client)
- **Theme store**: Persists dark/light mode to `sessionStorage`.
- **Filter store**: Manages `nameStartedWith` and `category` filter values.

### Zod Validation
- **Client**: Validate API responses against schemas.
- **Server**: Validate query parameters with Zod + custom middleware.

### Rate Limiting (Server)
- Use `express-rate-limit` with generous limits (100 requests per 15 minutes per IP).

### Concurrent Dev
- Root `package.json` uses `concurrently` to run both `client` and `server` dev commands.
- Client runs on port **5173** (Vite default).
- Server runs on port **3000**.

---

## Design Guidelines
- **Dark mode** as default with toggle switch.
- Use MUI `Card`, `CardMedia`, `CardContent`, `Chip`, `TextField`, `Select` for UI.
- Glassmorphism-inspired cards with subtle hover animations.
- Responsive grid layout (1-4 columns based on screen size).
- Vibrant category-specific color chips (Fire=red, Water=blue, etc.).
- Smooth skeleton loaders during data fetching.
- Error state with retry button.
