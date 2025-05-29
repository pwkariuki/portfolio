import projects from "@/data/projects.json";
import { ProjectCard } from "@/components/ProjectCard";

export const ProjectSection = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-10 border-t">
      <h2 className="text-2xl font-code font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .sort((a, b) => {
            const yearDiff = Number(b.year) - Number(a.year);
            return yearDiff !== 0 ? yearDiff : a.name.localeCompare(b.name);
          })
          .map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
      </div>
    </section>
  );
};
