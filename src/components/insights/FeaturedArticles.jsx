import { featuredArticlesData }
from "../../data/insights/featuredArticlesData";

import ArticleCard from "./ArticleCard";

import "../../styles/insights/featuredArticles.css";

function FeaturedArticles() {

  return (

    <section className="featured-articles section">

      <div className="container">

        <div className="articles-header">

          <span className="articles-badge">

            Featured Articles

          </span>

          <h2 className="section-title">

            Insights Worth Exploring

          </h2>

          <p className="section-subtitle">

            Articles, reflections, and perspectives
            that bridge healthcare, research,
            leadership, and technology.

          </p>

        </div>


        <div className="articles-grid">

          {featuredArticlesData.map((article, index) => (

            <ArticleCard
              key={index}
              article={article}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default FeaturedArticles;