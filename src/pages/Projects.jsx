import { useEffect, useState } from "react";

import ProjectsHero from "../components/projects/ProjectsHero";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import ProjectCategories from "../components/projects/ProjectCategories";
import TechnologiesCloud from "../components/projects/TechnologiesCloud";
import OpenSourceSection from "../components/projects/OpenSourceSection";
import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";
import "../styles/projects/projectsPage.css";

import { getProjectsPage } from "../services/projectService";

function Projects() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchProjectsPage() {
      try {
        setLoading(true);
        setError("");

        const data = await getProjectsPage();

        if (isMounted) {
          setPageData(data);
        }
      } catch (err) {
        console.error("Failed to load Projects page:", err);

        if (isMounted) {
          setError("Failed to load projects page content.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchProjectsPage();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      function Projects() {
        return (
          <main className="projects-page">
            <ProjectsHero />
            <FeaturedProjects />
            <ProjectCategories />
            <Technologies />
            <OpenSourceContributions />
            <UniversalCTA page={PAGE_KEYS.PROJECTS} />
          </main>
        );
      }
    );
  }

  if (error) {
    return (
      <>
        <ProjectsHero />
        <section className="section">
          <div className="container">
            <div className="section-message error">
              {error}
            </div>
          </div>
        </section>
        <UniversalCTA page="projects" />
      </>
    );
  }

  return (
    <>
      <ProjectsHero data={pageData?.hero} />

      <FeaturedProjects
        intro={pageData?.featured_intro}
        projects={pageData?.featured_projects || []}
      />

      <ProjectCategories
        intro={pageData?.categories_intro}
        categories={pageData?.categories || []}
      />

      <TechnologiesCloud
        intro={pageData?.technologies_intro}
        technologyGroups={pageData?.technology_groups || []}
      />

      <OpenSourceSection
        intro={pageData?.beyond_intro}
        stats={pageData?.beyond_stats || []}
        items={pageData?.beyond_items || []}
      />

      <UniversalCTA page="projects" />
    </>
  );
}

export default Projects;