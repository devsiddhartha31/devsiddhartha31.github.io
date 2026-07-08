import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>

        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of software, AI, and mobile applications I've built."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
        </div>

      </Container>
    </Section>
  );
}