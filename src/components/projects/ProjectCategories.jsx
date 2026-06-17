import { projectCategoriesData }
from "../../data/projects/projectCategoriesData";

import CategoryCard from "./CategoryCard";

import "../../styles/projects/projectCategories.css";

function ProjectCategories() {

  return (

    <section className="project-categories section">

      <div className="container">

        <div className="categories-header">

          <span className="categories-badge">

            Domains of Impact

          </span>

          <h2 className="section-title">

            Areas Where Innovation Meets Purpose

          </h2>

          <p className="section-subtitle">

            Projects spanning healthcare, research,
            data science, and software engineering.

          </p>

        </div>


        <div className="categories-grid">

          {projectCategoriesData.map((category, index) => (

            <CategoryCard
              key={index}
              category={category}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default ProjectCategories;