import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [showProjectInfo, setShowProjectInfo] = useState(false);

  const toggleProjectInfo = () => {
    setShowProjectInfo(!showProjectInfo);
  };

  return (
    <div className="relative h-full flex flex-col rounded-lg justify-center">
      {/* Contenedor de la imagen */}
      <div className="relative" onClick={toggleProjectInfo}>
        <img
          alt="gallery"
          className={`w-full h-full min-h-full sm:h-58 sm:min-h-96 lg:min-h-96 sm:max-h-64 object-cover rounded-lg ${
            showProjectInfo ? "scale-50" : "scale-100"
          } bg-gray-500`}
          src={project.image}
        />



        {showProjectInfo && (
          <div className="absolute inset-0 p-5 py-10 z-5 w-full border-4 border-gray-800 min-h-96 sm:min-h-0 bg-gray-900 opacity-100 transition-opacity flex flex-col justify-center rounded-b-md mb-16 overflow-scroll lg:overflow-hidden sm:overflow-hidden">
            <h2 className="tracking-widest text-lg font-medium text-green-400 mb-1">
              {project.subtitle}
            </h2>
            <h1 className="text-lg font-medium text-white mb-3">
              {project.title}
            </h1>
            <p className="leading-relaxed text-gray-300">
              {project.description}
            </p>
            <div className="flex justify-center mt-3">
              {project.technologies.map((item, index) => (
                <img
                  src={item}
                  alt="icono tecnologia"
                  key={index}
                  className="w-10 h-10 object-contain mr-2"
                />
              ))}
            </div>
            <a href={project.link} className="mt-4 text-blue-500 underline">
              Ver Proyecto
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
