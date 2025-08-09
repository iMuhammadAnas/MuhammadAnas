import TechItem from "./TechItem";

const techStack = [
    { name: "Node JS", icon: "./images/nodejs-icon.svg" },
    { name: "Express JS", icon: "./images/expressjs-icon.svg" },
    { name: "React", icon: "./images/react-icon.svg" },
    { name: "Next JS", icon: "./images/next-icon.svg" },
    { name: "JavaScript", icon: "./images/javascript-icon.svg" },
    { name: "TypeScript", icon: "./images/typescript-icon.svg" },
    { name: "Mongo DB", icon: "./images/mongodb-icon.svg" },
    { name: "Tailwind", icon: "./images/tailwind-icon.svg" },
    { name: "HTML", icon: "./images/html-icon.svg" },
    { name: "CSS", icon: "./images/css-icon.svg" },
    // { name: "SCSS", icon: "./images/scss-icon.svg" },
  ];

const TechStack = () => {
  return (
    <section className="mt-7">
      <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
        Tech stack
      </h2>
      <div className="grid grid-cols-5 gap-5 max-[415px]:text-[13px] max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
        {techStack.map((tech) => (
          <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
