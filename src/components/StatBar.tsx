const MAX_STAT_VALUE = 255;

const statLabels: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

export default function StatBar({ name, value }: { name: string; value: number }) {
  const percentage = Math.min(100, (value / MAX_STAT_VALUE) * 100);

  return (
    <div className="flex items-center gap-3">
      <span className="w-20 shrink-0 text-xs font-semibold uppercase text-slate-500">
        {statLabels[name] ?? name}
      </span>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-red-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-8 shrink-0 text-right text-xs font-semibold text-slate-700">
        {value}
      </span>
    </div>
  );
}
