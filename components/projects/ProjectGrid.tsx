import { Project } from "@/types/project";

import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
}

export default function ProjectGrid({
  projects,
}: Props) {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}

    </div>
  );
}