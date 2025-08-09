import Project from "./Project";
import projectImage from "/images/flowbite.png";

const tribeTechStack = [
  {
    name: "React",
    icon: "./images/react-icon.svg",
    bgColor: "bg-blue-600/20",
    textColor: "text-blue-300",
  },
  {
    name: "TypeScript",
    icon: "./images/typescript-icon.svg",
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-300",
  },
  {
    name: "Tailwind",
    icon: "./images/tailwind-icon.svg",
    bgColor: "bg-blue-400/20",
    textColor: "text-blue-300",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-24">
      <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
        Projects
      </h2>
      <div className="flex flex-col gap-10">
        <Project
          title="Flowbite"
          description="is a responsive React website inspired by Flowbite, built using their UI components. It includes sections like marketing, automation, legal, and finance, showcasing how businesses can use modern design to present tools and services. This project demonstrates my skills in component-based UI design and structuring real-world product content."
          image={projectImage}
          techStack={tribeTechStack}
          liveDemo="https://baitussalam-react-assignment.netlify.app/"
          sourceCode="https://github.com/iMuhammadAnas/Baitussalam-React-Assignment"
        />
      </div>
    </section>
  );
};

export default Projects;
