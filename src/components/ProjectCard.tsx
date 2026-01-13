import React, { useState } from "react";
import ProjectButton from "./ProjectButton";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  sourceCode: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveDemo,
  sourceCode,
  techStack,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="bg-light-gray/10 border border-light-gray/30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-6 p-6 cursor-pointer">
        {/* Image */}
        <div className="w-full md:w-11/12 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-light-gray mt-3">{description}</p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            {/* if  liveDemo */}
            {liveDemo && (
              <ProjectButton href={liveDemo} color="blue">
                🚀 Live Demo
              </ProjectButton>
            )}
            <ProjectButton href={sourceCode} color="gray">
              💻 Source Code
            </ProjectButton>
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-[-30px] right-0 bg-red-600 hover:bg-red-700 text-white rounded-full px-3 py-1 text-xs cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
