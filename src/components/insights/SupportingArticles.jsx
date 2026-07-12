import SupportingArticleCard from "./SupportingArticleCard";

import "../../styles/insights/supportingArticles.css";

// ==========================================================
// SUPPORTING ARTICLES
// ==========================================================

function SupportingArticles({
  articles = [],
}) {
  if (!articles.length) {
    return null;
  }

  return (
    <div className="supporting-articles">

      {articles.map((article) => (

        <SupportingArticleCard
          key={article.id}
          article={article}
        />

      ))}

    </div>
  );
}

export default SupportingArticles;