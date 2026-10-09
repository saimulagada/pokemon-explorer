import Link from "next/link";

export default function PokemonNotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-3xl font-extrabold text-slate-900">Pokémon not found</h1>
      <p className="mt-2 text-slate-500">
        We couldn&apos;t find a Pokémon with that ID.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
      >
        Back to all Pokémon
      </Link>
    </main>
  );
}
