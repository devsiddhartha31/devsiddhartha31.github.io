"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/projects";

import ProjectCarousel from "./ProjectCarousel";
import ProjectFilters from "./ProjectFilters";

export default function Projects() {
  const [activeStatusFilter, setActiveStatusFilter] = useState("All");

  const featuredProjects = projects.filter((project) => project.featured);

  const statusFilters = useMemo(
    () => [
      "All",
      ...new Set(
        featuredProjects
          .map((project) => project.status)
      ),
    ],
    []
  );

  const filteredProjects =
    activeStatusFilter === "All"
      ? featuredProjects
      : featuredProjects.filter(
          (project) =>
            project.status.toLowerCase() === activeStatusFilter.toLowerCase()
        );

  return (
    <Section id="projects">
      <Container>

        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects across AI, web, Android, desktop applications, libraries, and game development."
        />

        <ProjectFilters
          filters={statusFilters}
          active={activeStatusFilter}
          onChange={setActiveStatusFilter}
        />

        <ProjectCarousel
          projects={filteredProjects}
        />

      </Container>
    </Section>
  );
}