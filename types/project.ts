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

export interface Preview {
  overview: string;
  highlights: string[];
  challenges?: string;
  outcome?: string;
  gallery?: string[];

  architecture?: string;
  timeline?: string;
  lessons?: string[];
}

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

  preview?: Preview;

  github?: string;
  demo?: string;
}