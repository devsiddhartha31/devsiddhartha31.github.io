"use client";

import useEmblaCarousel from "embla-carousel-react";

import { Project } from "@/types/project";

import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
}

export default function ProjectCarousel({
  projects,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  return (
    <div className="mt-12">

      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">

          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_50%] xl:flex-[0_0_33.333%]"
            >
              <ProjectCard project={project} />
            </div>
          ))}

        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4">

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="rounded-full border border-zinc-700 px-4 py-2 hover:border-indigo-500"
        >
          ←
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="rounded-full border border-zinc-700 px-4 py-2 hover:border-indigo-500"
        >
          →
        </button>

      </div>

    </div>
  );
}