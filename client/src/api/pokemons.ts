import api from "./axios";
import {
  PokemonResponseSchema,
  type PokemonFilters,
  type PokemonResponse,
} from "../types/pokemon";

export async function fetchPokemons(
  filters?: PokemonFilters,
  pageParam = 1,
): Promise<PokemonResponse> {
  const params = new URLSearchParams();

  params.set("page", String(pageParam));
  params.set("limit", "12");

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
