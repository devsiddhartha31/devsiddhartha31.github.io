import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
} from "lucide-react";

import {
  IconBrandGithub,
} from "@tabler/icons-react";

import { Project } from "@/types/project";
import SkillBadge from "@/components/skills/SkillBadge";
import { cn } from "@/libs/utils"

interface Props {
  project: Project;
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

        <h3 className="mt-5 text-2xl font-bold">
          {project.title}
        </h3>

        {/* Description */}

        <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400 line-clamp-3">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <SkillBadge
              key={tech}
              skill={tech}
            />
          ))}

          {project.technologies.length > 4 && (
            <SkillBadge
              skill={`+${project.technologies.length - 4}`}
            />
          )}
        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center gap-4">

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
            >
              <IconBrandGithub
                size={18}
                className="text-zinc-500 transition hover:text-white"
              />
            </Link>
          )}

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
            >
              Live Demo

              <ArrowUpRight size={16} />
            </Link>
          )}

        </div>

      </div>
    </article>
  );
}