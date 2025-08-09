import Hero from "./Hero";
import TechStack from "./TechStack";
import WorkExperience from "./WorkExperience";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-light-gray antialiased pt-5">
      <div className="max-w-[47.5rem] mx-auto px-6 text-gray-500">
        <Header />
        <main className="pb-10">
          <Hero />
          <TechStack />
          <WorkExperience />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
