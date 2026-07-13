import { projects } from "@/data/projects";

const filters = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

export default function ProjectFilters() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-3">

      {filters.map((filter) => (
        <button
          key={filter}
          className="
            rounded-full
            border
            border-zinc-800
            bg-zinc-900/60
            px-5
            py-2
            text-sm
            font-medium
            text-zinc-400
            transition-all
            duration-300
            hover:border-indigo-500/40
            hover:text-white
          "
        >
          {filter}
        </button>
      ))}

    </div>
  );
}