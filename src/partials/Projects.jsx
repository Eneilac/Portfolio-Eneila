import ProjectCard from "../components/ProjectCard";
import { icons, projects } from "../utils/staticData";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <icons.codeIcon className="mx-auto w-16 h-16 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            Proyectos en los que he puesto en práctica gran parte de mis conocimientos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-72 sm:gap-14 lg:gap-14 sm:grid-cols-2 scale-90">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center cursor-pointer h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
