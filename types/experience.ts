export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  employmentType: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  current?: boolean;
}