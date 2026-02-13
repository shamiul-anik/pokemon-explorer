import api from "./axios";
import {
  PokemonResponseSchema,
  type PokemonFilters,
  type PokemonResponse,
} from "../types/pokemon";

export async function fetchPokemons(
  filters?: PokemonFilters,
): Promise<PokemonResponse> {
  const params = new URLSearchParams();

  if (filters?.nameStartedWith) {
    params.set("nameStartedWith", filters.nameStartedWith);
  }
  if (filters?.category) {
    params.set("category", filters.category);
  }

  const { data } = await api.get<PokemonResponse>("/pokemons", { params });

  // Validate response with Zod
  const validated = PokemonResponseSchema.parse(data);
  return validated;
}
