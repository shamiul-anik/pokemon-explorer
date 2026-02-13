# Vercel Deployment Guide

This guide explains how to host your Pokémon Explorer project on Vercel. Because the project uses a monorepo structure (separate `server` and `client` folders), we use a `vercel.json` file at the root to orchestrate everything.

---

## 1. Preparation Check

I have already made the following changes to prepare the project:

- **`server/src/index.ts`**: Modified to export the `app` and only listen on a port when NOT in production. This allows Vercel to treat it as a Serverless Function.
- **`vercel.json`**: Created at the root to handle routing (sending `/api` requests to the server and others to the frontend).

---

## 2. Deployment Steps

### Step 1: Push to GitHub

If you haven't already, push your code to a GitHub repository.

### Step 2: Connect to Vercel

1.  Go to the [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your GitHub repository.

### Step 3: Configure Project

Vercel will detect the project. Here are the specific settings you need:

- **Project Name:** `pokemon-explorer` (or your choice).
- **Framework Preset:** Select **"Other"** (Since we are using `vercel.json` to define builds).
- **Root Directory:** Keep it as **`.`** (The absolute root of the repo).
- **Build & Output Settings:**
  - Vercel will use the `builds` defined in `vercel.json`, so you don't need to change these in the UI.

### Step 4: Deploy

Click **"Deploy"**. Vercel will:

1.  Build your React frontend.
2.  Compile your Express server into a Serverless Function.
3.  Map everything according to `vercel.json`.

---

## 3. How the Routing Works

Thanks to the `vercel.json` configuration:

- Calls to `your-site.com/api/pokemons` will be handled by your **Express Server**.
- Calls to `your-site.com/` will serve your **React App**.
- Refresh logic is handled (Deep links like `your-site.com/pokedex` will correctly route to the React app).

---

## 4. Troubleshooting

- **CORS Issues:** The server is already configured to allow CORS, but Vercel's internal routing usually bypasses this since the API and Frontend are on the same domain.
- **Build Errors:** Ensure you have run `npm install` in the root and both subfolders before pushing, or let Vercel handle it (it will install dependencies automatically).

---

**@Shamiul 2026**
