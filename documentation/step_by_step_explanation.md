# Pokémon Explorer: Step-by-Step Code Explanation

This document provides a detailed breakdown of the Pokémon Explorer full-stack application. It is designed to help you study and understand how the different parts of the system interact, from the Express backend to the React/MUI frontend.

---

## 1. Project Overview & Architecture

The project is a **Full-Stack** application consisting of two main parts:

1.  **Server (Backend):** Built with Node.js, Express, and TypeScript. It serves Pokémon data via a REST API.
2.  **Client (Frontend):** Built with React, Vite, and Material UI (MUI). It handles the user interface, state management, and data fetching.

They run concurrently (at the same time) and communicate over HTTP.

---

## 2. The Backend (Server) Walkthrough

The backend is responsible for storing, filtering, and serving Pokémon data.

### A. Entry Point (`server/src/index.ts`)

This is where the Express server is initialized.

- **CORS:** Enabled to allow the frontend (on a different port) to talk to the backend.
- **Rate Limiting:** Protects the API from too many requests.
- **JSON Parsing:** Built-in middleware to handle JSON body in requests.
- **Routing:** Mounts the Pokémon routes at `/api/pokemons`.

### B. Validation Schema (`server/src/schemas/query.schema.ts`)

We use **Zod** to ensure the client sends valid search parameters.

```typescript
export const pokemonQuerySchema = z.object({
  nameStartedWith: z.string().optional(),
  category: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(12),
});
```

- **z.coerce.number():** Converts string inputs (from URLs) into numbers automatically.
- **default(12):** If the client doesn't specify a limit, we default to 12 items.

### C. Validation Middleware (`server/src/middleware/validate.ts`)

A critical part of the backend. In **Express 5**, `req.query` is read-only. We fix this by storing validated data in `res.locals.validatedQuery`.

```typescript
res.locals.validatedQuery = result.data;
next();
```

### D. API Route & Logic (`server/src/routes/pokemons.ts`)

This file contains the logic for filtering and **pagination**.

1.  **Filtering:** It takes the data from `res.locals.validatedQuery` and filters the main array based on `name` (prefix search) and `category`.
2.  **Pagination:** It uses `slice(startIndex, endIndex)` to only return the requested page.
3.  **Metadata:** It returns `nextPage` (e.g., `2`) if more data exists, or `null` if you've reached the end.

---

## 3. The Frontend (Client) Walkthrough

The frontend provides a modern, responsive UI with advanced state management.

### A. State Management (Zustand)

We use **Zustand** for lightweight, global state.

- **`themeStore.ts`:** Manages Dark/Light mode and persists it to `sessionStorage`.
- **`filterStore.ts`:** Manages what the user is currently searching for (name and category).

### B. Data Fetching (TanStack Query)

This is the "brain" of the data layer. It handles caching, loading states, and **Infinite Scrolling**.

- **Hook (`src/hooks/usePokemons.ts`):** Uses `useInfiniteQuery` to track pages of data.
- **`getNextPageParam`:** Tells the library which page to fetch next based on the server's response.

### C. UI Components

#### 1. FilterBar (`components/FilterBar.tsx`)

A search input and a dropdown. When you type, it updates the **Zustand Filter Store**. Because the `usePokemons` hook depends on this store, the data fetches automatically when you stop typing.

#### 2. PokemonGrid (`components/PokemonGrid.tsx`)

The heart of the UI.

- **Flattening Data:** Takes the multiple pages from TanStack Query and flattens them into one big list of Pokémon.
- **Infinite Scroll:** Uses a custom `useIntersectionObserver` hook.
  - It monitors a hidden "sentinel" `div` at the bottom of the page.
  - When that `div` enters the screen, it automatically triggers `fetchNextPage()`.
- **Skeletons:** Shows placeholder "Skeleton" cards while the next page is loading.

#### 3. PokemonCard (`components/PokemonCard.tsx`)

A premium design using **Glassmorphism** effect:

- `backdropFilter: 'blur(10px)'`
- Styled MUI `Card` with hover animations.
- Displays the Pokémon's name, ID, category (with color-coded chips), and official artwork.

### D. The Custom Hook (`hooks/useIntersectionObserver.ts`)

This handles the "Auto-loading" magic. It uses the modern **Intersection Observer API** with a "Callback Ref" pattern to ensure it correctly attaches to the HTML element even during complex React renders.

---

## 4. Key Implementation Patterns to Study

1.  **Concurrent Scripts:** Look at the root `package.json`. We use `concurrently` to run `npm run dev` in both folders with one command.
2.  **Vite Proxy:** Look at `client/vite.config.ts`. We proxy `/api` to `localhost:3000` so we don't have to deal with complex URL configurations during development.
3.  **Zod Synchronization:** We use Zod on the server to validate inputs and on the client to validate that the server's response matches our expectations. This prevents most runtime data errors.
4.  **Modern MUI Theme:** The theme in `src/theme/theme.ts` shows how to create a unified palette for both Light and Dark modes.

---

## 5. Summary of Application Flow

1.  User opens the app -> `usePokemons` fetches the first 12 Pokémon.
2.  User scrolls down -> Sentinel at bottom becomes visible.
3.  `useIntersectionObserver` triggers -> `fetchNextPage()` is called.
4.  Server receives `page=2` -> Filters data and returns next 12.
5.  Client receives new data -> TanStack Query appends it to the list.
6.  User types "Pika" -> Filter store updates -> TanStack Query resets and fetches only Pokémon starting with "Pika".

---

**Happy Studying!**

Copyright Shamiul @2026
