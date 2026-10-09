"use client";

import { useMemo, useState } from "react";
import { PokemonListItem } from "@/types/pokemon";
import SearchBar from "@/components/SearchBar";
import PokemonCard from "@/components/PokemonCard";

export default function PokemonExplorer({
  pokemonList,
}: {
  pokemonList: PokemonListItem[];
}) {
  const [query, setQuery] = useState("");

  const filteredList = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return pokemonList;
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(normalizedQuery)
    );
  }, [pokemonList, query]);

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />

      {filteredList.length === 0 ? (
        <p className="mt-16 text-center text-slate-500">
          No Pokémon found for &quot;{query}&quot;.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}
