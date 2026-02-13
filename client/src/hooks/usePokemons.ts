import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from "../api/pokemons";
import { useFilterStore } from "../store/filterStore";
import type { PokemonFilters } from "../types/pokemon";

export function usePokemons() {
  const nameStartedWith = useFilterStore((s) => s.nameStartedWith);
  const category = useFilterStore((s) => s.category);

  const filters: PokemonFilters = {};
  if (nameStartedWith.trim()) filters.nameStartedWith = nameStartedWith.trim();
  if (category) filters.category = category;

  return useQuery({
    queryKey: ["pokemons", filters],
    queryFn: () => fetchPokemons(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes garbage collection
    retry: 2,
    refetchOnWindowFocus: false,
  });
}
