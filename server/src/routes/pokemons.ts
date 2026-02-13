import { Router } from "express";
import { pokemons } from "../data/pokemons.js";
import {
  pokemonQuerySchema,
  type PokemonQuery,
} from "../schemas/query.schema.js";
import { validateQuery } from "../middleware/validate.js";

const router = Router();

router.get("/", validateQuery(pokemonQuerySchema), (req, res) => {
  const { nameStartedWith, category, page, limit } = res.locals
    .validatedQuery as PokemonQuery;

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

  const total = filtered.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const data = filtered.slice(startIndex, endIndex);

  res.json({
    success: true,
    data,
    total,
    page,
    limit,
    nextPage: endIndex < total ? page + 1 : null,
  });
});

export default router;
