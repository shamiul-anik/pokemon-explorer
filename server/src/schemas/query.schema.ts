import { z } from "zod";
import { CATEGORIES } from "../data/pokemons.js";

export const pokemonQuerySchema = z.object({
  nameStartedWith: z
    .string()
    .min(1, "nameStartedWith must be at least 1 character")
    .max(50, "nameStartedWith must be at most 50 characters")
    .optional(),
  category: z
    .enum(CATEGORIES, {
      errorMap: () => ({
        message: `category must be one of: ${CATEGORIES.join(", ")}`,
      }),
    })
    .optional(),
});

export type PokemonQuery = z.infer<typeof pokemonQuerySchema>;
