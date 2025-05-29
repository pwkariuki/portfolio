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
