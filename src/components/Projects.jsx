import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/project';

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center border-b-4 border-accent-blue inline-block mx-auto pb-2">
        My Work
      </h2>
      
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-primary-dark/50 border border-secondary-light/10 rounded-xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-accent-blue/30`}
          >
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-accent-blue mb-4">{project.title}</h3>
              <p className="text-secondary-light/90 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-secondary-light/10 text-xs font-medium rounded-full text-secondary-light">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-secondary-light hover:text-accent-blue transition duration-300"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-secondary-light hover:text-accent-blue transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
            
            <div className="md:w-1/2 min-h-60 bg-gray-800 flex items-center justify-center">
              {/* This is a placeholder for your project image/mockup */}
              <div className="text-xl text-secondary-light/50 p-10 text-center">
                Project Image Placeholder
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;