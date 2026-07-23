import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Project } from "@/types/project";

import Button from "@/components/ui/Button";
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

  return (
    <div className="mt-12">

      <div className="min-w-14 text-center text-sm font-medium tabular-nums text-zinc-400">
        {projects.length} {(projects.length > 1) ? "Projects" : "Project"}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">

        <Button
          variant="ghost"
          size="icon"
          onClick={() => emblaApi?.scrollPrev()}
          className="rounded-full border border-zinc-700 text-zinc-400 hover:border-indigo-500"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

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
                    ? "mx-auto max-w-md flex-[0_0_100%] md:px-3"
                    : "min-w-0 flex-[0_0_100%] md:px-3 md:flex-[0_0_50%] xl:flex-[0_0_33.333%]"
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

        <Button
          variant="ghost"
          size="icon"
          onClick={() => emblaApi?.scrollNext()}
          className="rounded-full border border-zinc-700 text-zinc-400 hover:border-indigo-500"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

      </div>
    </div>
  );
}