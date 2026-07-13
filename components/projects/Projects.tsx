"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/projects";

import ProjectCarousel from "./ProjectCarousel";
import ProjectFilters from "./ProjectFilters";

export default function Projects() {
  const [activeStatusFilter, setActiveStatusFilter] = useState("enterprise");
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
          subtitle="A collection of software projects spanning enterprise systems, production applications, research, open-source libraries, and personal innovations."
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