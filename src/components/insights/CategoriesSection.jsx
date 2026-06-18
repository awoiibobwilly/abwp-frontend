import { categoriesData }
from "../../data/insights/categoriesData";

import "../../styles/insights/categories.css";

function CategoriesSection() {

  return (

    <section className="insights-categories section">

      <div className="container">

        {/* Header */}

        <div className="categories-header">

          <span className="categories-badge">

            Explore Topics

          </span>

          <h2 className="section-title">

            Areas of Thought & Interest

          </h2>

          <p className="section-subtitle">

            A collection of themes and disciplines that
            shape my reflections, articles, and professional
            perspectives.

          </p>

        </div>


        {/* Tags */}

        <div className="categories-grid">

          {categoriesData.map((category, index) => (

            <div
              className="category-pill"
              key={index}
            >

              {category}

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default CategoriesSection;