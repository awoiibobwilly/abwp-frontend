import ProjectsHero from "../components/projects/ProjectsHero";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import ProjectCategories from "../components/projects/ProjectCategories";
import TechnologiesCloud from "../components/projects/TechnologiesCloud";
import OpenSourceSection from "../components/projects/OpenSourceSection";
import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";

function Projects() {

  return (
    <>
      <ProjectsHero />

      <FeaturedProjects />

      <ProjectCategories />

      <TechnologiesCloud />

      <OpenSourceSection />

      <UniversalCTA

          page="projects"

      />

    </>
  );

}

export default Projects;