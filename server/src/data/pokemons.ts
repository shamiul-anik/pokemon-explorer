export interface Pokemon {
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

const spriteBase =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export const pokemons: Pokemon[] = [
  { id: 1, name: "Bulbasaur", image: `${spriteBase}/1.png`, category: "Grass" },
  { id: 4, name: "Charmander", image: `${spriteBase}/4.png`, category: "Fire" },
  { id: 5, name: "Charmeleon", image: `${spriteBase}/5.png`, category: "Fire" },
  { id: 6, name: "Charizard", image: `${spriteBase}/6.png`, category: "Fire" },
  { id: 7, name: "Squirtle", image: `${spriteBase}/7.png`, category: "Water" },
  { id: 9, name: "Blastoise", image: `${spriteBase}/9.png`, category: "Water" },
  {
    id: 25,
    name: "Pikachu",
    image: `${spriteBase}/25.png`,
    category: "Electric",
  },
  {
    id: 26,
    name: "Raichu",
    image: `${spriteBase}/26.png`,
    category: "Electric",
  },
  {
    id: 39,
    name: "Jigglypuff",
    image: `${spriteBase}/39.png`,
    category: "Fairy",
  },
  { id: 54, name: "Psyduck", image: `${spriteBase}/54.png`, category: "Water" },
  { id: 94, name: "Gengar", image: `${spriteBase}/94.png`, category: "Ghost" },
  { id: 131, name: "Lapras", image: `${spriteBase}/131.png`, category: "Ice" },
  {
    id: 133,
    name: "Eevee",
    image: `${spriteBase}/133.png`,
    category: "Normal",
  },
  {
    id: 143,
    name: "Snorlax",
    image: `${spriteBase}/143.png`,
    category: "Normal",
  },
  {
    id: 150,
    name: "Mewtwo",
    image: `${spriteBase}/150.png`,
    category: "Psychic",
  },
  { id: 151, name: "Mew", image: `${spriteBase}/151.png`, category: "Psychic" },
  {
    id: 249,
    name: "Lugia",
    image: `${spriteBase}/249.png`,
    category: "Psychic",
  },
  {
    id: 384,
    name: "Rayquaza",
    image: `${spriteBase}/384.png`,
    category: "Dragon",
  },
  {
    id: 448,
    name: "Lucario",
    image: `${spriteBase}/448.png`,
    category: "Fighting",
  },
  {
    id: 658,
    name: "Greninja",
    image: `${spriteBase}/658.png`,
    category: "Water",
  },
];
