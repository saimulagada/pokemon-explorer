import Link from "next/link";
import PokeballIcon from "@/components/PokeballIcon";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-red-700 bg-red-600 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <PokeballIcon className="h-7 w-7 drop-shadow-sm" />
          <span className="text-xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Pokémon Explorer
          </span>
        </Link>
      </div>
    </header>
  );
}
