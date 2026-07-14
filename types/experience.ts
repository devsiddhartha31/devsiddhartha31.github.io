export interface ExperienceItem {
  id: number;
  company: string;
  logo: string;
  role: string;
  employmentType: string;
  workMode: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  technologies: string[];
  current?: boolean;
}