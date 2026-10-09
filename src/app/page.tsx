import { getPokemonList } from "@/lib/pokeapi";
import PokemonExplorer from "@/components/PokemonExplorer";

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Gotta Explore &apos;Em All
        </h1>
        <p className="mt-2 text-slate-500">
          Browse the original 151 Pokémon and discover their stats, types, and moves.
        </p>
      </div>
      <PokemonExplorer pokemonList={pokemonList} />
    </main>
  );
}
