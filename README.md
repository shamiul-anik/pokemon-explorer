<div align="center">

# ⚡ Pokemon Explorer

**A full-stack TypeScript monorepo for browsing the original 151 Pokémon**

_Modern MUI UI · Route-based pages · Express API · Vercel-ready_

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![MUI](https://img.shields.io/badge/MUI-7-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com)
[![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](./LICENSE)

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🧭 Routing](#-routing)
- [🚀 Getting Started](#-getting-started)
- [📜 Scripts](#-scripts)
- [🔌 API Reference](#-api-reference)
- [☁️ Deployment](#️-deployment)
- [📖 Documentation](#-documentation)
- [📝 Notes](#-notes)
- [📄 License](#-license)

---

## ✨ Features

| Feature                | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| 🏠 **Home Page**       | Pokémon catalog with filterable grid                    |
| 🔐 **Login Page**      | Client-side form validation with Zod                    |
| 📊 **Dashboard**       | Order dashboard demo UI                                 |
| 🔍 **Search**          | Name prefix search with debounce                        |
| 🏷️ **Category Filter** | Filter by any of 18 Pokémon types                       |
| 📄 **Pagination**      | Server-side pagination + client page-size control       |
| 💀 **Loading States**  | Skeleton loaders, empty states, and error retry         |
| 🌗 **Theming**         | Dark / light / system mode via Zustand + `localStorage` |
| ⚡ **Caching**         | React Query background caching & state management       |
| 🛡️ **Validation**      | Express API query validation via Zod                    |
| 🚦 **Rate Limiting**   | Global rate limiter on the Express server               |

---

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="50%">

### 🖥️ Client

| Technology      | Version |
| --------------- | ------- |
| React           | 19      |
| Vite            | 8       |
| TypeScript      | 5.9     |
| Material UI     | 7       |
| TanStack Router | latest  |
| TanStack Query  | 5       |
| Zustand         | 5       |
| Axios           | 1       |
| Zod             | 4       |

</td>
<td valign="top" width="50%">

### ⚙️ Server

| Technology         | Version |
| ------------------ | ------- |
| Node.js            | 24+     |
| Express            | 5       |
| TypeScript         | 5.9     |
| Zod                | 3       |
| express-rate-limit | 7       |
| cors               | 2       |
| tsx                | 4       |

</td>
</tr>
</table>

### 🧰 Tooling

| Tool             | Purpose                                                  |
| ---------------- | -------------------------------------------------------- |
| **pnpm 10**      | Workspace package manager                                |
| **concurrently** | Run client & server in parallel                          |
| **ESLint 9**     | Flat config with TS, React Hooks & React Refresh plugins |
| **Vercel**       | Production deployment target                             |

---

## 📁 Project Structure

```text
pokemon-explorer/
├── client/
│   ├── backup/
│   │   └── backupconfig.js          # Alternate ESLint + Prettier config
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   │   └── router.tsx           # TanStack Router setup
│   │   ├── assets/
│   │   ├── routes/
│   │   │   ├── home/
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   └── store/
│   │   │   ├── login/
│   │   │   │   └── components/
│   │   │   └── dashboard/
│   │   │       └── components/
│   │   └── shared/
│   │       ├── api/                  # Axios client & query hooks
│   │       ├── components/           # Reusable UI components
│   │       ├── store/                # Zustand stores
│   │       ├── theme/                # MUI theme config
│   │       └── types/                # Shared TypeScript types
│   ├── eslint.config.js
│   ├── package.json
│   └── vite.config.ts
├── server/
│   ├── src/
│   │   ├── data/                     # Pokémon dataset (151 records)
│   │   ├── middleware/
│   │   │   ├── rateLimiter.ts
│   │   │   └── validate.ts
│   │   ├── routes/
│   │   ├── schemas/                  # Zod request schemas
│   │   └── index.ts                  # Express entry point
│   ├── fetch-pokemons.ts             # Data fetching utility
│   └── package.json
├── documentation/
│   ├── step_by_step_explanation.md
│   ├── vercel_deployment.md
│   └── walkthrough.md
├── package.json
├── pnpm-workspace.yaml
└── vercel.json
```

---

## 🧭 Routing

The client uses **TanStack Router** with the following routes:

| Route        | Page      | Description                         |
| ------------ | --------- | ----------------------------------- |
| `/`          | Home      | Pokémon catalog with filters & grid |
| `/login`     | Login     | Login form with Zod validation      |
| `/dashboard` | Dashboard | Order dashboard demo                |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `24+`
- **pnpm** `10+`

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start development servers

```bash
pnpm dev
```

This launches both apps concurrently:

| App       | URL                     |
| --------- | ----------------------- |
| 🖥️ Client | `http://localhost:5173` |
| ⚙️ Server | `http://localhost:3000` |

> [!TIP]
> Vite automatically proxies `/api/*` requests to the Express server — no extra config needed during development.

---

## 📜 Scripts

### Root

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `pnpm dev`         | Run server & client concurrently   |
| `pnpm build`       | Build server, then client          |
| `pnpm install:all` | Install all workspace dependencies |

### Client

| Command                     | Description              |
| --------------------------- | ------------------------ |
| `pnpm --dir client dev`     | Start Vite dev server    |
| `pnpm --dir client build`   | Build for production     |
| `pnpm --dir client lint`    | Run ESLint               |
| `pnpm --dir client preview` | Preview production build |

### Server

| Command                   | Description               |
| ------------------------- | ------------------------- |
| `pnpm --dir server dev`   | Start with tsx watch mode |
| `pnpm --dir server build` | Compile TypeScript        |
| `pnpm --dir server start` | Run compiled output       |

---

## 🔌 API Reference

### `GET /api/pokemons`

Returns paginated Pokémon data from the local dataset (151 records).

**Query Parameters**

| Parameter         | Type     | Required | Default | Description                        |
| ----------------- | -------- | -------- | ------- | ---------------------------------- |
| `nameStartedWith` | `string` | No       | —       | Filter by name prefix (1-50 chars) |
| `category`        | `string` | No       | —       | Filter by Pokémon type             |
| `page`            | `number` | No       | `1`     | Page number                        |
| `limit`           | `number` | No       | `12`    | Items per page (max `100`)         |

**Example Request**

```http
GET /api/pokemons?page=1&limit=8&nameStartedWith=pi&category=Electric
```

**Success Response** `200 OK`

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

### Supported Categories

> Fire · Water · Grass · Electric · Psychic · Ice · Dragon · Dark · Fairy · Normal · Fighting · Poison · Ground · Flying · Bug · Rock · Ghost · Steel

---

## ☁️ Deployment

The project ships with a `vercel.json` for one-click [Vercel](https://vercel.com) deployments:

| Component  | Builder                | Details                            |
| ---------- | ---------------------- | ---------------------------------- |
| **Server** | `@vercel/node`         | Express API as serverless function |
| **Client** | `@vercel/static-build` | Static site from `dist/`           |

- `/api/*` routes are rewritten to the server entry point
- All other routes are served from the client build

> [!NOTE]
> See [`vercel_deployment.md`](./documentation/vercel_deployment.md) for detailed deployment instructions.

---

## 📖 Documentation

Additional docs are available in the [`documentation/`](./documentation) folder:

| Document                                                                     | Description                         |
| ---------------------------------------------------------------------------- | ----------------------------------- |
| [`step_by_step_explanation.md`](./documentation/step_by_step_explanation.md) | Detailed implementation walkthrough |
| [`vercel_deployment.md`](./documentation/vercel_deployment.md)               | Vercel deployment guide             |
| [`walkthrough.md`](./documentation/walkthrough.md)                           | Project overview & architecture     |

---

## 📝 Notes

- 🎨 Theme preference is persisted under `theme-mode` in `localStorage`
- 📦 The server exports the Express app for deployment targets that need a handler export
- 🚦 Rate limiter is enabled globally with a **15-minute** window
- 🔧 `client/backup/` contains an alternate ESLint config with Prettier integration

---

## 📄 License

Licensed under the [MIT License](./LICENSE).

---

<div align="center">

**Made with ❤️ and TypeScript**

</div>
