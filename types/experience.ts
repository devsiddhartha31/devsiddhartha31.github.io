export type EmploymentTypes =
  | "founder"
  | "fullTime"
  | "partTime"
  | "contract"
  | "freelance"
  | "internship";

export type WorkMode =
  | "remote"
  | "hybrid"
  | "onSite";

export interface ExperienceItem {
  id: number;
  company: string;
  logo?: string;
  role: string;
  employmentType: EmploymentTypes;
  workMode: WorkMode;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  technologies: string[];
  current?: boolean;
}