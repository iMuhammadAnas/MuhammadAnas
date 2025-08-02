import React, { useState } from "react";
import projectImage from "/images/flowbite.png";
import linkedInImage from "/images/linkedin-icon.svg";
import githubImage from "/images/github-icon.svg";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-dark-bg min-h-screen text-light-gray antialiased pt-5">
      <div className="max-w-[47.5rem] mx-auto px-6 text-gray-500">
        {/* Header */}
        <header className="pt-5 pb-10">
          <nav className="flex items-center justify-between">
            <a
              href="/"
              className="font-bold hover:text-white uppercase text-lg tracking-widest transition-colors"
            >
              Muhammad Anas
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-lg">
              <a
                href="#work-experience"
                className="hover:text-white transition-colors"
              >
                Work Experience
              </a>
              <a
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
              </svg>
            </button>
          </nav>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-dark-bg z-50 flex flex-col px-6 py-10 text-white transition-all ease-in-out mobile">
            <button
              className="self-end mb-[100px] cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
            <ul className="flex flex-col gap-10 text-3xl font-semibold text-center">
              <li>
                <a
                  href="#work-experience"
                  className="hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        <main className="pb-10">
          {/* Hero Section */}
          <section className="pb-20 pt-16 flex items-center gap-10 max-md:flex-col max-md:text-center">
            <div className="relative w-44 h-44 min-w-[11rem] min-h-[11rem] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
                <div className="w-full h-full bg-dark-bg rounded-full">
                  <img
                    src="https://avatars.githubusercontent.com/u/93304879"
                    alt="Muhammad Anas"
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 max-md:items-center">
              <h1 className="text-[28px] font-bold tracking-[0.03em] relative">
                <span className="text-white">Hey, I'm Anas.</span> I'm a
                Full-Stack <br className="max-md:hidden" />
                Software Developer.
                <span className="bg-green-600/20 absolute md:right-0 md:bottom-1.5 max-md:relative max-md:mt-3 whitespace-nowrap text-green-600 hover:bg-green-500/20 text-sm px-3 py-1 rounded-full inline-block hover:text-green-500">
                  <span className="p-1 mb-px mr-1.5 inline-block bg-green-600 rounded-full"></span>
                  Open to work
                </span>
              </h1>

              <div className="w-full flex items-center justify-between max-md:flex-col max-md:gap-3">
                <a
                  href="https://www.google.com/maps/place/Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  🏠 Karachi, Pakistan.
                </a>

                <div className="flex items-center gap-5 text-base max-md:mt-3">
                  <a
                    href="https://www.linkedin.com/in/iMuhammadAnas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 hover:text-white transition-colors"
                  >
                    <img
                      src={linkedInImage}
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/iMuhammadAnas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 hover:text-white transition-colors"
                  >
                    <img src={githubImage} alt="GitHub" className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="mt-7">
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
              Tech stack
            </h2>
            <div className="grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
              {techStack.map((tech) => (
                <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </section>

          {/* Work Experience Section */}
          <section id="work-experience" className="mt-24">
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
              Work Experience
            </h2>
            <div className="flex flex-col gap-14">
              <div className="flex gap-10 max-sm:flex-col">
                <p className="text-light-gray whitespace-nowrap max-sm:hidden">
                  2024 - 2025
                </p>
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    Software Development Trainee
                  </h3>
                  <p className="text-light-gray mb-4">
                    Professional Software Development Course (PSDC), Baitussalam
                    <span className="text-light-gray ml-2 max-sm:inline-block hidden">
                      • (2024 - 2025)
                    </span>
                  </p>
                  <p className="text-light-gray">
                    For the past year, I have been enrolled in a professional
                    software development course at Baitussalam PSDC, where I
                    focused on modern frontend technologies such as HTML, CSS,
                    JavaScript, and React. During this time, I worked on several
                    real-world assignments including a Student Management System
                    with dynamic form handling and CRUD operations, a Contact
                    Book App with local storage integration, and a React-based
                    single-page assignment deployed online. These projects  
                    allowed me to understand key frontend concepts like
                    component-based architecture, props and state management,
                    and routing. I also gained experience using Git and GitHub
                    for version control and followed best practices in clean,
                    maintainable coding.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
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
        </main>

        {/* Footer */}
        <footer
          id="contact"
          className="pt-6 border-t border-light-gray/20 pb-1 mt-5"
        >
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"></path>
              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"></path>
            </svg>
            <a href="mailto:ianasnaseeem@gmail.com">ianasnaseem@gmail.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Tech Item Component
const TechItem: React.FC<{ name: string; icon: string }> = ({ name, icon }) => (
  <button className="border border-light-gray/50 hover:bg-light-gray/10 h-24 rounded-lg p-3 flex flex-col cursor-pointer items-center justify-center hover:text-white transition-all group">
    <img
      src={`/${icon}`}
      alt={name}
      className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1"
    />
    <p className="mt-1.5">{name}</p>
  </button>
);

// Project Component
const Project: React.FC<{
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
}> = ({
  title,
  description,
  image,
  techStack,
  liveDemo,
  sourceCode,
}) => (
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
              <img src={`/${tech.icon}`} alt={tech.name} className="w-4 h-4" />
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

    {/* <a
      href={`/projects/${title.toLowerCase()}`}
      className="hidden md:flex flex-col p-2 rounded-full bg-light-gray/20 text-white font-medium text-sm hover:bg-light-gray/30 transition-colors h-fit"
      aria-label={`See more about ${title}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
        <path d="M11 13l9 -9" />
        <path d="M15 4h5v5" />
      </svg>
    </a> */}
  </div>
);

// Project Button Component
const ProjectButton: React.FC<{
  href: string;
  icon: React.ReactNode; // Change type from string to React.ReactNode
  label: string;
}> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-light-gray/10 hover:bg-light-gray/20 rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 text-xs uppercase transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon}
    </svg>
    {label}
  </a>
);

// Data
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

export default Portfolio;
