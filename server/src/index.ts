import express from "express";
import cors from "cors";
import { limiter } from "./middleware/rateLimiter.js";
import pokemonRoutes from "./routes/pokemons.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(limiter);

// Routes
app.use("/api/pokemons", pokemonRoutes);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Export the app for Vercel Serverless Functions
export default app;

// Start server only when running locally
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}
