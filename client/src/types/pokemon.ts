import { z } from "zod";

// Zod schemas for API response validation
export const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string().url(),
  category: z.string(),
});

export const PokemonResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(PokemonSchema),
  total: z.number(),
  nextPage: z.number().nullable(),
});

// TypeScript types inferred from Zod
export type Pokemon = z.infer<typeof PokemonSchema>;
export type PokemonResponse = z.infer<typeof PokemonResponseSchema>;

// Filter types
export interface PokemonFilters {
  nameStartedWith?: string;
  category?: string;
}

// Available categories for the filter dropdown
export const CATEGORIES = [
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy",
  "Normal",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Bug",
  "Rock",
  "Ghost",
  "Steel",
] as const;
