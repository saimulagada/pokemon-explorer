import { getTypeColor } from "@/lib/pokemonTypeColors";

export default function TypeBadge({ type }: { type: string }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-semibold capitalize text-white shadow-sm"
      style={{ backgroundColor: getTypeColor(type) }}
    >
      {type}
    </span>
  );
}
