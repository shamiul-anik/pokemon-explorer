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

export const pokemons: Pokemon[] = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "category": "Grass"
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    "category": "Grass"
  },
  {
    "id": 3,
    "name": "Venusaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    "category": "Grass"
  },
  {
    "id": 4,
    "name": "Charmander",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "category": "Fire"
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    "category": "Fire"
  },
  {
    "id": 6,
    "name": "Charizard",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    "category": "Fire"
  },
  {
    "id": 7,
    "name": "Squirtle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    "category": "Water"
  },
  {
    "id": 8,
    "name": "Wartortle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    "category": "Water"
  },
  {
    "id": 9,
    "name": "Blastoise",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    "category": "Water"
  },
  {
    "id": 10,
    "name": "Caterpie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    "category": "Bug"
  },
  {
    "id": 11,
    "name": "Metapod",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    "category": "Bug"
  },
  {
    "id": 12,
    "name": "Butterfree",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    "category": "Bug"
  },
  {
    "id": 13,
    "name": "Weedle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    "category": "Bug"
  },
  {
    "id": 14,
    "name": "Kakuna",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    "category": "Bug"
  },
  {
    "id": 15,
    "name": "Beedrill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    "category": "Bug"
  },
  {
    "id": 16,
    "name": "Pidgey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    "category": "Normal"
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "category": "Normal"
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    "category": "Normal"
  },
  {
    "id": 19,
    "name": "Rattata",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    "category": "Normal"
  },
  {
    "id": 20,
    "name": "Raticate",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    "category": "Normal"
  },
  {
    "id": 21,
    "name": "Spearow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    "category": "Normal"
  },
  {
    "id": 22,
    "name": "Fearow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    "category": "Normal"
  },
  {
    "id": 23,
    "name": "Ekans",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    "category": "Poison"
  },
  {
    "id": 24,
    "name": "Arbok",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "category": "Poison"
  },
  {
    "id": 25,
    "name": "Pikachu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "category": "Electric"
  },
  {
    "id": 26,
    "name": "Raichu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    "category": "Electric"
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    "category": "Ground"
  },
  {
    "id": 28,
    "name": "Sandslash",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    "category": "Ground"
  },
  {
    "id": 29,
    "name": "Nidoran-f",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    "category": "Poison"
  },
  {
    "id": 30,
    "name": "Nidorina",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    "category": "Poison"
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    "category": "Poison"
  },
  {
    "id": 32,
    "name": "Nidoran-m",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    "category": "Poison"
  },
  {
    "id": 33,
    "name": "Nidorino",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    "category": "Poison"
  },
  {
    "id": 34,
    "name": "Nidoking",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    "category": "Poison"
  },
  {
    "id": 35,
    "name": "Clefairy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    "category": "Fairy"
  },
  {
    "id": 36,
    "name": "Clefable",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    "category": "Fairy"
  },
  {
    "id": 37,
    "name": "Vulpix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    "category": "Fire"
  },
  {
    "id": 38,
    "name": "Ninetales",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    "category": "Fire"
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    "category": "Normal"
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    "category": "Normal"
  },
  {
    "id": 41,
    "name": "Zubat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    "category": "Poison"
  },
  {
    "id": 42,
    "name": "Golbat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    "category": "Poison"
  },
  {
    "id": 43,
    "name": "Oddish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    "category": "Grass"
  },
  {
    "id": 44,
    "name": "Gloom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    "category": "Grass"
  },
  {
    "id": 45,
    "name": "Vileplume",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    "category": "Grass"
  },
  {
    "id": 46,
    "name": "Paras",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    "category": "Bug"
  },
  {
    "id": 47,
    "name": "Parasect",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    "category": "Bug"
  },
  {
    "id": 48,
    "name": "Venonat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    "category": "Bug"
  },
  {
    "id": 49,
    "name": "Venomoth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    "category": "Bug"
  },
  {
    "id": 50,
    "name": "Diglett",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    "category": "Ground"
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    "category": "Ground"
  },
  {
    "id": 52,
    "name": "Meowth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    "category": "Normal"
  },
  {
    "id": 53,
    "name": "Persian",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    "category": "Normal"
  },
  {
    "id": 54,
    "name": "Psyduck",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    "category": "Water"
  },
  {
    "id": 55,
    "name": "Golduck",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    "category": "Water"
  },
  {
    "id": 56,
    "name": "Mankey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    "category": "Fighting"
  },
  {
    "id": 57,
    "name": "Primeape",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    "category": "Fighting"
  },
  {
    "id": 58,
    "name": "Growlithe",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    "category": "Fire"
  },
  {
    "id": 59,
    "name": "Arcanine",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    "category": "Fire"
  },
  {
    "id": 60,
    "name": "Poliwag",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    "category": "Water"
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    "category": "Water"
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    "category": "Water"
  },
  {
    "id": 63,
    "name": "Abra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    "category": "Psychic"
  },
  {
    "id": 64,
    "name": "Kadabra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    "category": "Psychic"
  },
  {
    "id": 65,
    "name": "Alakazam",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    "category": "Psychic"
  },
  {
    "id": 66,
    "name": "Machop",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    "category": "Fighting"
  },
  {
    "id": 67,
    "name": "Machoke",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    "category": "Fighting"
  },
  {
    "id": 68,
    "name": "Machamp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    "category": "Fighting"
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    "category": "Grass"
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    "category": "Grass"
  },
  {
    "id": 71,
    "name": "Victreebel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    "category": "Grass"
  },
  {
    "id": 72,
    "name": "Tentacool",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    "category": "Water"
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    "category": "Water"
  },
  {
    "id": 74,
    "name": "Geodude",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    "category": "Rock"
  },
  {
    "id": 75,
    "name": "Graveler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    "category": "Rock"
  },
  {
    "id": 76,
    "name": "Golem",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    "category": "Rock"
  },
  {
    "id": 77,
    "name": "Ponyta",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    "category": "Fire"
  },
  {
    "id": 78,
    "name": "Rapidash",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    "category": "Fire"
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    "category": "Water"
  },
  {
    "id": 80,
    "name": "Slowbro",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    "category": "Water"
  },
  {
    "id": 81,
    "name": "Magnemite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    "category": "Electric"
  },
  {
    "id": 82,
    "name": "Magneton",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    "category": "Electric"
  },
  {
    "id": 83,
    "name": "Farfetchd",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    "category": "Normal"
  },
  {
    "id": 84,
    "name": "Doduo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    "category": "Normal"
  },
  {
    "id": 85,
    "name": "Dodrio",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    "category": "Normal"
  },
  {
    "id": 86,
    "name": "Seel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    "category": "Water"
  },
  {
    "id": 87,
    "name": "Dewgong",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    "category": "Water"
  },
  {
    "id": 88,
    "name": "Grimer",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    "category": "Poison"
  },
  {
    "id": 89,
    "name": "Muk",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    "category": "Poison"
  },
  {
    "id": 90,
    "name": "Shellder",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    "category": "Water"
  },
  {
    "id": 91,
    "name": "Cloyster",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    "category": "Water"
  },
  {
    "id": 92,
    "name": "Gastly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    "category": "Ghost"
  },
  {
    "id": 93,
    "name": "Haunter",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    "category": "Ghost"
  },
  {
    "id": 94,
    "name": "Gengar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    "category": "Ghost"
  },
  {
    "id": 95,
    "name": "Onix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    "category": "Rock"
  },
  {
    "id": 96,
    "name": "Drowzee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    "category": "Psychic"
  },
  {
    "id": 97,
    "name": "Hypno",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    "category": "Psychic"
  },
  {
    "id": 98,
    "name": "Krabby",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    "category": "Water"
  },
  {
    "id": 99,
    "name": "Kingler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    "category": "Water"
  },
  {
    "id": 100,
    "name": "Voltorb",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    "category": "Electric"
  },
  {
    "id": 101,
    "name": "Electrode",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    "category": "Electric"
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    "category": "Grass"
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
    "category": "Grass"
  },
  {
    "id": 104,
    "name": "Cubone",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    "category": "Ground"
  },
  {
    "id": 105,
    "name": "Marowak",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    "category": "Ground"
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
    "category": "Fighting"
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
    "category": "Fighting"
  },
  {
    "id": 108,
    "name": "Lickitung",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    "category": "Normal"
  },
  {
    "id": 109,
    "name": "Koffing",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    "category": "Poison"
  },
  {
    "id": 110,
    "name": "Weezing",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
    "category": "Poison"
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    "category": "Ground"
  },
  {
    "id": 112,
    "name": "Rhydon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
    "category": "Ground"
  },
  {
    "id": 113,
    "name": "Chansey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    "category": "Normal"
  },
  {
    "id": 114,
    "name": "Tangela",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
    "category": "Grass"
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    "category": "Normal"
  },
  {
    "id": 116,
    "name": "Horsea",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    "category": "Water"
  },
  {
    "id": 117,
    "name": "Seadra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    "category": "Water"
  },
  {
    "id": 118,
    "name": "Goldeen",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    "category": "Water"
  },
  {
    "id": 119,
    "name": "Seaking",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    "category": "Water"
  },
  {
    "id": 120,
    "name": "Staryu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    "category": "Water"
  },
  {
    "id": 121,
    "name": "Starmie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    "category": "Water"
  },
  {
    "id": 122,
    "name": "Mr-mime",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    "category": "Psychic"
  },
  {
    "id": 123,
    "name": "Scyther",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
    "category": "Bug"
  },
  {
    "id": 124,
    "name": "Jynx",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    "category": "Ice"
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    "category": "Electric"
  },
  {
    "id": 126,
    "name": "Magmar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
    "category": "Fire"
  },
  {
    "id": 127,
    "name": "Pinsir",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    "category": "Bug"
  },
  {
    "id": 128,
    "name": "Tauros",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    "category": "Normal"
  },
  {
    "id": 129,
    "name": "Magikarp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    "category": "Water"
  },
  {
    "id": 130,
    "name": "Gyarados",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    "category": "Water"
  },
  {
    "id": 131,
    "name": "Lapras",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    "category": "Water"
  },
  {
    "id": 132,
    "name": "Ditto",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    "category": "Normal"
  },
  {
    "id": 133,
    "name": "Eevee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    "category": "Normal"
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    "category": "Water"
  },
  {
    "id": 135,
    "name": "Jolteon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    "category": "Electric"
  },
  {
    "id": 136,
    "name": "Flareon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    "category": "Fire"
  },
  {
    "id": 137,
    "name": "Porygon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    "category": "Normal"
  },
  {
    "id": 138,
    "name": "Omanyte",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    "category": "Rock"
  },
  {
    "id": 139,
    "name": "Omastar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
    "category": "Rock"
  },
  {
    "id": 140,
    "name": "Kabuto",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    "category": "Rock"
  },
  {
    "id": 141,
    "name": "Kabutops",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    "category": "Rock"
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    "category": "Rock"
  },
  {
    "id": 143,
    "name": "Snorlax",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    "category": "Normal"
  },
  {
    "id": 144,
    "name": "Articuno",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    "category": "Ice"
  },
  {
    "id": 145,
    "name": "Zapdos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    "category": "Electric"
  },
  {
    "id": 146,
    "name": "Moltres",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    "category": "Fire"
  },
  {
    "id": 147,
    "name": "Dratini",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    "category": "Dragon"
  },
  {
    "id": 148,
    "name": "Dragonair",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    "category": "Dragon"
  },
  {
    "id": 149,
    "name": "Dragonite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    "category": "Dragon"
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    "category": "Psychic"
  },
  {
    "id": 151,
    "name": "Mew",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    "category": "Psychic"
  }
];
