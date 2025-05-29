import { ProjectCardProps } from "@/data/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { GitHubLogo } from "./GitHubLogo";
import { ArrowRight } from "lucide-react";

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="font-code">{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-code mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge variant={"secondary"} className="font-code" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between items-center">
        <Badge key={project.year} variant={"outline"}>
          {project.year}
        </Badge>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GitHubLogo className="h-5 w-5" />
              <span className="sr-only">GitHub Link</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">Project Link</span>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
