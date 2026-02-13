import { Router } from "express";
import { pokemons } from "../data/pokemons.js";
import { pokemonQuerySchema } from "../schemas/query.schema.js";
import { validateQuery } from "../middleware/validate.js";

const router = Router();

router.get("/", validateQuery(pokemonQuerySchema), (req, res) => {
  const { nameStartedWith, category } = res.locals.validatedQuery as {
    nameStartedWith?: string;
    category?: string;
  };

  let filtered = [...pokemons];

  if (nameStartedWith) {
    const prefix = nameStartedWith.toLowerCase();
    filtered = filtered.filter((p) => p.name.toLowerCase().startsWith(prefix));
  }

  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase(),
    );
  }

  res.json({
    success: true,
    data: filtered,
    total: filtered.length,
  });
});

export default router;
