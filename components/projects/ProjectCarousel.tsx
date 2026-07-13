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
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const slideCount = projects.length;

  useEffect(() => {
    if (!emblaApi) return;

    const updateCarousel = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
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

      {(slideCount > 3) && (
        <div className="mt-8 flex items-center justify-center gap-4">

          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="rounded-full border border-zinc-700 p-3 transition hover:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {Array.from({ length: slideCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-indigo-400 w-6"
                      : "bg-zinc-600 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="rounded-full border border-zinc-700 p-3 transition hover:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      )}
    </div>
  );
}