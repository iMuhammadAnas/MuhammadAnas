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

export default ProjectButton;