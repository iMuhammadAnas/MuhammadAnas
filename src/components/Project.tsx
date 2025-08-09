import React from "react";
import ProjectButton from "./ProjectButton";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  techStack: {
    name: string;
    icon: string;
    bgColor: string;
    textColor: string;
  }[];
  liveDemo: string;
  sourceCode: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  techStack,
  liveDemo,
  sourceCode,
}) => {
  return (
    <div className="flex gap-8 max-md:flex-col">
      <div className="border border-light-gray/50 rounded-lg p-5 flex-1 flex flex-col gap-5">
        <img
          src={image}
          alt={title}
          className="rounded-md w-full h-auto object-cover"
        />

        <div>
          <h3 className="font-semibold text-white text-xl tracking-widest">
            {title}
          </h3>
          <p className="text-light-gray mt-3">
            <span className="text-white">{title}</span> {description}
          </p>

          <div className="grid grid-cols-4 gap-2 mt-5 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center justify-center gap-1.5 px-4 py-1 cursor-pointer rounded-full text-xs ${tech.bgColor} ${tech.textColor}`}
              >
                <img
                  src={`/${tech.icon}`}
                  alt={tech.name}
                  className="w-4 h-4"
                />
                {tech.name}
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-8 max-md:flex-col">
            <ProjectButton
              href={liveDemo}
              icon={
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0 M3.6 9h16.8 M3.6 15h16.8 M11.5 3a17 17 0 0 0 0 18 M12.5 3a17 17 0 0 1 0 18" />
              }
              label="Live demo"
            />
            <ProjectButton
              href={sourceCode}
              icon={
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              }
              label="Source code"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
