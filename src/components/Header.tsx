import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
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
            <a href="#projects" className="hover:text-white transition-colors">
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
    </>
  );
};

export default Header;
