import React from "react";

interface ProjectButtonProps {
  href: string;
  children: React.ReactNode;
  color?: "blue" | "gray"; // tum aur bhi colors add kar sakte ho
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ href, children, color = "blue" }) => {
  const colorStyles =
    color === "blue"
      ? "px-4 py-2 rounded-lg border border-blue-400 text-blue-300 text-sm font-medium hover:bg-blue-500/10 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] transition duration-300"
      : "px-4 py-2 rounded-lg border border-gray-400 text-gray-300 text-sm font-medium hover:bg-gray-500/10 hover:shadow-[0_0_10px_rgba(156,163,175,0.7)] transition duration-300";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${colorStyles}`}
    >
      {children}
    </a>
  );
};

export default ProjectButton;
