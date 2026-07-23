"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/projects";
import { Project } from "@/types/project";

import ProjectCarousel from "./ProjectCarousel";
import ProjectFilters from "./ProjectFilters";
import ProjectPreviewModal from "./ProjectPreviewModal";

export default function Projects() {
  const [activeStatusFilter, setActiveStatusFilter] = useState("enterprise");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    []
  );

  const statusFilters = useMemo(() => [
    "All",
    ...new Set(
      featuredProjects
        .map((project) => project.status)
    ),
  ], [featuredProjects]);

  const filteredProjects =
    activeStatusFilter === "All"
      ? featuredProjects
      : featuredProjects.filter(
          (project) =>
            project.status.toLowerCase() === activeStatusFilter.toLowerCase()
        );

  const previewProjects =
    (activeStatusFilter === "All"
      ? featuredProjects
      : filteredProjects
    ).filter((project) => project.preview);

  const getPreviewProjects = (filter: string) =>
    featuredProjects.filter(
      (project) =>
        project.preview &&
        (filter === "All" ||
          project.status.toLowerCase() === filter.toLowerCase())
    );

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const handleStatusFilterChange = (filter: string) => {
    const nextPreviewProjects = getPreviewProjects(filter);

    if (
      selectedProject &&
      !nextPreviewProjects.some((p) => p.id === selectedProject.id)
    ) {
      closeProject();
    }

    setActiveStatusFilter(filter);
  };

  const previousProject = () => {
    if (!selectedProject) return;

    const index = previewProjects.findIndex(
      (project) => project.id === selectedProject.id
    );

    const previous =
      previewProjects[
        (index - 1 + previewProjects.length) % previewProjects.length
      ];

    setSelectedProject(previous);
  };

  const nextProject = () => {
    if (!selectedProject) return;

    const index = previewProjects.findIndex(
      (project) => project.id === selectedProject.id
    );

    const next =
      previewProjects[(index + 1) % previewProjects.length];

    setSelectedProject(next);
  };

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
          onChange={handleStatusFilterChange}
        />

        <ProjectCarousel
          projects={filteredProjects}
          openProject={openProject}
        />

        <ProjectPreviewModal
          project={selectedProject}
          onClose={closeProject}
          onPrevious={previousProject}
          onNext={nextProject}
        />
      </Container>
    </Section>
  );
}