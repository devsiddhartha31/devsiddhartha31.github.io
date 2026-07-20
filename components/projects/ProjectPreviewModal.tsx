"use client";

import { X } from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectPreviewModal({
  project,
  onClose,
}: Props) {
  if (!project?.preview) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-zinc-400 transition hover:border-indigo-500 hover:text-white"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="h-72 w-full object-cover"
        />

        <div className="space-y-8 p-8">

          <div>
            <h2 className="text-3xl font-bold text-white">
              {project.title}
            </h2>

            <p className="mt-3 text-zinc-400">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Overview
            </h3>

            <p className="leading-7 text-zinc-300">
              {project.preview.overview}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Highlights
            </h3>

            <ul className="list-disc space-y-2 pl-5 text-zinc-300">
              {project.preview.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          {project.preview.challenges && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Challenges
              </h3>

              <p className="leading-7 text-zinc-300">
                {project.preview.challenges}
              </p>
            </div>
          )}

          {project.preview.outcome && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Outcome
              </h3>

              <p className="leading-7 text-zinc-300">
                {project.preview.outcome}
              </p>
            </div>
          )}

          {(project.github || project.demo) && (
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-500"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}