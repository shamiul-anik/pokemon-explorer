import fs from "fs";
import path from "path";

const POKEAPI_BASE = "https://pokeapi.co/api/v2";
const LIMIT = 151; // Fetching original 151 Gen 1 Pokémon

interface Pokemon {
  id: number;
  name: string;
  image: string;
  category: string;
}

const CATEGORIES = [
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

async function fetchPokemonDetails(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  const types = data.types.map((t: any) => t.type.name);
  // Pick the first type and capitalize it to match our CATEGORIES
  const primaryType = types[0].charAt(0).toUpperCase() + types[0].slice(1);
  return primaryType;
}

async function main() {
  console.log(`Fetching first ${LIMIT} Pokémon...`);

  try {
    const res = await fetch(`${POKEAPI_BASE}/pokemon?limit=${LIMIT}`);
    const data = await res.json();
    const results = data.results;

    const pokemons: Pokemon[] = [];

    // Fetch details for each pokemon in parallel batches to be polite but fast
    const batchSize = 10;
    for (let i = 0; i < results.length; i += batchSize) {
      const batch = results.slice(i, i + batchSize);
      const promises = batch.map(async (p: any) => {
        const id = parseInt(p.url.split("/").filter(Boolean).pop()!);
        const category = await fetchPokemonDetails(p.url);

        // Use official artwork
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        // Capitalize name
        const name = p.name.charAt(0).toUpperCase() + p.name.slice(1);

        return { id, name, image, category };
      });

      const batchResults = await Promise.all(promises);
      pokemons.push(...batchResults);
      console.log(`Fetched ${Math.min(i + batchSize, LIMIT)}/${LIMIT}`);
    }

    // Sort by ID
    pokemons.sort((a, b) => a.id - b.id);

    // Generate file content
    const fileContent = `export interface Pokemon {
  id: number;
  name: string;
  image: string;
  category: string;
}

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

export type Category = (typeof CATEGORIES)[number];

export const pokemons: Pokemon[] = ${JSON.stringify(pokemons, null, 2)};
`;

    const outputPath = path.join(process.cwd(), "src/data/pokemons.ts");
    fs.writeFileSync(outputPath, fileContent);
    console.log(
      `Successfully wrote ${pokemons.length} Pokémon to ${outputPath}`,
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    process.exit(1);
  }
}

main();
