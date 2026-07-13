export type ProjectCategory =
  | "ai"
  | "web"
  | "android"
  | "desktop"
  | "game"
  | "library";

export type ProjectStatus =
  | "enterprise"
  | "production"
  | "research"
  | "opensource"
  | "personal"
  | "ongoing";

export interface Project {
  id: number;

  title: string;

  slug: string;

  description: string;

  category: ProjectCategory;

  status: ProjectStatus;

  technologies: string[];

  image: string;

  featured: boolean;

  github?: string;

  demo?: string;
}