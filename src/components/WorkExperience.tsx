const WorkExperience = () => {
  return (
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
              For the past year, I have been enrolled in a professional software
              development course at Baitussalam PSDC, where I focused on modern
              frontend technologies such as HTML, CSS, JavaScript, and React.
              During this time, I worked on several real-world assignments
              including a Student Management System with dynamic form handling
              and CRUD operations, a Contact Book App with local storage
              integration, and a React-based single-page assignment deployed
              online. These projects allowed me to understand key frontend
              concepts like component-based architecture, props and state
              management, and routing. I also gained experience using Git and
              GitHub for version control and followed best practices in clean,
              maintainable coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;