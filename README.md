# Pokémon Explorer

A modern full-stack Pokémon Explorer built with **React + Vite** and **Express**, featuring a sleek dark/light UI, real-time filtering, and robust caching.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![MUI](https://img.shields.io/badge/MUI-7-007FFF?logo=mui)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Features

- **20 Pokémon** with official artwork from PokeAPI sprites
- **Filter by name** — type-ahead prefix search (e.g. "Pi" → Pikachu)
- **Filter by category** — dropdown with 18 types (Fire, Water, Grass, etc.)
- **Combined filters** — name + category simultaneously
- **Dark / Light mode** — toggle with sessionStorage persistence via Zustand
- **Skeleton loaders** — smooth loading states powered by TanStack Query
- **Error handling** — retry button on API failures
- **Rate limiting** — 100 req / 15 min per IP (Express)
- **Zod validation** — server validates query params; client validates API responses
- **Responsive grid** — 1–4 columns adapting to screen size

---

## Technology Stack

| Layer          | Technologies                                                       |
| -------------- | ------------------------------------------------------------------ |
| **Frontend**   | React 19, Vite 7, TypeScript, Material UI 7                        |
| **State**      | Zustand (theme + filters), TanStack Query (server state + caching) |
| **HTTP**       | Axios with error interceptor                                       |
| **Validation** | Zod (client + server)                                              |
| **Backend**    | Express 5, TypeScript, cors                                        |
| **Security**   | express-rate-limit, Zod query validation                           |
| **Dev**        | concurrently, tsx watch, Vite proxy                                |

---

## Project Structure

```
pokemon-explorer/
├── package.json               # Root — runs both servers via concurrently
├── client/                    # React + Vite frontend
│   ├── src/
│   │   ├── api/               # Axios instance & fetchPokemons()
│   │   ├── components/        # Layout, ThemeToggle, FilterBar, PokemonCard, PokemonGrid
│   │   ├── hooks/             # usePokemons (TanStack Query)
│   │   ├── store/             # Zustand stores (theme, filters)
│   │   ├── theme/             # MUI theme config & category colors
│   │   ├── types/             # Zod schemas & TypeScript types
│   │   ├── App.tsx            # Root component
│   │   └── main.tsx           # Entry with QueryClientProvider
│   └── vite.config.ts         # Dev proxy /api → localhost:3000
├── server/                    # Express backend
│   └── src/
│       ├── data/              # 20 Pokémon entries
│       ├── schemas/           # Zod query validation
│       ├── middleware/        # Rate limiter, validation
│       ├── routes/            # GET /api/pokemons
│       └── index.ts           # Server entry
└── .gitignore
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pokemon-explorer.git
cd pokemon-explorer

# Install all dependencies (root + client + server)
npm install
npm run install:all
```

### Development

```bash
npm run dev
```

This starts **both servers concurrently**:

| Service | URL                   | Description      |
| ------- | --------------------- | ---------------- |
| Client  | http://localhost:5173 | React app (Vite) |
| Server  | http://localhost:3000 | Express API      |

> Vite automatically proxies `/api/*` requests to the Express server.

### Production Build

```bash
npm run build
```

---

## API Reference

### `GET /api/pokemons`

Returns a list of Pokémon, optionally filtered.

| Parameter         | Type                | Description                                   |
| ----------------- | ------------------- | --------------------------------------------- |
| `nameStartedWith` | `string` (optional) | Filter by name prefix (case-insensitive)      |
| `category`        | `string` (optional) | Filter by category (Fire, Water, Grass, etc.) |

**Examples:**

```
GET /api/pokemons                                    → All 20 Pokémon
GET /api/pokemons?nameStartedWith=Pi                 → Pikachu
GET /api/pokemons?category=Fire                      → Charmander, Charmeleon, Charizard
GET /api/pokemons?nameStartedWith=Ch&category=Fire   → Charmander, Charmeleon, Charizard
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 25,
      "name": "Pikachu",
      "image": "https://raw.githubusercontent.com/.../25.png",
      "category": "Electric"
    }
  ],
  "total": 1
}
```

### `GET /api/health`

Health check endpoint.

---

## Available Categories

Fire · Water · Grass · Electric · Psychic · Ice · Dragon · Dark · Fairy · Normal · Fighting · Poison · Ground · Flying · Bug · Rock · Ghost · Steel

---

## License

This project is licensed under the [MIT License](./LICENSE).
