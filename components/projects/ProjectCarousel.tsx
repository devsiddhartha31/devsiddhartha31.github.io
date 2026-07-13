"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

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

      {(canScrollPrev || canScrollNext) && (
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="rounded-full border border-zinc-700 p-3 transition hover:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="rounded-full border border-zinc-700 p-3 transition hover:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}