import { FaArrowRight } from "react-icons/fa";

function ArticleCard({ article }) {

  return (

    <article className="article-card">

      <div className="article-image">

        <img
          src={article.image}
          alt={article.title}
        />

      </div>


      <div className="article-content">

        <div className="article-meta">

          <span className="article-category">

            {article.category}

          </span>

          <span>

            {article.date}

          </span>

          <span>

            {article.readTime}

          </span>

        </div>


        <h3>

          {article.title}

        </h3>


        <p>

          {article.description}

        </p>


        <a
          href={article.link}
          className="article-link"
        >

          Read Article

          <FaArrowRight />

        </a>

      </div>

    </article>

  );

}

export default ArticleCard;