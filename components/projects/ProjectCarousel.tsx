"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Project } from "@/types/project";

import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
  openProject: (project: Project) => void;
}

export default function ProjectCarousel({
  projects, openProject
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const [currentSlideIndex, setCurrentSlide] = useState(0);
  const slideCount = projects.length;

  useEffect(() => {
    if (!emblaApi) return;

    const updateCarousel = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap())
    };

    updateCarousel();

    emblaApi.on("select", updateCarousel);
    emblaApi.on("reInit", updateCarousel);

    return () => {
      emblaApi.off("select", updateCarousel);
      emblaApi.off("reInit", updateCarousel);
    };
  }, [emblaApi]);

  return (
    <div className="mt-12">

      <div className="min-w-14 text-center text-sm font-medium tabular-nums text-zinc-400">
        {slideCount} {(slideCount > 1) ? "Projects" : "Project"}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="rounded-full border border-zinc-700 p-3 text-zinc-400 transition-all hover:border-indigo-500 hover:text-white"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {projects.map((project) => (
              <div
                key={project.id}
                className={
                  projects.length === 1
                    ? "mx-auto max-w-md flex-[0_0_100%] px-3"
                    : "min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_50%] xl:flex-[0_0_33.333%]"
                }
              >
                <ProjectCard
                  project={project}
                  openProject={openProject}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="rounded-full border border-zinc-700 p-3 text-zinc-400 transition-all hover:border-indigo-500 hover:text-white"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
}