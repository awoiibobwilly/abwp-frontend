import "../../styles/projects/projectsHero.css";

function ProjectsHero({ data }) {
  return (
    <section className="projects-hero section">
      <div className="container">
        <div className="projects-hero-content">
          <span className="projects-badge">
            {data?.eyebrow || "Projects & Innovation"}
          </span>

          <h1>
            {data?.title || "Building Solutions That Create Meaningful Impact"}
          </h1>

          <p>
            {data?.description ||
              "A collection of projects spanning healthcare, public health, research, data science, and software engineering—designed to solve real-world problems and improve lives."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;