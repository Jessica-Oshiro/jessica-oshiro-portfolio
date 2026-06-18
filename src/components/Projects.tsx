import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Projects
        </h2>
        <div className="w-16 h-1 bg-violet-500 mb-4" />
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Real systems built for real businesses — reducing manual work and
          turning data into decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
