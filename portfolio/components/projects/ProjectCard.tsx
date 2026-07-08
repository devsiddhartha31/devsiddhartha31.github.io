import Image from "next/image";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:border-indigo-500/40">

      <div className="relative aspect-video bg-zinc-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">

        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-400">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </article>
  );
}