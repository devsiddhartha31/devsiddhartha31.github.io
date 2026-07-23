import Image from "next/image";
import {
  ArrowUpRight,
} from "lucide-react";

import { Project } from "@/types/project";
import { cn } from "@/libs/utils"

interface Props {
  project: Project;
  openProject: (project: Project) => void;
}

const statusColors = {
  research: "bg-violet-500/10 text-violet-400",
  enterprise: "bg-sky-500/10 text-sky-400",
  production: "bg-green-500/10 text-green-400",
  personal: "bg-zinc-700/30 text-zinc-300",
  opensource: "bg-orange-500/10 text-orange-400",
  ongoing: "bg-amber-500/10 text-amber-400",
};

const categoryColors = {
  ai: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  web: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
  android: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  desktop: "bg-slate-500/10 text-slate-300 border border-slate-500/20",
  game: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
  library: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
};

export default function ProjectCard({
  project, openProject
}: Props) {
  const isPreviewAvailable = !!project.preview;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/60 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10",
        isPreviewAvailable
          ? "cursor-pointer hover:-translate-y-2"
          : "cursor-default"
      )}
      onClick={() => isPreviewAvailable && openProject(project)}
    >
      {/* Image */}

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition duration-500",
            isPreviewAvailable
              ? "cursor-pointer group-hover:scale-110"
              : "cursor-default"
          )}
        />
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">

        {/* Status */}

        <div className="flex items-center gap-6">

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
              statusColors[project.status]
            }`}
          >
            {project.status}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
              categoryColors[project.category]
            }`}
          >
            {project.category}
          </span>

        </div>

        {/* Title */}

        <h3 className="mt-5 text-xl md:text-2xl font-bold">
          {project.title}
        </h3>

        {/* Description */}

        <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400 line-clamp-4">
          {project.description}
        </p>

      </div>

      <div className="border-t border-white/10 p-4 text-center text-sm font-medium text-zinc-400 transition-colors hover:text-white">
        <div className="flex items-center justify-center gap-2">
          <span>
            View Details
          </span>

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </article>
  );
}