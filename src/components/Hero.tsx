import linkedInImage from "/images/linkedin-icon.svg";
import githubImage from "/images/github-icon.svg";

const Hero = () => {
  return (
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
          <span className="text-white">Hey, I'm Anas.</span> I'm a Full-Stack{" "}
          <br className="max-md:hidden" />
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
              <img src={linkedInImage} alt="LinkedIn" className="w-6 h-6" />
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
  );
};

export default Hero;
