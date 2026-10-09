import Image from "next/image";
import Link from "next/link";
import { PokemonListItem } from "@/types/pokemon";

export default function PokemonCard({ pokemon }: { pokemon: PokemonListItem }) {
  return (
    <Link
      href={`/pokemon/${pokemon.id}`}
      className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg"
    >
      <span className="self-start text-xs font-semibold text-slate-400">
        #{String(pokemon.id).padStart(3, "0")}
      </span>
      <div className="relative h-28 w-28">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          fill
          sizes="112px"
          className="object-contain transition group-hover:scale-110"
        />
      </div>
      <p className="mt-2 text-center text-sm font-semibold capitalize text-slate-800">
        {pokemon.name}
      </p>
    </Link>
  );
}
