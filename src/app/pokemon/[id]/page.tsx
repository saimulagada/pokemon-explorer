import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPokemonDetail, getPokemonList } from "@/lib/pokeapi";
import TypeBadge from "@/components/TypeBadge";
import StatBar from "@/components/StatBar";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const pokemonList = await getPokemonList();
  return pokemonList.map((pokemon) => ({ id: String(pokemon.id) }));
}

export default async function PokemonDetailPage({ params }: PageProps) {
  const { id } = await params;
  const pokemon = await getPokemonDetail(id).catch(() => null);

  if (!pokemon) {
    notFound();
  }

  const heightInMeters = pokemon.height / 10;
  const weightInKg = pokemon.weight / 10;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700"
      >
        ← Back to all Pokémon
      </Link>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
        <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-red-50 to-white px-6 py-10 sm:flex-row sm:justify-between">
          <div className="order-2 text-center sm:order-1 sm:text-left">
            <span className="text-sm font-semibold text-slate-400">
              #{String(pokemon.id).padStart(3, "0")}
            </span>
            <h1 className="text-4xl font-extrabold capitalize text-slate-900">
              {pokemon.name}
            </h1>
            <div className="mt-3 flex justify-center gap-2 sm:justify-start">
              {pokemon.types.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
            </div>
          </div>
          <div className="relative order-1 h-48 w-48 shrink-0 sm:order-2">
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              fill
              sizes="192px"
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>

        <div className="grid gap-8 px-6 py-8 sm:grid-cols-2">
          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900">About</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <dt className="text-slate-500">Height</dt>
                <dd className="font-semibold text-slate-800">{heightInMeters} m</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <dt className="text-slate-500">Weight</dt>
                <dd className="font-semibold text-slate-800">{weightInKg} kg</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <dt className="text-slate-500">Abilities</dt>
                <dd className="text-right font-semibold capitalize text-slate-800">
                  {pokemon.abilities.join(", ")}
                </dd>
              </div>
            </dl>

            <h2 className="mb-3 mt-6 text-lg font-bold text-slate-900">Base Stats</h2>
            <div className="space-y-2">
              {pokemon.stats.map((stat) => (
                <StatBar key={stat.name} name={stat.name} value={stat.value} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900">
              Moves ({pokemon.moves.length})
            </h2>
            <div className="flex max-h-96 flex-wrap gap-2 overflow-y-auto pr-1">
              {pokemon.moves.map((move) => (
                <span
                  key={move}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-700"
                >
                  {move.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
