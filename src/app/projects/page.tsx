import ProjectCard from "@/components/ProjectCard";
import projects from "./projects.json";
export default function Projects() {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
      {projects?.map((project, index) => (
        <ProjectCard
          key={index}
          name={project?.name}
          description={project?.description}
          techStack={project?.techStack}
          image={project?.image}
          link={project.link}
        />
      ))}
    </div>
  );
}
