import Image from "next/image";

import {
  ArrowUpRight
} from "lucide-react";

import {
  IconBrandGithub
} from "@tabler/icons-react";

import { Project } from "@/types/project";

import SkillBadge from "@/components/skills/SkillBadge";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/60
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-500/40
      "
    >

      {/* Image */}

      <div className="relative aspect-video overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex items-center justify-between">

          <span
            className="
              rounded-full
              bg-indigo-500/10
              px-3
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-indigo-400
            "
          >
            {project.status}
          </span>

          <div className="flex gap-3">

            {project.github && (
              <Github
                size={18}
                className="cursor-pointer text-zinc-500 transition hover:text-white"
              />
            )}

            {project.demo && (
              <ArrowUpRight
                size={18}
                className="cursor-pointer text-zinc-500 transition hover:text-white"
              />
            )}

          </div>

        </div>

        <h3 className="mt-5 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <SkillBadge
              key={tech}
              skill={tech}
            />
          ))}

        </div>

      </div>

    </article>
  );
}