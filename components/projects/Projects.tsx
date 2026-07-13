import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/projects";

import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>

        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects across AI, enterprise software, Android, desktop applications, libraries, and game development."
        />

        <ProjectFilters />

        <ProjectGrid
          projects={projects.filter((project) => project.featured)}
        />

      </Container>
    </Section>
  );
}