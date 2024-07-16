import { useState } from 'react';
import { icons } from '../utils/staticData'


const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-700 transition duration-300 h-auto">
      <img
        src={project.image}
        alt="Project Background"
        className="w-full h-56 object-fill"
        style={{ filter: 'brightness(70%)' }}
      />
      <div className="px-6 py-4">
        <div className="mb-2">
          <h2 className="text-xl font-bold text-green-300 mb-2">{project.title}</h2>
          <div className={`text-gray-300 ${expanded ? '' : 'line-clamp-3'}`}>
            {project.description}
            <div className='flex gap-5 justify-center mb-4 mt-4'>
              {
                project.technologies.map((item, index) => (
                  <img src={item} key={index} className='max-w-10' alt='icon' />
                ))
              }
            </div>
          </div>
        </div>
        {project.description.length > 150 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-100 hover:text-white focus:outline-none bg-gray-900 hover:bg-gray-600 p-2 rounded-sm"
          >
            {expanded ? 'Leer menos' : 'Leer más'}
          </button>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between">
          {
            project.code != null ? <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <icons.githubIcon className="w-6 h-6" />
            </a> : null
          }
          {
            project.demo != null ? <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <icons.demoIcon className="w-6 h-6" />
            </a> : null
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
