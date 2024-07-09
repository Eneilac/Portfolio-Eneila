import { icons, projects } from "../utils/staticData"


const Projects = () => {

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <icons.codeIcon className="mx-auto inline-block w-full h-16 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Proyectos en los que he puesto en práctica gran parte de mis conocimientos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              target="_blank"
              href={project.link}
              className="w-full h-auto p-1 relative block"
              style={{
                minHeight: "400px",
              }}
            >
              <div className="relative h-full flex flex-col rounded-lg justify-center">
                <img
                  alt="gallery"
                  className="w-full sm:h-58 sm:min-h-96 lg:min-h-96 sm:max-h-64 object-cover rounded-lg scale-60 sm:scale-100 lg:scale-100 bg-gray-500"
                  src={project.image}
                />
                <div className="absolute inset-0 px-5 py-10 z-5 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 flex flex-col justify-center rounded-b-md">
                  <h2 className="tracking-widest text-lg font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-gray-300">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Projects
