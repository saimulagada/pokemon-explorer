import { PokemonDetail, PokemonListItem } from "@/types/pokemon";

const API_BASE = "https://pokeapi.co/api/v2";
const POKEMON_LIMIT = 151;
const REVALIDATE_SECONDS = 60 * 60 * 24;

interface ApiPokemonListResult {
  name: string;
  url: string;
}

interface ApiPokemonListResponse {
  results: ApiPokemonListResult[];
}

interface ApiPokemonDetailResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
    other?: {
      "official-artwork"?: {
        front_default: string | null;
      };
    };
  };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  moves: { move: { name: string } }[];
}

function getIdFromUrl(url: string): number {
  const segments = url.split("/").filter(Boolean);
  return Number(segments[segments.length - 1]);
}

export function getPokemonImage(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export async function getPokemonList(): Promise<PokemonListItem[]> {
  const res = await fetch(`${API_BASE}/pokemon?limit=${POKEMON_LIMIT}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Pokemon list");
  }

  const data: ApiPokemonListResponse = await res.json();

  return data.results.map((pokemon) => {
    const id = getIdFromUrl(pokemon.url);
    return {
      id,
      name: pokemon.name,
      image: getPokemonImage(id),
    };
  });
}

export async function getPokemonDetail(
  idOrName: string
): Promise<PokemonDetail> {
  const res = await fetch(`${API_BASE}/pokemon/${idOrName}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Pokemon detail");
  }

  const data: ApiPokemonDetailResponse = await res.json();

  return {
    id: data.id,
    name: data.name,
    image:
      data.sprites.other?.["official-artwork"]?.front_default ??
      data.sprites.front_default ??
      getPokemonImage(data.id),
    height: data.height,
    weight: data.weight,
    types: data.types.map((t) => t.type.name),
    abilities: data.abilities.map((a) => a.ability.name),
    stats: data.stats.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    moves: data.moves.map((m) => m.move.name),
  };
}
