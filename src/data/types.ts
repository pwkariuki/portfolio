export type ThemeType = "light" | "dark" | "system";

export type ProjectType = {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  year: string;
};

export type ProjectCardProps = {
  project: ProjectType;
};

export type ExperienceType = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};
