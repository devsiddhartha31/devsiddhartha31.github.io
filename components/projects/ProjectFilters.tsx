"use client";

interface Props {
  filters: string[];
  active: string;
  onChange: (filter: string) => void;
}

export default function ProjectFilters({
  filters,
  active,
  onChange,
}: Props) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`
            rounded-full
            px-5
            py-2
            text-sm
            font-medium
            transition-all
            duration-300
            ${
              active === filter
                ? "bg-indigo-500 text-white"
                : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-indigo-500/40 hover:text-white"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}