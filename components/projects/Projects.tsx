"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/projects";

import ProjectCarousel from "./ProjectCarousel";
import ProjectFilters from "./ProjectFilters";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(
    () => [
      "All",
      ...new Set(
        projects
          .filter((project) => project.featured)
          .map((project) => project.category)
      ),
    ],
    []
  );

  const filteredProjects =
    activeFilter === "All"
      ? projects.filter((project) => project.featured)
      : projects.filter(
          (project) =>
            project.featured &&
            project.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <Section id="projects">
      <Container>

        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects across AI, web, Android, desktop applications, libraries, and game development."
        />

        <ProjectFilters
          filters={filters}
          active={activeFilter}
          onChange={setActiveFilter}
        />

        <ProjectCarousel
          projects={filteredProjects}
        />

      </Container>
    </Section>
  );
}