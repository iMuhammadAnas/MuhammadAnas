import ProjectCard from "./ProjectCard";
import { projectsData } from "../assets/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="mt-24">
      <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
        Projects
      </h2>

      {/* Column layout */}
      <div className="flex flex-col gap-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
